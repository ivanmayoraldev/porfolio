import { Github, ScreenShare, MoveRight } from "lucide-react";

export default function Projects() {
  const webProjects = [
    {
      key: "TabernaElRinconcillo",
      title: "Taberna El Rinconcillo",
      technologies: ["Astro", "React", "TypeScript", "Tailwind CSS"],
      img: "taberna-el-rinconcillo.png",
      githubLink: "https://github.com/ivanmayoraldev/landingpage-tabernaelrinconcillo",
      previewLink: "https://tabernaelrinconcillo.com",
    },
    {
      key: "EarnControl",
      title: "Earn Control",
      technologies: ["React", "TypeScript", "NodeJS", "TailwindCSS"],
      img: "ArtUs.png",
      githubLink: "https://github.com/ivanmayoraldev/EarnControl",
      previewLink: "https://project2-example.com",
    },
  ];

  return (
    <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {webProjects.map((project) => {
        const displayTitle = project.title;
        return (
          <ProjectItem
            key={project.key}
            title={displayTitle}
            technologies={project.technologies}
            img={project.img}
            githubLink={project.githubLink}
            previewLink={project.previewLink}
          />
        );
      })}
    </section>
  );
}

function ProjectItem({
  title,
  technologies,
  img,
  githubLink,
  previewLink,
}: {
  title: string;
  technologies: string[];
  img: string;
  githubLink?: string;
  previewLink?: string;
}) {
  return (
    <div className="flex flex-col gap-3 sm:gap-4 rounded-xl p-3 sm:p-4 duration-100 hover:bg-neutral-300/20 dark:hover:bg-neutral-800/20 border border-transparent hover:border-neutral-300 dark:hover:border-neutral-600">
      <div className="flex flex-col">
        <h3 className="text-base sm:text-lg font-semibold text-neutral-800 dark:text-neutral-300 py-2">
          {title}
        </h3>
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
        <div className="relative h-32 sm:h-40 w-full">
          <img
            className="rounded-xl object-cover object-top w-full h-full"
            src={img}
            alt={`${title} image`}
          />
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
      <div className="flex w-full justify-center mt-6 sm:mt-8">
      <a
        href="https://github.com/ivanmayoraldev"
        target="_blank"
        className="group flex w-full items-center justify-center rounded-xl bg-neutral-200 dark:bg-neutral-800 px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-medium opacity-80 transition-opacity duration-150 hover:opacity-100 border border-neutral-300 dark:border-neutral-600"
        aria-label="Explore more web projects"
      >
        Más Proyectos Web
        <MoveRight className="size-4 opacity-70 duration-200 group-hover:translate-x-[1.5px] group-hover:opacity-100 ml-2" />
      </a>

    </div>
    </div>
  );
}
