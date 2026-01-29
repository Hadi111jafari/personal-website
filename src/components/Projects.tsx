'use client';

import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ScrollReveal';
import { scaleIn, staggerContainer, fadeInUp } from '@/lib/animations';

const projects = [
  {
    title: 'Subconscious AI app',
    description: 'AI-powered Market research tool',
    link: 'https://app.subconscious.ai/',
    isExternal: true,
  },
  {
    title: 'Apps',
    description: "See all the apps I've built",
    link: '/apps',
    isExternal: false,
  },
  {
    title: 'GitHub',
    description: 'See my open-source projects on GitHub',
    link: 'https://github.com/Hadi111jafari',
    isExternal: true,
  },
];

export default function Projects() {
  return (
    <section className="my-20 p-2.5" id="projects">
      <div className="px-2.5 md:px-20">
        <div className="flex items-center justify-center">
          <ScrollReveal variants={scaleIn}>
            <div className="border border-current mb-5 uppercase text-sm transition duration-300 inline-flex rounded-3xl py-1.5 px-2.5">
              Selected Work
            </div>
          </ScrollReveal>
        </div>
        <motion.div
          className="flex flex-col"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={fadeInUp}>
              <Link
                href={project.link}
                target={project.isExternal ? '_blank' : '_self'}
                rel={project.isExternal ? 'noreferrer' : undefined}
                className="border-b border-foreground/25 hover:border-foreground/80 py-8 transition-all duration-500 group block"
                aria-label={`${project.title}${project.isExternal ? ' (opens in new tab)' : ''}`}
              >
                <div className="flex justify-between items-center">
                  <div className="">
                    <h3 className="text-5xl md:text-7xl mb-2.5 relative pl-0 group-hover:pl-5 transition-all duration-500 tracking-wide">
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-accent text-accent-foreground rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                      {project.title}
                    </h3>
                    <p className="text-2xl md:text-3xl text-foreground/90">
                      {project.description}
                    </p>
                  </div>
                  <div>
                    <FaArrowRight
                      aria-hidden="true"
                      className="rounded-full p-2.5 bg-accent text-accent-foreground -rotate-45 text-4xl transition-transform duration-300 group-hover:rotate-0"
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
