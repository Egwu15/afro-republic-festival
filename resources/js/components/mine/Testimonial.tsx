import testimonyImage1 from '@/assets/images/testimonial_image1.svg';
import testimonyImage2 from '@/assets/images/testimonial_image2.svg';
import testimonyImage3 from '@/assets/images/testimonial_image3.svg';
import TestimonialCard from './TestimonialCard';

function Testimonial() {
    return (
        <section className="bg-custom-gray mt-36 w-full pb-4 text-center">
            <p className="font-display text-custom-green pt-6 text-4xl md:mt-0 md:text-7xl">Testimonials</p>
            <p className="mt-[52px] text-[30px] md:text-[40px]">
                What our <span className="text-custom-green">Customer</span> Say{' '}
            </p>
            <div className="mx-auto mt-[16px] mb-[40px] max-w-3xl px-6 md:px-0">
                <p className="">Discover the thoughts and satisfaction of our pleased customers as they share their experiences with us.</p>
            </div>
            <div className="grid-cols-3 gap-6 px-6 md:grid md:px-16">
                <TestimonialCard
                    userName="Tolu A"
                    testimony="That event was insane! The energy was crazy from the moment we walked in. Honestly felt like everyone there was part of one big family. Can’t wait for the next one!"
                    image={testimonyImage1}
                />{' '}
                <TestimonialCard
                    userName="Jade E"
                    testimony="We hosted our own pop-up through AfroRepublick and it was such a vibe. They made everything so easy, and the crowd was 🔥. Definitely doing it again."
                    image={testimonyImage2}
                />{' '}
                <TestimonialCard
                    userName="Mike D"
                    testimony="Bro… I still think about that night. The setup, the people, the vibes! everything was on point. It wasn’t just an event, it was an experience."
                    image={testimonyImage3}
                />
            </div>
        </section>
    );
}

export default Testimonial;
