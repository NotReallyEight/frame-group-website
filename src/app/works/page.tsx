"use client";

import { PickerLinkBackground } from "@/components/MainScreenPicker/PickerLinkBackground";
import Metadata from "@/components/Metadata";
import Navbar from "@/components/Navbar";
import { useNav } from "@/contexts/NavContext";
import { Activity } from "react";

export default function Works() {
  const { isNavOpen } = useNav();

  return (
    <>
      <Metadata
        title="I Nostri Servizi - Frame"
        description="Produzioni creative, eventi, sviluppo web e noleggio attrezzatura professionale. Scopri tutti i nostri servizi e trova la soluzione giusta per il tuo progetto."
        keywords="produzioni video, produzioni creative, eventi, copertura eventi, sviluppo web, web development, siti web professionali, servizi digitali, noleggio attrezzatura, rental attrezzatura video, fotografia professionale, videomaking, soluzioni creative"
      />
      <div className="grid grid-cols-1 md:grid-cols-[2rem_1fr] grid-rows-[auto_1fr] text-white h-dvh p-0">
        <div className="hidden md:flex ml-8 w-px bg-border h-full" />
        {/* Header */}
        <Navbar />
        <Activity mode={isNavOpen ? "hidden" : "visible"}>
          <div className="hidden md:flex ml-8 w-px bg-border h-full" />
          {/* Grid */}
          <div>
            <div className="absolute w-full h-px left-0 bg-border" />
            <div
              className="grid grid-cols-2 justify-center items-center h-full
											 font-family-grid-label *:flex *:justify-start *:items-end
											 [&_span]:-translate-x-1 lg:[&_span]:mb-8 lg:[&_span]:ml-8
											 [&_span]:mb-4 [&_span]:ml-4
											 [&_span]:duration-(--grid-fade-in-duration) [&_a]:h-full
											 [&_a]:duration-(--grid-fade-in-duration) [&_a]:relative
											 [&_a]:hover:[&_img]:opacity-20
											 [&_a]:hover:[&_span]:scale-105 [&_a]:focus:outline-1
											 [&_a]:focus:outline-white
											 [&_a]:focus:[&_img]:opacity-20
											 [&_a_img]:duration-(--grid-fade-in-duration)
											 [&_a_img]:opacity-0 [&_a_img]:absolute [&_a_img]:top-0
											 [&_a_img]:left-0 [&_a_img]:-z-10"
            >
              <a href="/events" className="border-r border-r-border">
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
              <div className="absolute w-full h-px left-0 bg-border" />
              <a href="/web-dev" className="border-r border-r-border">
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
        </Activity>
      </div>
    </>
  );
}
