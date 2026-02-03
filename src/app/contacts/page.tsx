"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Metadata from "@/components/Metadata";
import { Activity, Suspense } from "react";
import { useNav } from "@/contexts/NavContext";

export default function Contacts() {
  const { isNavOpen } = useNav();

  return (
    <>
      <Metadata
        title="Contatti - Frame"
        description="Con la nostra esperienza e la nostra attrezzatura all'avanguardia, siamo in grado di creare ricordi indelebili che dureranno per sempre."
        keywords="fotografia, fotografi frame, fotografi, frame"
      />

      <main className="flex h-dvh flex-col">
        <Navbar hasLeftPadding />

        <Activity mode={isNavOpen ? "hidden" : "visible"}>
          <Suspense fallback={<Footer fullScreen usesDate={false} />}>
            <Footer fullScreen />
          </Suspense>
        </Activity>
      </main>
    </>
  );
}
