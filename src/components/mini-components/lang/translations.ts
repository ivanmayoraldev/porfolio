export type Language = 'es' | 'en'

export interface Translations {
  // Header
  language: string
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
  
  // Education Stepper
  educationStepper: {
    selfStudy: string
    selfStudyDesc: string
    daw: string
    dawDesc: string
    engineering: string
    engineeringDesc: string
    completed: string
    inProgress: string
    pending: string
    studiesCompleted: string
    projectsCompleted: string
    viewProject: string
    viewStudies: string
    viewCertificate: string
    projectInDevelopment: string
    projectInDevelopmentDesc: string
    selfStudyDetails: string[]
    dawDetails: string[]
    engineeringDetails: string[]
    selfStudyProjects: {
      peereira7: {
        title: string
        description: string
      }
    }
    dawProjects: {
      taberna: {
        title: string
        description: string
      }
    }
    engineeringProjects: {
      development: {
        title: string
        description: string
      }
    }
  }
  
  // Education data
  educationData: {
    [key: string]: {
      title: string
      time: string
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

  footer: {
    footerText: string
  }
}

export const translations: Record<Language, Translations> = {
  es: {
    language: "Español",
    openToWork: "Disponible",
    title: "Iván Mayoral Capel",
    subtitle: "Desarrollador FullStack - UI/UX & VFX Creator",
    description: "Diseñando interfaces intuitivas y desarrollando soluciones centradas en el usuario, combinando creatividad y experiencia técnica para crear experiencias digitales fluidas.",
    aboutTitle: "Sobre mí",
    aboutDescription: "Soy un desarrollador Full Stack apasionado por crear experiencias digitales excepcionales. Combino habilidades técnicas sólidas con un enfoque creativo para desarrollar soluciones innovadoras que resuelven problemas reales.",
    educationTitle: "Formación & Proyectos",
    educationSubtitle: "Mi trayectoria académica y proyectos realizados",
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
    educationStepper: {
      selfStudy: "Estudios por Cuenta Propia",
      selfStudyDesc: "Diseño, VFX y Programación Básica",
      daw: "Desarrollo de Aplicaciones Web (DAW)",
      dawDesc: "Técnico Superior en Desarrollo de Aplicaciones Web - CFP JuanXXIII",
      engineering: "Ingeniería Informática",
      engineeringDesc: "Grado en Ingeniería Informática - UNIR",
      completed: "Completado",
      inProgress: "En Progreso",
      pending: "Pendiente",
      studiesCompleted: "Estudios Realizados",
      projectsCompleted: "Proyectos Realizados",
      viewProject: "Ver proyecto",
      viewStudies: "Ver Estudios",
      viewCertificate: "Ver Título",
      projectInDevelopment: "Proyecto en Desarrollo",
      projectInDevelopmentDesc: "Trabajando en un proyecto innovador que combina las últimas tecnologías aprendidas.",
      selfStudyDetails: [
        "Diseño gráfico y digital con Adobe Creative Suite",
        "Efectos visuales (VFX) con After Effects, Premiere Pro y Davinci Resolve",
        "Diseño UX/UI con Figma y herramientas de diseño",
        "Programación básica en HTML, CSS y JavaScript",
        "Fundamentos de diseño web y experiencia de usuario",
        "Creación de contenido multimedia y animaciones",
        "Edición de video y post-producción"
      ],
      dawDetails: [
        "Desarrollo frontend con React, TypeScript y Astro",
        "Desarrollo backend con Node.js, PHP, Laravel y Python",
        "Bases de datos SQL y NoSQL (MySQL, MongoDB)",
        "APIs RESTful y GraphQL",
        "DevOps y despliegue con Docker y AWS",
        "Metodologías ágiles y control de versiones con Git y GitHub",
        "Frameworks CSS como Tailwind CSS",
        "Lenguajes de programación: JavaScript, TypeScript, Java, PHP, Python"
      ],
      engineeringDetails: [
        "Especialización en Ingeniería del Software",
        "Arquitectura de sistemas y diseño de software",
        "Inteligencia Artificial y Machine Learning",
        "Computación en la nube y sistemas distribuidos",
        "Ciberseguridad y protección de datos",
        "Gestión de proyectos tecnológicos",
        "Investigación y desarrollo de nuevas tecnologías"
      ],
      selfStudyProjects: {
        peereira7: {
          title: "Peereira7",
          description: "Edición de video, diseño de banners y thumbnails. Gestión de redes sociales durante 3 años en YouTube & TikTok."
        }
      },
      dawProjects: {
        taberna: {
          title: "Taberna El Rinconcillo - Landing Page",
          description: "He diseñado y desarrollado la landing page de la taberna El Rinconcillo, una taberna de comida típica española situado en Gérgal, Almería."
        }
      },
      engineeringProjects: {
        development: {
          title: "Proyecto en Desarrollo",
          description: "Trabajando en un proyecto innovador que combina las últimas tecnologías aprendidas."
        }
      }
    },
    educationData: {
      computerEngineering: {
        title: "Ingeniería Informática",
        time: "2025 - Actualmente",
        details: [
          "Actualmente cursando el primer año del grado en Ingeniería Informática, enfocado en la especialización de Ingeniería del Software. Este programa integral cubre metodologías avanzadas de desarrollo de software, diseño de arquitectura de sistemas, gestión de bases de datos y tecnologías emergentes como IA y computación en la nube. El plan de estudios enfatiza habilidades prácticas de resolución de problemas y prácticas de desarrollo estándar de la industria."
        ]
      },
      daw: {
        title: "Desarrollo de Aplicaciones Web (DAW)",
        time: "2023 - 2025",
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
      },
      
    },
    footer: {
      footerText: "© 2025 Iván Mayoral. Todos los derechos reservados."
    }
  },
  en: {
    language: "English",
    openToWork: "Open To Work",
    title: "Iván Mayoral Capel",
    subtitle: "Full Stack Developer - UI/UX & VFX Creator",
    description: "Designing intuitive interfaces and developing user-centric solutions, blending creativity and technical expertise to craft seamless digital experiences.",
    aboutTitle: "About me",
    aboutDescription: "I'm a passionate Full Stack developer dedicated to creating exceptional digital experiences. I combine solid technical skills with a creative approach to develop innovative solutions that solve real problems.",
    educationTitle: "Education & Projects",
    educationSubtitle: "My academic journey and completed projects",
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
    educationStepper: {
      selfStudy: "Self-Study",
      selfStudyDesc: "Design, VFX and Basic Programming",
      daw: "Web Application Development (DAW)",
      dawDesc: "Higher Technician in Web Application Development - CFP JuanXXIII",
      engineering: "Computer Engineering",
      engineeringDesc: "Computer Engineering Degree - UNIR",
      completed: "Completed",
      inProgress: "In Progress",
      pending: "Pending",
      studiesCompleted: "Studies Completed",
      projectsCompleted: "Projects Completed",
      viewProject: "View project",
      viewStudies: "View Studies",
      viewCertificate: "View Certificate",
      projectInDevelopment: "Project in Development",
      projectInDevelopmentDesc: "Working on an innovative project that combines the latest learned technologies.",
      selfStudyDetails: [
        "Graphic and digital design with Adobe Creative Suite",
        "Visual effects (VFX) with After Effects, Premiere Pro and Davinci Resolve",
        "Design UX/UI with Figma and design tools",
        "Basic programming in HTML, CSS and JavaScript",
        "Web design and user experience fundamentals",
        "Multimedia content creation and animations",
        "Video editing and post-production"
      ],
      dawDetails: [
        "Frontend development with React, TypeScript and Astro",
        "Backend development with Node.js, PHP, Laravel and Python",
        "SQL and NoSQL databases (MySQL, MongoDB)",
        "RESTful APIs and GraphQL",
        "DevOps and deployment with Docker and AWS",
        "Agile methodologies and version control with Git and GitHub",
        "CSS frameworks like Tailwind CSS",
        "Programming languages: JavaScript, TypeScript, Java, PHP, Python"
      ],
      engineeringDetails: [
        "Software Engineering specialization",
        "System architecture and software design",
        "Artificial Intelligence and Machine Learning",
        "Cloud computing and distributed systems",
        "Cybersecurity and data protection",
        "Technology project management",
        "Research and development of new technologies"
      ],
      selfStudyProjects: {
        peereira7: {
          title: "Peereira7",
          description: "Video editing, banner and thumbnail design. Social media management for 3 years in Youtube & TikTok."
        }
      },
      dawProjects: {
        taberna: {
          title: "Taberna El Rinconcillo - Landing Page",
          description: "I designed and developed the landing page for Taberna El Rinconcillo, a traditional Spanish restaurant located in Gérgal, Almería."
        }
      },
      engineeringProjects: {
        development: {
          title: "Project in Development",
          description: "Working on an innovative project that combines the latest learned technologies."
        }
      }
    },
    educationData: {
      computerEngineering: {
        title: "Computer Engineering",
        time: "2025 - Actually",
        details: [
          "Currently pursuing the first year of Computer Engineering degree, focusing on the Software Engineering track. This comprehensive program covers advanced software development methodologies, system architecture design, database management, and emerging technologies like AI and cloud computing. The curriculum emphasizes practical problem-solving skills and industry-standard development practices."
        ]
      },
      daw: {
        title: "Web Application Development (DAW)",
        time: "2023 - 2025",
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
    },
    footer: {
      footerText: "© 2025 Iván Mayoral. All rights reserved."
    }
  }
} 