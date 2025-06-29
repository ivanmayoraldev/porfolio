import ProfileInfo from "./mini-components/main/profile-info"
import TechSlider from "./mini-components/main/tech-slider"

export default function HeroSection() {
  return (
    <>
      <section className="w-full mx-auto max-w-7xl pb-6 text-neutral-800 dark:text-neutral-100 sm:pb-8">
        <div className="px-3 py-6 sm:px-4 sm:py-8 md:py-12 lg:py-16">
          <ProfileInfo />
          <TechSlider />
        </div>
      </section>
    </>
  )
}
