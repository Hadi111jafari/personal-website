"use client";

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import Link from "next/link";

const blogPosts = [
  {
    title: "Soft Skills for Software Engineers: Unlocking Success Beyond Code",
    excerpt:
      "Discover the essential soft skills every software engineer needs to thrive in their career. From communication to teamwork, unlock success beyond code.",
    link: "/blog/soft-skills-for-software-engineers",
  },
  {
    title: "10 Lessons I Learned from 6 Years of Being a Software Engineer",
    excerpt:
      "Reflecting on my 6-year journey as a software engineer, here are 10 valuable lessons I've learned that can help you navigate your own career in tech.",
    link: "/blog/lessons-a-software-engineer-learned",
  },
  {
    title: "Make Your FastAPI Responses Up to 5x Faster with One Simple Change",
    excerpt:
      "See how a simple change can boost your FastAPI response times. Learn the techniques to make your APIs faster and improve user experience.",
    link: "/blog/faster-api-response",
  },
  {
    title:
      "Common FastAPI Anti-Patterns: What to Avoid for Production-Ready APIs",
    excerpt:
      "FastAPI is a powerful framework, but certain anti-patterns can hinder performance and scalability. Learn what to avoid for production-ready APIs.",
    link: "https://python.plainenglish.io/common-fastapi-anti-patterns-what-to-avoid-for-production-ready-apis-651066b6aab1",
  },
  {
    title:
      "Building Real-Time Applications with FastAPI and WebSockets: A Practical Guide",
    excerpt:
      "Learn how to build real-time applications using FastAPI and WebSockets. This practical guide covers setup, implementation, and best practices for seamless real-time communication.",
    link: "https://python.plainenglish.io/building-real-time-applications-with-fastapi-and-websockets-a-practical-guide-a1eb42aba9ec",
  },
  {
    title: "Building GraphQL APIs with FastAPI: A Practical Guide",
    excerpt:
      "Learn how to build efficient GraphQL APIs using FastAPI. This practical guide covers setup, implementation, and best practices.",
    link: "https://python.plainenglish.io/building-graphql-apis-with-fastapi-a-practical-guide-6611d2db176a",
  },
  {
    title: "APIs That Scale: Lessons I Learned Building with FastAPI",
    excerpt:
      "Building scalable APIs is crucial. Here are the lessons I've learned using FastAPI to create APIs that can handle growth and demand effectively.",
    link: "https://python.plainenglish.io/apis-that-scale-lessons-i-learned-building-with-fastapi-cad20ad723da",
  },
  {
    title: "Geospatial APIs: Location, Maps, and Spatial Queries in Python",
    excerpt:
      "Learn how to handle location data, maps, and spatial queries to build powerful location-based applications.",
    link: "https://python.plainenglish.io/geospatial-apis-location-maps-and-spatial-queries-in-python-bf9cad88d33b",
  },
];

export default function BlogSlider() {
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
        navigation={{ nextEl: ".custom-next" }}
        onSlideChange={handleSlideChange}
        className="w-full hover:scale-101 transition-transform duration-300"
      >
        {blogPosts.map((post, index) => (
          <SwiperSlide key={`${post.link}-${index}`}>
            <Link
              href={post.link}
              target={post.link.startsWith("http") ? "_blank" : "_self"}
              rel={post.link.startsWith("http") ? "noopener noreferrer" : ""}
              className="flex w-full flex-col gap-2.5 justify-center items-center py-8"
              aria-label={`${post.title}${post.link.startsWith("http") ? " (opens in new tab)" : ""}`}
            >
              <h3 className="text-3xl text-foreground font-bold">
                {post.title}
              </h3>
              <p className="font-medium leading-normal tracking-wide text-foreground/80">
                {post.excerpt}
              </p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex items-center gap-4 w-full pr-16">
        <div className="flex gap-2 flex-1">
          {blogPosts.map((_, index) => {
            const width =
              activeIndex === index
                ? `${progress}%`
                : activeIndex > index
                  ? "100%"
                  : "0%";
            return (
              <div
                key={index}
                className="flex-1 h-1.5 bg-foreground/20 rounded-full overflow-hidden"
              >
                <div
                  className="h-full bg-foreground/50"
                  style={{
                    width,
                    transition: activeIndex === index ? "none" : "width 0.3s",
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
