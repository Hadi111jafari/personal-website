"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import CornerArrow from "@/components/CornerArrow";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  image?: string;
  imageAlt?: string;
  tags?: string[];
  description: string;
}

interface BlogListProps {
  posts: BlogPost[];
  tags: string[];
}

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      key={post.slug}
      aria-label={`Read article: ${post.title}`}
      className="transition-all duration-500 group w-full h-full"
    >
      <div className="relative w-full h-64 rounded-tl-4xl rounded-tr-4xl rounded-bl-4xl overflow-hidden mb-4">
        <Image
          src={post.image || "/images/blog/1.jpg"}
          alt={post.imageAlt || post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <CornerArrow ariaLabel={`Read article: ${post.title}`} />
      </div>

      <div className="flex flex-col py-2.5 px-1">
        <h3 className="text-xl md:text-2xl mb-2.5 font-semibold group-hover:text-foreground/80 transition-colors">
          {post.title}
        </h3>
        <p className="text-foreground/90 group-hover:text-foreground/80 font-stacksanstext">
          {post.description}
        </p>

        <div className="flex gap-2 flex-wrap mt-4">
          {(post.tags || []).map((tag) => (
            <span
              key={tag}
              className="text-sm px-3 py-1 rounded-full bg-accent/20 text-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <time className="text-foreground/50 mt-4">
          {format(new Date(post.date), "MMMM dd, yyyy")}
        </time>
      </div>
    </Link>
  );
}

export default function BlogList({ posts, tags }: BlogListProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredPosts = selectedTag
    ? posts.filter((post) => (post.tags || []).includes(selectedTag))
    : posts;

  return (
    <section className="min-h-screen py-20 my-20 px-4 md:px-8" id="blog-list">
      <div className="max-w-7xl mx-auto">
        {/* Tag filters */}
        <div className="flex gap-3 flex-wrap mb-12">
          <button
            onClick={() => setSelectedTag(null)}
            className={`px-4 py-2 rounded-full transition-colors ${
              selectedTag === null
                ? "bg-accent text-accent-foreground"
                : "bg-foreground/10 hover:bg-foreground/20"
            }`}
          >
            All
          </button>
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedTag === tag
                  ? "bg-accent text-accent-foreground"
                  : "bg-foreground/10 hover:bg-foreground/20"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Blog grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <p className="text-center text-foreground/50 py-20">
            No posts found with this tag
          </p>
        )}
      </div>
    </section>
  );
}
