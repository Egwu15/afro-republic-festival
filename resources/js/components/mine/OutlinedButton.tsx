import { cn } from '@/lib/utils';

type Props = {
    className?: string;
    children?: React.ReactNode;
    onClick?: () => void;
};

function OutlinedButton({ className: classes, children, onClick }: Props) {
    return (
        <button className={cn('border px-5 py-2.5 hover:bg-white hover:text-black', classes)} onClick={onClick}>
            {children}
        </button>
    );
}

export default OutlinedButton;
