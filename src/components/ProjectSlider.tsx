'use client';

import { useEffect, useRef, useState } from 'react';
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

export default function ProjectSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const autoplayDelay = 5000;

  const startTimeRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const animate = () => {
      const now = performance.now();
      const elapsed = now - startTimeRef.current;

      if (elapsed >= autoplayDelay) {
        setProgress(100);
        return;
      }

      setProgress((elapsed / autoplayDelay) * 100);
      rafRef.current = requestAnimationFrame(animate);
    };

    startTimeRef.current = performance.now();
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [activeIndex, autoplayDelay]);

  const handleSlideChange = (swiper: { realIndex: number }) => {
    setActiveIndex(swiper.realIndex);

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    startTimeRef.current = performance.now();
    setProgress(0);
    rafRef.current = requestAnimationFrame(() => {
      const animate = () => {
        const now = performance.now();
        const elapsed = now - startTimeRef.current;
        if (elapsed >= autoplayDelay) {
          setProgress(100);
          return;
        }
        setProgress((elapsed / autoplayDelay) * 100);
        rafRef.current = requestAnimationFrame(animate);
      };
      animate();
    });
  };

  return (
    <div className="flex flex-col justify-between h-full p-2.5">
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: autoplayDelay, disableOnInteraction: false }}
        loop
        navigation={{ nextEl: '.custom-next' }}
        onSlideChange={handleSlideChange}
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
            const width =
              activeIndex === index
                ? `${progress}%`
                : activeIndex > index
                  ? '100%'
                  : '0%';
            return (
              <div
                key={index}
                className="flex-1 h-1.5 bg-foreground/20 rounded-full overflow-hidden"
              >
                <div
                  className="h-full bg-foreground/50"
                  style={{
                    width,
                    transition: activeIndex === index ? 'none' : 'width 0.3s',
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
