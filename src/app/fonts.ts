import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";

export const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-ibm-plex-mono",
});

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "700"],
  variable: "--font-space-grotesk",
});
