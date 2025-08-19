import { LucideIcon } from 'lucide-react';
import type { Config } from 'ziggy-js';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    href: string;
    icon?: LucideIcon | null;
    isActive?: boolean;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    ziggy: Config & { location: string };

    [key: string]: unknown;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;

    [key: string]: unknown; // This allows for additional properties...
}

export interface TicketPageProps {
    id: number;
    name: string;
    description: string;
    price: number;
    color: string;
    quantity: number;
}

export interface EventProps {
    id: number;
    name: string;
    slug: string;
    description: string;
    location: string;
    start_date: string;
    eventStartDate: string;
    eventEndDate: string;
    end_date: string;
    tickets_min_price: number;
    status: string;
    image: string;
    tickets: TicketPageProps[] | undefined;
}
