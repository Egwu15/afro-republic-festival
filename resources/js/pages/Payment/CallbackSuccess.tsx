import { Head, router } from '@inertiajs/react';

import { useEffect } from 'react';

interface Props {
    status: string;
    paymentIntent: {
        id: string;
        amount: number;
        currency: string;
        status: string;
    };
}

export default function CallbackSuccess({ status, paymentIntent }: Props) {
    useEffect(() => {
        setTimeout(() => {
            router.visit(route('home'));
        }, 3000);
    }, []);

    return (
        <>
            <Head title="Payment Success" />
            <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-4 text-center">
                <div className="w-full max-w-md rounded bg-white p-6 shadow-md">
                    <h1 className="mb-4 text-2xl font-bold">{status === 'succeeded' ? '✅ Payment Successful' : '❌ Payment Failed'}</h1>
                    <p className="mb-2">Payment ID: {paymentIntent.id}</p>
                    <p className="mb-2">Amount: ₦{(paymentIntent.amount / 100).toFixed(2)}</p>
                    <p className="mb-2">Currency: {paymentIntent.currency.toUpperCase()}</p>
                    <p className="text-gray-600">Status: {paymentIntent.status}</p>
                </div>
            </div>
        </>
    );
}
