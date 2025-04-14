type Props = {
    price: number;
    header: string;
    description: string;
    backgroundColor: string;
};

function PriceCard({ price, backgroundColor, header, description }: Props) {
    return (
        <div style={{ backgroundColor: backgroundColor }} className="mt-5">
            <div className="mx-7 mt-5 border-1 border-black bg-white px-5 py-1.5 shadow-2xl shadow-black ">{header}</div>
            <h2 className="font-display mt-9 text-7xl">${price}</h2>
            <div className="mx-7 mt-8 bg-gray-500/70 px-3 py-6 text-sm text-white">
                <p>{description}</p>
            </div>
            <button className="mx-7 my-5 border-1 border-black bg-white px-5 py-1.5 shadow-2xl shadow-black hover:bg-black hover:text-white hover:shadow-white">BOOK TICKET NOW</button>
        </div>
    );
}

export default PriceCard;
