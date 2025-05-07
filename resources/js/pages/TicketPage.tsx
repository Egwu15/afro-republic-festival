import PriceCard from '@/components/mine/PriceCard';
import AppHeaderLayout from '@/layouts/app/app-header-layout';
import { TicketPageProps } from '@/types';
import { useState } from 'react';

function TicketPage({ ticket, formattedDate }: { ticket: TicketPageProps; formattedDate: string }) {
    const [quantity, setQuantity] = useState(0);

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
                                            <button onClick={() => setQuantity((e) => (e !== 0 ? e - 1 : 0))}>-</button>
                                            {quantity}
                                            <button onClick={() => setQuantity((e) => e + 1)}>+</button>
                                        </div>
                                    </div>
                                }
                            />
                        </div>

                        <div className="flex-11/12">
                            <p>SELECTION</p>
                            <p>{ticket.name}</p>
                            <p>{formattedDate}</p>
                        </div>
                    </div>
                </section>
            </main>
        </AppHeaderLayout>
    );
}

export default TicketPage;
