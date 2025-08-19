import { Head } from '@inertiajs/react';
import { Elements, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { FormEvent, useState } from 'react';

// Load public key from .env

interface Props {
    clientSecret: string;
    publicKey: string;
}

// Checkout form component
const CheckoutForm: React.FC = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<string | null>(null);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!stripe || !elements) return;

        setLoading(true);

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: route('payment.stripe.callback'),
            },
        });

        if (error) {
            setMessage(error.message ?? 'An unexpected error occurred');
        }

        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-md rounded border bg-white p-4 shadow">
            <PaymentElement />
            {message && <div className="mt-2 text-red-600">{message}</div>}
            <button type="submit" disabled={loading || !stripe || !elements} className="mt-4 w-full rounded bg-blue-600 px-4 py-2 text-white">
                {loading ? 'Processing...' : 'Pay Now'}
            </button>
            <p className="text-center">Powered by Stripe</p>
        </form>
    );
};

const StripePage: React.FC<Props> = ({ clientSecret, publicKey }) => {
    const stripePromise = loadStripe(publicKey);
    const options = {
        clientSecret,
    };

    return (
        <>
            <Head title="Stripe Payment" />
            <div className="flex min-h-screen items-center justify-center bg-gray-100">
                {clientSecret ? (
                    <Elements stripe={stripePromise} options={options}>
                        <CheckoutForm />
                    </Elements>
                ) : (
                    <p className="text-center">Missing payment details.</p>
                )}
            </div>
        </>
    );
};

export default StripePage;
