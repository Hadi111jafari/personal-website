'use client';

import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { FaReact, FaGitAlt, FaPalette } from 'react-icons/fa';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ScrollReveal';
import {
  scaleIn,
  fadeInUp,
  staggerContainer,
  popIn,
  staggerContainerFast,
} from '@/lib/animations';
import {
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiHtml5,
  SiCss3,
  SiVercel,
  SiDocker,
  SiGithub,
} from 'react-icons/si';
import { TbApi, TbBrandChrome } from 'react-icons/tb';
import Link from 'next/link';
import CornerArrow from '@/components/CornerArrow';

interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface Service {
  title: string;
  description: string;
  bgColor: string;
  skills: Skill[];
}

const services: Service[] = [
  {
    title: 'Core Technologies',
    description:
      'Building scalable, performant web applications with modern frameworks.',
    bgColor: '#32c58b',
    skills: [
      { name: 'React', icon: FaReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'HTML5', icon: SiHtml5 },
      { name: 'CSS3', icon: SiCss3 },
    ],
  },
  {
    title: 'Styling & UI',
    description:
      'Crafting responsive, accessible interfaces with modern CSS frameworks.',
    bgColor: '#f59e0b',
    skills: [
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'CSS Modules', icon: SiCss3 },
      { name: 'Shadcn UI', icon: FaPalette },
    ],
  },
  {
    title: 'State & APIs',
    description:
      'Managing complex state and building resilient API integrations.',
    bgColor: '#8b5cf6',
    skills: [
      { name: 'Zustand', icon: FaReact },
      { name: 'REST APIs', icon: TbApi },
      { name: 'React Context', icon: FaReact },
    ],
  },
  {
    title: 'Tools & DevOps',
    description:
      'Leveraging modern tools for development, debugging, and deployment.',
    bgColor: '#3b82f6',
    skills: [
      { name: 'Git', icon: FaGitAlt },
      { name: 'GitHub', icon: SiGithub },
      { name: 'Chrome DevTools', icon: TbBrandChrome },
      { name: 'Vercel', icon: SiVercel },
      { name: 'Docker', icon: SiDocker },
    ],
  },
];

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section className="my-20 p-2.5" id="skills">
      <div className="px-2.5">
        <div className="flex flex-col items-center justify-center">
          <ScrollReveal variants={scaleIn}>
            <div className="border border-current mb-10 uppercase text-sm transition duration-300 inline-flex rounded-3xl py-1.5 px-2.5">
              Skills
            </div>
          </ScrollReveal>

          <ScrollReveal variants={fadeInUp} delay={0.2}>
            <h4 className="transition duration-500 text-2xl md:text-3xl text-foreground/80 leading-relaxed mb-20 text-center max-w-3xl">
              Technologies and tools I use to build performant, scalable web
              applications.
            </h4>
          </ScrollReveal>
        </div>
        <motion.div
          className="block md:flex gap-2.5 space-y-2.5 md:space-y-0 justify-center items-stretch"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={fadeInUp}>
              <Link
                href="#contact"
                aria-label={`Contact me about ${service.title}`}
                className="transition-all duration-500 group w-full h-96 block hover:scale-101 hover:-translate-y-1"
              >
                <div
                  style={{ backgroundColor: service.bgColor }}
                  className="rounded-4xl flex flex-col relative p-2.5 h-full group-hover:cursor-pointer transition-all duration-300"
                >
                  <div className="p-8 flex flex-col h-full ">
                    <div className="grow">
                      <h3 className="text-3xl md:text-4xl mb-2.5">
                        {service.title}
                      </h3>
                      <p className="text-lg text-foreground/90">
                        {service.description}
                      </p>
                    </div>

                    <motion.div
                      className="flex gap-2.5 pt-6 flex-wrap w-11/12"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={staggerContainerFast}
                    >
                      {service.skills.map((skill, index) => {
                        const SkillIcon = skill.icon;
                        const skillKey = `${service.title}-${index}`;
                        const isHovered = hoveredSkill === skillKey;

                        return (
                          <motion.div
                            key={index}
                            variants={popIn}
                            className="relative"
                            onMouseEnter={() => setHoveredSkill(skillKey)}
                            onMouseLeave={() => setHoveredSkill(null)}
                          >
                            <div className="bg-background/20 backdrop-blur-sm p-2 rounded-lg hover:bg-background/50 transition-all duration-300 cursor-pointer">
                              <SkillIcon
                                className="text-xl text-foreground/80"
                                aria-hidden="true"
                              />
                            </div>
                            <span
                              className={`absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg bg-background text-foreground text-xs font-medium whitespace-nowrap transition-all duration-300 ease-out ${
                                isHovered
                                  ? 'opacity-100 translate-y-0'
                                  : 'opacity-0 translate-y-1 pointer-events-none'
                              }`}
                            >
                              {skill.name}
                              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 size-2 rotate-45 bg-white" />
                            </span>
                          </motion.div>
                        );
                      })}
                    </motion.div>

                    <CornerArrow
                      icon={FaArrowRight}
                      ariaLabel="Message me for collaboration"
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
