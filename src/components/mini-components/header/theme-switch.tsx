import { useState, useEffect } from "react"

export default function ThemeSwitch() {
  const [theme, setTheme] = useState<"light" | "dark">("dark")

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark"
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.classList.toggle("dark", savedTheme === "dark")
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches
      setTheme(prefersDark ? "dark" : "light")
      document.documentElement.classList.toggle("dark", prefersDark)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
    localStorage.setItem("theme", newTheme)
  }

  return (
    <div className="flex-shrink-0 ml-8">
      <label className="relative inline-block h-12 w-20 cursor-pointer">
        <input
          type="checkbox"
          checked={theme === "light"}
          onChange={toggleTheme}
          className="h-0 w-0 opacity-0"
        />
        <span
          className={`duration-400 absolute inset-0 overflow-hidden rounded-2xl transition-all ease-in-out ${
            theme === "light" ? "bg-blue-500" : "bg-gradient-to-br from-slate-900 to-slate-800"
          }`}
        >
          {theme === "dark" && (
            <>
              <div className="absolute h-0.5 w-0.5 rounded-full bg-white opacity-40" style={{ left: "3rem", top: "0.5rem" }}></div>
              <div className="absolute h-0.5 w-0.5 rounded-full bg-white opacity-30" style={{ left: "3.5rem", top: "1.25rem" }}></div>
              <div className="absolute h-0.5 w-0.5 rounded-full bg-white opacity-50" style={{ left: "2.5rem", top: "2.5rem" }}></div>
              <div className="absolute h-0.5 w-0.5 rounded-full bg-white opacity-25" style={{ left: "3.75rem", top: "2.75rem" }}></div>
            </>
          )}

          <svg
            className={`duration-400 absolute transition-all ${
              theme === "light" ? "opacity-100" : "opacity-0"
            }`}
            style={{
              width: "1.5rem",
              height: "1.5rem",
              top: "0.75rem",
              left: theme === "light" ? "2.75rem" : "0.75rem",
              transition: "left 0.4s ease-in-out",
            }}
          >
            <use href="/iconos.svg#sun-icon" />
          </svg>

          <svg
            className={`duration-400 absolute transition-all ${
              theme === "light" ? "opacity-0" : "opacity-100"
            }`}
            style={{
              width: "1.5rem",
              height: "1.5rem",
              top: "0.75rem",
              left: theme === "light" ? "2.75rem" : "0.75rem",
              transition: "left 0.4s ease-in-out",
            }}
          >
            <use href="/iconos.svg#moon-icon" />
          </svg>
        </span>
      </label>
    </div>
  )
} 