import { Github, ScreenShare } from "lucide-react";
import { useLanguage } from "@/components/mini-components/lang/LanguageContext";
import { translations } from "@/components/mini-components/lang/translations";

interface ProjectItemProps {
  projectKey?: string;
  title: string;
  description: string;
  technologies: string[];
  video: string;
  githubLink?: string;
  previewLink?: string;
}

export default function ProjectItem({
  projectKey,
  title,
  description,
  technologies,
  video,
  githubLink,
  previewLink,
}: ProjectItemProps) {
  const { language } = useLanguage();
  
  const projectTranslations = projectKey ? translations[language].projects[projectKey] : null;
  const displayTitle = projectTranslations?.title || title;
  const displayDescription = projectTranslations?.description || description;

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