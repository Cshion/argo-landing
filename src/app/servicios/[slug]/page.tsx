import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { services } from '@/data/services';
import { siteConfig } from '@/config/site';
import ContactSection from '@/components/ContactSection';
import Breadcrumbs from '@/components/Breadcrumbs';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

interface Props {
    params: Promise<{
        slug: string;
    }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const service = services.find(s => s.slug === slug);
    if (!service) return { title: 'Servicio no encontrado' };

    return {
        title: service.title,
        description: service.description,
    };
}

export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

export default async function ServicePage({ params }: Props) {
    const { slug } = await params;
    const service = services.find(s => s.slug === slug);

    if (!service) {
        notFound();
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": service.title,
        "description": service.description,
        "provider": {
            "@type": "Organization",
            "name": siteConfig.name,
            "url": siteConfig.url
        },
        "areaServed": "Peru",
        "serviceType": service.title,
        "url": `${siteConfig.url}/servicios/${service.slug}`
    };

    return (
        <main className="min-h-screen bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {/* Hero */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-900 border-b border-white/10">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/hero_services_clean.png"
                        alt={service.title}
                        fill
                        className="object-cover opacity-30"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 pt-12 text-center">

                    <div className="flex justify-center mb-8">
                        <div className="w-20 h-20 bg-white/5 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/10 shadow-2xl">
                            <service.icon className="w-10 h-10 text-white" />
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">{service.title}</h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        {service.description}
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="mb-12">
                        <Breadcrumbs className="text-slate-500 justify-center md:justify-start" />
                    </div>

                    {/* Benefits Section - New Interactive Content */}
                    {service.benefits && (
                        <div className="mb-24">
                            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Beneficios Clave</h2>
                            <div className="grid md:grid-cols-3 gap-8">
                                {service.benefits.map((benefit, idx) => (
                                    <div key={idx} className="bg-slate-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100 group">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                            <CheckCircle className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                                        <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Descripción del Servicio</h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                {service.longDescription}
                            </p>

                            <h3 className="text-2xl font-bold text-slate-900 mb-6 mt-12">Qué incluye:</h3>
                            <ul className="space-y-4">
                                {service.features?.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
                                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <CheckCircle className="w-4 h-4 text-green-600" />
                                        </div>
                                        <span className="text-slate-700 font-medium">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Process Section - New Interactive Content */}
                        {service.process && (
                            <div className="bg-slate-900 p-8 md:p-10 rounded-3xl text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
                                <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl -ml-32 -mb-32"></div>

                                <h3 className="text-2xl font-bold mb-8 relative z-10">Nuestro Proceso</h3>
                                <div className="space-y-8 relative z-10">
                                    {service.process.map((step, idx) => (
                                        <div key={idx} className="flex gap-6 group">
                                            <div className="flex-shrink-0">
                                                <span className="text-3xl font-black text-white/20 group-hover:text-blue-400 transition-colors">{step.step}</span>
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">{step.title}</h4>
                                                <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <ContactSection />
        </main>
    );
}
