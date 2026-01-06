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
        ],
        benefits: [
            { title: "Reducción de Costos", description: "Detecta conflictos antes de la obra, ahorrando hasta un 20% en retrabajos." },
            { title: "Mejor Colaboración", description: "Plataforma centralizada donde todos los stakeholders visualizan el mismo proyecto." },
            { title: "Cumplimiento de Plazos", description: "Simulaciones 4D que optimizan el cronograma de ejecución." },
        ],
        process: [
            { step: "01", title: "Levantamiento", description: "Escaneo láser o recopilación de planos 2D existentes." },
            { step: "02", title: "Modelado", description: "Creación del gemelo digital con el nivel de detalle (LOD) requerido." },
            { step: "03", title: "Coordinación", description: "Detección y resolución de interferencias interdisciplinarias." },
            { step: "04", title: "Entregables", description: "Planos, metrados y modelos federados listos para obra." },
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
        ],
        benefits: [
            { title: "Seguridad Jurídica", description: "Documentación técnica robusta que minimiza riesgos contractuales." },
            { title: "Presupuestos Precisos", description: "Metrados exactos extraídos directamente del modelo BIM." },
            { title: "Aprobación Rápida", description: "Expedientes alineados a normativa para agilizar licencias." },
        ],
        process: [
            { step: "01", title: "Diagnóstico", description: "Revisión de la información preliminar y normativa aplicable." },
            { step: "02", title: "Ingeniería", description: "Desarrollo o validación de especialidades (estructuras, instalaciones, etc.)." },
            { step: "03", title: "Integración", description: "Compatibilización y generación de memoria descriptiva." },
            { step: "04", title: "Aprobación", description: "Gestión de firmas y entrega de expediente final." },
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
        ],
        benefits: [
            { title: "Calidad Garantizada", description: "Asegura que los modelos cumplan con los estándares definidos en el BEP." },
            { title: "Datos Confiables", description: "Validación de la información para su uso en fases posteriores (FM)." },
            { title: "Mitigación de Riesgos", description: "Identificación temprana de inconsistencias en el diseño." },
        ],
        process: [
            { step: "01", title: "Recepción", description: "Revisión del BEP y recepción de modelos nativos/IFC." },
            { step: "02", title: "Análisis", description: "Chequeo automatizado de reglas, colisiones y parámetros." },
            { step: "03", title: "Informe", description: "Reporte detallado de hallazgos y no conformidades." },
            { step: "04", title: "Cierre", description: "Validación final tras el levantamiento de observaciones." },
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
        ],
        benefits: [
            { title: "Transformación Digital", description: "Moderniza los procesos de tu empresa para ser más competitivo." },
            { title: "Equipos Capacitados", description: "Personal listo para trabajar con los últimos flujos de trabajo BIM." },
            { title: "Estandarización", description: "Guías y manuales claros para consistencia en todos tus proyectos." },
        ],
        process: [
            { step: "01", title: "Evaluación", description: "Análisis de la situación actual y definición de objetivos BIM." },
            { step: "02", title: "Estrategia", description: "Diseño de la hoja de ruta de implementación y proyecto piloto." },
            { step: "03", title: "Capacitación", description: "Formación teórica y práctica del equipo." },
            { step: "04", title: "Soporte", description: "Acompañamiento en el primer proyecto piloto real." },
        ]
    }
];
