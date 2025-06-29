import { useState } from 'react';
import { useLanguage } from "@/components/mini-components/lang/LanguageContext";
import { translations } from "@/components/mini-components/lang/translations";
import { Github, ScreenShare, BookOpen, Award } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
  githubLink?: string;
}

const EducationStepper = () => {
  const { language } = useLanguage();
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  const getTranslation = (path: string) => {
    const keys = path.split('.');
    let value: any = translations[language];
    for (const key of keys) {
      value = value?.[key];
    }
    return value || path;
  };

  const steps = [
    {
      id: 1,
      title: getTranslation('educationStepper.selfStudy'),
      description: getTranslation('educationStepper.selfStudyDesc'),
      status: "completed",
      time: "2022-2023",
      icon: "🎨",
      details: getTranslation('educationStepper.selfStudyDetails'),
      projects: [
        {
          title: getTranslation('educationStepper.selfStudyProjects.peereira7.title'),
          description: getTranslation('educationStepper.selfStudyProjects.peereira7.description'),
          technologies: ["Premiere Pro", "After Effects", "Photoshop"],
          image: "Peereira7.png",
          link: "https://www.youtube.com/@Peereira7"
        }
      ] as Project[]
    },
    {
      id: 2,
      title: getTranslation('educationStepper.daw'),
      description: getTranslation('educationStepper.dawDesc'),
      status: "completed",
      time: "2023-2025",
      icon: "💻",
      details: getTranslation('educationStepper.dawDetails'),
      projects: [
        {
          title: getTranslation('educationStepper.dawProjects.taberna.title'),
          description: getTranslation('educationStepper.dawProjects.taberna.description'),
          technologies: ["Astro", "React", "TailwindCSS"],
          image: "taberna-el-rinconcillo.png",
          githubLink: "https://github.com/ivanmayoraldev/landingpage-tabernaelrinconcillo",
          link: "https://www.tabernaelrinconcillo.com/"
        }
      ] as Project[]
    },
    {
      id: 3,
      title: getTranslation('educationStepper.engineering'),
      description: getTranslation('educationStepper.engineeringDesc'),
      status: "in process",
      time: "2026",
      icon: "🚀",
      details: getTranslation('educationStepper.engineeringDetails'),
      projects: [
        {
          title: getTranslation('educationStepper.engineeringProjects.development.title'),
          description: getTranslation('educationStepper.engineeringProjects.development.description'),
          technologies: ["JavaScript", "TypeScript", "TailwindCSS", "Figma"],
          image: "placeholder.svg"
        }
      ] as Project[]
    }
  ];

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return getTranslation('educationStepper.completed');
      case 'in process': return getTranslation('educationStepper.inProgress');
      default: return getTranslation('educationStepper.pending');
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
                {/* Círculo del paso con línea atravesándolo */}
                <div className="relative mr-3 sm:mr-4 z-20 flex-shrink-0">
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center ${
                    step.status === 'completed' 
                      ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 shadow-lg' 
                      : step.status === 'in process'
                      ? 'border-2 border-slate-900 dark:border-slate-100 text-slate-900 dark:text-slate-100'
                      : 'border-2 border-neutral-300 dark:border-neutral-600 text-neutral-400 dark:text-neutral-500'
                  } ${index === 2 ? 'bg-white dark:bg-neutral-800' : ''}`}>
                    {step.status === 'completed' ? (
                      <span className="text-sm sm:text-lg">✓</span>
                    ) : (
                      <span className="text-sm sm:text-lg">{step.icon}</span>
                    )}
                  </div>
                </div>

                {/* Contenido del paso */}
                <div className="flex-1 min-w-0">
                  <h3 className={`font-semibold mb-1 text-sm sm:text-base ${
                    step.status === 'completed' || step.status === 'in process'
                      ? 'text-neutral-800 dark:text-neutral-300'
                      : 'text-neutral-400 dark:text-neutral-500'
                  }`}>
                    {step.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mb-2 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
                    <span className={`text-xs inline-block px-2 py-1 rounded-full ${
                      step.status === 'completed'
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                        : step.status === 'in process'
                        ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                        : 'bg-neutral-100 dark:bg-neutral-700 text-neutral-500 dark:text-neutral-400'
                    }`}>
                      {getStatusText(step.status)}
                    </span>
                    
                    <p className="text-xs text-neutral-500 dark:text-neutral-500">
                      {step.time}
                    </p>
                  </div>
                </div>
              </div>

              {/* Contenido expandible */}
              {expandedStep === step.id && (
                <div className="ml-11 sm:ml-14 mb-4 sm:mb-6">
                  <div className="bg-neutral-50 dark:bg-neutral-700/30 rounded-lg p-3 sm:p-4 lg:p-6">
                    {/* Botones de acción para DAW e Ingeniería */}
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
                        {step.details.map((detail: string, idx: number) => (
                          <li key={idx} className="flex items-start group">
                            <span className="text-orange-500 mr-2 sm:mr-3 mt-1 text-xs sm:text-sm group-hover:scale-110 transition-transform flex-shrink-0">•</span>
                            <span className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium text-neutral-800 dark:text-neutral-300 mb-2 sm:mb-3 text-xs sm:text-sm uppercase tracking-wide">
                        {getTranslation('educationStepper.projectsCompleted')}
                      </h4>
                      <div className="grid gap-3 sm:gap-4 grid-cols-1">
                        {step.projects.map((project, idx) => (
                          <div key={idx} className="flex flex-col gap-2 sm:gap-3 lg:gap-4 rounded-xl p-2 sm:p-3 lg:p-4 duration-100 hover:bg-neutral-300/20 dark:hover:bg-neutral-800/20 border border-transparent hover:border-neutral-300 dark:hover:border-neutral-600 bg-white dark:bg-neutral-800">
                            <div className="flex flex-col">
                              <h5 className="text-sm sm:text-base lg:text-lg font-semibold text-neutral-800 dark:text-neutral-300 py-1 sm:py-2">
                                {project.title}
                              </h5>
                              <p className="mb-1 sm:mb-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 py-1 sm:py-2 leading-relaxed">
                                {project.description}
                              </p>
                              <div className="mb-1 sm:mb-2 flex gap-1 py-1 sm:py-2 flex-wrap">
                                {project.technologies.map((tech, techIdx) => (
                                  <span
                                    key={techIdx}
                                    className="flex items-center gap-1 rounded-lg bg-neutral-200 dark:bg-neutral-700 px-1.5 sm:px-2 lg:px-2.5 py-0.5 text-xs text-neutral-600 dark:text-neutral-400 border border-neutral-300 dark:border-neutral-600"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                              <div className="relative h-24 sm:h-32 lg:h-40 w-full overflow-hidden rounded-xl">
                                <img
                                  className="rounded-xl object-cover object-top w-full h-full"
                                  src={`/${project.image}`}
                                  alt={`${project.title} image`}
                                />
                              </div>
                            </div>
                            
                            <div className="mt-1 flex gap-2">
                              {project.githubLink && (
                                <a
                                  href={project.githubLink}
                                  className="inline-flex grow items-center justify-center rounded-xl bg-neutral-300/60 dark:bg-neutral-700 p-2 opacity-80 transition-opacity duration-150 hover:opacity-100 border border-neutral-400 dark:border-neutral-600"
                                  target="_blank"
                                  aria-label="Link to Github repository"
                                >
                                  <Github className="size-3 sm:size-4" />
                                </a>
                              )}
                              {project.link && (
                                <a
                                  href={project.link}
                                  className="inline-flex grow items-center justify-center rounded-xl bg-neutral-300/60 dark:bg-neutral-700 p-2 opacity-80 transition-opacity duration-150 hover:opacity-100 border border-neutral-400 dark:border-neutral-600"
                                  target="_blank"
                                  aria-label="Link to live preview"
                                >
                                  <ScreenShare className="size-3 sm:size-4" />
                                </a>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
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