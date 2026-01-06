import { Building2, Home, Factory, HardHat } from 'lucide-react';

export const projects = [
    {
        id: '1',
        title: 'Torre Empresarial Prisma',
        category: 'Comercial',
        location: 'San Isidro, Lima',
        description: 'Gestión integral VDC para torre de oficinas de 25 pisos. Optimización de interferencias y planificación 4D.',
        stats: {
            area: '35,000 m²',
            duration: '24 meses',
            savings: '12% Costo Directo'
        },
        image: '/project_office_tower.png',
        icon: Building2
    },
    {
        id: '2',
        title: 'Condominio "Los Parques"',
        category: 'Residencial',
        location: 'Jesús María, Lima',
        description: 'Modelado BIM lod 400 y coordinación de especialidades para complejo residencial de 4 torres.',
        stats: {
            area: '42,000 m²',
            duration: '18 meses',
            savings: 'RDI reducido al 95%'
        },
        image: '/project_residential_condo.png',
        icon: Home
    },
    {
        id: '3',
        title: 'Clínica Montesur - Ampliación',
        category: 'Salud',
        location: 'Surco, Lima',
        description: 'Implementación BIM para instalaciones hospitalarias complejas y gestión de activos (BIM 7D).',
        stats: {
            area: '12,000 m²',
            duration: '14 meses',
            savings: 'Cero incompatibilidades'
        },
        image: '/project_hospital.png',
        icon: HardHat
    },
    {
        id: '4',
        title: 'Centro Logístico del Sur',
        category: 'Industrial',
        location: 'Lurín, Lima',
        description: 'Ingeniería de detalle y compatibilización para nave industrial automatizada y oficinas administrativas.',
        stats: {
            area: '50,000 m²',
            duration: '10 meses',
            savings: '2 semanas de plazo'
        },
        image: '/project_warehouse.png',
        icon: Factory
    },
    {
        id: '5',
        title: 'Residencial Altos del Golf',
        category: 'Residencial',
        location: 'San Isidro, Lima',
        description: 'Consultoría BIM y supervisión de obra para edificio de lujo. Control de calidad y acabados.',
        stats: {
            area: '8,500 m²',
            duration: '16 meses',
            savings: 'Optimización de Acero'
        },
        image: '/project_luxury_apartment.png',
        icon: Home
    },
    {
        id: '6',
        title: 'Oficinas WeWork Implementación',
        category: 'Comercial',
        location: 'Miraflores, Lima',
        description: 'Modelado y coordinación rápida (Fast-Track) para habilitación de oficinas corporativas.',
        stats: {
            area: '4,000 m²',
            duration: '3 meses',
            savings: 'Entrega a tiempo'
        },
        image: '/project_office_interior.png',
        icon: Building2
    }
];

export const categories = ["Todos", "Residencial", "Comercial", "Industrial", "Salud"];
