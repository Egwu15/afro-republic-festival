<?php

namespace App\Services\Payments;

interface PaymentGatewayInterFace
{
    /**
     * @param float $amount // in major currency units
     * @param string $currency // e.g. "NGN" or "USD"
     * @param array $metadata // whatever you want to store
     * @return mixed               // whatever gateway returns
     */
    public function charge(float $amount, string $currency, array $metadata = []): mixed;
}
