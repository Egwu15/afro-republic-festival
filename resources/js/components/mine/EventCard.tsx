import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import { CalendarDays, MapPin } from 'lucide-react';

type Event = {
    id: number;
    image: string;
    title: string;
    date: string;
    slug: string;
    location: string;
    tags: string[];
    price: number;
};

function EventCard(props: Event) {
    return (
        <div className="my-4 flex flex-col bg-white md:my-0">
            <img src={props.image} alt={props.title} className="h-[250px] w-full object-cover object-top" />
            <div className="mt-3 px-4">
                <p className="mb-3 text-xl">{props.title}</p>
                <div className="flex">
                    <CalendarDays className="pr-2" />
                    <p className="">{props.date}</p>
                </div>
                <div className="flex">
                    <MapPin className="pr-2" />
                    {props.location}
                </div>
                <div className="mt-2 flex flex-wrap">
                    {props.tags.map((e) => (
                        <p key={e} className="bg-custom-blue mr-2 mb-2 rounded-sm px-3 py-1">
                            {e}
                        </p>
                    ))}
                </div>
            </div>
            <div className="mt-auto">
                <Link href={route('event.show', { event: `${props.slug}` })}>
                    <Button className="bg-custom-orange h-12 w-full rounded-none">
                        {props.price === 0
                            ? 'Free'
                            : `From £${Number(props.price).toLocaleString('en-GB', {
                                  minimumFractionDigits: 2,
                                  maximumFractionDigits: 2,
                              })}`}
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default EventCard;
