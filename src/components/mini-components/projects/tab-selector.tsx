import { Code, Palette } from "lucide-react"
import { useLanguage } from "@/components/mini-components/lang/LanguageContext"

interface TabSelectorProps {
  activeTab: 'web' | 'design';
  setActiveTab: (tab: 'web' | 'design') => void;
}

export default function TabSelector({ activeTab, setActiveTab }: TabSelectorProps) {
  const { t } = useLanguage();

  return (
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
  )
} 