import { useState } from 'react';
import { BookOpen } from "lucide-react";

interface Step {
  id: number;
  title: string;
  description: string;
  status: string;
  time: string;
  icon: string;
  details: string[];
}

const EducationStepper = () => {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  const steps: Step[] = [
    {
      id: 1,
      title: "Aprendizaje Autodidacta",
      description: "Diseño Web, VFX y Programación básica",
      status: "Completado",
      time: "Agosto 2021 - Septiembre 2023",
      icon: "🎨",
      details: [
        "Cursos autodidactas de programación de midudev",
        "Cursos de Adobe Premiere y Photoshop",
        "Proyectos personales a amigos con lo aprendido",
      ]
    },
    {
      id: 2,
      title: "Desarrollo de Aplicaciones Web",
      description: "Desarrollo Entorno Cliente/Servidor, Diseño de Interfaces y Despliegue de Aplicaciones Web",
      status: "Completado",
      time: "Septiembre 2023 - Junio 2025",
      icon: "💻",
      details: [
        "Javascript y React",
        "PHP, NodeJS y Laravel",
        "Desarrollo de API",
        "Diseño de Interfaces con Figma",
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
        "Java, Hibernate",
        "Java (con hilos y procesos)",
        "Kotlin, Java, Android SDK, Jetpack Compose",
        "JavaFX, C#",
        "Desarrollo de Aplicaciones con IA como optativa"
      ]
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
                    <span className="text-xs inline-block py-1 text-left dark:text-yellow-700 text-neutral-500 dark:text-neutral-400">
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
                            href={step.id === 2 ? "https://www.juanxxiii.net/tecnico-superior-en-desarrollo-de-aplicaciones-web/" : "https://sinergiafp.es/tecnico-superior-en-desarrollo-de-aplicaciones-multiplataforma-online/"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 sm:gap-2 rounded-xl bg-neutral-300/60 dark:bg-neutral-700 p-2 opacity-80 transition-opacity duration-150 hover:opacity-100 border border-neutral-400 dark:border-neutral-600 text-xs"
                          >
                            <BookOpen className="size-3 sm:size-4" />
                            <span className="sm:hidden">Ver Estudios</span>
                          </a>
                        </div>
                      </div>
                    )}

                    <div className="mb-4 sm:mb-6">
                      <h4 className="font-medium text-neutral-800 dark:text-neutral-300 mb-2 sm:mb-3 text-xs sm:text-sm uppercase tracking-wide">
                        Estudiado en {step.title}
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
