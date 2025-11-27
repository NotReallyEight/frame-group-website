"use client";

import { useEffect, useRef, useState } from "react";
import Gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import { isPageRefresh } from "@/utils/preloader";
import { opacityFadeIn } from "@/utils/gsap";

const PRELOADER_FIRST_TRANSITION_DELAY = 7_500;
const PRELOADER_TOTAL_DURATION = 11_500;

Gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, TextPlugin);

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingIndex, setLoadingIndex] = useState<number>(0);
  const [threeDotsAnimation, setThreeDotsAnimation] = useState<boolean>(false);
  const preloaderLogoVideoRef = useRef<HTMLVideoElement>(null);
  const typewriterRef = useRef<HTMLDivElement>(null);
  const [hasVisited, setHasVisited] = useState<boolean | null>(null);

  const refresh = isPageRefresh();

  useEffect(() => {
    if (hasVisited === null) {
      Promise.resolve().then(() =>
        setHasVisited(sessionStorage.getItem("has_visited_home") === "true")
      );
      return;
    }

    if (hasVisited && !refresh) {
      Promise.resolve().then(() => setLoading(false));
      return;
    }

    const firstPreloaderIndexTimeout = setTimeout(() => {
      sessionStorage.setItem("has_visited_home", "true");
      setLoadingIndex(1);
      void preloaderLogoVideoRef.current?.play();
    }, PRELOADER_FIRST_TRANSITION_DELAY);
    const preloaderFinishTimeout = setTimeout(() => {
      setLoading(false);
    }, PRELOADER_TOTAL_DURATION);

    return () => {
      clearTimeout(firstPreloaderIndexTimeout);
      clearTimeout(preloaderFinishTimeout);
    };
  }, [hasVisited, refresh]);

  useGSAP(
    () => {
      if (loading) {
        Gsap.to(typewriterRef.current, {
          text: "Ogni grande storia nasce da un gruppo di menti che lavorano come una sola.",
          ease: "none",
          duration: (PRELOADER_FIRST_TRANSITION_DELAY - 3_000) / 1_000,
          onComplete: () => {
            setThreeDotsAnimation(true);
          },
        });
        return;
      }

      opacityFadeIn("#picker-container");
    },
    {
      dependencies: [loading],
    }
  );

  return (
    <>
      {/* Meta tags */}
      <title>Home - Frame</title>
      <meta
        name="description"
        content="Con la nostra esperienza e la nostra attrezzatura all'avanguardia, siamo in grado di creare ricordi indelebili che dureranno per sempre."
      />
      <meta
        name="keywords"
        content="fotografia, fotografi frame, fotografi, frame"
      />

      {loading && (
        <div
          className={`absolute inset-0 h-dvh w-dvw bg-black transition-opacity duration-700 ${loadingIndex === 0 ? "opacity-100" : "opacity-0"}`}
          role="status"
          aria-live="polite"
          aria-label="Loading application"
        >
          <div className="absolute right-0 bottom-16 left-0 mx-auto w-[80dvw] lg:right-16 lg:left-16 lg:mx-0 lg:w-[35dvw]">
            <div className="flex flex-row items-center gap-4">
              <div
                ref={typewriterRef}
                className="font-family-regular-extra-light typewriter inline text-lg text-white after:ml-1 after:border-r-2 after:border-r-white"
              />
              <div
                className={`${threeDotsAnimation ? "opacity-100" : "opacity-0"} dots font-family-regular-extra-light flex flex-row gap-2 text-lg duration-0 *:inline-block *:text-white *:opacity-0`}
              >
                <div>.</div>
                <div>.</div>
                <div>.</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {loading && (
        <div
          className={`absolute inset-0 flex h-dvh w-dvw items-center justify-center bg-black transition-opacity duration-700 ${loadingIndex === 1 ? "opacity-100" : "opacity-0"}`}
        >
          <video
            ref={preloaderLogoVideoRef}
            className="h-full w-full scale-50 object-cover object-center sm:object-center lg:scale-75"
            muted
            playsInline
            preload="auto"
            aria-label="Frame Production logo animation"
          >
            <source src="/assets/preloader-animation/animated-frame-logo-16-9-con-motion-blur.webm" />
          </video>
        </div>
      )}

      {!loading && (
        <div className="h-dvh w-dvw flex flex-col items-center justify-center">
          <div
            id="picker-container"
            className="flex flex-col w-4/5 lg:w-1/3 items-center justify-center gap-8
                       *:hover-underline *:hover:scale-110 *:duration-200"
          >
            <a
              className="text-white text-3xl lg:text-6xl font-family-secondary-extra-light self-start focus:outline-none focus:ring-2 focus:ring-white"
              href="/events"
              aria-label="Navigate to Events page"
            >
              EVENTI
            </a>
            <a
              className="text-white text-center text-3xl lg:text-6xl font-family-secondary-extra-bold focus:outline-none focus:ring-2 focus:ring-white"
              href="/productions"
              aria-label="Navigate to Productions page"
            >
              PRODUZIONI
            </a>
            <a
              className="text-white text-3xl lg:text-6xl font-family-secondary-extra-light self-end focus:outline-none focus:ring-2 focus:ring-white"
              href="/web-dev"
              aria-label="Navigate to Web Development page"
            >
              WEB DEV
            </a>
          </div>
        </div>
      )}
    </>
  );
}
