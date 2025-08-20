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
                        <p>Experience. Host. </p>
                        <p className="my-2">Celebrate.</p>
                    </div>
                    <p className="mx-auto mt-6 max-w-3xl px-4 text-2xl md:px-0">
                        At AfroRepublick, we bring people together through unforgettable experiences. Whether we’re hosting high-energy parties and
                        festivals or providing a platform for you to create your own events, our mission is the same: to deliver vibrant, joyful, and
                        memorable moments for every community.
                    </p>
                </div>
            </section>
            <section className="bg-custom-green overflow-hidden px-2 py-6">
                <h3 className="animate-marque font-display text-nowrap md:text-5xl">
                    🎉 UNFORGETTABLE EVENTS 🎶 HIGH-ENERGY VIBES 🌍 CONNECT COMMUNITIES ✨ HOST YOUR OWN
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
                        Events like <span className="text-custom-orange">No Other</span>
                    </p>
                    <p className="mt-5 text-2xl">
                        Step into a world of unforgettable experiences. From high-energy performances to immersive atmospheres, every moment is
                        designed to bring people together and keep the vibe alive. Whether you’re attending or hosting, this is where the celebration
                        begins.
                    </p>

                    <div className="mt-16 text-2xl md:flex">
                        <div>
                            <p className="font-display text-custom-orange text-4xl md:text-7xl">Vison</p>
                            <p>
                                To become the leading platform for creating and sharing unforgettable experiences, bringing people together through
                                events that inspire connection, joy, and cultural expression.
                            </p>
                        </div>
                        <div>
                            <p className="font-display text-custom-green mt-6 text-4xl md:mt-0 md:text-7xl">Mission</p>
                            <p>
                                To deliver high-impact events that celebrate culture, creativity, and community, while providing a platform for others
                                to host experiences that leave lasting memories.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Testimonial />
        </AppHeaderLayout>
    );
}
