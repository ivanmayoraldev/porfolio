import Card from "@/components/mini-components/ui/card"
import { Fade } from "react-awesome-reveal"
import WorkItemInfo from "./mini-components/workExperience/work-item-info"

const workData = [
  {
    id: 1,
    time: "2021 - 2024",
    location: "Madrid, Spain",
    technologies: [
      "Adobe Creative Suite",
      "DaVinci Resolve",
      "After Effects",
      "Premiere Pro",
      "Photoshop",
      "Social Media Management",
    ]
  },
]

export default function WorkExperience() {

  return (
    <section className="mx-auto max-w-7xl p-4 text-neutral-800 dark:text-neutral-100 sm:p-8">
      <h1 className="mb-8 text-center text-5xl font-bold sm:text-5xl lg:text-5xl">
        Experiencia Laboral
      </h1>
      <Card>
        <Fade>
          <div className="space-y-6 sm:space-y-8">
            {workData.map((work) => (
              <WorkItemInfo 
                key={work.id}
                time={work.time}
                technologies={work.technologies}
              />
            ))}
          </div>
        </Fade>
      </Card>
    </section>
  )
}
