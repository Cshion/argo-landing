'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { services } from '@/data/services';
import { siteConfig } from '@/config/site';
import { useCalendly } from '@/context/CalendlyContext';

const Header = () => {
    const { openCalendly } = useCalendly();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    return (
        <>
            <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/50 h-24 flex items-center shadow-sm transition-all">
                <div className="container mx-auto px-6 flex items-center justify-between">
                    <div className="flex-shrink-0">
                        <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                            <div className="relative w-24 h-24 md:w-32 md:h-32 flex items-center">
                                <Image
                                    src="/argo_logo.png"
                                    alt="Argo Logo"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex gap-8 items-center">
                        {siteConfig.nav.main.map((item) => {
                            if (item.title === "Servicios") {
                                return (
                                    <div key={item.title} className="relative group">
                                        <Link href={item.href} className="flex items-center gap-1 text-base font-medium text-gray-700 hover:text-accent transition-colors py-4">
                                            {item.title}
                                            <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                                        </Link>

                                        {/* Dropdown Menu */}
                                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 w-72">
                                            <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden p-2">
                                                {services.map((service) => (
                                                    <Link
                                                        key={service.slug}
                                                        href={`/servicios/${service.slug}`}
                                                        className="block px-4 py-3 rounded-lg hover:bg-slate-50 transition-colors"
                                                    >
                                                        <p className="font-semibold text-slate-800 text-sm mb-0.5">{service.title}</p>
                                                        <p className="text-xs text-slate-500 line-clamp-1">{service.description}</p>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                            return (
                                <Link key={item.title} href={item.href} className="text-base font-medium text-gray-700 hover:text-accent transition-colors">
                                    {item.title}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="hidden md:flex">
                        <button onClick={openCalendly} className="bg-accent hover:bg-blue-700 text-white px-7 py-3 rounded-full font-semibold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 text-base">
                            Agendar Asesoría
                        </button>
                    </div>

                    {/* Mobile Menu Trigger Button */}
                    <button
                        className="md:hidden p-2 text-gray-600 hover:text-accent transition-colors"
                        onClick={() => setIsMobileMenuOpen(true)}
                        aria-label="Open menu"
                    >
                        <Menu className="w-8 h-8" />
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay - Independent Layer */}
            <div className={`fixed inset-0 bg-white z-[100] md:hidden transition-all duration-300 ease-in-out h-[100dvh] ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
                <div className="flex flex-col h-full">
                    {/* Mobile Header Inside Overlay */}
                    <div className="h-24 flex items-center justify-between px-6 border-b border-gray-100 flex-shrink-0">
                        <div className="relative w-24 h-24 flex items-center">
                            <Image
                                src="/argo_logo.png"
                                alt="Argo Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <button
                            className="p-2 text-gray-600 hover:text-accent transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                            aria-label="Close menu"
                        >
                            <X className="w-8 h-8" />
                        </button>
                    </div>

                    {/* Scrollable Content */}
                    <div className="flex-1 overflow-y-auto px-6 py-8">
                        <nav className="flex flex-col gap-6">
                            {siteConfig.nav.main.map((item) => (
                                <div key={item.title} className="flex flex-col border-b border-gray-100 pb-4">
                                    <Link
                                        href={item.href}
                                        className="text-2xl font-bold text-slate-800"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item.title}
                                    </Link>
                                    {/* Show services inline for mobile */}
                                    {item.title === "Servicios" && (
                                        <div className="flex flex-col gap-3 mt-4 pl-4 border-l-2 border-slate-100">
                                            {services.map((service) => (
                                                <Link
                                                    key={service.slug}
                                                    href={`/servicios/${service.slug}`}
                                                    className="text-lg font-medium text-slate-500 hover:text-accent"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    {service.title}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </nav>

                        <div className="mt-8 mb-8">
                            <button
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    openCalendly();
                                }}
                                className="w-full bg-accent hover:bg-blue-700 text-white text-lg font-bold py-4 rounded-xl shadow-lg shadow-blue-500/20"
                            >
                                Agendar Asesoría
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
