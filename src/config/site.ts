export const siteConfig = {
    name: "Argo",
    title: "Argo | Ingeniería y Construcción BIM",
    description: "Maximizamos la rentabilidad de tu proyecto con metodología BIM y VDC. Consultoría experta en auditoría, diseño y gestión de obras.",
    url: "https://argo.com", // TODO: Update with real domain eventually
    ogImage: "/argo_logo.png",
    locale: "es_PE",
    nav: {
        main: [
            { title: "Nosotros", href: "/nosotros" },
            { title: "Servicios", href: "/servicios" }, // Dropdown logic handling in Header
            { title: "Proyectos", href: "/proyectos" },
            { title: "Contacto", href: "/#contacto" },
        ],
        footer: [
            { title: "Nosotros", href: "/nosotros" },
            { title: "Servicios", href: "/servicios" },
            { title: "Proyectos", href: "/proyectos" },
            { title: "Trabaja con nosotros", href: "/#contacto" },
        ]
    },
    contact: {
        phone: "51999999999",
        email: "contacto@argo.pe",
        address: "Av. Javier Prado Este 1234, Lima, Perú",
        displayPhone: "+51 999 999 999",
    },
    socialLinks: {
        instagram: "https://instagram.com",
        facebook: "https://facebook.com",
        linkedin: "https://linkedin.com",
        youtube: "https://youtube.com",
        whatsapp: "https://wa.me/51999999999",
    },
    links: { // Keeping for backward compatibility if needed, but socialLinks is preferred
        twitter: "https://twitter.com/argo",
        github: "https://github.com/argo",
        instagram: "https://instagram.com",
        facebook: "https://facebook.com",
        tiktok: "https://tiktok.com",
        linkedin: "https://linkedin.com",
        youtube: "https://youtube.com",
        whatsapp: "https://wa.me/51999999999",
    },
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon.ico',
        apple: '/favicon.ico',
    },
};
