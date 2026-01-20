"use client";

import Image from "next/image";
import CornerSVG from "@/components/CornerSVG";
import React, { useState } from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import CornerArrow from "@/components/CornerArrow";

const apps = [
  {
    title: "ScreenDraw",
    description: "Simple screen annotation tool for macOS",
    link: "https://screendraw.mahdijafari.dev",
    screenshot: "/screenshot-screendraw.png",
    details:
      "A simple macOS application that lets you draw and annotate directly on your screen. Perfect for presentations, tutorials, and quick visual explanations. Features include customizable colors, brush sizes, and easy toggling of the drawing mode.",
    color: "#66662a",
  },
  {
    title: "Day Progress Plus",
    description: "Shows day progress in your Mac menubar.",
    link: "https://dayprogress.mahdijafari.dev",
    screenshot: "/screenshot-dayprogress.png",
    details:
      "See how much of your day has passed with a clean, minimalist menubar icon. Get a visual reminder of time passing to help you stay productive and make the most of each day. Includes customizable display options.",
    color: "#b1653b",
  },
];

function AccordionItem({
  app,
  index,
  openIndex,
  toggleAccordion,
}: {
  app: (typeof apps)[0];
  index: number;
  openIndex: number;
  toggleAccordion: (i: number) => void;
}) {
  const contentRef = React.useRef<HTMLDivElement>(null);
  const [measuredHeight, setMeasuredHeight] = React.useState(0);
  const isOpen = openIndex === index;

  React.useEffect(() => {
    if (contentRef.current) {
      setMeasuredHeight(contentRef.current.scrollHeight);
    }
  }, []);

  return (
    <div
      className="rounded-t-3xl -mt-5 overflow-hidden transition-all duration-300 first:rounded-t-3xl last:rounded-b-3xl"
      style={{ backgroundColor: app.color }}
    >
      <button
        onClick={() => toggleAccordion(index)}
        className="w-full text-left p-8 flex justify-between items-center transition-all duration-300 ease-in-out"
      >
        <div>
          <h3 className="text-3xl md:text-5xl mb-2.5 font-medium text-background">
            {app.title}
          </h3>
          <p className="text-background/80 font-stacksanstext">
            {app.description}
          </p>
        </div>

        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-background/20 text-background text-2xl">
          {String(index + 1).padStart(2, "0")}
        </div>
      </button>

      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? measuredHeight : 0,
        }}
        className="overflow-hidden transition-all duration-300 ease-in-out"
      >
        <div className="px-8 pb-8 flex flex-col md:flex-row gap-12 items-center md:items-start">
          <div className="text-background/80 w-full md:w-1/2">
            <p className="leading-relaxed font-stacksanstext">{app.details}</p>

            <Link
              href={app.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-background/80 rounded-4xl px-4.5 py-2.5 flex items-center text-foreground/80 gap-5 mt-2.5 w-fit hover:text-foreground/60 transition-colors duration-300"
            >
              Get the App
              <div className="border border-foreground/80 rounded-full p-2 group-hover:scale-105 group-hover:-rotate-[30deg] transition-all duration-300">
                <FaArrowRight aria-hidden="true" />
              </div>
            </Link>
          </div>

          <div className="rounded-2xl overflow-hidden w-full md:w-1/2 pb-2.5 h-80 relative">
            <Image
              src={app.screenshot}
              alt={`${app.title} screenshot`}
              fill
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AppsPage() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(index);
  };

  return (
    <>
      <div className="relative min-h-[90dvh] bg-background mt-20 md:mt-2.5 rounded-tl-4xl rounded-tr-4xl h-[90vh] md:h-full rounded-br-4xl w-full overflow-hidden">
        <Image
          src="/apps_hero.jpeg"
          alt="macOS Apps - Mahdi Jafari"
          fill
          className="object-cover w-full h-full aspect-video"
          priority
        />

        <div className="absolute bottom-0 w-4/5 md:w-1/2 h-1/5 bg-background pr-2 rounded-tr-4xl flex flex-col justify-center items-start">
          <CornerSVG className="w-6 h-6 absolute -top-6 left-0  rotate-270" />
          <CornerSVG className="w-6 h-6 absolute bottom-0 -right-6 rotate-270" />

          <Link
            href="#apps-details"
            aria-label="Get in Touch"
            className="bg-[url('/apps_hero.jpeg')] rounded-4xl flex flex-col relative p-8 group h-full w-full mt-2.5"
          >
            <span className="hover:scale-102 transition-transform duration-300">
              <h1 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
                Apps focused on simplicity and productivity.
              </h1>
            </span>
            <CornerArrow icon={FaArrowRight} ariaLabel="Get in Touch" />
          </Link>
        </div>
      </div>

      {/* Accordion */}
      <section className="my-20 p-2.5" id="apps-details">
        <div className="px-2.5 md:px-20">
          <div className="flex items-center justify-center mb-10">
            <div className="border border-current mb-5 uppercase text-sm transition duration-300 inline-flex rounded-3xl py-1.5 px-2.5">
              Apps Showcase
            </div>
          </div>

          <div className="flex flex-col">
            {apps.map((app, index) => (
              <AccordionItem
                key={app.title}
                app={app}
                index={index}
                openIndex={openIndex}
                toggleAccordion={toggleAccordion}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
