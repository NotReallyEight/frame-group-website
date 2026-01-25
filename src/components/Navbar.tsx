"use client";

import Logo from "./Logo";
import { useGSAP } from "@gsap/react";
import { slideUpFadeIn } from "@/utils/gsap";
import { isPageRefresh } from "@/utils/preloader";

type Props = {
  fixed?: boolean;
  isHome?: boolean;
};

const sections: {
  name: string;
  href: string;
}[] = [
  {
    name: "Work",
    href: "/works",
  },
  {
    name: "Studio",
    href: "/studio",
  },
  {
    name: "Contact",
    href: "/contacts",
  },
];

const Navbar = ({ fixed, isHome }: Props) => {
  const hasVisited =
    typeof window !== "undefined" &&
    sessionStorage.getItem("has_visited_home") === "true";
  const refresh = isPageRefresh();

  useGSAP(() => {
    if (isHome && (!hasVisited || refresh)) slideUpFadeIn("#navbar");
  }, []);

  return (
    <header
      id="navbar"
      className={`${fixed ? "fixed" : ""} items-center grid grid-cols-[auto_1fr] md:grid-cols-3 w-full`}
    >
      <Logo />

      {/* Nav sections */}
      <nav className="flex flex-row items-center justify-center gap-4 md:gap-12 font-family-nav-link text-text-secondary">
        {sections.map((section, index) => (
          <a
            key={`nav-${index}`}
            href={section.href}
            className="hover:text-white duration-(--transition-duration)"
          >
            {section.name}
          </a>
        ))}
      </nav>

      {/* FPS counter */}
      <div className="md:flex hidden flex-row items-center ml-auto mr-12 gap-4 font-family-mono">
        {/* Circle */}
        <div className="bg-red-600/80 w-3.5 h-3.5 rounded-full motion-safe:animate-pulse" />
        <div className="text-text-secondary justify-center font-family-regular-italic-digital">
          FPS 24.00
        </div>
      </div>
    </header>
  );
};

export default Navbar;
