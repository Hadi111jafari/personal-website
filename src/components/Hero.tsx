'use client';

import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';
import Image from 'next/image';
import CornerSVG from '@/components/CornerSVG';
import CornerArrow from '@/components/CornerArrow';
import ProjectSlider from '@/components/ProjectSlider';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ScrollReveal';
import { scaleInSubtle, staggerContainer, fadeInUp } from '@/lib/animations';

function GetInTouchCard() {
  return (
    <motion.div
      variants={fadeInUp}
      className="bg-[url('/contactbg.jpeg')] bg-cover bg-center hidden rounded-4xl md:flex flex-col relative p-8 group h-1/3 min-h-1/3 justify-center items-center"
    >
      <div className="absolute inset-0 bg-white/50 rounded-4xl"></div>
      <Link
        href="mailto:abdulhadijafari2015@gmail.com"
        aria-label="Email me"
        className="z-10 text-center w-full flex flex-col justify-center items-center h-full"
      >
        <p className="leading-[80px] text-xl font-bold text-gray-800 transition-transform duration-300">
          abdulhadijafari2015@gmail.com
        </p>
        <h3 className="text-2xl h-fit absolute bottom-8 left-12 text-gray-800 font-semibold">
          Get in Touch
        </h3>
      </Link>
      <Link href="/#contact" className="z-20">
        <CornerArrow icon={FaArrowRight} ariaLabel="Go to contact section" />
      </Link>
    </motion.div>
  );
}

function ProjectCard() {
  return (
    <motion.div
      variants={fadeInUp}
      className="bg-[#e2e2e2] rounded-4xl p-2.5 w-full flex flex-col gap-2.5 h-2/3 relative group"
    >
      <ProjectSlider />
      <Link href="/#projects" className="z-40">
        <CornerArrow icon={FaArrowRight} ariaLabel="Projects" />
      </Link>
    </motion.div>
  );
}

function HeroLeft() {
  return (
    <ScrollReveal
      variants={scaleInSubtle}
      className="relative bg-background rounded-tl-4xl rounded-tr-4xl h-[90dvh] md:h-full rounded-br-4xl w-full md:w-3/4 overflow-hidden"
    >
      <Image
        src="/hero.jpg"
        alt="Hadi Jafari - Frontend Developer"
        className="object-cover w-full h-full"
        fill
        priority
      />

      {/* Bottom left content box */}
      <motion.div
        className="absolute bottom-0 left-0 flex flex-col items-start"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.div
          variants={fadeInUp}
          className="bg-background px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-4 rounded-tr-2xl sm:rounded-tr-3xl md:rounded-tr-4xl relative"
        >
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal leading-tight whitespace-nowrap">
            Building apps
          </h1>
          <CornerSVG className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 absolute bottom-0 -right-4 sm:-right-5 md:-right-6 rotate-270" />
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="bg-background px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-4 rounded-tr-2xl sm:rounded-tr-3xl md:rounded-tr-4xl relative"
        >
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal leading-tight whitespace-nowrap">
            with <span className="font-bold">optemized performance</span>
          </h1>
          <CornerSVG className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 absolute bottom-0 -right-4 sm:-right-5 md:-right-6 rotate-270" />
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="bg-background px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-4 rounded-tr-2xl sm:rounded-tr-3xl md:rounded-tr-4xl relative"
        >
          <h1 className="text-md sm:text-xl md:text-2xl lg:text-3xl font-normal leading-tight whitespace-nowrap">
            that <span className="font-bold">scale </span> and are built with{' '}
            <span className="font-bold">clean architecture </span>
          </h1>
          <CornerSVG className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 absolute bottom-0 -right-4 sm:-right-5 md:-right-6 rotate-270" />
        </motion.div>

        <CornerSVG className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 absolute -top-4 sm:-top-5 md:-top-6 left-0 rotate-270" />
      </motion.div>
    </ScrollReveal>
  );
}

export default function Hero() {
  return (
    <section className="w-full mt-20 md:mt-2.5" id="hero">
      <div className="block md:flex md:h-[90dvh] gap-2.5 space-y-2.5 md:space-y-0 overflow-hidden md:overflow-visible">
        <HeroLeft />

        <motion.div
          className="w-full h-full md:w-1/4 flex flex-col gap-2.5 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <ProjectCard />
          <GetInTouchCard />
        </motion.div>
      </div>
    </section>
  );
}
