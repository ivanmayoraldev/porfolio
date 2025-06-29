export type Language = 'es' | 'en'

export interface Translations {
  // Header
  openToWork: string
  
  // Main section
  title: string
  subtitle: string
  description: string
  
  // About section
  aboutTitle: string
  aboutDescription: string
  
  // Education section
  educationTitle: string
  educationSubtitle: string
  
  // Work Experience section
  workExperience: string
  keyAchievements: string
  workShowcase: string
  technologies: string
  mute: string
  unmute: string
  videoNotSupported: string
  moreVFXProjects: string
  viewPortfolio: string
  
  // Projects section
  projectsTitle: string
  webProjects: string
  vfxProjects: string
  moreWebProjects: string
  moreVfxProjects: string
  
  // Footer
  footerText: string
  
  // Education data
  educationData: {
    [key: string]: {
      title: string
      details: string[]
    }
  }
  
  // Work experience data
  workData: {
    [key: string]: {
      title: string
      companyName: string
      location: string
      description: string
      achievements: string[]
    }
  }
  
  // Project descriptions
  projects: {
    [key: string]: {
      title: string
      description: string
    }
  }
}

export const translations: Record<Language, Translations> = {
  es: {
    openToWork: "Disponible",
    title: "Iván Mayoral Capel",
    subtitle: "Desarrollador FullStack - UI/UX & VFX Creator",
    description: "Diseñando interfaces intuitivas y desarrollando soluciones centradas en el usuario, combinando creatividad y experiencia técnica para crear experiencias digitales fluidas.",
    aboutTitle: "Sobre mí",
    aboutDescription: "Soy un desarrollador Full Stack apasionado por crear experiencias digitales excepcionales. Combino habilidades técnicas sólidas con un enfoque creativo para desarrollar soluciones innovadoras que resuelven problemas reales.",
    educationTitle: "Educación",
    educationSubtitle: "Mi trayectoria académica y profesional",
    workExperience: "Experiencia Laboral",
    keyAchievements: "Logros",
    workShowcase: "Portfolio de Trabajo",
    technologies: "Tecnologías",
    mute: "Silenciar",
    unmute: "Activar sonido",
    videoNotSupported: "Tu navegador no soporta el elemento de video.",
    moreVFXProjects: "Más Proyectos VFX",
    viewPortfolio: "Ver Portfolio Completo",
    projectsTitle: "Proyectos",
    webProjects: "Proyectos Web",
    vfxProjects: "Proyectos VFX",
    moreWebProjects: "Más Proyectos Web",
    moreVfxProjects: "Más Proyectos VFX & GFX",
    footerText: "© 2025 Iván Mayoral. Todos los derechos reservados.",
    educationData: {
      computerEngineering: {
        title: "Ingeniería Informática",
        details: [
          "Actualmente cursando el primer año del grado en Ingeniería Informática, enfocado en la especialización de Ingeniería del Software. Este programa integral cubre metodologías avanzadas de desarrollo de software, diseño de arquitectura de sistemas, gestión de bases de datos y tecnologías emergentes como IA y computación en la nube. El plan de estudios enfatiza habilidades prácticas de resolución de problemas y prácticas de desarrollo estándar de la industria."
        ]
      },
      daw: {
        title: "Desarrollo de Aplicaciones Web (DAW)",
        details: [
          "Diseñar páginas web y desplegar/instalar aplicaciones en servidores con programación de navegador y servidor, utilizando las tecnologías profesionales más demandadas."
        ]
      }
    },
    workData: {
      peereira7: {
        title: "Creador de VFX & GFX | Gestor del Canal",
        companyName: "Canal de Peereira7",
        location: "Madrid, España",
        description: "Dirigí la dirección creativa y producción para un canal de YouTube exitoso con más de 3 años de experiencia en edición de video, gráficos en movimiento y efectos visuales. Gestioné la presencia en redes sociales, diseñé miniaturas y banners, y coordiné la estrategia de contenido. Desarrollé experiencia en Adobe Creative Suite, DaVinci Resolve y After Effects mientras construía un portafolio sólido de contenido digital.",
        achievements: [
          "Gestioné un canal de YouTube exitoso con estrategia de contenido consistente",
          "Creé miniaturas y banners de alta calidad para contenido de video",
          "Desarrollé experiencia en edición de video y gráficos en movimiento",
          "Coordiné la presencia en redes sociales en múltiples plataformas"
        ]
      }
    },
    projects: {
      project1: {
        title: "Proyecto 1 (en desarrollo)",
        description: "Trabajando en un proyecto"
      },
      tabernaElRinconcillo: {
        title: "Taberna El Rinconcillo - Landing Page",
        description: "He diseñado y desarrollado la landing page de la taberna El Rinconcillo, una taberna de comida típica española situado en Gérgal, Almería.",
      },
      project2: {
        title: "Proyecto 2 (en desarrollo)",
        description: "Trabajando en un proyecto"
      },
      peereira7: {
        title: "Peereira7",
        description: "Edición de video, diseño de banners y miniaturas. Gestión de redes sociales durante 3 años en Youtube & TikTok."
      }
    }
  },
  en: {
    openToWork: "Open To Work",
    title: "Iván Mayoral Capel",
    subtitle: "Full Stack Developer - UI/UX & VFX Creator",
    description: "Designing intuitive interfaces and developing user-centric solutions, blending creativity and technical expertise to craft seamless digital experiences.",
    aboutTitle: "About me",
    aboutDescription: "I'm a passionate Full Stack developer dedicated to creating exceptional digital experiences. I combine solid technical skills with a creative approach to develop innovative solutions that solve real problems.",
    educationTitle: "Education",
    educationSubtitle: "My academic and professional journey",
    workExperience: "Work Experience",
    keyAchievements: "Achievements",
    workShowcase: "Work Portfolio",
    technologies: "Technologies",
    mute: "Mute",
    unmute: "Unmute",
    videoNotSupported: "Your browser does not support the video element.",
    moreVFXProjects: "More VFX Projects",
    viewPortfolio: "View Full Portfolio",
    projectsTitle: "Projects",
    webProjects: "Web Projects",
    vfxProjects: "VFX Projects",
    moreWebProjects: "More Web Projects",
    moreVfxProjects: "More VFX & GFX Projects",
    footerText: "© 2025 Iván Mayoral. All rights reserved.",
    educationData: {
      computerEngineering: {
        title: "Computer Engineering",
        details: [
          "Currently pursuing the first year of Computer Engineering degree, focusing on the Software Engineering track. This comprehensive program covers advanced software development methodologies, system architecture design, database management, and emerging technologies like AI and cloud computing. The curriculum emphasizes practical problem-solving skills and industry-standard development practices."
        ]
      },
      daw: {
        title: "Web Application Development (DAW)",
        details: [
          "Design web pages and deploy/install applications on servers with browser and server programming, using the most in-demand professional technologies."
        ]
      }
    },
    workData: {
      peereira7: {
        title: "VFX & GFX Creator | Channel Manager",
        companyName: "Peereira7 Channel",
        location: "Madrid, Spain",
        description: "Led creative direction and production for a successful YouTube channel with over 3 years of experience in video editing, motion graphics, and visual effects. Managed social media presence, designed thumbnails and banners, and coordinated content strategy. Developed expertise in Adobe Creative Suite, DaVinci Resolve, and After Effects while building a strong portfolio of digital content.",
        achievements: [
          "Managed successful YouTube channel with consistent content strategy",
          "Created high-quality thumbnails and banners for video content",
          "Developed expertise in video editing and motion graphics",
          "Coordinated social media presence across multiple platforms"
        ]
      }
    },
    projects: {
      project1: {
        title: "Project1 (working on)",
        description: "Working on a project"
      },
      tabernaElRinconcillo: {
        title: "Taberna El Rinconcillo - Landing Page",
        description: "I designed and developed the landing page for Taberna El Rinconcillo, a traditional Spanish restaurant located in Gérgal, Almería.",
      },
      project2: {
        title: "Project2 (working on)",
        description: "Working on a project"
      },
      peereira7: {
        title: "Peereira7",
        description: "Video editing, banner and thumbnail design. Social media management for 3 years in Youtube & TikTok."
      }
    }
  }
} 