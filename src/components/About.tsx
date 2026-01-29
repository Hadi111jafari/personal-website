'use client';

import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';
import React from 'react';
import Image from 'next/image';
import Highlighter from '@/components/Highlighter';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ScrollReveal';
import {
  scaleIn,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  fadeInUp,
} from '@/lib/animations';

export default function About() {
  return (
    <section className="my-20 p-2.5" id="about">
      <div className="">
        <div className="flex items-center justify-center">
          <ScrollReveal variants={scaleIn}>
            <div className="border border-foreground mb-10 uppercase text-sm transition duration-300 inline-flex rounded-3xl py-1.5 px-2.5">
              about me
            </div>
          </ScrollReveal>
        </div>

        <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-center justify-center">
          <ScrollReveal
            variants={fadeInLeft}
            className="w-full md:w-1/2 h-auto"
          >
            <Image
              src="/hadijafari.jpg"
              alt="Hadi Jafari Picture"
              className="rounded-4xl aspect-4/5 object-cover w-full h-auto"
              width={500}
              height={625}
            />
          </ScrollReveal>

          <motion.div
            className="w-full md:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold mb-5">
              Front End Developer specializing in performance and scalable UI
              architecture.
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-foreground/80 mb-5 leading-relaxed font-stacksanstext"
            >
              I&apos;m a Frontend Developer specializing in{' '}
              <Highlighter className="font-bold text-foreground" size="md">
                React
              </Highlighter>{' '}
              and{' '}
              <Highlighter className="font-bold text-foreground" size="md">
                Next.js
              </Highlighter>{' '}
              with a strong focus on{' '}
              <Highlighter className="font-bold text-foreground" size="md">
                performance optimization
              </Highlighter>
              , scalable UI architecture, and resilient API integrations.
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-foreground/80 mb-5 leading-relaxed font-stacksanstext"
            >
              At{' '}
              <Highlighter className="font-bold text-foreground" size="md">
                Subconscious AI
              </Highlighter>
              , I improved{' '}
              <Highlighter className="font-bold text-foreground" size="md">
                Lighthouse scores to 90+
              </Highlighter>
              , reduced{' '}
              <Highlighter className="font-bold text-foreground" size="md">
                bundle sizes by ~30%
              </Highlighter>
              , and optimized{' '}
              <Highlighter className="font-bold text-foreground" size="md">
                Core Web Vitals
              </Highlighter>
              . I&apos;ve refactored state management with{' '}
              <Highlighter className="font-bold text-foreground" size="md">
                Zustand
              </Highlighter>
              , strengthened{' '}
              <Highlighter className="font-bold text-foreground" size="md">
                API reliability
              </Highlighter>
              , and delivered major UI flows using modern web technologies.
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-foreground/80 mb-5 leading-relaxed font-stacksanstext"
            >
              I&apos;m experienced in{' '}
              <Highlighter className="font-bold text-foreground" size="md">
                debugging complex UI flows
              </Highlighter>
              , implementing{' '}
              <Highlighter className="font-bold text-foreground" size="md">
                error boundaries
              </Highlighter>
              , resolving{' '}
              <Highlighter className="font-bold text-foreground" size="md">
                cross-browser compatibility
              </Highlighter>{' '}
              issues, and improving user experience through performance
              optimization and accessibility best practices.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-10"
            >
              <Link
                href="/#contact"
                aria-label="Get in Touch"
                className="bg-accent rounded-4xl px-4.5 py-2.5 flex items-center text-accent-foreground gap-5 group"
              >
                Get in Touch
                <div className="border border-accent-foreground rounded-full p-2 group-hover:scale-105 group-hover:-rotate-30 transition-all duration-300">
                  <FaArrowRight aria-hidden="true" />
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
