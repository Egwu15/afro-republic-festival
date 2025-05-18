import verifiedRed from '@/assets/icons/verified_red.png';
import PriceCard from '@/components/mine/PriceCard';
import AppHeaderLayout from '@/layouts/app/app-header-layout';
import { TicketPageProps } from '@/types';
import { useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';

function TicketPage({ ticket, formattedDate }: { ticket: TicketPageProps; formattedDate: string }) {
    const { post, data, setData, progress } = useForm({ quantity: 1, ticket: ticket.id });

    const checkOut = () => {
        post(route('ticket.store'));

        console.log(route('checkout'));
    };

    return (
        <AppHeaderLayout>
            <main>
                <section className="mx-auto max-w-5xl">
                    <div className="items-center md:mt-6 md:flex">
                        <div className="max-w-full md:max-w-xs">
                            <PriceCard
                                key={ticket.id}
                                price={ticket.price}
                                header={ticket.name}
                                description={ticket.description}
                                backgroundColor={ticket.color}
                                id={ticket.id}
                                children={
                                    <div className="hover:shadow-2xl-hover mx-7 mt-7 flex justify-between border-2 border-black bg-white px-5 py-1.5 font-black shadow-2xl shadow-black">
                                        <p>QUANTITY</p>
                                        <div className="flex items-center justify-between">
                                            <button onClick={() => setData('quantity', data.quantity !== 1 ? data.quantity - 1 : 1)}>-</button>
                                            <p className="px mx-3 rounded bg-black px-2 text-white">{data.quantity}</p>
                                            <button onClick={() => setData('quantity', data.quantity + 1)}>+</button>
                                        </div>
                                    </div>
                                }
                            />
                        </div>

                        <div className="ml-auto max-h-min w-full max-w-md">
                            <div className="rounded border border-red-400">
                                <p className="font-display px-3 py-2 font-light">SELECTION</p>
                                <hr className="border-red-400" />
                                <div className="px-3 py-5">
                                    <div className="flex justify-between">
                                        <div className="flex items-center">
                                            <img src={verifiedRed} alt="Verified Red" />
                                            <p className="font-display p-2">
                                                {ticket.name} . {data.quantity}pcs
                                            </p>
                                        </div>
                                        <p className="px-3">${ticket.price * data.quantity}</p>
                                    </div>
                                    <p className="px-3 pb-6">{formattedDate}</p>
                                    <hr className="border-gray-200" />
                                    <div className="flex justify-between">
                                        <div className="flex items-center">
                                            <p className="font-display p-2">Subtotal</p>
                                        </div>
                                        <p className="px-3">${ticket.price * data.quantity}</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <div className="flex items-center">
                                            <p className="font-display p-2">Tax</p>
                                        </div>
                                        <p className="px-3">${ticket.price * data.quantity}</p>
                                    </div>
                                    <hr className="border-gray-200" />
                                    <div className="flex justify-between">
                                        <div className="flex items-center">
                                            <p className="font-display p-2">Total</p>
                                        </div>
                                        <p className="px-3">${ticket.price * data.quantity}</p>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={() => checkOut()}
                                className="font-display shadow-custom-orange border-custom-orange my-5 w-full border-1 bg-white px-5 py-1.5 shadow-2xl hover:bg-black hover:text-white hover:shadow-white"
                            >
                                {progress && <LoaderCircle className="animate-spin" />}
                                CONTINUE TO CHECKOUT
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </AppHeaderLayout>
    );
}

export default TicketPage;
