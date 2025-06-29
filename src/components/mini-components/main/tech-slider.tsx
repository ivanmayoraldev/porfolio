import { Sparkle } from "lucide-react"
import Card from "@/components/mini-components/ui/card"

const technologies = ["JavaScript", "TypeScript", "Astro", "React", "Tailwind CSS", "Python", "Node.js", "Java", "PHP", "Laravel","Figma","Adobe Premiere Pro","Adobe After Effects","Davinci Resolve","Avid Media Composer","Git", "GitHub", "Agile"]

export default function TechSlider() {
  return (
    <div className="mt-8 sm:mt-12 lg:mt-16">
      <Card>
        <div className="inline-flex w-full flex-nowrap overflow-hidden text-sm font-medium text-neutral-600 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] dark:text-neutral-300">
          <ul className="flex animate-infinite-scroll items-center justify-center">
            {technologies.map((tech) => (
              <li key={tech} className="flex flex-shrink-0 items-center">
                <Sparkle className="mx-2 size-3 text-neutral-500 dark:text-neutral-400 sm:mx-4" />
                <span className="whitespace-nowrap text-sm sm:text-base">
                  {tech}
                </span>
              </li>
            ))}
          </ul>
          <ul className="flex animate-infinite-scroll items-center justify-center">
            {technologies.map((tech) => (
              <li key={tech} className="flex flex-shrink-0 items-center">
                <Sparkle className="mx-2 size-3 text-neutral-500 dark:text-neutral-400 sm:mx-4" />
                <span className="whitespace-nowrap text-sm sm:text-base">
                  {tech}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </div>
  )
} 