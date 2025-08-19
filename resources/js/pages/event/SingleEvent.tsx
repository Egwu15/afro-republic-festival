import CalendarButtons from '@/components/mine/CalenderButtons';
import { Button } from '@/components/ui/button';
import AppHeaderLayout from '@/layouts/app/app-header-layout';
import { EventProps, TicketPageProps } from '@/types';
import { formatTimeWithAMPM } from '@/utils/timeFormat';
import { Head, Link } from '@inertiajs/react';
import { CalendarDays } from 'lucide-react';
import { useState } from 'react';
import { IoTicket } from 'react-icons/io5';

function SingleEvent({ event }: { event: EventProps }) {
    const [open, setOpen] = useState(false);
    const startTime = formatTimeWithAMPM(event.start_date);
    const endTime = formatTimeWithAMPM(event.end_date);
    const calenderEvent = {
        endDate: new Date(event.end_date),
        description: event.description,
        startDate: new Date(event.start_date),
        location: event.location,
        title: event.name,
    };

    return (
        <AppHeaderLayout>
            <Head title={event.name} />
            <main className="bg-custom-gray">
                <section className="pt-16 md:px-16">
                    <img
                        src={`/${event.image}`}
                        className="max-h-[60vh] w-full items-center justify-center object-cover object-top"
                        alt={event.name}
                        onClick={() => setOpen(true)}
                    />
                    {open && (
                        <div
                            className="bg-opacity-90 fixed inset-0 z-50 flex cursor-pointer items-center justify-center bg-black"
                            onClick={() => setOpen(false)}
                        >
                            <img src={`/${event.image}`} alt={event.name} className="max-h-[90vh] max-w-[90vw] object-contain" />
                        </div>
                    )}
                </section>
                <section className="mt-10 px-5 md:px-16">
                    <p className="text-5xl font-bold">{event.name}</p>
                    <div className="items-center justify-between md:flex">
                        <div>
                            <p className="mt-[60px] text-[2rem] font-bold">Date and Time</p>
                            <div className="flex items-center">
                                <CalendarDays />
                                <p className="ml-2 text-[20px] font-semibold">
                                    {event.eventStartDate} <span>{startTime}</span> to
                                </p>
                            </div>

                            <div className="flex items-center">
                                <CalendarDays />
                                <p className="ml-2 text-[20px] font-semibold">
                                    {event.eventEndDate} <span>{endTime}</span>
                                </p>
                            </div>
                            <CalendarButtons className="mt-8" event={calenderEvent} />
                        </div>

                        <div className="my-8 flex-col md:mt-0 md:text-right">
                            <Link href={route('checkout', { event: `${event.slug}` })}>
                                <Button className="bg-custom-yellow text-2xl font-semibold text-black hover:text-white" size={'xl'}>
                                    <IoTicket className="size-8" />
                                    <p>Buy Tickets</p>
                                </Button>
                            </Link>

                            <p className="mt-8 mb-4 text-3xl font-bold text-black">Ticket Information</p>

                            {event.tickets?.map((ticket: TicketPageProps) => (
                                <div className="flex items-center">
                                    <IoTicket className="size-5" />{' '}
                                    <p className="ml-2 text-xl font-semibold">
                                        {ticket.name} - £
                                        {Number(ticket.price).toLocaleString('en-GB', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <p className="mt-16 mb-4 text-3xl font-bold text-black">Location</p>
                        <div className="flex items-center">
                            <IoTicket className="size-5" /> <p className="ml-2 text-xl font-semibold">{event.location}</p>
                        </div>
                    </div>
                    <div className="pb-14">
                        <p className="mt-16 mb-4 text-3xl font-bold text-black">Event Description</p>
                        <div className="flex items-center">
                            <IoTicket className="size-5" /> <p className="ml-2 text-xl font-semibold">{event.description}</p>
                        </div>
                    </div>
                </section>
            </main>
        </AppHeaderLayout>
    );
}

export default SingleEvent;
