'use client';

import { Mail, Calendar, Phone, MapPin, ArrowRight, Send } from 'lucide-react';
import { useState } from 'react';
import { useCalendly } from '@/context/CalendlyContext';
import { siteConfig } from '@/config/site';

// ... (imports)

const ContactSection = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    // Calendly Hook
    const { openCalendly } = useCalendly();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Construct WhatsApp Message
        const message = `Hola Argo, mi nombre es ${formState.name}.\nEmail: ${formState.email}\n\n${formState.message}`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${siteConfig.contact.phone}?text=${encodedMessage}`;

        // Simulate short delay for UX then redirect
        await new Promise(resolve => setTimeout(resolve, 800));

        window.open(whatsappUrl, '_blank');

        setIsSubmitting(false);
        setSubmitted(true);
    };

    return (
        <section id="contacto" className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Left Column: Context & Direct Contact */}
                    <div>
                        <span className="text-accent font-bold tracking-wider uppercase text-sm mb-3 block">Hablemos</span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                            ¿Listo para optimizar <br /> tu próximo proyecto?
                        </h2>
                        <p className="text-lg text-slate-600 mb-12 leading-relaxed">
                            Ya sea que necesites una auditoría BIM rápida o una implementación completa VDC, nuestro equipo está listo para ayudarte a reducir riesgos y costos.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 text-accent">
                                    <Calendar className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-1">Agenda una Asesoría</h3>
                                    <p className="text-slate-500 mb-3 text-sm">Reserva 15 minutos con un especialista BIM.</p>
                                    <button
                                        onClick={openCalendly}
                                        className="inline-flex items-center text-accent font-bold text-sm hover:underline"
                                    >
                                        Ver disponibilidad <ArrowRight className="w-4 h-4 ml-1" />
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 text-accent">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-1">Escríbenos Directamente</h3>
                                    <p className="text-slate-500 mb-1 text-sm">contacto@argo.pe</p>
                                    <p className="text-slate-500 text-sm">+51 999 999 999</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 text-accent">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-1">Oficina Principal</h3>
                                    <p className="text-slate-500 text-sm">Av. Javier Prado Este 1234, Lima, Perú</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-100 shadow-lg relative overflow-hidden">
                        {/* Blob decoration */}
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none"></div>

                        {!submitted ? (
                            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Nombre Completo</label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all placeholder:text-slate-400"
                                        placeholder="Tu nombre"
                                        value={formState.name}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">Correo Corporativo</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all placeholder:text-slate-400"
                                        placeholder="nombre@empresa.com"
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">Mensaje</label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        required
                                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all placeholder:text-slate-400 resize-none"
                                        placeholder="Cuéntanos brevemente sobre tu proyecto o duda..."
                                        value={formState.message}
                                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Enviando...' : (
                                        <>
                                            Enviar Mensaje <Send className="w-4 h-4" />
                                        </>
                                    )}
                                </button>

                                <p className="text-xs text-slate-400 text-center mt-4">
                                    Respetamos tu privacidad. No enviamos spam.
                                </p>
                            </form>
                        ) : (
                            <div className="h-full flex flex-col items-center justify-center text-center py-10 animate-in fade-in zoom-in duration-500">
                                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                                    <Send className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">¡Mensaje Enviado!</h3>
                                <p className="text-slate-600 mb-8">Gracias por contactarnos. Un especialista de nuestro equipo te responderá en menos de 24 horas.</p>
                                <button
                                    onClick={() => { setSubmitted(false); setFormState({ name: '', email: '', message: '' }); }}
                                    className="text-accent font-bold hover:underline"
                                >
                                    Enviar otro mensaje
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
