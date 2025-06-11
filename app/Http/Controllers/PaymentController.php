<?php

namespace App\Http\Controllers;

use App\Mail\TicketRecept;
use App\Models\Ticket;
use App\Models\TicketOrder;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use Stripe\PaymentIntent;
use Stripe\Stripe;
use function Illuminate\Support\defer;

class PaymentController extends Controller
{


    public function stripeCallback(Request $request)
    {
        $clientSecret = $request->get('payment_intent_client_secret');
        $paymentIntentId = $request->get('payment_intent');

        if (!$clientSecret || !$paymentIntentId) {
            return redirect()->route('home')->with('error', 'Missing payment info');
        }

        Stripe::setApiKey(config('services.stripe.secret'));

        try {
            $paymentIntent = PaymentIntent::retrieve($paymentIntentId);

            if ($paymentIntent->status !== 'succeeded') {
                return Inertia::render('Payment/CallbackFailure', [
                    'status' => $paymentIntent->status,
                    'errorMessage' => $paymentIntent->last_payment_error->message ?? 'Unknown error occurred',
                ]);
            }

            $meta = $paymentIntent->metadata;
            $ticket = Ticket::find($meta['ticket_id']);

            $transaction_details = [
                'ticket_id' => $meta['ticket_id'],
                'ticket_name' => $ticket->name,
                'quantity' => $meta['quantity'],
                'first_name' => $meta['first_name'],
                'last_name' => $meta['last_name'],
                'email' => $meta['email'],
                'phone_number' => $meta['phone_number'],
                'payment_intent_id' => $paymentIntent->id,
                'status' => 'paid',
                'amount' => $paymentIntent->amount,
            ];

            TicketOrder::create($transaction_details);


            defer(fn() => Mail::send(new TicketRecept($transaction_details)));

            return Inertia::render('Payment/CallbackSuccess', [
                'status' => $request->get('redirect_status'),
                'paymentIntent' => [
                    'id' => $paymentIntent->id,
                    'amount' => $paymentIntent->amount,
                    'currency' => $paymentIntent->currency,
                    'status' => $paymentIntent->status,
                ],
            ]);


        } catch (Exception $e) {
            return Inertia::render('Payment/CallbackFailure', [
                'errorMessage' => $e->getMessage(),
            ]);
        }
    }


}
