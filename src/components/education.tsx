import { Fade } from "react-awesome-reveal";
import EducationStepper from "@/components/mini-components/education/education-stepper";

export default function ListEduExp() {
  return (
    <section className="mx-auto max-w-7xl p-4 text-neutral-800 dark:text-neutral-100 sm:p-8">
      <h1 className="mb-8 text-center text-5xl font-bold sm:text-5xl lg:text-5xl">
        Formación
      </h1>
      <Fade>
        <EducationStepper />
      </Fade>
    </section>
  );
} 