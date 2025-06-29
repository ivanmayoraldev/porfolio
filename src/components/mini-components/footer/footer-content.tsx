import { useLanguage } from "@/components/mini-components/lang/LanguageContext"

export default function FooterContent() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-sm text-neutral-600 dark:text-neutral-400 text-center">
        {t('footerText')}
      </p>
    </div>
  )
} 