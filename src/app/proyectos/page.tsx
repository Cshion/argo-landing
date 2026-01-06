import { Metadata } from 'next';
import Image from 'next/image';
import ProjectsGrid from '@/components/ProjectsGrid';
import ContactSection from '@/components/ContactSection';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
    title: "Proyectos y Casos de Éxito",
    description: "Explora nuestro portafolio de proyectos BIM, VDC e ingeniería digital en sectores residencial, comercial e industrial.",
    alternates: {
        canonical: `${siteConfig.url}/proyectos`,
    },
    openGraph: {
        title: "Proyectos y Casos de Éxito | Argo",
        description: "Explora nuestro portafolio de proyectos BIM, VDC e ingeniería digital.",
        url: `${siteConfig.url}/proyectos`,
    }
};

export default function ProjectsPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Proyectos de Argo",
        "description": "Portafolio de proyectos de ingeniería y construcción gestionados con metodología BIM.",
        "url": `${siteConfig.url}/proyectos`,
        "provider": {
            "@type": "Organization",
            "name": siteConfig.name,
            "url": siteConfig.url
        }
    };

    return (
        <main className="bg-white min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-900 border-b border-white/10">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/hero_bg_bim.png"
                        alt="Proyectos BIM"
                        fill
                        className="object-cover opacity-20"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-sm font-semibold mb-6 tracking-wide">
                        Portafolio & Casos de Éxito
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
                        Nuestra Experiencia <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Construyendo el Futuro</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        Explora cómo hemos ayudado a empresas líderes a optimizar sus inversiones inmobiliarias mediante VDC y BIM.
                    </p>
                </div>
            </section>

            <ProjectsGrid />

            <ContactSection />
        </main>
    );
}
