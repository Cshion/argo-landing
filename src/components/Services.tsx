'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { services } from '@/data/services';

const Services = () => {
    return (
        <section id="servicios" className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Subtle Background Pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-blue-400 blur-[100px] rounded-full"></div>
                <div className="absolute left-0 bottom-0 w-1/3 h-1/3 bg-indigo-400 blur-[100px] rounded-full"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <span className="text-accent font-bold tracking-wider uppercase text-sm mb-3 block">Lo que hacemos</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Soluciones de Ingeniería <br /><span className="text-primary">Inteligente</span></h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        Optimiza cada etapa de tu proyecto con nuestra experiencia en metodología BIM y gestión de construcción.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div key={index} className="group bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-blue-900/5 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-lg transform group-hover:scale-110 transition-transform duration-500 ${service.color}`}>
                                    <Icon className="w-8 h-8 text-white" />
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-8 border-b border-slate-100 pb-8 min-h-[100px]">
                                    {service.description}
                                </p>

                                <Link href={`/servicios/${service.slug}`} className="inline-flex items-center gap-2 text-primary font-bold text-sm group-hover:translate-x-2 transition-transform">
                                    Ver detalles
                                    <ArrowRight className="w-4 h-4" />
                                </Link>

                                {/* Hover highlight line */}
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
