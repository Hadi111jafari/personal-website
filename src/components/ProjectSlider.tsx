'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import Link from 'next/link';

const projects = [
  {
    title: 'subconscious AI app',
    excerpt: 'AI-powered Market research tool',
    link: 'https://app.subconscious.ai/',
  },
  {
    title: 'subconscious AI website',
    excerpt: 'Marketing page for subconscious AI app',
    link: 'https://subconscious.ai/',
  },
  {
    title: 'AutomateApply',
    excerpt:
      'AI-powered job search platform with job discovery, resume tailoring, and application tracking',
    link: '/apps',
  },
  {
    title: 'TOEFLPrep.ai',
    excerpt:
      'Frontend contribution: migrated Supabase storage to Backblaze, unblocking payment processing and monetization',
    link: '/apps',
  },
  {
    title: 'Apps',
    excerpt: "See all the apps I've built",
    link: '/apps',
  },
  {
    title: 'GitHub',
    excerpt: 'See my other projects on GitHub',
    link: 'https://github.com/Hadi111jafari',
  },
];

const AUTOPLAY_DELAY_MS = 5000;

export default function ProjectSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col justify-between h-full p-2.5">
      <Swiper
        modules={[Navigation, Autoplay]}
        loop
        autoplay={{ delay: AUTOPLAY_DELAY_MS, disableOnInteraction: false }}
        navigation={{ nextEl: '.custom-next' }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full hover:scale-101 transition-transform duration-300"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={`${project.link}-${index}`}>
            <Link
              href={project.link}
              target={project.link.startsWith('http') ? '_blank' : '_self'}
              rel={project.link.startsWith('http') ? 'noopener noreferrer' : ''}
              className="flex w-full flex-col gap-2.5 justify-center items-center py-8"
              aria-label={`${project.title}${project.link.startsWith('http') ? ' (opens in new tab)' : ''}`}
            >
              <h3 className="text-3xl text-foreground font-bold">
                {project.title}
              </h3>
              <p className="font-medium leading-normal tracking-wide text-foreground/80">
                {project.excerpt}
              </p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex items-center gap-4 w-full pr-16">
        <div className="flex gap-2 flex-1">
          {projects.map((_, index) => {
            const filled = activeIndex > index;
            const active = activeIndex === index;
            return (
              <div
                key={index}
                className="flex-1 h-1.5 bg-foreground/20 rounded-full overflow-hidden"
              >
                <div
                  key={`${activeIndex}-${index}`}
                  className={`h-full bg-foreground/50 ${active ? 'slider-progress-fill' : ''}`}
                  style={{ width: filled ? '100%' : '0%' }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
