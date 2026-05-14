export type Locale = 'es' | 'en'

export type GallerySlide = { src: string; caption: string }

export type Project = {
  id: string
  title: string
  org: string
  period: string
  summary: string
  highlights: string[]
  stack: string[]
  confidentiality?: 'private'
  gallery?: GallerySlide[]
  galleryClosing?: string
}

export type SiteStrings = {
  skipToContent: string
  nav: { inicio: string; sobre: string; proyectos: string; contacto: string }
  navAria: string
  brandHome: string
  headerContact: string
  lang: { es: string; en: string; esTitle: string; enTitle: string; group: string }
  heroEyebrow: string
  heroProjects: string
  heroEmail: string
  heroWhatsapp: string
  heroCv: string
  profilePhotoAria: string
  sectionAboutEyebrow: string
  sectionAboutTitle: string
  sectionSkillsTitle: string
  sectionSkillsAria: string
  sectionSocialsAria: string
  panelLinksTitle: string
  sectionProjectsEyebrow: string
  sectionProjectsTitle: string
  sectionContactEyebrow: string
  sectionContactTitle: string
  contactIntro: string
  contactEmail: string
  contactWhatsapp: string
  contactCv: string
  contactNote: string
  badgeConfidential: string
  techAria: string
  carouselPrev: string
  carouselNext: string
  carouselDots: string
  carouselGoTo: (n: number) => string
  carouselSlide: (current: number, total: number) => string
  carouselRegion: string
  openLightbox: string
  closeLightbox: string
  lightboxDialog: string
  footerMade: string
  footerSocialsAria: string
}

export type SiteContent = {
  name: string
  role: string
  location: string
  emails: string[]
  tagline: string
  about: string[]
  skills: string[]
  socials: { label: string; href: string }[]
  projects: Project[]
}

/** WhatsApp: México (+52) y número 332 568 1542 */
export const WHATSAPP_HREF = 'https://wa.me/523325681542' as const
export const WHATSAPP_DISPLAY = '+52 332 568 1542'

/** Capturas en `public/media/...` — nombres `1.png`, `2.png`, … por carpeta (orden = orden de capturas). */
const M_ALCH = '/media/alch'
const M_CRUZ = '/media/cruz-verde'

const alchCaptions = [
  'Acceso al sistema: usuarios dados de alta; el registro de cuentas lo controla el administrador.',
  'Menú principal: navegación por módulos y contexto de la sesión del usuario.',
  'Catálogos operativos (incluye directores de obra): consulta, filtros, exportación y generación de documentos.',
  'Vista previa / salida en PDF alineada al flujo de licencias.',
  'Módulo de usuarios: altas, consultas, actualización y bajas con control de roles.',
  'Módulo de obras: búsqueda por consecutivo, filtros, edición y duplicado de expedientes.',
  'Registro de obra por pasos: captura estructurada de datos clave.',
  'Conceptos de catálogo vinculados a la obra: cálculos y consistencia de importes.',
  'Evidencias y documentación complementaria: archivos, recibos y pre-formatos.',
  'Resumen y generación de documentos para trámites y firmas (salidas controladas).',
  'Reportes operativos para seguimiento y toma de decisiones.',
  'Herramientas de administración: auditoría, validaciones y alertas antes de imprimir.',
] as const

const alchGallery: GallerySlide[] = alchCaptions.map((caption, i) => ({
  src: `${M_ALCH}/${i + 1}.png`,
  caption,
}))

const cruzCaptions = [
  'App móvil: acceso para personal operativo con usuarios registrados.',
  'Captura de contexto operativo (base, unidad y acompañante) con trazabilidad.',
  'Registro de insumos y equipo con comentarios y evidencia fotográfica cuando aplica.',
  'Panel web para administración: consolidación de registros enviados desde campo.',
] as const

const cruzVerdeGallery: GallerySlide[] = cruzCaptions.map((caption, i) => ({
  src: `${M_CRUZ}/${i + 1}.png`,
  caption,
}))

const M_SOLAINO = '/media/solaino'
const solainoCaptions = [
  'Inicio / panel administrador: módulos de inventario y bodega, solicitudes, archivos, nube, historial y usuarios; estado de conexión con Supabase.',
  'Inventario: resumen por stock (sin stock, por terminarse, OK), alertas y búsqueda; datos centralizados en la nube para todos los equipos.',
  'Listado de productos: tabla con medidas, ubicación, cantidades, costos y columna de miniaturas (IMG); acciones de historial, edición y baja.',
  'Bodega — vista por proyecto (FLEX): órdenes de compra, descripciones, estados de avance y acceso a archivos y entregas.',
  'Bodega — pestaña Orden: tiempos de taller, avance % y reglas de diseño vs programación; seguimiento de OC en curso.',
  'Historial: auditoría de actividades en inventario y solicitudes; consulta por usuario y rol.',
  'Usuarios: altas, roles (USER, ENCARGADO, ADMIN, etc.) y flujo de recuperación de contraseña.',
] as const

const solainoGallery: GallerySlide[] = solainoCaptions.map((caption, i) => ({
  src: `${M_SOLAINO}/${i + 1}.png`,
  caption,
}))

export const strings: Record<Locale, SiteStrings> = {
  es: {
    skipToContent: 'Saltar al contenido',
    nav: {
      inicio: 'Inicio',
      sobre: 'Perfil',
      proyectos: 'Proyectos',
      contacto: 'Contacto',
    },
    navAria: 'Secciones',
    brandHome: 'Ir al inicio',
    headerContact: 'Contacto',
    lang: {
      es: 'ES',
      en: 'EN',
      esTitle: 'Español',
      enTitle: 'English',
      group: 'Idioma',
    },
    heroEyebrow: 'Selección',
    heroProjects: 'Ver proyectos',
    heroEmail: 'Enviar correo',
    heroWhatsapp: 'WhatsApp',
    heroCv: 'CV para imprimir (PDF)',
    profilePhotoAria: 'Foto de perfil',
    sectionAboutEyebrow: 'Perfil',
    sectionAboutTitle: 'Sobre mí',
    sectionSkillsTitle: 'Habilidades',
    sectionSkillsAria: 'Tecnologías y herramientas',
    sectionSocialsAria: 'Enlaces',
    panelLinksTitle: 'Enlaces',
    sectionProjectsEyebrow: 'Selección',
    sectionProjectsTitle: 'Proyectos',
    sectionContactEyebrow: 'Hablemos',
    sectionContactTitle: 'Contacto',
    contactIntro:
      'Si quieres conocer más alcance, arquitectura o decisiones técnicas, escríbeme y coordinamos una llamada.',
    contactEmail: 'Enviar correo',
    contactWhatsapp: 'WhatsApp',
    contactCv: 'Abrir CV (imprimir a PDF)',
    contactNote: 'Normalmente respondo en 24–48 horas hábiles.',
    badgeConfidential: 'Confidencial',
    techAria: 'Stack técnico',
    carouselPrev: 'Diapositiva anterior',
    carouselNext: 'Diapositiva siguiente',
    carouselDots: 'Ir a la diapositiva',
    carouselGoTo: (n) => `Ir a la diapositiva ${n}`,
    carouselSlide: (c, t) => `Diapositiva ${c} de ${t}`,
    carouselRegion: 'Carrusel de capturas',
    openLightbox: 'Ampliar imagen',
    closeLightbox: 'Cerrar',
    lightboxDialog: 'Vista ampliada',
    footerMade: 'Portafolio hecho con React + Vite + Tailwind.',
    footerSocialsAria: 'Redes y repositorio',
  },
  en: {
    skipToContent: 'Skip to content',
    nav: {
      inicio: 'Home',
      sobre: 'Profile',
      proyectos: 'Projects',
      contacto: 'Contact',
    },
    navAria: 'Sections',
    brandHome: 'Go to home',
    headerContact: 'Contact',
    lang: {
      es: 'ES',
      en: 'EN',
      esTitle: 'Spanish',
      enTitle: 'English',
      group: 'Language',
    },
    heroEyebrow: 'Featured',
    heroProjects: 'View projects',
    heroEmail: 'Email me',
    heroWhatsapp: 'WhatsApp',
    heroCv: 'Printable résumé (PDF)',
    profilePhotoAria: 'Profile photo',
    sectionAboutEyebrow: 'Profile',
    sectionAboutTitle: 'About me',
    sectionSkillsTitle: 'Skills',
    sectionSkillsAria: 'Technologies and tools',
    sectionSocialsAria: 'Links',
    panelLinksTitle: 'Links',
    sectionProjectsEyebrow: 'Selected work',
    sectionProjectsTitle: 'Projects',
    sectionContactEyebrow: 'Let’s talk',
    sectionContactTitle: 'Contact',
    contactIntro:
      'Want more detail on scope, architecture, or technical decisions? Email me and we can schedule a call.',
    contactEmail: 'Send email',
    contactWhatsapp: 'WhatsApp',
    contactCv: 'Open résumé (print to PDF)',
    contactNote: 'I usually reply within 24–48 business hours.',
    badgeConfidential: 'Confidential',
    techAria: 'Tech stack',
    carouselPrev: 'Previous slide',
    carouselNext: 'Next slide',
    carouselDots: 'Go to slide',
    carouselGoTo: (n) => `Go to slide ${n}`,
    carouselSlide: (c, t) => `Slide ${c} of ${t}`,
    carouselRegion: 'Screenshot carousel',
    openLightbox: 'Expand image',
    closeLightbox: 'Close',
    lightboxDialog: 'Expanded view',
    footerMade: 'Built with React + Vite + Tailwind.',
    footerSocialsAria: 'Social links and repository',
  },
}

export const content: Record<Locale, SiteContent> = {
  es: {
    name: 'Fernanda Dessyre Hernández Alatorre',
    role: 'Ingeniera en Desarrollo y Gestión de Software',
    location: 'Guadalajara, Jalisco, México',
    emails: ['fernanda.hernandez.22s@utzmg.edu.mx', 'dessyre21@hotmail.com'],
    tagline:
      'Construyo software con enfoque en operación real: claridad para el usuario, datos confiables y entregas mantenibles.',
    about: [
      'Soy ingeniera en Desarrollo y Gestión de Software con alrededor de 2 años de experiencia profesional. Me motivan los retos técnicos, el trabajo colaborativo y convertir procesos manuales en sistemas útiles para equipos de campo y administración.',
      'He participado en proyectos gubernamentales y empresariales de punta a punta: levantamiento de necesidades, modelado de datos, frontend y backend, pruebas, documentación y acompañamiento al despliegue.',
      'Me interesa seguir creciendo en arquitectura de software, buenas prácticas de ingeniería y productos que generen impacto medible en tiempos, errores y trazabilidad.',
    ],
    skills: [
      'React',
      'Vite',
      'TypeScript',
      'JavaScript',
      'Node.js',
      'NestJS',
      'Express',
      'PHP',
      'HTML',
      'CSS',
      'Tailwind CSS',
      'PostgreSQL',
      'Supabase',
      'Axios',
      'Expo',
      'GitHub',
      'GitLab',
      'C++',
    ],
    socials: [
      { label: 'WhatsApp', href: WHATSAPP_HREF },
      { label: 'GitHub', href: 'https://github.com/fernandaUTZMG' },
      {
        label: 'Correo UTZMG',
        href: 'mailto:fernanda.hernandez.22s@utzmg.edu.mx',
      },
      { label: 'Correo alterno', href: 'mailto:dessyre21@hotmail.com' },
    ],
    projects: [
      {
        id: 'solaino',
        title: 'Sistemas de inventario y almacén (Solaino)',
        org: 'Solaino',
        period: '2025 — presente',
        summary:
          'Desarrollo de soluciones internas para control operativo: inventario, almacén, equipos, tiempos y productos.',
        highlights: [
          'Diseño e implementación de flujos para registrar movimientos, existencias y responsables, reduciendo ambigüedad frente a hojas o procesos dispersos.',
          'Construcción de vistas y reglas orientadas a operación diaria, priorizando consistencia de datos y facilidad de consulta para administración.',
          'Integración con stack moderno (React/Vite, servicios en Node/PHP según módulo, Supabase/PostgreSQL donde aplica) y entregas iterativas con retroalimentación del cliente.',
        ],
        stack: [
          'React',
          'Vite',
          'JavaScript',
          'TypeScript',
          'Node.js',
          'PHP',
          'PostgreSQL',
          'Supabase',
          'Tailwind CSS',
          'Axios',
        ],
        confidentiality: 'private',
        gallery: solainoGallery,
        galleryClosing:
          'Sistema interno en uso; las capturas son solo para contexto profesional. No compartas datos operativos sin autorización de la empresa.',
      },
      {
        id: 'alch',
        title: 'Sistema de Control de Edificación (Obras públicas)',
        org: 'H. Ayuntamiento de San Pedro Tlaquepaque / Obras Públicas',
        period: '2024 — 2026',
        summary:
          'Sistema gubernamental en producción para gestión de registros de obras públicas: reemplazo de legado, migración de datos y nuevos módulos.',
        highlights: [
          'Colaboración en un sistema funcional de uso diario, con migración de base histórica hacia PostgreSQL y mejoras de integridad y consulta.',
          'Desarrollo de módulos y automatizaciones para registrar, seguir y administrar información operativa; mayor accesibilidad y controles para administrador.',
          'Documentación semanal y entrega formal de Manual Técnico y Manual de Usuario para operación y soporte.',
        ],
        stack: [
          'React',
          'Vite',
          'JavaScript',
          'Node.js',
          'NestJS',
          'PostgreSQL',
          'Tailwind CSS',
          'Axios',
          'GitHub',
          'GitLab',
        ],
        confidentiality: 'private',
        gallery: alchGallery,
        galleryClosing:
          'Capturas alojadas en tu sitio (carpeta public/media). Los datos visibles son ficticios o no reales.',
      },
      {
        id: 'cruz-verde',
        title: 'Sistema integral de administración prehospitalaria',
        org: 'H. Ayuntamiento de Tlajomulco de Zúñiga / Cruz Verde',
        period: '2025',
        summary:
          'Aplicación móvil para paramédicos y sistema web administrativo para registro de insumos, equipamiento y control de unidades.',
        highlights: [
          'Desarrollo full stack: app móvil (Expo) y panel web para administración, con persistencia en PostgreSQL.',
          'Flujos para captura en campo (incluye exportación a PDF y evidencia fotográfica cuando aplica) y revisión centralizada.',
          'Documentación de avances por semana para trazabilidad del proyecto y transferencia de conocimiento.',
        ],
        stack: [
          'React',
          'TypeScript',
          'Expo',
          'Express',
          'PostgreSQL',
          'HTML',
          'CSS',
          'JavaScript',
        ],
        confidentiality: 'private',
        gallery: cruzVerdeGallery,
        galleryClosing:
          'Imágenes autorizadas en su momento por el H. Ayuntamiento; los datos mostrados son ficticios.',
      },
      {
        id: 'marvelsaa',
        title: 'Soporte técnico y operación de TI (prácticas)',
        org: 'MARVELSAA',
        period: '2023 — ~5 meses',
        summary:
          'Apoyo en el área de informática: atención a usuarios, asignación de equipos y tareas operativas en plataformas internas.',
        highlights: [
          'Mantenimiento a usuario final: diagnóstico básico, seguimiento y escalamiento cuando correspondía.',
          'Control de inventario liviano de equipos y apoyo en actividades administrativas relacionadas con cómputo.',
          'Participación en un esquema orientado a estudiantes, con enfoque en responsabilidad y aprendizaje en entorno real.',
        ],
        stack: ['Soporte TI', 'Windows', 'Office', 'Tickets', 'Inventario'],
      },
    ],
  },
  en: {
    name: 'Fernanda Dessyre Hernández Alatorre',
    role: 'Software Development and Management Engineer',
    location: 'Guadalajara, Jalisco, Mexico',
    emails: ['fernanda.hernandez.22s@utzmg.edu.mx', 'dessyre21@hotmail.com'],
    tagline:
      'I build software for real operations: clear UX, trustworthy data, and maintainable delivery.',
    about: [
      'I am a Software Development and Management Engineer with about 2 years of professional experience. I enjoy technical challenges, teamwork, and turning manual processes into systems that help field and admin teams.',
      'I have contributed end-to-end on government and enterprise projects: requirements, data modeling, frontend and backend, testing, documentation, and rollout support.',
      'I want to keep growing in software architecture, engineering practices, and products that deliver measurable impact on time, errors, and traceability.',
    ],
    skills: [
      'React',
      'Vite',
      'TypeScript',
      'JavaScript',
      'Node.js',
      'NestJS',
      'Express',
      'PHP',
      'HTML',
      'CSS',
      'Tailwind CSS',
      'PostgreSQL',
      'Supabase',
      'Axios',
      'Expo',
      'GitHub',
      'GitLab',
      'C++',
    ],
    socials: [
      { label: 'WhatsApp', href: WHATSAPP_HREF },
      { label: 'GitHub', href: 'https://github.com/fernandaUTZMG' },
      { label: 'UTZMG email', href: 'mailto:fernanda.hernandez.22s@utzmg.edu.mx' },
      { label: 'Alternate email', href: 'mailto:dessyre21@hotmail.com' },
    ],
    projects: [
      {
        id: 'solaino',
        title: 'Inventory and warehouse systems (Solaino)',
        org: 'Solaino',
        period: '2025 — present',
        summary:
          'Internal solutions for operational control: inventory, warehouse, equipment, timings, and products.',
        highlights: [
          'Designed flows to record movements, stock levels, and ownership, reducing ambiguity vs spreadsheets or fragmented processes.',
          'Built screens and rules for daily operations, prioritizing data consistency and easy admin review.',
          'Integrated a modern stack (React/Vite, Node/PHP services by module, Supabase/PostgreSQL where applicable) with iterative delivery and client feedback.',
        ],
        stack: [
          'React',
          'Vite',
          'JavaScript',
          'TypeScript',
          'Node.js',
          'PHP',
          'PostgreSQL',
          'Supabase',
          'Tailwind CSS',
          'Axios',
        ],
        confidentiality: 'private',
        gallery: solainoGallery,
        galleryClosing:
          'Internal system in use; screenshots are for professional context only. Do not share operational data without company approval.',
      },
      {
        id: 'alch',
        title: 'Building control system (public works)',
        org: 'Municipality of San Pedro Tlaquepaque / Public Works',
        period: '2024 — 2026',
        summary:
          'Government system in production for public-works records: legacy replacement, data migration, and new modules.',
        highlights: [
          'Collaborated on a daily-use system, migrating historic data to PostgreSQL with improved integrity and querying.',
          'Implemented modules and automation for operational tracking; improved accessibility and administrator controls.',
          'Weekly documentation plus formal Technical Manual and User Manual for operations and support.',
        ],
        stack: [
          'React',
          'Vite',
          'JavaScript',
          'Node.js',
          'NestJS',
          'PostgreSQL',
          'Tailwind CSS',
          'Axios',
          'GitHub',
          'GitLab',
        ],
        confidentiality: 'private',
        gallery: alchGallery,
        galleryClosing:
          'Screenshots hosted in your site (public/media folder). Visible data is fictional or not real.',
      },
      {
        id: 'cruz-verde',
        title: 'Prehospital administration system',
        org: 'Municipality of Tlajomulco de Zúñiga / Cruz Verde',
        period: '2025',
        summary:
          'Mobile app for paramedics and an admin web system to track supplies, equipment, and unit operations.',
        highlights: [
          'Full-stack delivery: Expo mobile app and admin web UI with PostgreSQL persistence.',
          'Field capture flows (including PDF export and photos when needed) with centralized review.',
          'Weekly documentation for project traceability and knowledge transfer.',
        ],
        stack: [
          'React',
          'TypeScript',
          'Expo',
          'Express',
          'PostgreSQL',
          'HTML',
          'CSS',
          'JavaScript',
        ],
        confidentiality: 'private',
        gallery: cruzVerdeGallery,
        galleryClosing:
          'Images were authorized by the municipality at the time; visible data is fictional.',
      },
      {
        id: 'marvelsaa',
        title: 'IT support and operations (internship)',
        org: 'MARVELSAA',
        period: '2023 — ~5 months',
        summary:
          'IT assistance: end-user support, equipment assignments, and operational tasks across internal platforms.',
        highlights: [
          'End-user support: basic troubleshooting, follow-up, and escalation when needed.',
          'Lightweight equipment tracking and admin tasks related to workplace computing.',
          'Student-oriented program focused on accountability and learning in a real environment.',
        ],
        stack: ['IT support', 'Windows', 'Office', 'Ticketing', 'Inventory'],
      },
    ],
  },
}
