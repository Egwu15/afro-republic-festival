<?php

namespace App\Services\Payments;

use Stripe\Exception\ApiErrorException;
use Stripe\StripeClient;

class StripeGateway implements PaymentGatewayInterFace
{
    protected StripeClient $stripe;

    public function __construct()
    {
        $this->stripe = new StripeClient(config('services.stripe.secret'));
    }

    /**
     * @throws ApiErrorException
     */
    public function charge(float $amount, string $currency, array $metadata = []): mixed
    {
        // Stripe expects amount in cents
        return $this->stripe->paymentIntents->create([
            'amount' => intval($amount * 100),
            'currency' => "gbp",
            'metadata' => $metadata,
        ]);
    }
}

