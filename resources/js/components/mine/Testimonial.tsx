import testimonyImage1 from '@/assets/images/testimonial_image1.svg';
import testimonyImage2 from '@/assets/images/testimonial_image2.svg';
import testimonyImage3 from '@/assets/images/testimonial_image3.svg';
import TestimonialCard from './TestimonialCard';

function Testimonial() {
    return (
        <section className="bg-custom-gray mt-36 w-full text-center">
            <p className="font-display text-custom-green pt-6 text-4xl md:mt-0 md:text-7xl">Testimonials</p>
            <p className="mt-[52px] text-[30px] md:text-[40px]">
                What our <span className="text-custom-green">Customer</span> Say{' '}
            </p>
            <div className="mx-auto mt-[16px] mb-[40px] max-w-3xl px-6 md:px-0">
                <p className="">Discover the thoughts and satisfaction of our pleased customers as they share their experiences with us.</p>
            </div>
            <div className="grid-cols-3 gap-6 px-6 md:grid md:px-16">
                <TestimonialCard
                    userName="Trusted Users"
                    testimony="Our experience with the Afro Reublick has been nothing short of exceptional. The website’s user-friendly interface, coupled with great and reliable event anchor, has truly elevated our event convenience. The diverse options and the seamless event creating process make it a go-to choice for our events hosting. We highly recommend them for anyone seeking a delightful and efficient event hosting experience."
                    image={testimonyImage1}
                />{' '}
                <TestimonialCard
                    userName="Trusted Users"
                    testimony="Our experience with the Afro Reublick has been nothing short of exceptional. The website’s user-friendly interface, coupled with great and reliable event anchor, has truly elevated our event convenience. The diverse options and the seamless event creating process make it a go-to choice for our events hosting. We highly recommend them for anyone seeking a delightful and efficient event hosting experience."
                    image={testimonyImage2}
                />{' '}
                <TestimonialCard
                    userName="Trusted Users"
                    testimony="Our experience with the Afro Reublick has been nothing short of exceptional. The website’s user-friendly interface, coupled with great and reliable event anchor, has truly elevated our event convenience. The diverse options and the seamless event creating process make it a go-to choice for our events hosting. We highly recommend them for anyone seeking a delightful and efficient event hosting experience."
                    image={testimonyImage3}
                />
            </div>
        </section>
    );
}

export default Testimonial;
