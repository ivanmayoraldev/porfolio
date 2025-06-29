import { ExternalLink, Calendar, MapPin, Volume2, VolumeX } from "lucide-react"
import Card from "@/components/card"
import { Fade } from "react-awesome-reveal"
import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/lib/translations"
import { useState, useRef, useEffect } from "react"

// YouTube API types
declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: {
      Player: any;
    };
  }
}

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
    ],
    workKey: "peereira7"
  },
]

export default function WorkExperience() {
  const { t } = useLanguage()

  return (
    <section className="mx-auto max-w-7xl p-4 text-neutral-800 dark:text-neutral-100 sm:p-8">
      <h1 className="mb-8 text-center text-5xl font-bold sm:text-5xl lg:text-5xl">
        {t('workExperience')}
      </h1>
      <Card>
        <Fade>
          <div className="space-y-6 sm:space-y-8">
            {workData.map((work) => (
              <WorkItem key={work.id} {...work} />
            ))}
          </div>
        </Fade>
      </Card>
    </section>
  )
}

function WorkItem({
  time,
  technologies,
  workKey,
}: {
  time: string
  technologies: string[]
  workKey: string
}) {
  const { t, language } = useLanguage();
  const workInfo = translations[language].workData[workKey];
  
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(0);
  const [playerReady, setPlayerReady] = useState(false);
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Load YouTube API and initialize player
  useEffect(() => {
    // Load YouTube API if not already loaded
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }

    // Initialize player when API is ready
    const initializePlayer = () => {
      if (containerRef.current && !playerRef.current) {
        playerRef.current = new window.YT.Player(containerRef.current, {
          videoId: 'Lj7DurW3yRo',
          height: '100%',
          width: '100%',
          playerVars: {
            autoplay: 1,
            loop: 1,
            playlist: 'Lj7DurW3yRo',
            controls: 0, // Hide YouTube controls
            showinfo: 0,
            rel: 0,
            modestbranding: 1,
            disablekb: 1,
            mute: 1,
            iv_load_policy: 3, // Hide annotations
            fs: 0, // Disable fullscreen button
            cc_load_policy: 0, // Hide captions
            playsinline: 1,
            vq: 'hd720' // Set quality to reduce black bars
          },
          events: {
            onReady: (event: any) => {
              event.target.mute();
              event.target.setVolume(0);
              setPlayerReady(true);
              
              // Apply custom styles to eliminate black bars
              const iframe = containerRef.current?.querySelector('iframe');
              if (iframe) {
                iframe.style.position = 'absolute';
                iframe.style.top = '0';
                iframe.style.left = '0';
                iframe.style.width = '100%';
                iframe.style.height = '100%';
                iframe.style.objectFit = 'fill';
                iframe.style.transform = 'scale(1.2)'; // Scale up more to eliminate black bars
                iframe.style.transformOrigin = 'center center';
                
                // Also try to style the video element inside the iframe
                setTimeout(() => {
                  try {
                    const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
                    if (iframeDoc) {
                      const videoElement = iframeDoc.querySelector('video');
                      if (videoElement) {
                        videoElement.style.objectFit = 'fill';
                        videoElement.style.width = '100%';
                        videoElement.style.height = '100%';
                      }
                    }
                  } catch (e) {
                    // Cross-origin restrictions might prevent this
                  }
                }, 1000);
              }
            }
          }
        });
      }
    };

    // Check if API is already loaded
    if (window.YT && window.YT.Player) {
      initializePlayer();
    } else {
      // Wait for API to load
      window.onYouTubeIframeAPIReady = initializePlayer;
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, []);

  const handleMuteToggle = () => {
    if (playerRef.current && playerReady) {
      if (isMuted) {
        playerRef.current.unMute();
        playerRef.current.setVolume(volume);
      } else {
        playerRef.current.mute();
      }
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
    if (playerRef.current && playerReady && !isMuted) {
      playerRef.current.setVolume(newVolume);
    }
  };

  return (
    <div className="relative">
      {/* Card principal */}
      <div className="rounded-xl border border-neutral-200 p-4 duration-200 hover:bg-neutral-300/20 dark:border-neutral-700 dark:hover:bg-neutral-800/20 sm:p-6">
        {/* Header con información de la empresa */}
        <div className="mb-4 flex flex-col sm:mb-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex-1">
            <div className="mb-2 flex items-center gap-2">
              <h3 className="text-lg font-semibold leading-tight text-neutral-800 dark:text-neutral-200 sm:text-xl">
                  {workInfo?.title || "VFX & GFX Creator | Channel Manager"}
              </h3>
              <ExternalLink className="h-4 w-4 flex-shrink-0 text-neutral-400" />
            </div>
            <div className="flex flex-col gap-2 text-sm text-neutral-600 dark:text-neutral-400 sm:flex-row sm:items-center sm:gap-4">
              <span className="font-medium text-neutral-700 dark:text-neutral-300">
                {workInfo?.companyName || "Peereira7 Channel"}
              </span>
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3 flex-shrink-0" />
                <span className="text-xs sm:text-sm">{time}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-3 w-3 flex-shrink-0" />
                <span className="text-xs sm:text-sm">{workInfo?.location || "Madrid, Spain"}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Descripción */}
        <p className="mb-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 sm:mb-6 sm:text-base">
          {workInfo?.description || "Led creative direction and production for a successful YouTube channel with over 3 years of experience in video editing, motion graphics, and visual effects. Managed social media presence, designed thumbnails and banners, and coordinated content strategy. Developed expertise in Adobe Creative Suite, DaVinci Resolve, and After Effects while building a strong portfolio of digital content."}
        </p>

        {/* Tecnologías */}
        <div className="mb-4 sm:mb-6">
          <h4 className="mb-3 text-sm font-semibold text-neutral-700 dark:text-neutral-300">
            {t('technologies')}
          </h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-neutral-300 bg-neutral-200 px-2 py-1 text-xs text-neutral-700 dark:border-neutral-600 dark:bg-neutral-700 dark:text-neutral-300 sm:px-3"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Logros */}
        <div className="mb-4 sm:mb-6">
          <h4 className="mb-3 text-sm font-semibold text-neutral-700 dark:text-neutral-300">
            {t('keyAchievements')}
          </h4>
          <ul className="space-y-2">
            {workInfo?.achievements?.map((achievement: string, index: number) => (
              <li
                key={index}
                className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-400"
              >
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600 dark:bg-blue-400"></span>
                <span className="leading-relaxed">{achievement}</span>
              </li>
            )) || [
              "Managed successful YouTube channel with consistent content strategy",
              "Created high-quality thumbnails and banners for video content",
              "Developed expertise in video editing and motion graphics",
              "Coordinated social media presence across multiple platforms",
            ].map((achievement: string, index: number) => (
              <li
                key={index}
                className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-400"
              >
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600 dark:bg-blue-400"></span>
                <span className="leading-relaxed">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="mb-3 flex items-center justify-between">
            <h4 className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">
              {t('workShowcase')}
            </h4>
            <div className="flex items-center gap-2">
              <button
                onClick={handleMuteToggle}
                className="flex items-center justify-center rounded-lg p-1.5 text-neutral-600 transition-colors hover:bg-neutral-200 hover:text-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-200"
                title={isMuted ? t('unmute') : t('mute')}
              >
                {isMuted ? (
                  <VolumeX className="h-4 w-4" />
                ) : (
                  <Volume2 className="h-4 w-4" />
                )}
              </button>
              <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={(e) => handleVolumeChange(Number(e.target.value))}
                className="h-1.5 w-16 cursor-pointer appearance-none rounded-lg bg-neutral-300 dark:bg-neutral-600"
                style={{
                  background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${volume}%, #d1d5db ${volume}%, #d1d5db 100%)`
                }}
                disabled={isMuted}
              />
            </div>
          </div>
          <a
            href="https://www.behance.net/ivanmayoralvfx"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block overflow-hidden rounded-lg border border-neutral-200 bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800"
          >
            <div
              ref={containerRef}
              className="aspect-video w-full overflow-hidden rounded-lg"
              style={{
                position: 'relative'
              }}
            />
            
            {/* Hover overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-500 ease-in-out group-hover:bg-black/60">
              <div className="transform text-center opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-100 scale-95">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {t('moreVFXProjects')}
                </h3>
                <p className="text-sm text-white/80">
                  {t('viewPortfolio')}
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
