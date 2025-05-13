import PriceCard from '@/components/mine/PriceCard';
import AppHeaderLayout from '@/layouts/app/app-header-layout';
import { TicketPageProps } from '@/types';
import { useState } from 'react';

function TicketPage({ ticket, formattedDate }: { ticket: TicketPageProps; formattedDate: string }) {
    const [quantity, setQuantity] = useState(1);

    return (
        <AppHeaderLayout>
            <main>
                <section className="mx-auto max-w-5xl">
                    <div className="md:flex">
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
                                            <button onClick={() => setQuantity((e) => (e !== 1 ? e - 1 : 1))}>-</button>
                                            <p className="px mx-3 rounded bg-black px-2 text-white">{quantity}</p>
                                            <button onClick={() => setQuantity((e) => e + 1)}>+</button>
                                        </div>
                                    </div>
                                }
                            />
                        </div>

                        <div className="w-full rounded border border-red-400">
                            <p className="font-display p-2 font-light">SELECTION</p>
                            <hr className="border-red-400" />
                            <p className="font-display p-2">{ticket.name}</p>
                            <p>{formattedDate}</p>
                        </div>
                    </div>
                </section>
            </main>
        </AppHeaderLayout>
    );
}

export default TicketPage;
