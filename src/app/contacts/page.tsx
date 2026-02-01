"use client";

import Navbar from "@/components/Navbar";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Footer from "@/components/Footer";
import Metadata from "@/components/Metadata";
import { Suspense } from "react";

export default function Contacts() {
  return (
    <>
      <Metadata
        title="Contatti - Frame"
        description="Con la nostra esperienza e la nostra attrezzatura all'avanguardia, siamo in grado di creare ricordi indelebili che dureranno per sempre."
        keywords="fotografia, fotografi frame, fotografi, frame"
      />

      <main className="flex h-dvh flex-col">
        <Navbar hasLeftPadding />
        <ScrollToTopButton />

        <Suspense fallback={<Footer fullScreen usesDate={false} />}>
          <Footer fullScreen />
        </Suspense>
      </main>
    </>
  );
}
