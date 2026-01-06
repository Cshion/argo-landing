import { Award, Layers, Trophy, CheckCircle } from 'lucide-react';
import Image from 'next/image';

const TrustSection = () => {
    return (
        <section className="bg-white border-b border-gray-100 py-16 lg:py-24">
            <div className="container mx-auto px-6">
                <div className="flex flex-col gap-12 items-center justify-center">

                    {/* Metrics Grid - Centered */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-5xl">
                        <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <Layers className="w-8 h-8 text-accent mb-3" />
                            <span className="text-4xl font-extrabold text-primary mb-1">+450k</span>
                            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">m² Modelados</span>
                        </div>
                        <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <Award className="w-8 h-8 text-accent mb-3" />
                            <span className="text-4xl font-extrabold text-primary mb-1">$2M+</span>
                            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Ahorro Generado</span>
                        </div>
                        <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <Trophy className="w-8 h-8 text-accent mb-3" />
                            <span className="text-4xl font-extrabold text-primary mb-1">100+</span>
                            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Proyectos BIM</span>
                        </div>
                        <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <CheckCircle className="w-8 h-8 text-accent mb-3" />
                            <span className="text-4xl font-extrabold text-primary mb-1">100%</span>
                            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Cumplimiento</span>
                        </div>
                    </div>

                    {/* Certifications Strip */}
                    <div className="flex flex-col items-center gap-8 mt-4">
                        <p className="text-xl md:text-2xl font-bold text-slate-400 uppercase tracking-widest">Respaldados por:</p>
                        <div className="flex flex-wrap justify-center gap-12 opacity-90 grayscale hover:grayscale-0 transition-all duration-500">
                            <div className="h-24 w-48 relative flex items-center justify-center">
                                <Image src="/logos/iso-19650.png" alt="ISO 19650" fill className="object-contain" />
                            </div>
                            <div className="h-24 w-48 relative flex items-center justify-center">
                                <Image src="/logos/autodesk-partner.png" alt="Autodesk Partner" fill className="object-contain" />
                            </div>
                            <div className="h-24 w-48 relative flex items-center justify-center">
                                <Image src="/logos/pmi-member.png" alt="PMI Member" fill className="object-contain" />
                            </div>
                            <div className="h-24 w-48 relative flex items-center justify-center">
                                <Image src="/logos/plan-bim.png" alt="Plan BIM" fill className="object-contain" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustSection;
