import background from '@/assets/images/background.jpg';
import beach from '@/assets/images/beach.jpg';
import EventCard from '@/components/mine/EventCard';
import { Button } from '@/components/ui/button';
import AppHeaderLayout from '@/layouts/app/app-header-layout';
import { EventProps } from '@/types';
import { Link } from '@inertiajs/react';

function Homepage({ events }: { events: EventProps[] }) {
    console.log(events);
    return (
        <AppHeaderLayout>
            <main className="bg-custom-gray">
                <section
                    className="font-body relative w-full items-center justify-center bg-cover bg-center"
                    style={{ backgroundImage: `url(${background})` }}
                >
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-black/30"></div>
                    </div>

                    <div className="relative py-24 text-center text-white">
                        <div className="font-display text-4xl md:text-9xl">
                            <p>
                                One <span className="text-yellow-300">Rhythm</span>,
                            </p>
                            <p className="my-2">
                                One <span className="bg-[#9747FF] px-2 text-black">Vibe!</span> One{' '}
                                <span className="bg-yellow-300 text-black">Vibe!</span>
                            </p>
                        </div>
                        <p className="mx-auto mt-6 max-w-3xl px-4 text-2xl md:px-0">
                            We bring the world together through the electrifying rhythm of Afrobeats, Amapiano, and global sounds. Our mission is to
                            create unforgettable parties and festivals that celebrate music, culture and pure energy uniting diverse communities in a
                            vibrant atmosphere of joy, rhythm, and unstoppable good vibes.
                        </p>
                    </div>
                </section>
                <section className="bg-custom-green overflow-hidden px-2 py-6">
                    <h3 className="animate-marque font-display text-nowrap md:text-5xl">
                        ⭐ GOOD VIBES ⭐ AFROREPUBLICK ⭐ GOOD VIBES ⭐ AFROREPUBLICK ⭐ GOOD VIBES ⭐ AFROREPUBLICK ⭐{' '}
                    </h3>
                </section>
                <section className="px-4 py-14 md:mx-auto md:max-w-5xl md:px-0">
                    <p className="font-display text-custom-green mt-14 text-5xl md:text-7xl">Trending Events</p>
                    <div className="mt-16 grid-cols-3 gap-5 md:grid">
                        {events.map((e: EventProps) => (
                            <EventCard
                                id={e.id}
                                key={e.id}
                                image={e.image}
                                slug={e.slug}
                                date={e.eventStartDate}
                                price={e.tickets_min_price}
                                title={e.name}
                                tags={['Dance', 'AfroBeats']}
                                location={e.location}
                            />
                        ))}
                    </div>
                    <div className="mt mt-[72px] flex justify-center">
                        <Link href={route('event')}>
                            <Button className="rounded-none p-6 text-2xl font-bold" variant="outline">
                                See More
                            </Button>
                        </Link>
                    </div>
                </section>

                <section className="bg-custom-light-green px-4 py-14 md:px-0">
                    <div className="md:mx-auto md:max-w-5xl">
                        <h3 className="font-display mt-14 text-5xl md:text-7xl">
                            More Than Just Music – <br /> A Full Cultural Experience!
                        </h3>
                        <p className="mt-7 text-2xl">
                            It’s not just about the beats – it’s about the vibes,
                            <br />
                            the people, and the unforgettable moments.
                        </p>
                        <div className="my-9 bg-[#CEFEF3] p-8">
                            <img src={beach} alt="Beach festival" />
                        </div>
                        <p className="font-display text-5xl">
                            Beach Parties & Poolside Grooves – <br />
                            Feel the waves, dance under the sun.
                        </p>
                    </div>
                </section>
            </main>
        </AppHeaderLayout>
    );
}

export default Homepage;
