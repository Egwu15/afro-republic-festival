import { ArrowRight, Mail } from 'lucide-react';
import { ReactNode } from 'react';
import toast from 'react-hot-toast';

interface ContactInquiryProps {
    title: string;
    info: string;
    icon?: ReactNode;
}

function ContactTile(items: ContactInquiryProps) {
    const handleCopy = () => {
        navigator.clipboard
            .writeText(items.info)
            .then(() => {
                toast.success('Copied to clipboard!');
            })
            .catch(() => {
                toast.error('Failed to copy');
            });
    };

    return (
        <div className="mt-6 p-6" onClick={handleCopy}>
            <p className="font-medium">{items.title}</p>
            <div className="border-custom-bggray mt-2 flex items-center rounded-md border px-3 py-2">
                <div className="flex-shrink-0 px-3">
                    <Mail />
                </div>
                <p className="flex-1 truncate">{items.info}</p>
                <div className="mx-3 flex-shrink-0 rounded-md bg-[#1A1A1A] px-3 py-1">{items.icon ?? <ArrowRight />}</div>
            </div>
        </div>
    );
}

export default ContactTile;
