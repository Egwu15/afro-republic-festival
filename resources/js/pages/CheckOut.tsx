import verifiedRed from '@/assets/icons/verified_red.png';
import InputError from '@/components/input-error';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppHeaderLayout from '@/layouts/app/app-header-layout';
import { TicketPageProps } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function CheckOut({ ticket, quantity }: { ticket: TicketPageProps; quantity: number }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => reset(),
        });
    };

    return (
        <AppHeaderLayout>
            <Head title="CheckOut" />

            <main className="mx-auto max-w-6xl md:mt-6 md:flex">
                <section className="mx-auto max-h-min w-full max-w-sm">
                    <div className="rounded border border-red-400">
                        <p className="font-display px-3 py-2 font-light">SELECTION</p>
                        <hr className="border-red-400" />
                        <div className="px-3 py-5">
                            <div className="flex justify-between">
                                <div className="flex items-center">
                                    <img src={verifiedRed} alt="Verified Red" />
                                    <p className="font-display p-2">
                                        {ticket.name} . {quantity}pcs
                                    </p>
                                </div>
                                <p className="px-3">${ticket.price * quantity}</p>
                            </div>
                            {/*<p className="px-3 pb-6">{formattedDate}</p>*/}
                            <hr className="border-gray-200" />
                            <div className="flex justify-between">
                                <div className="flex items-center">
                                    <p className="font-display p-2">Subtotal</p>
                                </div>
                                <p className="px-3">${ticket.price * quantity}</p>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex items-center">
                                    <p className="font-display p-2">Tax</p>
                                </div>
                                <p className="px-3">${ticket.price * quantity}</p>
                            </div>
                            <hr className="border-gray-200" />
                            <div className="flex justify-between">
                                <div className="flex items-center">
                                    <p className="font-display p-2">Total</p>
                                </div>
                                <p className="px-3">${ticket.price * quantity}</p>
                            </div>
                        </div>
                    </div>

                    <div
                        // onClick={() => checkOut()}
                        className="font-display shadow-custom-orange border-custom-orange my-5 w-full border-1 bg-white px-5 py-1.5 shadow-2xl hover:bg-black hover:text-white hover:shadow-white"
                    >
                        {/*{progress && <LoaderCircle className="animate-spin" />}*/}
                        CONTINUE TO CHECKOUT
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
                                    autoComplete="last_name"
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
                        className="font-display shadow-custom-orange border-custom-orange my-5 w-full border-1 bg-white px-5 py-1.5 shadow-2xl hover:bg-black hover:text-white hover:shadow-white"
                    >
                        {/*{progress && <LoaderCircle className="animate-spin" />}*/}
                        CONTINUE TO PAYMENT
                    </button>
                    <p className="text-center text-sm">By purchasing, you agree to the Terms and Conditions of Afro Republick</p>
                </section>
            </main>
        </AppHeaderLayout>
    );
}
