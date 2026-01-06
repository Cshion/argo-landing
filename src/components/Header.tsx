'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { services } from '@/data/services';
import { useCalendly } from '@/context/CalendlyContext';

const Header = () => {
    const { openCalendly } = useCalendly();

    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/50 h-24 flex items-center shadow-sm transition-all">
            <div className="container mx-auto px-6 flex items-center justify-between">
                <div className="flex-shrink-0">
                    <Link href="/">
                        {/* Increased Size as requested */}
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

                <nav className="hidden md:flex gap-8 items-center">
                    <Link href="/nosotros" className="text-base font-medium text-gray-700 hover:text-accent transition-colors">Nosotros</Link>

                    {/* Services Dropdown */}
                    <div className="relative group">
                        <Link href="/servicios" className="flex items-center gap-1 text-base font-medium text-gray-700 hover:text-accent transition-colors py-4">
                            Servicios
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

                    <Link href="/proyectos" className="text-base font-medium text-gray-700 hover:text-accent transition-colors">Proyectos</Link>
                    <Link href="/#contacto" className="text-base font-medium text-gray-700 hover:text-accent transition-colors">Contacto</Link>
                </nav>

                <div className="hidden md:flex">
                    <button onClick={openCalendly} className="bg-accent hover:bg-blue-700 text-white px-7 py-3 rounded-full font-semibold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 text-base">
                        Agendar Asesoría
                    </button>
                </div>

                {/* Mobile Menu Button Pattern (Placeholder) */}
                <button className="md:hidden text-gray-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                </button>
            </div>
        </header>
    );
};

export default Header;
