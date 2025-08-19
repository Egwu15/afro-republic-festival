import verifiedRed from '@/assets/icons/verified_red.png';
import InputError from '@/components/input-error';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppHeaderLayout from '@/layouts/app/app-header-layout';
import { EventProps, TicketPageProps } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler, useState } from 'react';
import toast from 'react-hot-toast';

export default function CheckOut({ event }: { event: EventProps }) {
    const [selectedTicketId, setSelectedTicketId] = useState<number>(event.tickets![0].id);
    const ticket = event.tickets!.find((t) => t.id === selectedTicketId) ?? event.tickets![0];
    const { data, setData, post, processing, errors, reset } = useForm({
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        quantity: 1,
        ticket_id: selectedTicketId,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('processPayment'), {
            onFinish: () => reset(),
            onError: function (errors) {
                toast.error(errors.message);
            },
        });
    };

    return (
        <AppHeaderLayout>
            <Head title="CheckOut" />
            <section className="mx-auto max-w-6xl grid-cols-3 gap-2 md:mt-16 lg:grid">
                {event.tickets?.map((ticket: TicketPageProps) => (
                    <div
                        className={`cursor-pointer py-5 ${selectedTicketId === ticket.id ? 'animate-pulse' : 'py-5'}`}
                        onClick={() => setSelectedTicketId(ticket.id)}
                    >
                        <div style={{ backgroundColor: ticket.color }} className="rounded-sm py-5">
                            <div className="hover:shadow-2xl-hover mx-7 flex justify-between rounded-sm border-2 border-black bg-white px-5 py-1.5 font-black shadow-2xl shadow-black">
                                <p>{ticket.name}</p>
                                <p style={{ backgroundColor: ticket.color }} className="rounded px-2.5">
                                    £
                                    {Number(ticket.price).toLocaleString('en-GB', {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2,
                                    })}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
            <main className="mx-auto max-w-6xl md:mt-10 md:flex">
                <section className="mx-auto max-h-min w-full max-w-sm">
                    <div className="rounded border border-red-400">
                        <p className="font-display px-3 py-2 font-light">SELECTION</p>
                        <hr className="border-red-400" />
                        <div className="px-3 py-5">
                            <div className="flex justify-between">
                                <div className="flex items-start pb-2">
                                    <img src={verifiedRed} alt="Verified Red" />
                                    <p className="font-display px-2">
                                        {ticket.name} . {data.quantity}pcs
                                        <div className="flex items-center justify-between">
                                            <button onClick={() => setData('quantity', data.quantity !== 1 ? data.quantity - 1 : 1)}>-</button>
                                            <p className="px mx-3 rounded bg-black px-2 text-white">{data.quantity}</p>
                                            <button onClick={() => setData('quantity', data.quantity + 1)}>+</button>
                                        </div>
                                    </p>
                                </div>
                                <p className="px-3">${ticket.price * data.quantity}</p>
                            </div>

                            <hr className="border-gray-200" />
                            <div className="flex justify-between">
                                <div className="flex items-center">
                                    <p className="font-display p-2">Subtotal</p>
                                </div>
                                <p className="px-3">${ticket.price * data.quantity}</p>
                            </div>
                            {/*<div className="flex justify-between">*/}
                            {/*    <div className="flex items-center">*/}
                            {/*        <p className="font-display p-2">Tax</p>*/}
                            {/*    </div>*/}
                            {/*    <p className="px-3">${ticket.price * data.quantity}</p>*/}
                            {/*</div>*/}
                            <hr className="border-gray-200" />
                            <div className="flex justify-between">
                                <div className="flex items-center">
                                    <p className="font-display p-2">Total</p>
                                </div>
                                <p className="px-3">${ticket.price * data.quantity}</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mx-auto mt-3 max-h-min w-full max-w-sm md:mt-0 md:max-w-2xl">
                    <div className="rounded border border-red-400">
                        <p className="font-display px-3 py-2 font-light">Personal Details</p>
                        <hr className="border-red-400" />

                        <div className="mx-auto grid-cols-2 gap-4 px-4 md:grid">
                            <div className="p-4">
                                <Label htmlFor="first_name">First Name</Label>
                                <Input
                                    id="first_name"
                                    type="text"
                                    required
                                    autoFocus
                                    tabIndex={1}
                                    autoComplete="first_name"
                                    placeholder="Your Name"
                                    className="rounded-none border-gray-400"
                                    value={data.first_name}
                                    onChange={(e) => setData('first_name', e.target.value)}
                                    disabled={processing}
                                />
                                <InputError message={errors.first_name} />
                            </div>
                            <div className="p-4">
                                <Label htmlFor="last_name">Last Name</Label>
                                <Input
                                    id="last_name"
                                    type="text"
                                    required
                                    autoFocus
                                    tabIndex={1}
                                    autoComplete="family-name"
                                    placeholder="Your Last Name"
                                    className="rounded-none border-gray-400"
                                    value={data.last_name}
                                    onChange={(e) => setData('last_name', e.target.value)}
                                    disabled={processing}
                                />
                                <InputError message={errors.last_name} />
                            </div>

                            <div className="p-4 md:px-4">
                                <Label htmlFor="phone_number">Phone Number</Label>
                                <Input
                                    id="phone_number"
                                    type="text"
                                    required
                                    autoFocus
                                    tabIndex={1}
                                    autoComplete="tel"
                                    placeholder="Your Phone Number"
                                    className="rounded-none border-gray-400"
                                    value={data.phone_number}
                                    onChange={(e) => setData('phone_number', e.target.value)}
                                    disabled={processing}
                                />
                                <InputError message={errors.phone_number} />
                            </div>

                            <div className="p-4 md:px-4">
                                <Label htmlFor="email">Email address</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    required
                                    tabIndex={2}
                                    autoComplete="email"
                                    className="rounded-none border-gray-400"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    disabled={processing}
                                    placeholder="email@example.com"
                                />
                                <InputError message={errors.email} />
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={(e) => submit(e)}
                        disabled={processing}
                        className="font-display shadow-custom-orange border-custom-orange my-5 w-full rounded-sm border-1 bg-white px-5 py-1.5 shadow-2xl hover:bg-black hover:text-white hover:shadow-white"
                    >
                        <div className="flex justify-center">
                            <p> CONTINUE TO PAYMENT</p>
                            {processing && <LoaderCircle className="animate-spin px-3" />}
                        </div>
                    </button>
                    <p className="text-center text-sm">By purchasing, you agree to the Terms and Conditions of Afro Republick</p>
                </section>
            </main>
        </AppHeaderLayout>
    );
}
