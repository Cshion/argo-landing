import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { services } from '@/data/services';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Nuestros Servicios",
    description: "Conoce las soluciones de ingeniería y consultoría BIM que ofrecemos para optimizar tus proyectos de construcción.",
};

export default function ServiciosPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/services-bg.png"
                        alt="Fondo Servicios"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-slate-900/80"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Nuestros Servicios</h1>
                    <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                        Soluciones integrales impulsadas por tecnología para cada etapa del ciclo de vida de tu proyecto.
                    </p>
                </div>
            </section>

            <section className="py-20 lg:py-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
                        {services.map((service, index) => (
                            <div key={index} className="group bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-blue-900/5 hover:-translate-y-2 transition-all duration-500 flex flex-col items-start relative overflow-hidden">
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-lg transform group-hover:scale-110 transition-transform duration-500 ${service.color}`}>
                                    <service.icon className="w-8 h-8 text-white" />
                                </div>

                                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">{service.title}</h2>
                                <p className="text-slate-500 text-lg leading-relaxed mb-8 border-b border-slate-100 pb-8 w-full">
                                    {service.description}
                                </p>

                                <Link href={`/servicios/${service.slug}`} className="mt-auto inline-flex items-center gap-2 text-primary font-bold text-lg group-hover:translate-x-2 transition-transform">
                                    Leer más
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
