"use client";

import { useState } from "react";
import Logo from "./Logo";
import NavbarSections from "./NavbarSections";
import { useGSAP } from "@gsap/react";
import { slideUpFadeIn } from "@/utils/gsap";
import { isPageRefresh } from "@/utils/preloader";

type Props = {
  isHome?: boolean;
};

const sections: {
  name: string;
  href: string;
}[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Produzioni",
    href: "/productions",
  },
  {
    name: "Contatti",
    href: "/contacts",
  },
];

const Navbar = ({ isHome }: Props) => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState<boolean>(false);
  const hasVisited =
    typeof window !== "undefined" &&
    sessionStorage.getItem("has_visited_home") === "true";
  const refresh = isPageRefresh();

  const handleBurgerMenuToggle = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };

  useGSAP(() => {
    if (isHome && (!hasVisited || refresh)) slideUpFadeIn("#navbar");
  }, []);

  return (
    <div
      id="navbar"
      className="fixed top-4 right-4 left-4 z-10 mx-0 items-center justify-center gap-4 space-y-4 lg:top-7 lg:right-0 lg:left-0 lg:m-0 lg:mx-auto lg:w-2/3"
    >
      <div className="bg-lighter-black flex h-fit flex-row items-center justify-between rounded-xl px-7 py-4">
        <Logo />
        <NavbarSections
          sections={sections}
          toggleBurgerMenu={handleBurgerMenuToggle}
        />
      </div>
      <div
        className={`font-family-secondary *:bg-grey ${isBurgerMenuOpen ? "navbar-dropdown-sections-open flex" : "hidden"} bg-lighter-black flex-col items-center justify-center space-y-4 rounded-xl p-4 text-center text-base text-white *:self-stretch *:rounded-xl *:p-4 lg:hidden`}
      >
        {sections.map((section, index) => (
          <a
            href={section.href}
            key={`navbar-dropdown-section-${index}`}
            className="hover:bg-lighter-black duration-200"
          >
            {section.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
