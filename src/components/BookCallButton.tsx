'use client';

import { useCalendly } from '@/context/CalendlyContext';

interface BookCallButtonProps {
    className?: string;
    children: React.ReactNode;
}

const BookCallButton = ({ className, children }: BookCallButtonProps) => {
    const { openCalendly } = useCalendly();

    return (
        <button
            onClick={openCalendly}
            className={className}
        >
            {children}
        </button>
    );
};

export default BookCallButton;
