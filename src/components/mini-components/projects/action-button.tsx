import { MoveRight } from "lucide-react"
import { useLanguage } from "@/components/mini-components/lang/LanguageContext"

interface ActionButtonProps {
  activeTab: 'web' | 'design';
}

export default function ActionButton({ activeTab }: ActionButtonProps) {
  const { t } = useLanguage();

  return (
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
  )
} 