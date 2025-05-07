import logo from '@/assets/images/logo.png';
import { SidebarInset } from '@/components/ui/sidebar';
import * as React from 'react';

interface AppContentProps extends React.ComponentProps<'main'> {
    variant?: 'header' | 'sidebar';
}

export function AppContent({ variant = 'header', children, ...props }: AppContentProps) {
    if (variant === 'sidebar') {
        return <SidebarInset {...props}>{children}</SidebarInset>;
    }

    return (
        <main className="mx-auto flex h-full w-full flex-1 flex-col rounded-xl" {...props}>
            {children}

            <section className="bg-custom-yellow">
                <div className="md:mx-auto md:max-w-5xl">
                    <div className="items-center justify-between md:flex">
                        <div className="flex flex-1/2 items-center">
                            <img src={logo} alt="logo" className="pr-5" />
                            <p className="px-2 text-2xl">
                                Afro Republick – <br /> Where Music & <br /> Culture Collide!
                            </p>
                        </div>

                        <div className="max-w-lg grid-cols-3 gap-0 px-2 md:grid md:px-0">
                            <div className="">
                                <a className="text-lg" href="https://">
                                    Home
                                </a>
                                <p className="text-lg">About Us</p>
                                <p className="text-lg">Line Up</p>
                            </div>
                            <div className="">
                                <p className="text-lg">Twitter</p>
                                <p className="text-lg">Facebook</p>
                                <p className="text-lg">Instagram</p>
                            </div>

                            <button className="font-display bg-custom-blue mx-auto my-5 border-1 border-black px-5 py-1.5 shadow-2xl shadow-black hover:bg-black hover:text-white hover:shadow-white md:mx-7">
                                BOOK TICKET
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
