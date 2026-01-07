"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";
import { siteConfig } from "@/config/site";
import { services } from "@/data/services"; // Map slugs to titles

const routeNameMap: Record<string, string> = {
    nosotros: "Nosotros",
    servicios: "Servicios",
    proyectos: "Proyectos",
    contacto: "Contacto",
};

export default function Breadcrumbs({ className = "" }: { className?: string }) {
    const pathname = usePathname();

    // Don't show on home page
    if (pathname === "/") return null;

    const segments = pathname.split("/").filter((item) => item);

    const breadcrumbItems = segments.map((segment, index) => {
        const href = `/${segments.slice(0, index + 1).join("/")}`;

        // 1. Check static map
        let name = routeNameMap[segment];

        // 2. Check dynamic services
        if (!name) {
            const service = services.find((s) => s.slug === segment);
            if (service) name = service.title;
        }

        // 3. Fallback: Capitalize
        if (!name) {
            name = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ");
        }

        return { name, href };
    });

    // Schema.org JSON-LD
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Inicio",
                "item": siteConfig.url // Should match siteConfig.url
            },
            ...breadcrumbItems.map((item, index) => ({
                "@type": "ListItem",
                "position": index + 2,
                "name": item.name,
                "item": `${siteConfig.url}${item.href}`
            }))
        ]
    };

    return (
        <nav aria-label="Breadcrumb" className={`flex items-center text-sm ${className}`}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ol className="flex items-center space-x-2">
                <li>
                    <Link href="/" className="opacity-60 hover:opacity-100 hover:text-blue-600 transition-all">
                        <Home className="w-4 h-4" />
                        <span className="sr-only">Inicio</span>
                    </Link>
                </li>
                {breadcrumbItems.map((item, index) => {
                    const isLast = index === breadcrumbItems.length - 1;
                    return (
                        <li key={item.href} className="flex items-center">
                            <ChevronRight className="w-4 h-4 opacity-30 mx-2" />
                            {isLast ? (
                                <span className="font-semibold opacity-100" aria-current="page">
                                    {item.name}
                                </span>
                            ) : (
                                <Link href={item.href} className="opacity-60 hover:opacity-100 hover:text-blue-600 transition-all">
                                    {item.name}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}
