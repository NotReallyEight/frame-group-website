import {
  IBM_Plex_Mono,
  Manrope,
  Montserrat,
  Playfair_Display,
  Roboto_Condensed,
  Roboto_Slab,
  Space_Grotesk,
} from "next/font/google";

export const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400"],
  style: ["italic", "normal"],
  variable: "--font-ibm-plex-mono",
});

export const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400"],
  variable: "--font-manrope",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "600", "800"],
  variable: "--font-montserrat",
});

export const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-playfair-display",
});

export const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-roboto-condensed",
});

export const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  display: "swap",
  weight: "700",
  variable: "--font-roboto-slab",
});

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400"],
  variable: "--font-space-grotesk",
});
