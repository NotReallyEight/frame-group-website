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
  const [currentTime, setCurrentTime] = useState<Date | null>();

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

    const scheduleNextTimeTick = () => {
      setCurrentTime(new Date());

      const currentDate = new Date();
      const msUntilNextMinute =
        (60 - currentDate.getSeconds()) * 1000 - currentDate.getMilliseconds();

      setTimeout(() => {
        setCurrentTime(new Date());
        scheduleNextTimeTick();
      }, msUntilNextMinute);
    };

    void scheduleNextTimeTick();

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
                className="font-family-regular-extra-light typewriter inline text-lg lg:text-xl text-white after:ml-1 after:border-r-2 after:border-r-white"
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
        <div className="grid grid-cols-[2rem_1fr] grid-rows-[auto_1fr] text-white h-dvh">
          <div className="mx-4 w-px bg-white/20 h-full" />
          {/* Container #1 */}
          <div className="flex flex-col lg:flex-row relative justify-between lg:p-8">
            <div className="flex flex-col h-fit mt-8 mb-12 lg:mb-0">
              <div className="font-family-header-digital leading-tight tracking-wide">
                I NOSTRI
                <br />
                SERVIZI
              </div>
            </div>
            {/* Easter Eggs */}
            <div className="flex flex-col h-full justify-between lg:p-8">
              {/* FPS counter */}
              <div className="lg:flex flex-row items-center gap-2 lg:gap-4 hidden">
                {/* Circle */}
                <div className="bg-red-600/80 w-3.5 h-3.5 rounded-full motion-safe:animate-pulse" />
                <div className="text-white/80 justify-center font-family-regular-italic-digital">
                  FPS 24.00
                </div>
              </div>
              <div className="flex flex-col gap-1 mb-12 lg:mb-0 relative lg:text-right">
                <div className="justify-center text-white/50 font-family-regular-digital tracking-wide">
                  TIME ZONE
                </div>
                <div className="font-family-regular-digital">
                  ROME
                  <br />
                  {currentTime?.getHours()}
                  <span className="animate-[typing_1s_steps(1)_infinite]">
                    :
                  </span>
                  {currentTime?.getMinutes()}
                </div>
              </div>
              <div className="absolute w-dvw h-px -left-8 bottom-0 bg-white/20" />
            </div>
          </div>

          <div className="mx-4 w-px bg-white/20" />
          {/* Picker Container */}
          <div
            className="grid grid-cols-2 justify-center items-center h-full font-family-secondary-digital
                       *:flex *:items-center *:justify-center
                       [&_span]:-translate-x-1"
          >
            <div className="h-full border-r border-r-white/20">
              <span>EVENTI</span>
            </div>
            <div>PRODUZIONI</div>
            <div className="absolute w-dvw h-px left-0 bg-white/20" />
            <div className="h-full border-r border-r-white/20">
              <span>WEB DEV</span>
            </div>
            <div>RENTAL</div>
          </div>
        </div>
      )}
    </>
  );
}
