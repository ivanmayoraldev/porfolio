import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { useEffect, useState } from "react";
import Particles from "@/components/mini-components/fondo/particles";
import ParticlesLight from "@/components/mini-components/fondo/particles-light";
import HomePage from "@/pages/Home";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const observer = new MutationObserver(() =>
      setIsDarkMode(document.documentElement.classList.contains("dark"))
    );
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {isDarkMode ? (
        <Particles className="fixed inset-0 -z-10" quantity={120} />
      ) : (
        <ParticlesLight className="fixed inset-0 -z-10" quantity={120} />
      )}

      <main className="mx-auto mt-4 flex w-full flex-col gap-6 p-5 duration-1000 ease-out animate-in fade-in md:max-w-4xl pt-16">
        <HomePage />
      </main>

      <Analytics />
      <SpeedInsights />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Iván Mayoral",
            url: "https://ivanmayoral.com",
            image: "/logo.png",
            sameAs: [
              "https://twitter.com/ivanmayoraldev",
              "https://github.com/ivanmayoraldev",
              "https://www.linkedin.com/in/iva-mayoral/",
              "https://www.instagram.com/ivanmayoraldev",
              "https://www.twitch.tv/ivanmayoraldev",
            ],
          }),
        }}
      />
    </>
  );
}
