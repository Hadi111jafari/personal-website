"use client";

import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaPython, FaDocker, FaAws, FaReact } from "react-icons/fa";
import {
  SiFastapi,
  SiDjango,
  SiTypescript,
  SiJavascript,
  SiCelery,
  SiRedis,
  SiPostgresql,
  SiGooglecloud,
  SiOpenai,
  SiLangchain,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
} from "react-icons/si";
import { TbApi, TbBrandSocketIo } from "react-icons/tb";
import Link from "next/link";
import CornerArrow from "@/components/CornerArrow";

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
    title: "backend development",
    description:
      "Build fast, reliable APIs and server systems that scale with your business.",
    bgColor: "#dcb688",
    skills: [
      { name: "Python", icon: FaPython },
      { name: "FastAPI", icon: SiFastapi },
      { name: "Django", icon: SiDjango },
      { name: "WebSockets", icon: TbBrandSocketIo },
      { name: "Celery", icon: SiCelery },
      { name: "Redis", icon: SiRedis },
      { name: "REST API", icon: TbApi },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Docker", icon: FaDocker },
      { name: "AWS", icon: FaAws },
      { name: "GCP", icon: SiGooglecloud },
    ],
  },
  {
    title: "AI Engineering",
    description:
      "Create smart apps powered by LLMs, RAG systems, and custom AI solutions.",
    bgColor: "#d9db4d",
    skills: [
      { name: "OpenAI", icon: SiOpenai },
      { name: "LangChain", icon: SiLangchain },
      { name: "Python", icon: FaPython },
      { name: "FastAPI", icon: SiFastapi },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Redis", icon: SiRedis },
    ],
  },
  {
    title: "frontend development",
    description:
      "Build modern, responsive web apps with React, Next.js, and clean design.",
    bgColor: "#32c58b",
    skills: [
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Framer Motion", icon: SiFramer },
    ],
  },
];

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section className="my-20 p-2.5" id="skills">
      <div className="px-2.5">
        <div className="flex flex-col items-center justify-center">
          <div className="border border-current mb-10 uppercase text-sm transition duration-300 inline-flex rounded-3xl py-1.5 px-2.5">
            Skills & Services
          </div>

          <h4 className="transition duration-500 text-2xl md:text-3xl text-foreground/80 leading-relaxed mb-20 text-center max-w-3xl">
            Technologies I work with and services I offer.
          </h4>
        </div>
        <div className="block md:flex gap-2.5 space-y-2.5 md:space-y-0 justify-center items-stretch">
          {services.map((service) => (
            <Link
              href="#contact"
              key={service.title}
              aria-label={`Contact me about ${service.title}`}
              className="transition-all duration-500 group w-full md:w-1/3 block hover:scale-101 hover:-translate-y-1"
            >
              <div
                style={{ backgroundColor: service.bgColor }}
                className="rounded-4xl flex flex-col relative p-2.5 h-full group-hover:cursor-pointer transition-all duration-300"
              >
                <div className="p-8 flex flex-col h-full ">
                  <div className="flex-grow">
                    <h3 className="text-3xl md:text-4xl mb-2.5">
                      {service.title}
                    </h3>
                    <p className="text-lg text-foreground/90">
                      {service.description}
                    </p>
                  </div>

                  <div className="flex gap-2.5 pt-6 flex-wrap w-11/12">
                    {service.skills.map((skill, index) => {
                      const SkillIcon = skill.icon;
                      const skillKey = `${service.title}-${index}`;
                      const isHovered = hoveredSkill === skillKey;

                      return (
                        <div
                          key={index}
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
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-1 pointer-events-none"
                            }`}
                          >
                            {skill.name}
                            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 size-2 rotate-45 bg-white" />
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  <CornerArrow
                    icon={FaArrowRight}
                    ariaLabel="Message me for collaboration"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
