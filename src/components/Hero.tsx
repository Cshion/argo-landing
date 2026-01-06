import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
    return (
        <section className="relative h-[95vh] min-h-[700px] flex items-center bg-slate-900 text-white overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-bg-v2.png"
                    alt="Engineering Background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Cinematic Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-1 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col justify-center h-full">
                <div className="max-w-4xl opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]">
                    <div className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 animate-[slideDown_0.6s_ease-out_0.1s_forwards] opacity-0">
                        <span className="text-accent font-bold tracking-wider text-sm">LÍDERES EN CONSULTORÍA BIM</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.1] mb-8 tracking-tight animate-[slideUp_0.6s_ease-out_0.2s_forwards] opacity-0">
                        Ingeniería que se anticipa <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-sky-400">a la realidad</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl leading-relaxed font-light animate-[slideUp_0.6s_ease-out_0.3s_forwards] opacity-0">
                        Maximizamos la rentabilidad y reducimos riesgos en construcción mediante <strong className="text-white font-semibold">Ingeniería Digital</strong> y <strong className="text-white font-semibold">Auditoría Experta</strong>.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 animate-[slideUp_0.6s_ease-out_0.4s_forwards] opacity-0">
                        <Link href="#roi-calculator" className="group relative px-8 py-4 bg-accent text-white rounded-xl font-bold text-lg overflow-hidden transition-all hover:scale-[1.02] shadow-xl hover:shadow-blue-500/20">
                            <span className="relative z-10">Calcula tu Ahorro (ROI)</span>
                            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:animate-shine"></div>
                        </Link>

                        <Link href="/proyectos" className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-xl font-bold text-lg transition-all hover:bg-white/10 hover:border-white/30">
                            Ver Proyectos
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
