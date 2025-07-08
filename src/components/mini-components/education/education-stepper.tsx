import { useState } from 'react';
import { Github, ScreenShare, BookOpen, Award } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
  githubLink?: string;
}

interface Step {
  id: number;
  title: string;
  description: string;
  status: string;
  time: string;
  icon: string;
  details: string[];
  projects: Project[];
}

const EducationStepper = () => {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  const getTranslation = (path: string) => {
    const keys = path.split('.');
    let value: any = null;
    for (const key of keys) {
      value = value?.[key];
    }
    return value || path;
  };

  const steps: Step[] = [
    {
      id: 1,
      title: "Aprendizaje Autodidacta",
      description: "Diseño Web, VFX y Programación básica",
      status: "Completado",
      time: "Agosto 2021 - Septiembre 2023",
      icon: "🎨",
      details: [
        "Aprendizaje en plataformas como YouTube y Udemy",
        "Diseño con herramientas como Photoshop y After Effects",
        "Desarrollo con HTML, CSS y JavaScript",
      ],
      projects: [],
    },
    {
      id: 2,
      title: "Desarrollo de Aplicaciones Web",
      description: "Desarrollo Entorno Cliente/Servidor, Diseño de Interfaces y Despliegue de Aplicaciones Web",
      status: "Completado",
      time: "Septiembre 2023 - Junio 2025",
      icon: "💻",
      details: [
        "Desarrollo con React y TypeScript",
        "Back-End con Node.js y Express",
        "Bases de datos relacionales",
      ],
      projects: [
        {
          title: "Earn Control",
          description: "App para ayudar a los usuarios a ahorrar automáticamente",
          technologies: ["React", "TypeScript", "TailwindCSS", "NodeJS"],
          image: "ArtUs.png",
          githubLink: "https://github.com/ivanmayoraldev/EarnControl",
          link: "https://project2-example.com"
        }
      ]
    },
    {
      id: 3,
      title: "Desarrollo de Aplicaciones Multiplataforma",
      description: "Programación Orientada a Objetos, Base de Datos, Acceso a Datos, Programación de Servicios y Procesos, Móviles y Desarrollo de Interfaces",
      status: "En proceso",
      time: "Septiembre 2025 - Actualmente",
      icon: "🚀",
      details: [
        "Programación con Kotlin y Java",
        "Uso de bases de datos locales y remotas",
        "Interfaces adaptables multiplataforma",
      ],
      projects: []
    }
  ];

  const getStatusText = (status: string) => {
    switch (status) {
      case 'Completado': return "Completado";
      case 'En proceso': return "En proceso";
      default: return "Pendiente";
    }
  };

  const toggleStep = (stepId: number) => {
    setExpandedStep(expandedStep === stepId ? null : stepId);
  };

  return (
    <div className="bg-white dark:bg-neutral-800 rounded-xl p-4 sm:p-6 lg:p-8 w-full max-w-6xl mx-auto shadow-lg">
      <div className="relative">
        <div className="space-y-0">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              <div 
                className="flex relative p-3 sm:p-4 lg:p-6 cursor-pointer hover:bg-neutral-300/20 dark:hover:bg-neutral-800/20 transition-colors rounded-lg"
                onClick={() => toggleStep(step.id)}
              >
                <div className="relative mr-3 sm:mr-4 z-20 flex-shrink-0">
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center ${
                    step.status === 'Completado' 
                      ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 shadow-lg' 
                      : step.status === 'En proceso'
                      ? 'border-2 border-slate-900 dark:border-slate-100 text-slate-900 dark:text-slate-100'
                      : 'border-2 border-neutral-300 dark:border-neutral-600 text-neutral-400 dark:text-neutral-500'
                  } ${index === 2 ? 'bg-white dark:bg-neutral-800' : ''}`}>
                    {step.status === 'Completado' ? (
                      <span className="text-sm sm:text-lg">✓</span>
                    ) : (
                      <span className="text-sm sm:text-lg">{step.icon}</span>
                    )}
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold mb-1 text-sm sm:text-base text-neutral-800 dark:text-neutral-300">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mb-2 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
                    <span className="text-xs inline-block px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-700 text-neutral-500 dark:text-neutral-400">
                      {getStatusText(step.status)}
                    </span>
                    <p className="text-xs text-neutral-500 dark:text-neutral-500">
                      {step.time}
                    </p>
                  </div>
                </div>
              </div>

              {expandedStep === step.id && (
                <div className="ml-11 sm:ml-14 mb-4 sm:mb-6">
                  <div className="bg-neutral-50 dark:bg-neutral-700/30 rounded-lg p-3 sm:p-4 lg:p-6">
                    {(step.id === 2 || step.id === 3) && (
                      <div className="mb-4 sm:mb-6">
                        <div className="flex gap-2 flex-wrap">
                          <a
                            href={step.id === 2 ? "https://www.juanxxiii.net/tecnico-superior-en-desarrollo-de-aplicaciones-web/" : "https://www.unir.net/ingenieria/grado-informatica/"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 sm:gap-2 rounded-xl bg-neutral-300/60 dark:bg-neutral-700 p-2 opacity-80 transition-opacity duration-150 hover:opacity-100 border border-neutral-400 dark:border-neutral-600 text-xs"
                          >
                            <BookOpen className="size-3 sm:size-4" />
                            <span className="hidden sm:inline">{getTranslation('educationStepper.viewStudies')}</span>
                            <span className="sm:hidden">Estudios</span>
                          </a>
                          <button
                            disabled
                            className="inline-flex items-center gap-1 sm:gap-2 rounded-xl bg-neutral-300/60 dark:bg-neutral-700 p-2 opacity-50 cursor-not-allowed border border-neutral-400 dark:border-neutral-600 text-xs"
                          >
                            <Award className="size-3 sm:size-4" />
                            <span className="hidden sm:inline">{getTranslation('educationStepper.viewCertificate')}</span>
                            <span className="sm:hidden">Certificado</span>
                          </button>
                        </div>
                      </div>
                    )}

                    <div className="mb-4 sm:mb-6">
                      <h4 className="font-medium text-neutral-800 dark:text-neutral-300 mb-2 sm:mb-3 text-xs sm:text-sm uppercase tracking-wide">
                        {getTranslation('educationStepper.studiesCompleted')}
                      </h4>
                      <ul className="space-y-1 sm:space-y-2">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start group">
                            <span className="text-orange-500 mr-2 sm:mr-3 mt-1 text-xs sm:text-sm group-hover:scale-110 transition-transform flex-shrink-0">•</span>
                            <span className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {step.projects.length > 0 && (
                      <div>
                        <h4 className="font-medium text-neutral-800 dark:text-neutral-300 mb-2 sm:mb-3 text-xs sm:text-sm uppercase tracking-wide">
                          {getTranslation('educationStepper.projectsCompleted')}
                        </h4>
                        <div className="grid gap-3 sm:gap-4 grid-cols-1">
                          {step.projects.map((project, idx) => (
                            <div key={idx} className="flex flex-col gap-2 sm:gap-3 lg:gap-4 rounded-xl p-2 sm:p-3 lg:p-4 hover:bg-neutral-300/20 dark:hover:bg-neutral-800/20 border border-transparent hover:border-neutral-300 dark:hover:border-neutral-600">
                              <div>
                                <h5 className="text-sm sm:text-base lg:text-lg font-semibold text-neutral-800 dark:text-neutral-300 py-1 sm:py-2">{project.title}</h5>
                                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 py-1 sm:py-2 leading-relaxed">{project.description}</p>
                                <div className="flex gap-1 py-1 flex-wrap">
                                  {project.technologies.map((tech, i) => (
                                    <span key={i} className="text-xs px-2 py-0.5 rounded bg-neutral-200 dark:bg-neutral-700 border border-neutral-300 dark:border-neutral-600 text-neutral-600 dark:text-neutral-400">
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                                <div className="relative h-24 sm:h-32 lg:h-40 w-full mt-2 rounded-xl overflow-hidden">
                                  <img src={`/${project.image}`} alt={project.title} className="w-full h-full object-cover object-top rounded-xl" />
                                </div>
                              </div>
                              <div className="mt-1 flex gap-2">
                                {project.githubLink && (
                                  <a href={project.githubLink} target="_blank" className="grow flex items-center justify-center p-2 rounded-xl bg-neutral-300/60 dark:bg-neutral-700 border border-neutral-400 dark:border-neutral-600 opacity-80 hover:opacity-100 transition">
                                    <Github className="size-4" />
                                  </a>
                                )}
                                {project.link && (
                                  <a href={project.link} target="_blank" className="grow flex items-center justify-center p-2 rounded-xl bg-neutral-300/60 dark:bg-neutral-700 border border-neutral-400 dark:border-neutral-600 opacity-80 hover:opacity-100 transition">
                                    <ScreenShare className="size-4" />
                                  </a>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationStepper;
