<?php

namespace App\Http\Controllers;

use App\Mail\TicketRecept;
use App\Models\Event;
use App\Models\Ticket;
use App\Models\TicketOrder;
use App\Services\Payments\GatewayFactory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class CheckOutController extends Controller
{
    public function index(Event $event)
    {
        $event->load('tickets');
        return Inertia::render('CheckOut', [
            'event' => $event,
        ]);
    }

    public function process(Request $request)
    {
        $validated = $request->validate([
            'ticket_id' => 'required|exists:tickets,id',
            'quantity' => 'required|integer|min:1',
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone_number' => 'required|string|max:20',
        ]);

        /** @var Ticket $ticket */
        $ticket = Ticket::findOrFail($validated['ticket_id']);

        if ($ticket->quantity < $validated['quantity']) {
            return back()->withErrors(['message' => 'Not enough tickets available.'])->withInput();
        }

        $total = $ticket->price * $validated['quantity'];

        // Create order
        /**@var TicketOrder $order */
        $order = TicketOrder::create([
            'ticket_id' => $ticket->id,
            'first_name' => $validated['first_name'],
            'last_name' => $validated['last_name'],
            'email' => $validated['email'],
            'phone_number' => $validated['phone_number'],
            'quantity' => $validated['quantity'],
            'amount' => $total,
            'currency' => config('app.currency', 'NGN'),
            'payment_intent_id' => uniqid('temp'),
            'status' => $total <= 0 ? 'paid' : 'pending',
        ]);

        // FREE TICKET flow
        if ($total <= 0) {
            $ticket->decrement('quantity', $validated['quantity']);

            defer(fn() => Mail::send(new TicketRecept($order->toArray())));

            return Inertia::render('Payment/CallbackSuccess', [
                'status' => 'paid',
                'paymentIntent' => [
                    'id' => null,
                    'amount' => 0,
                    'currency' => config('app.currency', 'NGN'),
                    'status' => 'free',
                ],
            ]);
        }

        // PAID TICKET flow
        $gatewayName = config('app.payment_gateway');
        $gateway = GatewayFactory::make($gatewayName);

        $metadata = [
            'order_id' => $order->id,
            'ticket_id' => $ticket->id,
            'quantity' => $validated['quantity'],
            'first_name' => $validated['first_name'],
            'last_name' => $validated['last_name'],
            'email' => $validated['email'],
            'receipt_email' => $validated['email'],
            'phone_number' => $validated['phone_number'],
        ];

        $charge = $gateway->charge($total, config('app.currency'), $metadata);

        if ($gatewayName === 'paystack') {
            return redirect($charge['data']['authorization_url']);
        } else {
            $order->update(['payment_intent_id' => $charge->id]);
            $publicKey = config('services.stripe.publishable_key');

            return Inertia::render('Payment/Stripe', [
                'clientSecret' => $charge->client_secret,
                'publicKey' => $publicKey,
                'orderId' => $order->id,
            ]);
        }
    }


}
