import verifiedIcon from '@/assets/icons/verified.svg';
import { Link } from '@inertiajs/react';
import React from 'react';

type Props = {
    id: number;
    price: number;
    header: string;
    description: string;
    backgroundColor: string;
    children?: React.ReactNode;
};

function PriceCard({ price, backgroundColor, header, description, id, children }: Props) {
    return (
        <div style={{ backgroundColor: backgroundColor }} className="py-5">
            <div className="mx-7 mt-5 border-1 border-black bg-white px-5 py-1.5 shadow-2xl shadow-black">{header}</div>
            <h2 className="font-display mt-9 text-center text-7xl">${price}</h2>
            <div className="mx-7 mt-8 flex bg-black/40 px-3 py-6 text-sm text-white">
                <img src={verifiedIcon} alt="verified" className="mr-2.5" />
                <p>{description}</p>
            </div>

            {children === undefined && (
                <div className="my-5 text-center">
                    <Link
                        href={`/ticket/${id}`}
                        className="mx-7 my-5 border-1 border-black bg-white px-5 py-1.5 shadow-2xl shadow-black hover:bg-black hover:text-white hover:shadow-white"
                    >
                        BOOK TICKET NOW
                    </Link>
                </div>
            )}

            {children}
        </div>
    );
}

export default PriceCard;
