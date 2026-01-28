"use client";

import { Activity, useEffect, useRef, useState } from "react";
import Gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { isPageRefresh } from "@/utils/preloader";
import { opacityFadeIn } from "@/utils/gsap";
import Navbar from "@/components/Navbar";
import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";
import images from "@/utils/images";
import Button from "@/components/Button";

const PRELOADER_TOTAL_DURATION = 4_000;
const PRODUCTIONS_CATEGORIES = [
  "Documentari",
  "Videoclip",
  "Cinema",
  "Commercial",
];

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
          <Navbar fixed hasBorder hasLeftPadding />
          {/* Hero Section */}
          <section className="relative text-white border-b-2 border-b-border panel snap-start">
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
              <Button onSubmit={() => {}} text="Start Project" />
            </div>
            {/* Scroll down button */}
            <div className="absolute left-4 bottom-8 md:left-8 md:bottom-12 lg:left-12 font-family-mono uppercase animate-bounce flex flex-col text-text-secondary">
              <div className="rotate-90">Scroll</div>
              <div className="h-px w-full rotate-90 bg-text-muted -translate-x-4 -translate-y-3" />
            </div>
          </section>

          {/* Productions Section */}
          <section className="text-white panel snap-start border-b-2 border-b-border">
            <div className="h-dvh flex flex-col items-center justify-center px-8 xl:px-[10dvw] space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
                <div className="font-family-secondary">
                  Cinematic Storytelling
                </div>
                <div className="md:w-[75%] font-family-regular-lg text-text-secondary md:mt-auto">
                  We craft visual narratives that resonate. Whether it&apos;s a
                  30-second spot or a feature-length documentary, our lens
                  captures the essence of your story.
                </div>

                <div className="flex flex-col space-y-2 md:space-y-4">
                  <div
                    className="text-accent font-family-regular-md uppercase
                                text-xs"
                  >
                    &#47;&#47; Services
                  </div>
                  <div>
                    {PRODUCTIONS_CATEGORIES.map((category, index) => (
                      <div
                        key={`production-category-${index}`}
                        className="flex flex-row items-center gap-2 md:gap-4 group cursor-pointer"
                      >
                        <div
                          className="w-2 group-hover:w-4 md:w-4 group-hover:md:w-8 lg:w-8
                                        group-hover:lg:w-12
                                        duration-(--transition-duration) h-px
                                        bg-border group-hover:bg-accent"
                        />
                        <div className="text-text-muted group-hover:text-white duration-(--transition-duration) font-family-grid-label text-2xl md:text-3xl lg:text-4xl">
                          {category}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Button */}
                <button
                  className="bg-primary border-2 border-white
                             font-family-button flex flex-row items-center
                             w-[75%] text-left p-4 md:p-8 md:text-xl lg:text-3xl cursor-pointer
                             hover:bg-white hover:text-primary
                             duration-(--transition-duration) group h-fit md:h-full"
                  type="button"
                >
                  <div>What do you want to create?</div>
                  <FiArrowUpRight
                    size={50}
                    className="group-hover:rotate-45 duration-(--transition-duration)"
                  />
                </button>
              </div>
            </div>
          </section>

          {/* Generic Events Section */}
          <section className="text-white panel snap-start border-b-2 border-b-border">
            <div className="h-dvh flex flex-col items-center justify-center px-8 md:px-12 lg:px-[10dvw]">
              <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 md:gap-12 grid-rows-[auto_auto]">
                <div className="flex flex-col space-y-2 md:space-y-4 lg:space-y-8 justify-center h-fit order-1">
                  <div className="font-family-secondary ">
                    We don&apos;t just plan events. We create memories.
                  </div>
                  <div className="md:w-[75%] font-family-regular-lg text-text-secondary">
                    Specializing in exclusive private parties and unforgettable
                    18th birthdays. From underground music sessions to high-end
                    celebrations, we handle every detail so you can own the
                    night.
                  </div>
                </div>

                <div className="relative group aspect-video md:aspect-auto lg:aspect-3/2 overflow-hidden order-3 md:order-2">
                  <Image
                    alt="18th Birthdays Image"
                    src={images.birthdays.header[1]}
                    className="w-full aspect-square object-cover object-bottom group-hover:scale-105 duration-(--grid-fade-in-duration)"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/60 to-black transition-opacity duration-(--grid-fade-in-duration) group-hover:opacity-80" />
                </div>

                <div className="order-2 md:order-3">
                  <Button
                    text="Book your party"
                    onSubmit={() => {}}
                    primary={false}
                  />
                </div>

                <div className="flex flex-col h-fit border-l-2 border-l-accent px-4 order-4">
                  <div className="font-family-mono uppercase">Trending now</div>
                  <div className="font-family-regular-lg text-lg md:text-xl lg:text-2xl font-bold">
                    Private
                    <br />
                    18th Birthday
                    <br />
                    Experiences
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 18th Birthdays Events Section */}
          <section className="text-white panel snap-start">
            <div className="h-dvh flex flex-col items-center justify-center px-8 md:px-12 lg:px-[10dvw]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 grid-rows-[auto_auto] items-center">
                <div className="flex flex-col space-y-2 md:space-y-4 lg:space-y-8 justify-center h-fit md:order-2">
                  <div className="font-family-secondary">
                    We don&apos;t just plan events. We create memories.
                  </div>
                  <div className="md:w-[75%] font-family-regular-lg text-text-secondary">
                    Specializing in exclusive private parties and unforgettable
                    18th birthdays. From underground music sessions to high-end
                    celebrations, we handle every detail so you can own the
                    night.
                  </div>
                  <Button
                    text="Book your party"
                    onSubmit={() => {}}
                    primary={false}
                  />
                </div>
                <div className="relative group aspect-square md:aspect-auto lg:aspect-square overflow-hidden md:order-1">
                  <Image
                    alt="18th Birthdays Image"
                    src={images.birthdays.header[1]}
                    className="w-full aspect-square md:aspect-auto lg:aspect-square object-cover object-bottom group-hover:scale-105 duration-(--grid-fade-in-duration)"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-primary opacity-80 transition-opacity duration-(--grid-fade-in-duration) group-hover:opacity-50" />
                  <div className="absolute bottom-8 left-8 flex flex-col h-fit border-l-2 border-l-accent px-4">
                    <div className="font-family-mono uppercase">
                      Trending now
                    </div>
                    <div className="font-family-regular-lg text-lg md:text-xl lg:text-2xl font-bold">
                      Private
                      <br />
                      18th Birthday
                      <br />
                      Experiences
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </Activity>
    </>
  );
}
