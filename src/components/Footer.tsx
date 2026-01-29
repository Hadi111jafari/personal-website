'use client';

import { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ScrollReveal';
import {
  scaleIn,
  fadeInUp,
  staggerContainer,
  scaleInSubtle,
} from '@/lib/animations';

const socials = [
  {
    name: 'GitHub',
    value: '@hadijafaridev',
    href: 'https://github.com/Hadi111jafari',
    icon: FaGithub,
  },
  {
    name: 'LinkedIn',
    value: '@hadijafaridev',
    href: 'https://linkedin.com/in/abdul-hadi-jafari',
    icon: FaLinkedin,
  },
];

export default function Footer() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <footer className="mt-20 py-2.5 mb-0" id="contact">
      <div>
        <motion.div
          className="flex flex-col items-center justify-center text-center mb-12 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={scaleIn}
            className="border border-current mb-5 uppercase text-sm transition duration-300 inline-flex rounded-3xl py-1.5 px-2.5"
          >
            Get In Touch
          </motion.h2>
          <motion.h4
            variants={fadeInUp}
            className="transition duration-500 text-2xl md:text-3xl text-foreground/80 leading-relaxed mb-4"
          >
            Want to collaborate? Email me or schedule a call.
          </motion.h4>
        </motion.div>

        <ScrollReveal
          variants={scaleInSubtle}
          className="flex flex-col rounded-4xl bg-foreground text-background w-full p-8 md:p-12 min-h-[55dvh] backdrop-blur-lg relative overflow-hidden"
        >
          {/* Main Email Section */}
          <div className="flex-grow flex flex-col justify-center items-center text-center relative z-10">
            <p className="mb-4 opacity-80 text-lg">
              I usually reply within 24 hours.
            </p>
            <Link
              href="mailto:abdulhadijafari2015@gmail.com?subject=Request%20for%20Collaboration"
              aria-label="Send an email to Mahdi Jafari"
              className="text-3xl md:text-5xl font-bold hover:opacity-70 transition-opacity duration-300 break-all px-4"
            >
              abdulhadijafari2015@gmail.com
            </Link>

            {/* Separator with "or" */}
            <div className="flex items-center gap-4 w-full max-w-md my-6 px-4">
              <div className="flex-1 h-px bg-background/20"></div>
              <span className="text-sm opacity-60 uppercase tracking-wider">
                or
              </span>
              <div className="flex-1 h-px bg-background/20"></div>
            </div>

            {/* Calendly Button */}
            <Link
              href="https://calendly.com/abdulhadi111/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-background text-foreground mb-6 px-6 py-3 rounded-full font-semibold hover:opacity-80 transition-opacity duration-300 text-base md:text-lg"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Schedule a 30-Min Call
            </Link>
          </div>

          {/* Social Links - Bottom Right */}
          <div className="mt-auto pt-8 flex flex-col-reverse sm:flex-row justify-between items-center border-t border-background/10 relative z-10 gap-4">
            <p className="text-sm opacity-60">
              © {new Date().getFullYear()} Hadi Jafari
            </p>
            <div className="flex items-center gap-4">
              {socials.map((social, index) => {
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    target={`_blank`}
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center transition-colors duration-200 "
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    aria-label={social.name}
                  >
                    <span
                      className={`absolute inset-1 rounded-lg transition-all duration-300 ease-out z-0 ${
                        hoveredIndex === index
                          ? 'opacity-100 scale-100'
                          : 'opacity-0 scale-90'
                      }`}
                    />

                    <span
                      className={`relative z-10 transition-all duration-300 ease-out ${
                        hoveredIndex === index
                          ? 'text-background'
                          : 'text-background/80'
                      }`}
                    >
                      <social.icon className="text-2xl pointer-events-none" />
                    </span>
                    <span
                      className={`absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-0.5 rounded-full bg-background transition-all duration-300 ease-out ${
                        hoveredIndex === index
                          ? 'w-3 opacity-100'
                          : 'w-0 opacity-0'
                      }`}
                    />

                    <span
                      className={`absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg bg-background text-foreground text-[11px] font-medium whitespace-nowrap transition-all duration-300 ease-out ${
                        hoveredIndex === index
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-1 pointer-events-none'
                      }`}
                    >
                      {social.name}
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 size-2 rotate-45 bg-background" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
