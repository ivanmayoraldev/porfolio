import { Volume2, VolumeX } from "lucide-react"
import { useState, useRef, useEffect } from "react"

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: {
      Player: any;
    };
  }
}

interface YouTubePlayerProps {
  videoId: string;
}

export default function YouTubePlayer({ videoId }: YouTubePlayerProps) {
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(0);
  const [playerReady, setPlayerReady] = useState(false);
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }

    const initializePlayer = () => {
      if (containerRef.current && !playerRef.current) {
        playerRef.current = new window.YT.Player(containerRef.current, {
          videoId: videoId,
          height: '100%',
          width: '100%',
          playerVars: {
            autoplay: 1,
            loop: 1,
            playlist: videoId,
            controls: 0,
            showinfo: 0,
            rel: 0,
            modestbranding: 1,
            disablekb: 1,
            mute: 1,
            iv_load_policy: 3,
            fs: 0,
            cc_load_policy: 0,
            playsinline: 1,
            vq: 'hd720'
          },
          events: {
            onReady: (event: any) => {
              event.target.mute();
              event.target.setVolume(0);
              setPlayerReady(true);
              
              const iframe = containerRef.current?.querySelector('iframe');
              if (iframe) {
                iframe.style.position = 'absolute';
                iframe.style.top = '0';
                iframe.style.left = '0';
                iframe.style.width = '100%';
                iframe.style.height = '100%';
                iframe.style.objectFit = 'fill';
                iframe.style.transform = 'scale(1.2)';
                iframe.style.transformOrigin = 'center center';
                
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
                  }
                }, 1000);
              }
            }
          }
        });
      }
    };

    if (window.YT && window.YT.Player) {
      initializePlayer();
    } else {
      window.onYouTubeIframeAPIReady = initializePlayer;
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, [videoId]);

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
    <div>
      <a
        href="https://www.behance.net/ivanmayoralvfx"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block overflow-hidden rounded-lg border border-neutral-200 bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800"
      >
        <div
          ref={containerRef}
          className="aspect-video w-full overflow-hidden rounded-lg"
          style={{ position: 'relative' }}
        />
        
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-500 ease-in-out group-hover:bg-black/60">
          <div className="transform text-center opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-100 scale-95">
            <h3 className="text-xl font-semibold text-white mb-2">
              Más proyectos VFX
            </h3>
            <p className="text-sm text-white/80">
              Ver porfolio
            </p>
          </div>
        </div>
      </a>
      
      <div className="flex items-center gap-2 mt-6">
        <button
          onClick={handleMuteToggle}
          className="flex items-center justify-center rounded-lg p-1.5 text-neutral-600 transition-colors hover:bg-neutral-200 hover:text-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-200"
          title="Silenciado"
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
  )
} 