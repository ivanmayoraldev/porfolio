import { ExternalLink, Calendar, MapPin } from "lucide-react"
import { useLanguage } from "@/components/mini-components/lang/LanguageContext"
import { translations } from "@/components/mini-components/lang/translations"
import YouTubePlayer from "./youtube-player"

interface WorkItemInfoProps {
  time: string;
  technologies: string[];
  workKey: string;
}

export default function WorkItemInfo({ time, technologies, workKey }: WorkItemInfoProps) {
  const { t, language } = useLanguage();
  const workInfo = translations[language].workData[workKey];

  return (
    <div className="rounded-xl border border-neutral-200 p-4 duration-200 hover:bg-neutral-300/20 dark:border-neutral-700 dark:hover:bg-neutral-800/20 sm:p-6">
      {/* Header con información de la empresa */}
      <div className="mb-4 flex flex-col sm:mb-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex-1">
          <div className="mb-2 flex items-center gap-2">
            <h3 className="text-lg font-semibold leading-tight text-neutral-800 dark:text-neutral-200 sm:text-xl">
              {workInfo?.title || "VFX & GFX Creator | Channel Manager"}
            </h3>
            <ExternalLink className="h-4 w-4 flex-shrink-0 text-neutral-400" />
          </div>
          <div className="flex flex-col gap-2 text-sm text-neutral-600 dark:text-neutral-400 sm:flex-row sm:items-center sm:gap-4">
            <span className="font-medium text-neutral-700 dark:text-neutral-300">
              {workInfo?.companyName || "Peereira7 Channel"}
            </span>
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3 flex-shrink-0" />
              <span className="text-xs sm:text-sm">{time}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-3 w-3 flex-shrink-0" />
              <span className="text-xs sm:text-sm">{workInfo?.location || "Madrid, Spain"}</span>
            </div>
          </div>
        </div>
      </div>

      <p className="mb-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 sm:mb-6 sm:text-base">
        {workInfo?.description || "Led creative direction and production for a successful YouTube channel with over 3 years of experience in video editing, motion graphics, and visual effects. Managed social media presence, designed thumbnails and banners, and coordinated content strategy. Developed expertise in Adobe Creative Suite, DaVinci Resolve, and After Effects while building a strong portfolio of digital content."}
      </p>

      <div className="mb-4 sm:mb-6">
        <h4 className="mb-3 text-sm font-semibold text-neutral-700 dark:text-neutral-300">
          {t('technologies')}
        </h4>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-neutral-300 bg-neutral-200 px-2 py-1 text-xs text-neutral-700 dark:border-neutral-600 dark:bg-neutral-700 dark:text-neutral-300 sm:px-3"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-4 sm:mb-6">
        <h4 className="mb-3 text-sm font-semibold text-neutral-700 dark:text-neutral-300">
          {t('keyAchievements')}
        </h4>
        <ul className="space-y-2">
          {workInfo?.achievements?.map((achievement: string, index: number) => (
            <li
              key={index}
              className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-400"
            >
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600 dark:bg-blue-400"></span>
              <span className="leading-relaxed">{achievement}</span>
            </li>
          )) || [
            "Managed successful YouTube channel with consistent content strategy",
            "Created high-quality thumbnails and banners for video content",
            "Developed expertise in video editing and motion graphics",
            "Coordinated social media presence across multiple platforms",
          ].map((achievement: string, index: number) => (
            <li
              key={index}
              className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-400"
            >
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600 dark:bg-blue-400"></span>
              <span className="leading-relaxed">{achievement}</span>
            </li>
          ))}
        </ul>
      </div>

      <YouTubePlayer 
        videoId="Lj7DurW3yRo"
      />
    </div>
  )
} 