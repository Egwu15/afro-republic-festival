<?php

namespace App\Http\Controllers;

use App\Mail\TicketRecept;
use App\Models\TicketOrder;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use Stripe\PaymentIntent;
use Stripe\Stripe;

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

            // Retrieve the existing order we created during process()
            $order = TicketOrder::find($meta['order_id']);

            if (!$order) {
                return redirect()->route('home')->with('error', 'Order not found');
            }

            if ($order->status !== 'paid') {
                $order->update(['status' => 'paid']);
                $order->ticket->decrement('quantity', $order->quantity);
                defer(fn() => Mail::send(new TicketRecept($order->toArray())));
            }

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
