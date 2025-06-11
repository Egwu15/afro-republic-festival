<?php

namespace App\Services\Payments;

use InvalidArgumentException;

class GatewayFactory
{
    public static function make(string $gateway): PaymentGatewayInterface
    {
        return match (strtolower($gateway)) {
            'stripe' => app(StripeGateway::class),
            'paystack' => app(PaystackGateway::class),
            default => throw new InvalidArgumentException("Unsupported gateway [{$gateway}]"),
        };
    }
}
