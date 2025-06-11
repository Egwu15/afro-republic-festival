<?php

namespace App\Services\Payments;

use Exception;
use Illuminate\Http\Client\ConnectionException;
use Illuminate\Routing\Redirector;
use Illuminate\Support\Facades\Http;

class PaystackGateway implements PaymentGatewayInterface
{
    /**
     * @throws ConnectionException
     * @throws Exception
     */
    public function charge(float $amount, string $currency, array $metadata = []): mixed
    {
        $response = Http::withToken(config('paystack.secret_key'))
            ->post(config('paystack.base_url') . '/transaction/initialize', [
                'email' => $metadata['customer_email'] ?? 'test@example.com',
                'amount' => (int)($amount * 100), // Paystack uses kobo
                'currency' => 'NGN',
                'metadata' => $metadata,
            ]);

        if ($response->failed()) {
            throw new Exception('Paystack initialization failed: ' . $response->body());
        }

        return $response->json();
    }

    public function response($charge): Redirector
    {
        return redirect($charge['data']['authorization_url']);
    }
}
