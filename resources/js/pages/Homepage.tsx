import artist from '@/assets/images/artist.png';
import background from '@/assets/images/background.jpg';
import beach from '@/assets/images/beach.jpg';
import festival from '@/assets/images/festival.jpg';
import ArtistCard from '@/components/mine/ArtistCard';
import OutlinedButton from '@/components/mine/OutlinedButton';
import PriceCard from '@/components/mine/PriceCard';
import AppHeaderLayout from '@/layouts/app/app-header-layout';
import { TicketPageProps } from '@/types';

function Homepage({ tickets }: { tickets: TicketPageProps[] }) {
    return (
        <AppHeaderLayout>
            <main>
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
                                Feel the <span className="text-yellow-300">Rhythm</span>,
                            </p>
                            <p className="my-2">
                                Live the <span className="bg-yellow-300 text-black">Vibe!</span>
                            </p>
                        </div>
                        <p className="mx-auto mt-6 max-w-3xl px-4 text-2xl md:px-0">
                            The world’s biggest celebration of{' '}
                            <span className="text-yellow-300">Afrobeats, Amapiano, and global sounds is BACK!</span> Join thousands of music lovers at
                            an unforgettable festival filled with music, culture, and pure energy.
                        </p>
                        <div className="mt-12 flex items-center justify-center">
                            <button className="hover:shadow-2xl-hover border-2 border-yellow-300 bg-black px-5 py-1.5 shadow-2xl shadow-yellow-300 hover:shadow-amber-400">
                                {' '}
                                Get Ticket
                            </button>
                            <OutlinedButton className="mx-9">Explore Lineup</OutlinedButton>
                        </div>
                    </div>
                </section>

                <section className="bg-custom-green overflow-hidden px-2 py-6">
                    <h3 className="animate-marque font-display text-nowrap md:text-5xl">
                        ⭐ LONDON, UNITED KINGDOM ⭐ SATURDAY 26TH JULY, 2025 ⭐ LONDON, UNITED KINGDOM ⭐ SATURDAY 26TH JULY, 2025 ⭐ LONDON, UNITED
                        KINGDOM ⭐{' '}
                    </h3>
                </section>

                <section className="bg-custom-yellow mx-auto grid gap-10 py-20">
                    <div className="mx-4 grid max-w-5xl md:mx-auto md:grid-cols-2">
                        <div>
                            <h4 className="font-display text-7xl">
                                A Festival Like <br /> <span className="bg-green-500 text-white">No Other</span>
                            </h4>
                        </div>
                        <div>
                            <p className="mx-auto max-w-lg text-2xl">
                                Brace yourself for 3 days of electrifying performances, vibrant culture, and non-stop party vibes. This is where music
                                meets paradise.
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto grid max-w-5xl gap-20 md:grid-cols-2">
                        <img src={festival} alt="festival" />
                        <img src={festival} alt="festival" />
                    </div>
                </section>
                <section className="bg-custom-orange overflow-hidden px-2 py-6">
                    <h3 className="animate-marque font-display text-nowrap md:text-5xl">
                        ⭐ TICKETS ON SALE⭐ TICKETS ON SALE⭐ TICKETS ON SALE⭐ TICKETS ON SALE⭐ TICKETS ON SALE⭐ TICKETS ON SALE⭐ TICKETS ON
                        SALE⭐{' '}
                    </h3>
                </section>
                <section className="bg-custom-green pb-9 text-center">
                    <h3 className="font-display pt-11 text-center text-7xl text-white">Choose Your Experience</h3>
                    <p className="mt-2 text-2xl text-white">Early Bird Prices Available for a Limited Time!</p>

                    <div className="mx-8 mt-8 grid max-w-5xl md:mx-auto md:grid-cols-3 md:gap-20">
                        {tickets.map((ticket) => (
                            <PriceCard
                                key={ticket.id}
                                price={ticket.price}
                                header={ticket.name}
                                description={ticket.description}
                                backgroundColor={ticket.color}
                                id={ticket.id}
                            />
                        ))}
                    </div>
                </section>

                <section className="bg-custom-yellow overflow-hidden px-2 py-6">
                    <h3 className="animate-marque font-display text-nowrap md:text-5xl">
                        ⭐ 30 BEST OF BEST ⭐ 30 BEST OF BEST ⭐ 30 BEST OF BEST ⭐ 30 BEST OF BEST ⭐ 30 BEST OF BEST ⭐ 30 BEST OF BEST ⭐ 30 BEST
                        OF BEST ⭐{' '}
                    </h3>
                </section>

                <section className="mx-auto mt-16">
                    <h4 className="font-display text-center text-6xl">
                        The Biggest Names <br /> <span className="bg-custom-yellow text-white">The Hottest Performances</span>
                    </h4>
                    <p className="mx-auto mt-7 max-w-md text-center">
                        Experience chart-topping artists, legendary DJs, and breakout stars bringing Afrobeats, Amapiano, Dancehall, Hip-Hop, and more
                        to one stage.
                    </p>
                </section>
                <div className="grid px-5 py-14 md:mx-auto md:max-w-5xl md:grid-cols-3 md:gap-5">
                    <ArtistCard
                        image={artist}
                        artistName="DAVIDO"
                        artistBio="Experience chart-topping artists, legendary DJs, and breakout stars bringing Afrobeats, Amapiano, Dancehall, Hip-Hop, and more to one stage. Experience chart-topping artists, legendary DJs, and breakout stars bringing Afrobeats, Amapiano, Dancehall, Hip-Hop, and more to one stage."
                    />
                    <ArtistCard
                        image={artist}
                        artistName="DAVIDO"
                        artistBio="Experience chart-topping artists, legendary DJs, and breakout stars bringing Afrobeats, Amapiano, Dancehall, Hip-Hop, and more to one stage. Experience chart-topping artists, legendary DJs, and breakout stars bringing Afrobeats, Amapiano, Dancehall, Hip-Hop, and more to one stage."
                    />
                    <ArtistCard
                        image={artist}
                        artistName="DAVIDO"
                        artistBio="Experience chart-topping artists, legendary DJs, and breakout stars bringing Afrobeats, Amapiano, Dancehall, Hip-Hop, and more to one stage. Experience chart-topping artists, legendary DJs, and breakout stars bringing Afrobeats, Amapiano, Dancehall, Hip-Hop, and more to one stage."
                    />
                </div>

                <section className="bg-custom-blue overflow-hidden px-2 py-6">
                    <h3 className="animate-marque font-display text-nowrap md:text-5xl">
                        ⭐ 30 BEST OF BEST ⭐ FEATURED DJ ⭐ 30 BEST OF BEST ⭐ FEATURED DJ ⭐ 30 BEST OF BEST ⭐ FEATURED DJ ⭐ 30 BEST OF BEST
                        ⭐{' '}
                    </h3>
                </section>

                <section className="py-14 md:mx-auto md:max-w-5xl">
                    <div className="grid gap-5 px-5 md:grid-cols-2 md:px-0">
                        <h3 className="font-display text-5xl">
                            UNBEATABLE BEATS, <br />
                            <span className="text-custom-green"> EXCITING VIBEZ</span>
                        </h3>
                        <p className="text-sm">
                            Experience chart-topping artists, legendary DJs, and breakout stars bringing Afrobeats, Amapiano, Dancehall, Hip-Hop, and
                            more to one stage.
                        </p>
                    </div>
                    <div className="grid px-5 py-14 md:mx-auto md:max-w-5xl md:grid-cols-3 md:gap-5 md:px-0">
                        <ArtistCard
                            image={artist}
                            artistName="DAVIDO"
                            artistBio="Experience chart-topping artists, legendary DJs, and breakout stars bringing Afrobeats, Amapiano, Dancehall, Hip-Hop, and more to one stage. Experience chart-topping artists, legendary DJs, and breakout stars bringing Afrobeats, Amapiano, Dancehall, Hip-Hop, and more to one stage."
                        />
                        <ArtistCard
                            image={artist}
                            artistName="DAVIDO"
                            artistBio="Experience chart-topping artists, legendary DJs, and breakout stars bringing Afrobeats, Amapiano, Dancehall, Hip-Hop, and more to one stage. Experience chart-topping artists, legendary DJs, and breakout stars bringing Afrobeats, Amapiano, Dancehall, Hip-Hop, and more to one stage."
                        />
                        <ArtistCard
                            image={artist}
                            artistName="DAVIDO"
                            artistBio="Experience chart-topping artists, legendary DJs, and breakout stars bringing Afrobeats, Amapiano, Dancehall, Hip-Hop, and more to one stage. Experience chart-topping artists, legendary DJs, and breakout stars bringing Afrobeats, Amapiano, Dancehall, Hip-Hop, and more to one stage."
                        />
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
