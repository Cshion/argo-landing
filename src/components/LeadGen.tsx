'use client';

import { useState } from 'react';
import Image from 'next/image';

const LeadGen = () => {
    const [area, setArea] = useState('');
    const [projectType, setProjectType] = useState('vivienda');
    const [result, setResult] = useState<number | null>(null);

    const calculateROI = (e: React.FormEvent) => {
        e.preventDefault();
        const areaNum = parseFloat(area);
        if (!areaNum) return;

        // Fake logic: Assume $20/m2 savings
        const savings = areaNum * 20;
        setResult(savings);
    };

    return (
        <section id="roi-calculator" className="py-24 bg-primary text-white overflow-hidden relative">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/leadgen-bg.png"
                    alt="ROI Background"
                    fill
                    className="object-cover opacity-20 mix-blend-overlay"
                />
            </div>

            {/* Top/Bottom Gradient Fades */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-900/50 to-transparent z-1 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
                    <div className="flex-1 text-center lg:text-left">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Calculadora de <br /><span className="text-accent">Rentabilidad BIM</span></h2>
                        <p className="text-slate-300 text-lg mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
                            Descubre cuánto podrías ahorrar en tu próximo proyecto implementando nuestra metodología VDC. Reduce desperdicios y optimiza tiempos de ejecución.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                            <div className="flex items-center gap-2 text-sm text-slate-300 font-medium bg-white/5 px-4 py-2 rounded-full border border-white/5 backdrop-blur-sm">
                                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span> Datos actualizados 2025
                            </div>
                            <div className="flex items-center gap-2 text-sm text-slate-300 font-medium bg-white/5 px-4 py-2 rounded-full border border-white/5 backdrop-blur-sm">
                                <span className="w-2 h-2 rounded-full bg-blue-400"></span> Basado en estándares ISO
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 w-full max-w-lg">
                        <div className="bg-white/95 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-2xl text-slate-800 border border-white/50">
                            {!result ? (
                                <form onSubmit={calculateROI} className="space-y-6">
                                    <div>
                                        <label htmlFor="area" className="block text-sm font-bold text-slate-700 mb-2">Área Techada (m²)</label>
                                        <input
                                            type="number"
                                            id="area"
                                            placeholder="Ej. 5000"
                                            value={area}
                                            onChange={(e) => setArea(e.target.value)}
                                            required
                                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all placeholder:text-slate-400 font-medium"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="type" className="block text-sm font-bold text-slate-700 mb-2">Tipo de Proyecto</label>
                                        <div className="relative">
                                            <select
                                                id="type"
                                                value={projectType}
                                                onChange={(e) => setProjectType(e.target.value)}
                                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all appearance-none font-medium text-slate-600"
                                            >
                                                <option value="vivienda">Vivienda Multifamiliar</option>
                                                <option value="oficina">Oficinas / Retail</option>
                                                <option value="industrial">Industrial</option>
                                            </select>
                                        </div>
                                    </div>

                                    <button type="submit" className="w-full bg-accent hover:bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-blue-500/30 transition-all transform hover:-translate-y-1">
                                        Calcular Ahorro Estimado
                                    </button>
                                </form>
                            ) : (
                                <div className="text-center animate-in fade-in zoom-in duration-300">
                                    <h3 className="text-lg font-bold text-slate-500 mb-2 uppercase tracking-wide">Ahorro Potencial Estimado</h3>
                                    <div className="text-5xl md:text-6xl font-extrabold text-accent mb-6 tracking-tighter">
                                        ${result.toLocaleString()} <span className="text-2xl text-slate-400 font-bold">USD</span>
                                    </div>
                                    <p className="text-xs text-slate-400 mb-8 bg-slate-50 py-2 px-4 rounded-lg inline-block">*Estimado basado en reducción de desperdicios del 5%.</p>

                                    <div className="space-y-3">
                                        <button className="w-full bg-accent hover:bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-blue-500/30 transition-all mb-4">
                                            Solicitar Reporte Detallado
                                        </button>
                                        <button
                                            className="text-sm text-slate-400 hover:text-slate-600 underline transition-colors"
                                            onClick={() => setResult(null)}
                                        >
                                            Realizar otro cálculo
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LeadGen;
