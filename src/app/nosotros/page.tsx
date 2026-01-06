import Link from 'next/link';
import Image from 'next/image';
import ContactSection from '@/components/ContactSection';
import { Target, Eye, Shield, Users, Lightbulb, Zap } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Sobre Nosotros",
    description: "Conoce más sobre Argo, la firma líder en Ingeniería y Construcción BIM.",
};

export default function NosotrosPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-900 border-b border-white/10">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/hero_about_clean.png"
                        alt="Equipo Argo"
                        fill
                        className="object-cover opacity-30"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-sm font-semibold mb-6 tracking-wide">
                        Sobre Argo
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
                        Liderando la <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Transformación Digital</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        Somos la firma consultora líder en ingeniería digital que está transformando la industria de la construcción a través de la metodología BIM.
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 lg:py-32">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
                        {/* Misión */}
                        <div className="flex flex-col gap-6">
                            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-accent mb-2">
                                <Target className="w-8 h-8" />
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900">Nuestra Misión</h2>
                            <p className="text-slate-600 leading-loose text-lg">
                                Facilitar la transformación digital del sector construcción, implementando procesos eficientes y tecnología de punta para garantizar el éxito, la rentabilidad y la sostenibilidad de cada proyecto de nuestros clientes.
                            </p>
                        </div>

                        {/* Visión */}
                        <div className="flex flex-col gap-6">
                            <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 mb-2">
                                <Eye className="w-8 h-8" />
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900">Nuestra Visión</h2>
                            <p className="text-slate-600 leading-loose text-lg">
                                Ser reconocidos a nivel global como el referente principal en consultoría BIM y gestión de proyectos, impulsando un estándar de excelencia e innovación que redefine cómo se diseña y construye el futuro.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">Nuestros Valores</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">
                            Los pilares que sostienen cada decisión y cada proyecto que emprendemos en Argo.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                            <Shield className="w-10 h-10 text-accent mb-6" />
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Integridad</h3>
                            <p className="text-slate-500 leading-relaxed">
                                Actuamos con transparencia y honestidad, construyendo relaciones de confianza a largo plazo.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                            <Lightbulb className="w-10 h-10 text-yellow-500 mb-6" />
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Innovación</h3>
                            <p className="text-slate-500 leading-relaxed">
                                Buscamos constantemente nuevas formas de optimizar procesos y superar expectativas.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                            <Zap className="w-10 h-10 text-orange-500 mb-6" />
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Excelencia</h3>
                            <p className="text-slate-500 leading-relaxed">
                                Nos comprometemos con la calidad técnica y la precisión en cada entregable.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                            <Users className="w-10 h-10 text-green-500 mb-6" />
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Colaboración</h3>
                            <p className="text-slate-500 leading-relaxed">
                                Creemos en el poder del trabajo en equipo y la sinergia multidisciplinaria.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <ContactSection />
        </main>
    );
}
