type TestimonialProp = {
    image: string;
    userName: string;
    testimony: string;
};

function TestimonialCard(prop: TestimonialProp) {
    return (
        <div className="mb-4 w-full rounded-sm bg-white p-6 md:mb-0">
            <div className="mb-[16px] flex items-center">
                <img className="mr-3" src={prop.image} alt={prop.userName} />
                <p className="text-[20px] font-medium">{prop.userName}</p>
            </div>
            <p className="text-start text-[16px]">{prop.testimony}</p>
        </div>
    );
}

export default TestimonialCard;
