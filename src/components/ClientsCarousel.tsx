'use client';

import Image from 'next/image';

const CLIENTS = [
    { name: 'Graña y Montero', id: 1 },
    { name: 'Cosapi', id: 2 },
    { name: 'Besco', id: 3 },
    { name: 'Constructora Aesa', id: 4 },
    { name: 'Mota-Engil', id: 5 },
    { name: 'Sacyr', id: 6 },
    { name: 'JJC', id: 7 },
    { name: 'San Jose', id: 8 },
];

const ClientsCarousel = () => {
    return (
        <section className="bg-white py-12 border-b border-gray-100 overflow-hidden">
            <div className="container mx-auto px-6 mb-12 text-center">
                <p className="text-xl md:text-2xl font-bold text-slate-400 uppercase tracking-widest">
                    Empresas que confían en nosotros
                </p>
            </div>

            <div className="relative w-full flex overflow-hidden mask-linear-fade">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                <div className="flex animate-scroll whitespace-nowrap gap-24 py-6 items-center">
                    {/* First Loop */}
                    {CLIENTS.map((client) => (
                        <div key={client.id} className="flex items-center gap-4 text-slate-300 font-black text-4xl md:text-5xl grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300 cursor-default hover:text-slate-800">
                            {/* Placeholder for Logos - using Text for now */}
                            <span>{client.name}</span>
                        </div>
                    ))}
                    {/* Second Loop (Duplicate for seamless scroll) */}
                    {CLIENTS.map((client) => (
                        <div key={`dup-${client.id}`} className="flex items-center gap-4 text-slate-300 font-black text-4xl md:text-5xl grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300 cursor-default hover:text-slate-800">
                            <span>{client.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientsCarousel;
