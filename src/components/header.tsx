import { useState, useEffect } from "react"
import ThemeSwitch from "@/components/mini-components/header/theme-switch"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex justify-between ${
      isScrolled 
        ? "bg-neutral-100/90 dark:bg-neutral-900/90 backdrop-blur-sm" 
        : "bg-transparent"
    }`}>
      <div className="mx-auto max-w-7xl flex items-center justify-between gap-4 p-4 text-sm font-medium text-neutral-600 dark:text-neutral-300 sm:p-8">
        <ThemeSwitch />
      </div>
    </div>
  )
}
