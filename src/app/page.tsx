"use client";

import { useEffect, useRef, useState } from "react";
import Gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import { isPageRefresh } from "@/utils/preloader";
import { opacityFadeIn } from "@/utils/gsap";
import { PickerLinkBackground } from "@/components/MainScreenPicker/PickerLinkBackground";

const PRELOADER_TOTAL_DURATION = 4_000;

Gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, TextPlugin);

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);
  const preloaderLogoVideoRef = useRef<HTMLVideoElement>(null);
  const [hasVisited, setHasVisited] = useState<boolean | null>(null);
  const [currentTime, setCurrentTime] = useState<Date | null>();
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const refresh = isPageRefresh();

  useEffect(() => {
    let isMounted = true;

    if (hasVisited === null) {
      Promise.resolve().then(() =>
        setHasVisited(sessionStorage.getItem("has_visited_home") === "true")
      );
      return;
    }

    const scheduleNextTimeTick = () => {
      if (!isMounted) return;

      setCurrentTime(new Date());

      const currentDate = new Date();
      const msUntilNextMinute =
        (60 - currentDate.getSeconds()) * 1000 - currentDate.getMilliseconds();

      timeoutRef.current = setTimeout(() => {
        setCurrentTime(new Date());
        scheduleNextTimeTick();
      }, msUntilNextMinute);
    };

    void scheduleNextTimeTick();

    if (hasVisited && !refresh) {
      Promise.resolve().then(() => setLoading(false));
      return;
    }

    sessionStorage.setItem("has_visited_home", "true");
    void preloaderLogoVideoRef.current?.play();

    const preloaderFinishTimeout = setTimeout(() => {
      setLoading(false);
    }, PRELOADER_TOTAL_DURATION);

    return () => {
      isMounted = false;

      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }

      clearTimeout(preloaderFinishTimeout);
    };
  }, [hasVisited, refresh]);

  useGSAP(
    () => {
      if (loading) return;
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
          className={`absolute inset-0 flex h-dvh w-dvw items-center justify-center bg-black transition-opacity duration-700`}
          role="status"
          aria-live="polite"
          aria-label="Caricamento pagina in corso"
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
        <div
          className="grid grid-cols-[2rem_1fr] grid-rows-[auto_1fr] text-white h-dvh"
          id="picker-container"
        >
          <div className="mx-4 w-px bg-white/20 h-full" />
          {/* Container #1 */}
          <div className="flex flex-col lg:flex-row relative justify-between lg:p-8">
            <div className="flex flex-col h-fit mt-8 mb-12 lg:mb-0">
              <div className="font-family-header-digital leading-tight tracking-wide">
                I NOSTRI
                <br />
                SERVIZI.
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
                  {currentTime &&
                    String(currentTime.getHours()).padStart(2, "0")}
                  <span className="animate-[typing_1s_steps(1)_infinite]">
                    :
                  </span>
                  {currentTime &&
                    String(currentTime.getMinutes()).padStart(2, "0")}
                </div>
              </div>
              <div className="absolute w-dvw h-px -left-8 bottom-0 bg-white/20" />
            </div>
          </div>

          <div className="mx-4 w-px bg-white/20" />

          <div
            className="grid grid-cols-2 justify-center items-center h-full font-family-secondary-digital
                       *:flex *:items-center *:justify-center
                       [&_span]:-translate-x-1
                       [&_a]:h-full [&_a]:duration-200 [&_a]:relative
                       [&_a]:hover:[&_img]:opacity-20 [&_a]:focus:outline-1
                       [&_a]:focus:outline-white [&_a]:focus:[&_img]:opacity-20
                       [&_a_img]:duration-200 [&_a_img]:opacity-0 [&_a_img]:absolute
                       [&_a_img]:top-0 [&_a_img]:left-0 [&_a_img]:-z-10"
          >
            <a href="/events" className="border-r border-r-white/20">
              <span>EVENTI</span>
              <PickerLinkBackground
                alt="Foto di un evento"
                src="/assets/main-screen-picker/events-demo.webp"
              />
            </a>
            <a href="/productions">
              <span>PRODUZIONI</span>
              <PickerLinkBackground
                alt="Foto di un ciak"
                src="/assets/main-screen-picker/film-clapper-demo.webp"
              />
            </a>
            <div className="absolute w-full h-px left-0 bg-white/20" />
            <a href="/web-dev" className="border-r border-r-white/20">
              <span>WEB DEV</span>
              <PickerLinkBackground
                alt="Foto di un computer con del codice"
                src="/assets/main-screen-picker/web-dev-demo.webp"
              />
            </a>
            <a href="/rental">
              <span>RENTAL</span>
              <PickerLinkBackground
                alt="Foto di obiettivi"
                src="/assets/main-screen-picker/rental-demo.webp"
              />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
