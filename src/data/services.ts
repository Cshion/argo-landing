import { Building2, FileCheck, Search, GraduationCap } from 'lucide-react';

export const services = [
    {
        title: "Modelamiento BIM & VDC",
        slug: "modelamiento-bim-vdc",
        description: "Gestión integral de proyectos desde 3D hasta 7D. Detectamos interferencias antes de construir.",
        longDescription: "Nuestro servicio de Modelamiento BIM & VDC transforma la planificación de la construcción. Creamos gemelos digitales precisos que permiten visualizar, coordinar y optimizar cada aspecto del proyecto antes de mover la primera piedra.",
        icon: Building2,
        color: "bg-blue-500",
        features: [
            "Coordinación 3D para detección de interferencias",
            "Planificación y simulación constructiva (4D)",
            "Control de costos y presupuestos (5D)",
            "Sostenibilidad y eficiencia energética (6D)",
            "Gestión y mantenimiento de activos (7D)"
        ]
    },
    {
        title: "Expedientes Técnicos",
        slug: "expedientes-tecnicos",
        description: "Desarrollo y validación de ingeniería para licitaciones y ejecución de obra con estándares ISO.",
        longDescription: "Elaboramos y revisamos expedientes técnicos con un enfoque en la constructabilidad y la normativa vigente. Garantizamos que la documentación técnica sea clara, precisa y esté alineada con los objetivos del proyecto.",
        icon: FileCheck,
        color: "bg-indigo-500",
        features: [
            "Compatibilización de especialidades",
            "Optimización de costos y metrados",
            "Cumplimiento de estándares ISO 19650",
            "Documentación para licitaciones públicas y privadas",
            "Levantamiento de observaciones"
        ]
    },
    {
        title: "Auditoría de Modelos",
        slug: "auditoria-modelos",
        description: "Revisión experta de modelos de terceros para asegurar cumplimiento de normativas y calidad.",
        icon: Search,
        color: "bg-sky-500",
        features: [
            "Verificación de estándares BIM",
            "Control de calidad de la información",
            "Validación de niveles de desarrollo (LOD)",
            "Auditoría de parámetros y metadatos",
            "Informes de cumplimiento normativo"
        ]
    },
    {
        title: "Consultoría e Implementación",
        slug: "consultoria-implementacion",
        description: "Capacitación y acompañamiento para empresas que desean adoptar la metodología BIM.",
        longDescription: "Ayudamos a organizaciones a transitar hacia la digitalización a través de la implementación estratégica de BIM. Desde el diagnóstico inicial hasta la capacitación de equipos y la definición de estándares corporativos.",
        icon: GraduationCap,
        color: "bg-violet-500",
        features: [
            "Diagnóstico de madurez BIM",
            "Definición de Plan de Ejecución BIM (BEP)",
            "Capacitación In-House y talleres",
            "Selección y configuración de software",
            "Soporte continuo y mentoría"
        ]
    }
];
