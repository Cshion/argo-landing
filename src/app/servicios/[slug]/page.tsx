import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { services } from '@/data/services';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import BookCallButton from '@/components/BookCallButton';
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

    return (
        <main className="min-h-screen bg-white">
            {/* Hero */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/services-bg.png" // Reusing generic bg for now, could be specific later
                        alt={service.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className={`absolute inset-0 ${service.color.replace('bg-', 'bg-')}/90 mix-blend-multiply`}></div>
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 pt-20">
                    <Link href="/servicios" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                        Volver a Servicios
                    </Link>
                    <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 border border-white/20">
                        <service.icon className="w-10 h-10 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">{service.title}</h1>
                    <p className="text-xl md:text-2xl text-white/90 max-w-3xl leading-relaxed">
                        {service.description}
                    </p>
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Descripción del Servicio</h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                {service.longDescription}
                            </p>
                            <BookCallButton className="inline-block px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-all">
                                Solicitar Asesoría
                            </BookCallButton>
                        </div>

                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                            <h3 className="text-2xl font-bold text-slate-900 mb-6">Qué incluye:</h3>
                            <ul className="space-y-4">
                                {service.features?.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-4">
                                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                                        <span className="text-slate-600 text-lg">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
