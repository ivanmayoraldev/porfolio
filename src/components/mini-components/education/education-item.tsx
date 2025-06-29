import { useLanguage } from "@/components/mini-components/lang/LanguageContext";
import { translations } from "@/components/mini-components/lang/translations";

interface EducationItemProps {
  educationUrl: string;
  educationName: string;
  educationKey: string;
  position: "left" | "right";
}

export default function EducationItem({
  educationUrl,
  educationName,
  educationKey,
  position,
}: EducationItemProps) {
  const { language } = useLanguage();
  const educationInfo = translations[language].educationData[educationKey];
  
  const handleClick = () => {
    window.open(educationUrl, "_blank");
  };

  return (
    <li className="flex justify-center xl:justify-start relative w-full">
      <div
        onClick={handleClick}
        className={`rounded-xl p-3 xl:p-4 duration-100 hover:bg-neutral-300/20 dark:hover:bg-neutral-800/20 w-full max-w-sm sm:max-w-md xl:max-w-lg cursor-pointer border border-transparent hover:border-neutral-300 dark:hover:border-neutral-600 xl:text-left ${
          position === "left" ? "xl:mr-auto xl:ml-0 xl:mr-1/4" : "xl:ml-auto xl:mr-0 xl:ml-1/4"
        }`}
      >
        
        <time className="mb-2 font-mono text-xs sm:text-sm xl:text-base font-normal leading-none text-yellow-600 dark:text-yellow-500">
          {educationInfo?.time || "2025 - Actually"}
        </time>
        <div className="mt-1 flex flex-col space-y-0.5">
          <h3 className="text-base sm:text-lg xl:text-xl font-semibold text-neutral-800 dark:text-neutral-200 leading-tight">
            {educationInfo?.title || "Computer Engineering"}
          </h3>
          <span className="text-xs sm:text-sm xl:text-base font-medium text-neutral-700 dark:text-neutral-400 opacity-80 duration-150 hover:opacity-100">
            {educationName}
          </span>
          <ul className="py-2 sm:py-3 xl:py-4">
            {educationInfo?.details?.map((detail: string, idx: number) => (
              <li
                key={idx}
                className="text-xs sm:text-sm xl:text-base text-neutral-500 dark:text-neutral-400 leading-relaxed"
              >
                {detail}
              </li>
            )) || [
              "Currently pursuing the first year of Computer Engineering degree, focusing on the Software Engineering track. This comprehensive program covers advanced software development methodologies, system architecture design, database management, and emerging technologies like AI and cloud computing. The curriculum emphasizes practical problem-solving skills and industry-standard development practices."
            ].map((detail: string, idx: number) => (
              <li
                key={idx}
                className="text-xs sm:text-sm xl:text-base text-neutral-500 dark:text-neutral-400 leading-relaxed"
              >
                {detail}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
} 