'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { PopupModal } from 'react-calendly';

interface CalendlyContextType {
    openCalendly: () => void;
}

const CalendlyContext = createContext<CalendlyContextType | undefined>(undefined);

export const CalendlyProvider = ({ children }: { children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

    useEffect(() => {
        // Set root element for Calendly modal after mount (client-side)
        setRootElement(document.body);
    }, []);

    const openCalendly = () => setIsOpen(true);

    return (
        <CalendlyContext.Provider value={{ openCalendly }}>
            {children}
            {rootElement && (
                <PopupModal
                    url="https://calendly.com/aaron_stbn/30min"
                    onModalClose={() => setIsOpen(false)}
                    open={isOpen}
                    rootElement={rootElement}
                />
            )}
        </CalendlyContext.Provider>
    );
};

export const useCalendly = () => {
    const context = useContext(CalendlyContext);
    if (!context) {
        throw new Error('useCalendly must be used within a CalendlyProvider');
    }
    return context;
};
