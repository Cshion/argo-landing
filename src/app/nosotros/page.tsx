import Link from 'next/link';
import Image from 'next/image';
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
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/about-bg.png"
                        alt="Background Sobre Nosotros"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-slate-900/70"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Sobre Argo</h1>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
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

            {/* CTA */}
            <section className="py-24 bg-slate-900 text-white text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">¿Listo para transformar tu próximo proyecto?</h2>
                    <Link href="/#contacto" className="inline-block px-8 py-4 bg-accent hover:bg-blue-600 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-blue-500/25">
                        Hablemos Hoy
                    </Link>
                </div>
            </section>
        </main>
    );
}
