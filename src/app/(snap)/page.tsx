"use client";

import { Activity, useEffect, useRef, useState } from "react";
import Gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { isPageRefresh } from "@/utils/preloader";
import { opacityFadeIn } from "@/utils/gsap";
import Navbar from "@/components/Navbar";

const PRELOADER_TOTAL_DURATION = 4_000;

Gsap.registerPlugin(useGSAP);

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);
  const preloaderLogoVideoRef = useRef<HTMLVideoElement>(null);
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

    sessionStorage.setItem("has_visited_home", "true");
    void preloaderLogoVideoRef.current?.play();

    const preloaderFinishTimeout = setTimeout(() => {
      setLoading(false);
    }, PRELOADER_TOTAL_DURATION);

    return () => {
      clearTimeout(preloaderFinishTimeout);
    };
  }, [hasVisited, refresh]);

  useGSAP(
    () => {
      if (loading) return;
      opacityFadeIn("#container");
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

      <Activity mode={loading ? "visible" : "hidden"}>
        <div
          className={`absolute inset-0 flex h-dvh w-dvw items-center justify-center bg-black transition-opacity duration-(--grid-fade-in-duration)`}
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
      </Activity>

      <Activity mode={loading ? "hidden" : "visible"}>
        <main className="" id="container">
          <Navbar fixed hasBorder />
          {/* Hero Section */}
          <section className="text-white border-b-2 border-b-border panel snap-start">
            <div className="flex flex-col items-start justify-center h-dvh px-8 md:px-12 lg:px-[10dvw] gap-8 md:max-w-half-width">
              <h1 className="font-family-header *:block">
                <span>Ogni</span>
                <span>Grande</span>
                <span>Storia.</span>
              </h1>
              <p className="w-full font-family-regular-lg text-text-secondary pl-4 border-l-2 border-l-white">
                We are a multi-disciplinary creative studio crafting digital
                experiences, visual narratives, and immersive events.
              </p>
              <button
                className="bg-white text-primary p-4 font-family-button
                         border-2 border-white hover:bg-primary
                         hover:text-white duration-(--transition-duration)
                         cursor-pointer"
                type="submit"
                onSubmit={() => {}}
              >
                Start Project
              </button>
            </div>
            {/* Scroll down button */}
            <div className="absolute left-4 bottom-8 md:left-8 md:bottom-12 lg:left-12 font-family-mono uppercase animate-bounce flex flex-col text-text-secondary">
              <div className="rotate-90">Scroll</div>
              <div className="h-px w-full rotate-90 bg-text-muted -translate-x-4 -translate-y-3" />
            </div>
          </section>

          {/* Productions Section */}
          <section className="text-white panel snap-start">
            <div className="flex flex-col items-start justify-center h-dvh px-8 md:px-12 lg:px-[10dvw] gap-8 md:max-w-half-width">
              <h1 className="font-family-header *:block">
                <span>Ogni</span>
                <span>Grande</span>
                <span>Storia.</span>
              </h1>
              <p className="w-full font-family-regular-lg text-text-secondary pl-4 border-l-2 border-l-white">
                We are a multi-disciplinary creative studio crafting digital
                experiences, visual narratives, and immersive events.
              </p>
              <button
                className="bg-white text-primary p-4 font-family-button
                         border-2 border-white hover:bg-primary
                         hover:text-white duration-(--transition-duration)
                         cursor-pointer"
                type="submit"
                onSubmit={() => {}}
              >
                Start Project
              </button>
            </div>
          </section>

          {/* Productions Section */}
          <section className="text-white panel snap-start">
            <div className="flex flex-col items-start justify-center h-dvh px-8 md:px-12 lg:px-[10dvw] gap-8 md:max-w-half-width">
              <h1 className="font-family-header *:block">
                <span>Ogni</span>
                <span>Grande</span>
                <span>Storia.</span>
              </h1>
              <p className="w-full font-family-regular-lg text-text-secondary pl-4 border-l-2 border-l-white">
                We are a multi-disciplinary creative studio crafting digital
                experiences, visual narratives, and immersive events.
              </p>
              <button
                className="bg-white text-primary p-4 font-family-button
                         border-2 border-white hover:bg-primary
                         hover:text-white duration-(--transition-duration)
                         cursor-pointer"
                type="submit"
                onSubmit={() => {}}
              >
                Start Project
              </button>
            </div>
          </section>
        </main>
      </Activity>
    </>
  );
}
