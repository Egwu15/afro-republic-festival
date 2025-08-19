import { useForm } from '@inertiajs/react';
import React from 'react';
import toast from 'react-hot-toast';

function ContactForm() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        phone_number: '',
        service: '',
        company: '',
        subject: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('contact.store'), {
            onSuccess: () => {
                toast.success('Message successfully sent!');
                reset();
            },
            preserveScroll: true,
        });
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-black px-4 text-white">
            <form onSubmit={handleSubmit} className="w-full max-w-7xl rounded-lg border border-gray-800 bg-black p-8">
                <h1 className="text-center text-lg font-semibold">Online Inquiry Form</h1>
                <p className="mt-1 mb-6 text-center text-gray-400">
                    Please fill in the following details, and we'll get back to you within 24 hours.
                </p>

                <div className="grid gap-4 md:grid-cols-3">
                    <div>
                        <label className="mb-1 block">Name</label>
                        <input
                            type="text"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            placeholder="Enter your Name"
                            className="w-full rounded-full border border-[#1F1F1F] bg-black px-4 py-2 focus:border-gray-500 focus:outline-none"
                        />
                        {errors.name && <div className="text-sm text-red-500">{errors.name}</div>}
                    </div>

                    <div>
                        <label className="mb-1 block">Email</label>
                        <input
                            type="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            placeholder="Enter your Email"
                            className="w-full rounded-full border border-[#1F1F1F] bg-black px-4 py-2 focus:border-gray-500 focus:outline-none"
                        />
                        {errors.email && <div className="text-sm text-red-500">{errors.email}</div>}
                    </div>

                    <div>
                        <label className="mb-1 block">Phone Number</label>
                        <input
                            type="text"
                            value={data.phone_number}
                            onChange={(e) => setData('phone_number', e.target.value)}
                            placeholder="Enter your Phone Number"
                            className="w-full rounded-full border border-[#1F1F1F] bg-black px-4 py-2 focus:border-gray-500 focus:outline-none"
                        />
                        {errors.phone_number && <div className="text-sm text-red-500">{errors.phone_number}</div>}
                    </div>
                </div>

                <div className="mt-4 grid gap-4 md:mt-8 md:grid-cols-3">
                    <div>
                        <label className="mb-1 block">Select Service</label>
                        <select
                            value={data.service}
                            onChange={(e) => setData('service', e.target.value)}
                            className="w-full rounded-full border border-[#1F1F1F] bg-black px-4 py-2 focus:border-gray-500 focus:outline-none"
                        >
                            <option value="" defaultValue="Event Booking Service">
                                Select your Service
                            </option>
                            <option value="Event Booking Service">Event Service</option>
                        </select>
                        {errors.service && <div className="text-sm text-red-500">{errors.service}</div>}
                    </div>

                    <div>
                        <label className="mb-1 block">Company / Organization Name</label>
                        <input
                            type="text"
                            value={data.company}
                            onChange={(e) => setData('company', e.target.value)}
                            placeholder="Enter Name"
                            className="w-full rounded-full border border-[#1F1F1F] bg-black px-4 py-2 focus:border-gray-500 focus:outline-none"
                        />
                        {errors.company && <div className="text-sm text-red-500">{errors.company}</div>}
                    </div>

                    <div>
                        <label className="mb-1 block">Subject</label>
                        <select
                            value={data.subject}
                            onChange={(e) => setData('subject', e.target.value)}
                            className="w-full rounded-full border border-[#1F1F1F] bg-black px-4 py-2 focus:border-gray-500 focus:outline-none"
                        >
                            <option value="">Select your Subject</option>
                            <option value="General Inquiry">General Inquiry</option>
                            <option value="Support">Support</option>
                        </select>
                        {errors.subject && <div className="text-sm text-red-500">{errors.subject}</div>}
                    </div>
                </div>

                <div className="mt-4 md:mt-8">
                    <label className="mb-1 block">Message</label>
                    <textarea
                        value={data.message}
                        onChange={(e) => setData('message', e.target.value)}
                        placeholder="Enter your Message"
                        className="min-h-[120px] w-full rounded-lg border border-[#1F1F1F] bg-black px-4 py-3 focus:border-gray-500 focus:outline-none"
                    />
                    {errors.message && <div className="text-sm text-red-500">{errors.message}</div>}
                </div>

                <div className="mt-6 text-center">
                    <button
                        type="submit"
                        disabled={processing}
                        className="mx-auto flex items-center justify-center rounded-full bg-gray-800 px-6 py-3 transition hover:bg-gray-700"
                    >
                        Send your Inquiry
                        <span className="ml-2">→</span>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ContactForm;
