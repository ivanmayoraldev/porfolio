import { useState } from "react";
import Card from "@/components/mini-components/ui/card";
import TabSelector from "./mini-components/projects/tab-selector";
import ProjectItem from "./mini-components/projects/project-item";
import ActionButton from "./mini-components/projects/action-button";

export default function Projects() {
  const [activeTab, setActiveTab] = useState<'web' | 'design'>('web');

  const webProjects = [
    {
      key: "project1",
      title: "Proyeto1 (en desarrollo)",
      description: "Trabajando en un proyecto",
      technologies: ["JavaScript", "TypeScript", "TailwindCSS", "Figma"],
      video: "placeholder.svg",
      githubLink: "",
      previewLink: "",
    },
    {
      key: "tabernaElRinconcillo",
      title: "Taberna El Rinconcillo - Landing Page",
      description: "He diseñado y desarrollado la landing page de la taberna El Rinconcillo, una taberna de comida típica española situado en Gérgal, Almería.",
      technologies: ["Astro", "React", "TailwindCSS"],
      video: "taberna-el-rinconcillo.png",
      githubLink: "https://github.com/ivanmayoraldev/landingpage-tabernaelrinconcillo",
      previewLink: "https://www.tabernaelrinconcillo.com/",
    },
  ];

  const designProjects = [
    {
      key: "project2",
      title: "Proyecto2 (en desarrollo)",
      description: "Trabajando en un proyecto",
      technologies: ["Premiere Pro", "Davinci Resolve", "Google Ads"],
      video: "placeholder.svg",
      previewLink: "",
    },
    {
      key: "peereira7",
      title: "Peereira7",
      description: "Video editing, banner and thumbnail design. Social media management for 3 years in Youtube & TikTok.",
      technologies: ["Premiere Pro", "After Effects", "Photoshop"],
      video: "Peereira7.png",
      previewLink: "https://www.youtube.com/@Peereira7",
    },
  ];

  return (
    <Card>
      <TabSelector activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2">
        {activeTab === 'web' 
          ? webProjects.map((project) => {
              const { key, ...projectProps } = project;
              return <ProjectItem key={project.title} projectKey={key} {...projectProps} />;
            })
          : designProjects.map((project) => {
              const { key, ...projectProps } = project;
              return <ProjectItem key={project.title} projectKey={key} {...projectProps} />;
            })
        }
      </div>

      <ActionButton activeTab={activeTab} />
    </Card>
  );
} 