import background from '@/assets/images/background.jpg';
import AppHeaderLayout from '@/layouts/app/app-header-layout';
import ContactForm from '@/pages/Contact/components/ContactForm';
import ContactTile from '@/pages/Contact/components/ContactTile';
import { Head } from '@inertiajs/react';
import { Phone } from 'lucide-react';

function Contact() {
    return (
        <AppHeaderLayout>
            <Head title="Contact" />
            <main className="bg-custom-gray">
                <section
                    className="font-body relative w-full items-center justify-center bg-cover bg-center"
                    style={{ backgroundImage: `url(${background})` }}
                >
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-black/50"></div>
                    </div>

                    <div className="relative py-24 text-center text-white">
                        <div className="font-display text-3xl md:text-8xl">
                            <p>Get in Touch with Us</p>
                            <p className="my-2">Today</p>
                        </div>
                    </div>
                </section>

                <section className="bg-black px-6 pt-6 text-white md:px-16">
                    <p className="text-center text-[24px] font-semibold">Contact Us Via Email & Phone</p>
                    <div className="border-custom-bggray mt-6 rounded-sm border p-6">
                        <div className="justify-between md:flex">
                            <ContactTile info="info@afrorepublick.com" title="For General Inquiries" />
                            <ContactTile info="partnerships@afrorepublick.com" title="For Business Collaborations" />
                        </div>
                        <div className="justify-between md:flex">
                            <ContactTile info="careers@afrorepublick.com" title="For Job/Career Opportunities" />
                            <ContactTile info="+44-0000-123-4567" title="General Enquiries" icon={<Phone />} />
                        </div>
                    </div>
                </section>
                <ContactForm />
            </main>
        </AppHeaderLayout>
    );
}

export default Contact;
