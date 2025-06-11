import { Head, Link, usePage } from '@inertiajs/react';

const CallbackFailure = () => {
    const page = usePage();
    const errorMessage = page.props.errorMessage as string | undefined;
    const status = page.props.status as string | undefined;

    const getSuggestion = () => {
        switch (status) {
            case 'requires_payment_method':
                return 'Please try again with a different payment method.';
            case 'requires_action':
                return 'Please complete additional verification steps to proceed.';
            case 'canceled':
                return 'You canceled the payment. You can restart checkout when ready.';
            default:
                return 'Please try again or contact support.';
        }
    };

    return (
        <>
            <Head title="Payment Failed" />
            <div className="flex min-h-screen items-center justify-center bg-gray-100">
                <div className="w-full max-w-md rounded-xl bg-white p-6 text-center shadow-md">
                    <h1 className="mb-2 text-2xl font-bold text-red-600">Payment Failed</h1>

                    {errorMessage && (
                        <p className="mb-2 text-sm text-gray-700">
                            Reason: <span className="font-semibold text-gray-900">{errorMessage}</span>
                        </p>
                    )}

                    {status && (
                        <p className="mb-4 text-sm text-gray-600">
                            Stripe Status: <code className="rounded bg-gray-200 px-2 py-1 text-xs">{status}</code>
                        </p>
                    )}

                    <p className="mb-6 text-gray-800">{getSuggestion()}</p>

                    <div className="flex flex-col gap-2">
                        <Link href={route('checkout')} className="inline-block rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                            Try Again
                        </Link>
                        <a href="mailto:support@example.com" className="text-sm text-blue-600 hover:underline">
                            Contact Support
                        </a>
                    </div>
                    <p className="text-center">Powered by Stripe</p>
                </div>
            </div>
        </>
    );
};

export default CallbackFailure;
