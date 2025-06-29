import { Github, MoveRight, ScreenShare, Code, Palette } from "lucide-react";
import Card from "@/components/card";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export default function Projects() {
  const [activeTab, setActiveTab] = useState<'web' | 'design'>('web');
  const { t } = useLanguage();

  const webProjects = [
    {
      key: "project1",
      title: "Proyeto1 (en desarrollo)",
      description:
        "Trabajando en un proyecto",
      technologies: ["JavaScript", "TypeScript", "TailwindCSS", "Figma"],
      video: "placeholder.svg",
      githubLink: "",
      previewLink: "",
    },
    {
      key: "tabernaElRinconcillo",
      title: "Taberna El Rinconcillo - Landing Page",
      description:
        "He diseñado y desarrollado la landing page de la taberna El Rinconcillo, una taberna de comida típica española situado en Gérgal, Almería.",
      technologies: ["Astro", "React", "TailwindCSS"],
      video: "taberna-el-rinconcillo.png",
      githubLink: "https://github.com/ivanmayoraldev/landingpage-tabernaelrinconcillo",
      previewLink: "https://www.tabernaelrinconcillo.com/",
    },
  ];

  const designProjects = [
    {
      key: "project2",
      title: "Proyecto2 (en desarrollo)",
      description:
        "Trabajando en un proyecto",
      technologies: ["Premiere Pro", "Davinci Resolve", "Google Ads"],
      video: "placeholder.svg",
      previewLink: "",
    },
    {
      key: "peereira7",
      title: "Peereira7",
      description:
        "Video editing, banner and thumbnail design. Social media management for 3 years in Youtube & TikTok.",
      technologies: ["Premiere Pro", "After Effects", "Photoshop"],
      video: "Peereira7.png",
      previewLink: "https://www.youtube.com/@Peereira7",
    },
  ];

  return (
    <Card>
      <div className="flex flex-col max-w-7xl sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
        <div className="flex bg-neutral-200 dark:bg-neutral-800 rounded-xl p-1 w-full sm:w-auto mx-auto">
          <button
            onClick={() => setActiveTab('web')}
            className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 flex-1 sm:flex-none ${
              activeTab === 'web'
                ? 'bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 shadow-sm'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100'
            }`}
          >
            <Code className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">{t('webProjects')}</span>
            <span className="sm:hidden">{t('webProjects')}</span>
          </button>
          <button
            onClick={() => setActiveTab('design')}
            className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 flex-1 sm:flex-none ${
              activeTab === 'design'
                ? 'bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 shadow-sm'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100'
            }`}
          >
            <Palette className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">{t('vfxProjects')}</span>
            <span className="sm:hidden">{t('vfxProjects')}</span>
          </button>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2">
        {activeTab === 'web' 
          ? webProjects.map((project) => {
              const { key, ...projectProps } = project;
              return <ProjectItem key={project.title} projectKey={key} {...projectProps} />;
            })
          : designProjects.map((project) => {
              const { key, ...projectProps } = project;
              return <ProjectItem key={project.title} projectKey={key} {...projectProps} />;
            })
        }
      </div>

      {/* Action Buttons */}
      <div className="flex w-full justify-center mt-6 sm:mt-8">
        {activeTab === 'web' ? (
          <a
            href="https://github.com/ivanmayoraldev"
            target="_blank"
            className="group flex w-full items-center justify-center rounded-xl bg-neutral-200 dark:bg-neutral-800 px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-medium opacity-80 transition-opacity duration-150 hover:opacity-100 border border-neutral-300 dark:border-neutral-600"
            aria-label="Explore more web projects"
          >
            {t('moreWebProjects')}
            <MoveRight className="size-4 opacity-70 duration-200 group-hover:translate-x-[1.5px] group-hover:opacity-100 ml-2" />
          </a>
        ) : (
          <a
            href="https://www.behance.net/ivanmayoralvfx"
            target="_blank"
            className="group flex w-full items-center justify-center rounded-xl bg-neutral-200 dark:bg-neutral-800 px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-medium opacity-80 transition-opacity duration-150 hover:opacity-100 border border-neutral-300 dark:border-neutral-600"
            aria-label="Explore more design projects"
          >
            {t('moreVfxProjects')}
            <MoveRight className="size-4 opacity-70 duration-200 group-hover:translate-x-[1.5px] group-hover:opacity-100 ml-2" />
          </a>
        )}
      </div>
    </Card>
  );
}

function ProjectItem({
  projectKey,
  title,
  description,
  technologies,
  video,
  githubLink,
  previewLink,
}: {
  projectKey?: string;
  title: string;
  description: string;
  technologies: string[];
  video: string;
  githubLink?: string;
  previewLink?: string;
}) {
  const { language } = useLanguage();
  
  // Use translated title and description if available
  const projectTranslations = projectKey ? translations[language].projects[projectKey] : null;
  const displayTitle = projectTranslations?.title || title;
  const displayDescription = projectTranslations?.description || description;

  // Check if the video is actually a video file
  const isVideo = video.endsWith('.mp4') || video.endsWith('.webm') || video.endsWith('.ogg');
  const isYouTube = video.startsWith('youtube://');

  return (
    <div className="flex flex-col gap-3 sm:gap-4 rounded-xl p-3 sm:p-4 duration-100 hover:bg-neutral-300/20 dark:hover:bg-neutral-800/20 border border-transparent hover:border-neutral-300 dark:hover:border-neutral-600">
      <div className="flex flex-col">
        <h3 className="text-base sm:text-lg font-semibold text-neutral-800 dark:text-neutral-300 py-2">
          {displayTitle}
        </h3>
        <p className="mb-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 py-2 leading-relaxed">
          {displayDescription}
        </p>
        <div className="mb-2 flex gap-1 py-2 flex-wrap">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="flex items-center gap-1 rounded-lg bg-neutral-200 dark:bg-neutral-700 px-2 sm:px-2.5 py-0.5 text-xs text-neutral-600 dark:text-neutral-400 border border-neutral-300 dark:border-neutral-600"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="relative h-32 sm:h-40 w-full overflow-hidden rounded-xl">
          {isVideo ? (
            <video
              className="rounded-xl object-cover object-top w-full h-full"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : isYouTube ? (
            <iframe
              className="rounded-xl object-cover object-top w-full h-full"
              src={`https://www.youtube.com/embed/${video.replace('youtube://', '')}?autoplay=1&mute=1&loop=1&playlist=${video.replace('youtube://', '')}&controls=0&showinfo=0&rel=0&modestbranding=1&disablekb=1&iv_load_policy=3&fs=0&cc_load_policy=0&playsinline=1&vq=hd720&wmode=transparent&color=white&theme=dark&autohide=1&showsearch=0&showinfo=0&iv_load_policy=3&modestbranding=1&disablekb=1&fs=0&cc_load_policy=0&playsinline=1&origin=${window.location.origin}`}
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                transform: 'scale(1.2)',
                transformOrigin: 'center center',
                border: 'none',
                outline: 'none'
              }}
            />
          ) : (
            <img
              className="rounded-xl object-cover object-top w-full h-full"
              src={video}
              alt={`${displayTitle} image`}
            />
          )}
        </div>
      </div>
      
      <div className="mt-1 flex gap-2">
        {githubLink && (
          <a
            href={githubLink}
            className="inline-flex grow items-center justify-center rounded-xl bg-neutral-300/60 dark:bg-neutral-700 p-2 opacity-80 transition-opacity duration-150 hover:opacity-100 border border-neutral-400 dark:border-neutral-600"
            target="_blank"
            aria-label="Link to Github repository"
          >
            <Github className="size-4" />
          </a>
        )}
        {previewLink && (
          <a
            href={previewLink}
            className="inline-flex grow items-center justify-center rounded-xl bg-neutral-300/60 dark:bg-neutral-700 p-2 opacity-80 transition-opacity duration-150 hover:opacity-100 border border-neutral-400 dark:border-neutral-600"
            target="_blank"
            aria-label="Link to live preview"
          >
            <ScreenShare className="size-4" />
          </a>
        )}
      </div>
    </div>
  );
} 