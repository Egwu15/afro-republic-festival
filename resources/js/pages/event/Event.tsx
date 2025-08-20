import background from '@/assets/images/background.jpg';
import beach from '@/assets/images/beach.jpg';
import EventCard from '@/components/mine/EventCard';
import Testimonial from '@/components/mine/Testimonial';
import AppHeaderLayout from '@/layouts/app/app-header-layout';
import { EventProps } from '@/types';
import { Head } from '@inertiajs/react';

function Event({ events }: { events: EventProps[] }) {
    return (
        <AppHeaderLayout>
            <Head title="Event" />
            <main className="bg-custom-gray">
                <section
                    className="font-body relative w-full items-center justify-center bg-cover bg-center"
                    style={{ backgroundImage: `url(${background})` }}
                >
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-black/30">{} </div>
                    </div>

                    <div className="relative py-24 text-center text-white">
                        <div className="font-display text-4xl md:text-9xl">
                            <p>Explore a world of</p>
                            <p className="my-2">events. Find what</p> <p className="my-2">excites you!</p>
                        </div>
                    </div>
                </section>

                <section className="px-4 pt-14 md:mx-auto md:max-w-5xl md:px-0">
                    <p className="font-display text-custom-orange mt-14 text-5xl md:text-7xl">Events</p>
                    <div className="mt-16 grid-cols-3 gap-5 md:grid">
                        {events.map((e: EventProps) => (
                            <EventCard
                                id={e.id}
                                slug={e.slug}
                                key={e.id}
                                image={e.image}
                                date={e.eventStartDate}
                                price={e.tickets_min_price}
                                title={e.name}
                                tags={['Dance', 'AfroBeats']}
                                location={e.location}
                            />
                        ))}
                    </div>
                </section>

                <Testimonial />

                <section className="bg-custom-light-green mt-16 px-4 py-14 md:px-0">
                    <div className="md:mx-auto md:max-w-5xl">
                        <h3 className="font-display mt-14 text-5xl md:text-7xl">
                            More Than an Event –
                            <br />A Full Experience!
                        </h3>
                        <p className="max-w-2xlg mt-7 text-2xl">
                            It’s not just about what’s happening on stage. It’s about the energy, the people, and the unforgettable moments that bring
                            everyone together.
                            <br />
                        </p>
                        <div className="my-9 bg-[#CEFEF3] p-8">
                            <img src={beach} alt="Beach festival" />
                        </div>
                        <p className="font-display text-5xl">
                            Sun, Fun & Unforgettable Moments <br />
                            <p className="font-body text-2xl">
                                Feel the energy, soak up the vibes, and make every moment unforgettable—anywhere the event takes you.
                            </p>
                        </p>
                    </div>
                </section>
            </main>
        </AppHeaderLayout>
    );
}

export default Event;
