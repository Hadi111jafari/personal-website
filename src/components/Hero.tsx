import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import BlogSlider from "@/components/BlogSlider";
import React from "react";
import Image from "next/image";
import CornerSVG from "@/components/CornerSVG";
import CornerArrow from "@/components/CornerArrow";

function GetInTouchCard() {
  return (
    <Link
      href="#contact"
      aria-label="Get in Touch"
      className="bg-[#32c58b] hidden rounded-4xl md:flex flex-col relative p-8 group h-1/3 min-h-1/3"
    >
      <span className="hover:scale-102 transition-transform duration-300">
        <h3 className="text-3xl font-bold mb-2.5 h-fit md:z-50">
          Interested in collaborating?
        </h3>
        <p className="leading-normal text-lg max-w-[85%] text-foreground/80">
          Drop me a message.
        </p>
      </span>
      <CornerArrow icon={FaArrowRight} ariaLabel="Get in Touch" />
    </Link>
  );
}

function BlogCard() {
  return (
    <div className="bg-[#dcb688] rounded-4xl p-2.5 w-full flex flex-col gap-2.5 h-2/3 relative group">
      <BlogSlider />
      <Link href="/blog" className="z-40">
        <CornerArrow icon={FaArrowRight} ariaLabel="Blog Posts" />
      </Link>
    </div>
  );
}

function HeroLeft() {
  return (
    <div className="relative bg-background rounded-tl-4xl rounded-tr-4xl h-[90dvh] md:h-full rounded-br-4xl w-full md:w-3/4 overflow-hidden">
      <Image
        src="/hero.jpg"
        alt="Mahdi Jafari - Software Engineer"
        className="object-cover w-full h-full"
        fill
        priority
      />

      {/* Bottom left content box */}
      <div className="absolute bottom-0 w-4/5 md:w-1/2 h-1/5 bg-background pr-2 rounded-tr-4xl flex flex-col justify-center items-start">
        <CornerSVG className="w-6 h-6 absolute -top-6 left-0  rotate-270" />
        <CornerSVG className="w-6 h-6 absolute bottom-0 -right-6 rotate-270" />

        {/*<Link*/}
        {/*  href="#projects"*/}
        {/*  aria-label="Get in Touch"*/}
        {/*  className="bg-[url('/hero.jpg')] rounded-4xl flex flex-col relative p-8 group h-full w-full mt-2.5"*/}
        {/*>*/}
        {/*  <span className="hover:scale-102 transition-transform duration-300">*/}
        {/*    <h1 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">*/}
        {/*      Building systems that solve real problems.{" "}*/}
        {/*    </h1>*/}
        {/*  </span>*/}
        {/*  <CornerArrow icon={FaArrowRight} ariaLabel="Get in Touch" />*/}
        {/*</Link>*/}
        <h1 className="text-3xl md:text-4xl">
          Building systems that <span className="font-bold">solve real problems</span>
        </h1>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="w-full mt-20 md:mt-2.5" id="hero">
      <div className="block md:flex md:h-[90dvh] gap-2.5 space-y-2.5 md:space-y-0 overflow-hidden md:overflow-visible">
        <HeroLeft />

        <div className="w-full h-full md:w-1/4 flex flex-col gap-2.5 relative">
          <GetInTouchCard />
          <BlogCard />
        </div>
      </div>
    </section>
  );
}
