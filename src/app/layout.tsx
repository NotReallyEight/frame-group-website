import "./globals.css";
import {
  ibmPlexMono,
  manrope,
  montserrat,
  playfairDisplay,
  robotoCondensed,
  robotoSlab,
  spaceGrotesk,
} from "./fonts";
import { Metadata } from "next";

const fonts = [
  ibmPlexMono.variable,
  manrope.variable,
  montserrat.variable,
  playfairDisplay.variable,
  robotoCondensed.variable,
  robotoSlab.variable,
  spaceGrotesk.variable,
].join(" ");

// Next.js automatically updates metadata using this export.
// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  icons: {
    icon: [
      {
        url: "/icon.ico",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark.ico",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fonts}>{children}</body>
    </html>
  );
}
