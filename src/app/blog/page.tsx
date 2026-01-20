import { getAllPosts, getAllTags } from "@/lib/blog";
import BlogList from "@/components/BlogList";
import { Metadata } from "next";
import CornerSVG from "@/components/CornerSVG";
import Image from "next/image";
import Link from "next/link";
import CornerArrow from "@/components/CornerArrow";
import { FaArrowRight } from "react-icons/fa6";
import React from "react";

export default async function BlogPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <>
      <div className="relative min-h-[90dvh] bg-background mt-20 md:mt-2.5 rounded-tl-4xl rounded-tr-4xl h-[90vh] md:h-full rounded-br-4xl w-full overflow-hidden">
        <Image
          src="/blog_hero1.jpeg"
          alt="Blog - Mahdi Jafari"
          fill
          className="object-cover w-full h-full aspect-video"
          priority
        />

        {/* Bottom left content box */}
        <div className="absolute bottom-0 w-4/5 md:w-1/2 h-1/5 bg-background pr-2 rounded-tr-4xl flex flex-col justify-center items-start">
          <CornerSVG className="w-6 h-6 absolute -top-6 left-0  rotate-270" />
          <CornerSVG className="w-6 h-6 absolute bottom-0 -right-6 rotate-270" />

          <Link
            href="#blog-list"
            aria-label="Get in Touch"
            className="bg-[url('/blog_hero1.jpeg')] rounded-4xl flex flex-col relative p-8 group h-full w-full mt-2.5"
          >
            <span className="hover:scale-102 transition-transform duration-300">
              <h1 className="text-2xl md:text-3xl font-bold mb-3 leading-tight -mt-2.5 md:mt-0">
                Read my articles on Backend, AI, and Frontend Development.
              </h1>
            </span>
            <CornerArrow icon={FaArrowRight} ariaLabel="Get in Touch" />
          </Link>
        </div>
      </div>
      <BlogList posts={posts} tags={tags} />;
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Blog - Mahdi Jafari",
    description:
      "Read my articles on Python, FastAPI, AI/LLM engineering, and web development.",
  };
}
