'use client';

import Image from 'next/image';

const CLIENTS = [
    { name: 'Aldesa', id: 1, logo: '/clients/logo-aldesa.webp' },
    { name: 'Atis', id: 2, logo: '/clients/logo-atis.jpeg' },
    { name: 'Inti Punku', id: 3, logo: '/clients/logo-intipunku.jpg' },
    { name: 'Sacyr', id: 4, logo: '/clients/logo-sacyr.jpg' }
];

const ClientsCarousel = () => {
    return (
        <section className="bg-white py-16 border-b border-gray-100 overflow-hidden">
            <div className="container mx-auto px-6 mb-12 text-center">
                <p className="text-xl md:text-2xl font-bold text-slate-400 uppercase tracking-widest">
                    Empresas que confían en nosotros
                </p>
            </div>

            <div className="relative w-full flex overflow-hidden mask-linear-fade">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                <div className="flex animate-scroll whitespace-nowrap gap-24 py-8 items-center">
                    {/* First Loop */}
                    {CLIENTS.map((client) => (
                        <div key={client.id} className="relative w-48 h-24 flex items-center justify-center grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300">
                            <Image
                                src={client.logo}
                                alt={client.name}
                                fill
                                className="object-contain"
                                sizes="200px"
                            />
                        </div>
                    ))}
                    {/* Second Loop (Duplicate for seamless scroll) */}
                    {CLIENTS.map((client) => (
                        <div key={`dup-${client.id}`} className="relative w-48 h-24 flex items-center justify-center grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300">
                            <Image
                                src={client.logo}
                                alt={client.name}
                                fill
                                className="object-contain"
                                sizes="200px"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientsCarousel;
