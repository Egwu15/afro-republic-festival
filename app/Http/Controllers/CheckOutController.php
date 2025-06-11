<?php

namespace App\Http\Controllers;

use App\Models\Ticket;
use App\Services\Payments\GatewayFactory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CheckOutController extends Controller
{
    public function index()
    {

        $data = session('checkout');
        if ($data == null) {
            return redirect()->route('home');
        }

        $ticket = Ticket::findOrFail($data['ticket']);
        if ($ticket == null) {
            return redirect()->route('home');
        }

        return Inertia::render('CheckOut', [
            'ticket' => $ticket,
            'quantity' => $data['quantity']
        ]);
    }

    public function process(Request $request)
    {
        $data = session('checkout');
        if (!$data) {
            return redirect()->route('home');
        }

        /** @var Ticket $ticket */
        $ticket = Ticket::findOrFail($data['ticket']);

        $quantity = $data['quantity'];

        $gatewayName = config('app.payment_gateway');
        $gateway = GatewayFactory::make($gatewayName);

        // prepare metadata: you can pass anything you’ll need in a webhook or confirmation page
        $metadata = [
            'ticket_id' => $ticket->id,
            'quantity' => $quantity,
            'first_name' => $request->input('first_name'),
            'last_name' => $request->input('last_name'),
            'email' => $request->input('email'),
            'receipt_email' => $request->input('email'),
            'phone_number' => $request->input('phone_number'),
        ];

        // total in major units:
        $total = $ticket->price * $quantity;

        $charge = $gateway->charge($total, config('app.currency'), $metadata);

        // redirect user to payment page/URL
        if ($gatewayName === 'paystack') {
            return redirect($charge['data']['authorization_url']);
        } else {
            // handle Stripe PaymentIntent: show client_secret to your SPA
            return Inertia::render('Payment/Stripe', [
                'clientSecret' => $charge->client_secret,
            ]);
        }
    }


}
