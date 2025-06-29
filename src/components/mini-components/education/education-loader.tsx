import React from 'react';

const EducationLoader = () => {
  return (
    <div className="relative w-full h-64 flex items-center justify-center">
      {/* Línea curva SVG */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Línea curva principal */}
          <path
            d="M 50 85 Q 50 70 50 60 Q 50 45 50 35 Q 50 25 50 15"
            stroke="rgb(217 119 6)"
            strokeWidth="2"
            fill="none"
            className="dark:stroke-yellow-500"
            strokeLinecap="round"
          />
          {/* Puntos de conexión */}
          <circle cx="50" cy="85" r="2" fill="rgb(217 119 6)" className="dark:fill-yellow-500" />
          <circle cx="50" cy="15" r="2" fill="rgb(217 119 6)" className="dark:fill-yellow-500" />
        </svg>
      </div>

      {/* Roca animada */}
      <div className="absolute w-4 h-4 animate-rolling-rock">
        <div className="w-full h-full bg-orange-500 rounded-sm transform rotate-45 shadow-lg"></div>
      </div>

      {/* Etiquetas de educación */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300 bg-white dark:bg-neutral-800 px-2 py-1 rounded">DAW</span>
      </div>
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
        <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300 bg-white dark:bg-neutral-800 px-2 py-1 rounded">Ingeniería</span>
      </div>

      {/* Animación personalizada para la roca */}
      <style jsx>{`
        @keyframes rollingRock {
          0% {
            transform: translate(0, 0) rotate(-45deg);
          }
          10% {
            transform: translate(0, -10%) rotate(0deg);
          }
          20% {
            transform: translate(0, -20%) rotate(45deg);
          }
          30% {
            transform: translate(0, -30%) rotate(90deg);
          }
          40% {
            transform: translate(0, -40%) rotate(135deg);
          }
          50% {
            transform: translate(0, -50%) rotate(180deg);
          }
          60% {
            transform: translate(0, -60%) rotate(225deg);
          }
          70% {
            transform: translate(0, -70%) rotate(270deg);
          }
          80% {
            transform: translate(0, -80%) rotate(315deg);
          }
          90% {
            transform: translate(0, -90%) rotate(360deg);
          }
          100% {
            transform: translate(0, 0) rotate(-45deg);
          }
        }
        
        .animate-rolling-rock {
          animation: rollingRock 3s cubic-bezier(.79, 0, .47, .97) infinite;
        }
      `}</style>
    </div>
  );
};

export default EducationLoader; 