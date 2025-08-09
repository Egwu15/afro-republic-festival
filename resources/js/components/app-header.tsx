import logo from '@/assets/images/logo.png';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { Icon } from '@/components/icon';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { type BreadcrumbItem, type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { BookOpen, Folder, Info, Menu } from 'lucide-react';

const rightNavItems: NavItem[] = [
    {
        title: 'Home',
        href: route('home'),
        icon: Folder,
    },
    {
        title: 'Checkout',
        href: route('checkout'),
        icon: BookOpen,
    },
    {
        title: 'About',
        href: route('about'),
        icon: Info,
    },
];

interface AppHeaderProps {
    breadcrumbs?: BreadcrumbItem[];
}

export function AppHeader({ breadcrumbs = [] }: AppHeaderProps) {
    return (
        <>
            <div className="border-sidebar-border/80 bg-custom-yellow border-b">
                <div className="mx-auto flex h-16 items-center px-4 md:max-w-7xl">
                    {/* Mobile Menu */}
                    <div className="lg:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="mr-2 h-[34px] w-[34px]">
                                    <Menu className="h-5 w-5" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="bg-sidebar flex h-full w-64 flex-col items-stretch justify-between">
                                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                                <SheetHeader className="flex justify-start text-left">
                                    <img src={logo} alt="logo" className="h-32 w-32 pr-5" />
                                </SheetHeader>
                                <div className="flex h-full flex-1 flex-col space-y-4 p-4">
                                    <div className="flex flex-col space-y-4">
                                        {rightNavItems.map((item) => (
                                            <a
                                                key={item.title}
                                                href={item.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center space-x-2 font-medium"
                                            >
                                                {item.icon && <Icon iconNode={item.icon} className="h-5 w-5" />}
                                                <span>{item.title}</span>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>

                    <Link href={route('home')} prefetch className="flex items-center space-x-2">
                        <img src={logo} alt="logo" className="z-10 mt-14 h-32 pr-5" />
                    </Link>

                    <div className="mx-auto flex items-center space-x-2">
                        <div className="relative flex items-center space-x-1">
                            <div className="hidden lg:flex">
                                {rightNavItems.map((item) => (
                                    <Link href={item.href} target="_blank" rel="noopener noreferrer" className="rounded px-3 py-1 hover:bg-white">
                                        <span className="font-bold">{item.title}</span>
                                        {/*{item.icon && <Icon iconNode={item.icon} className="size-5 opacity-80 group-hover:opacity-100" />}*/}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {breadcrumbs.length > 1 && (
                <div className="border-sidebar-border/70 flex w-full border-b">
                    <div className="mx-auto flex h-12 w-full items-center justify-start px-4 text-neutral-500 md:max-w-7xl">
                        <Breadcrumbs breadcrumbs={breadcrumbs} />
                    </div>
                </div>
            )}
        </>
    );
}
