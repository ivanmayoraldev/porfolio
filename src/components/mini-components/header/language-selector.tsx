import { useLanguage } from '@/components/mini-components/lang/LanguageContext'
import { Language } from '@/components/mini-components/lang/translations'

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage()

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage)
  }

  return (
    <div className="relative">
      <div className="flex relative bg-neutral-200/50 dark:bg-white/5 rounded-2xl backdrop-blur-sm border border-neutral-300/50 dark:border-white/10 overflow-hidden w-fit">
        <input 
          type="radio" 
          name="language" 
          id="glass-es" 
          checked={language === 'es'}
          onChange={() => handleLanguageChange('es')}
          className="hidden"
        />
        <label 
          htmlFor="glass-es" 
          className="flex-1 flex items-center justify-center min-w-[40px] text-sm px-4 py-3 cursor-pointer font-semibold tracking-wide text-neutral-700 dark:text-white relative z-10 transition-colors duration-300"
        >
          {language === 'es' ? 'Español' : 'Spanish'}
        </label>

        <input 
          type="radio" 
          name="language" 
          id="glass-en" 
          checked={language === 'en'}
          onChange={() => handleLanguageChange('en')}
          className="hidden"
        />
        <label 
          htmlFor="glass-en" 
          className="flex-1 flex items-center justify-center min-w-[40px] text-sm px-4 py-3 cursor-pointer font-semibold tracking-wide text-neutral-700 dark:text-white relative z-10 transition-colors duration-300"
        >
          {language === 'es' ? 'Inglés' : 'English'}
        </label>

        <div 
          className={`absolute top-0 bottom-0 w-1/2 rounded-2xl z-0 transition-all duration-500 ease-[cubic-bezier(0.37,1.95,0.66,0.56)] ${
            language === 'es' 
              ? 'translate-x-0 bg-white/80 dark:bg-slate-400/30 shadow-sm' 
              : 'translate-x-full bg-blue-500/80 dark:bg-blue-400/30 shadow-sm'
          }`}
        />
      </div>
    </div>
  )
} 