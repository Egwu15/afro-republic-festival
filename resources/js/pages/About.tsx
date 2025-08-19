import background from '@/assets/images/background.jpg';
import backgroundAfrican from '@/assets/images/background_african.jpg';
import Testimonial from '@/components/mine/Testimonial';
import AppHeaderLayout from '@/layouts/app/app-header-layout';
import { Head } from '@inertiajs/react';

export default function About() {
    return (
        <AppHeaderLayout>
            <Head title="About" />
            <section
                className="font-body relative w-full items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: `url(${background})` }}
            >
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-black/30"></div>
                </div>

                <div className="relative py-24 text-center text-white">
                    <div className="font-display text-4xl md:text-9xl">
                        <p>We’re AfroRepublick,</p>
                        <p className="my-2">We’re Africans!</p>
                    </div>
                    <p className="mx-auto mt-6 max-w-3xl px-4 text-2xl md:px-0">
                        At Afrorepublick, we bring the world together though the power of Afrobeats, Amapioano and global sounds. Our mission is to
                        create unforgettable party and festival experience filled high-energy music, vibrant culture, and pure good vibes uniting
                        diverse communities on dancefloors across the globe.
                    </p>
                </div>
            </section>
            <section className="bg-custom-green overflow-hidden px-2 py-6">
                <h3 className="animate-marque font-display text-nowrap md:text-5xl">
                    ⭐ ABOUT US ⭐ ABOUT US ⭐ ABOUT US ⭐ ABOUT US ⭐ ABOUT US ⭐ ABOUT US ⭐ ABOUT US ⭐
                </h3>
            </section>

            <section
                className="font-body relative w-full items-center justify-center bg-cover bg-center py-1"
                style={{ backgroundImage: `url(${backgroundAfrican})` }}
            >
                {/*<div className="absolute inset-0">*/}
                {/*    <div className="absolute inset-0 bg-black/30"></div>*/}
                {/*</div>*/}

                <div className="relative m-2 bg-white p-1 md:m-9 md:p-10">
                    <p className="font-display text-4xl md:text-7xl">
                        A Festival Like <span className="text-custom-orange">No Other</span>
                    </p>
                    <p className="mt-5 text-2xl">
                        Get ready for non-stop party vibes! We’re turning up the heat with an electrifying atmosphere, epic beats, and nothing but
                        good vibes all night long. Bring your energy, this is where the party lives! Get ready for non-stop party vibes! We’re turning
                        up the heat with an electrifying atmosphere, epic beats, and nothing but good vibes all night long. Bring your energy, this is
                        where the party lives! Get ready for non-stop party vibes! We’re turning up the heat with an electrifying atmosphere, epic
                        beats, and nothing but good vibes all night long. Bring your energy, this is where the party lives! Get ready for non-stop
                        party vibes! We’re turning up the heat with an electrifying atmosphere, epic beats, and nothing but good vibes all night long.
                        Bring your energy, this is where the party lives! Get ready for non-stop party vibes! We’re turning up the heat with an
                        electrifying atmosphere, epic beats, and nothing but good vibes all night long. Bring your energy, this is where the party
                        lives! Get ready for non-stop party vibes! We’re turning up the heat with an electrifying atmosphere, epic beats, and nothing
                        but good vibes all night long. Bring your energy, this is where the party lives!{' '}
                    </p>

                    <div className="mt-16 text-2xl md:flex">
                        <div>
                            <p className="font-display text-custom-orange text-4xl md:text-7xl">Vison</p>
                            <p>
                                Brace yourself for 3 days of electrifying performances, vibrant culture, and non-stop party vibes. This is where music
                                meets paradise. Brace yourself for 3 days of electrifying performances, vibrant culture, and non-stop party vibes.
                                This is where music meets paradise. Brace yourself for 3 days of electrifying performances, vibrant culture, and
                                non-stop party vibes.{' '}
                            </p>
                        </div>
                        <div>
                            <p className="font-display text-custom-green mt-6 text-4xl md:mt-0 md:text-7xl">Mission</p>
                            <p>
                                Brace yourself for 3 days of electrifying performances, vibrant culture, and non-stop party vibes. This is where music
                                meets paradise. Brace yourself for 3 days of electrifying performances, vibrant culture, and non-stop party vibes.
                                This is where music meets paradise. Brace yourself for 3 days of electrifying performances, vibrant culture, and
                                non-stop party vibes.{' '}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Testimonial />
        </AppHeaderLayout>
    );
}
