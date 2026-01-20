import { getPostBySlug, getAllPosts, formatDate } from "@/lib/blog";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import type { ComponentPropsWithoutRef } from "react";
import { BlogCard } from "@/components/BlogList";

const components = {
  h1: (p: ComponentPropsWithoutRef<"h1">) => (
    <h1
      className="text-4xl md:text-5xl font-bold mt-12 mb-6 font-stacksansnotch"
      {...p}
    />
  ),
  h2: (p: ComponentPropsWithoutRef<"h2">) => (
    <h2
      className="text-3xl md:text-4xl font-bold mt-10 mb-4 font-stacksansnotch"
      {...p}
    />
  ),
  h3: (p: ComponentPropsWithoutRef<"h3">) => (
    <h3
      className="text-2xl md:text-3xl font-bold mt-8 mb-3 font-stacksansnotch"
      {...p}
    />
  ),
  h4: (p: ComponentPropsWithoutRef<"h4">) => (
    <h4
      className="text-xl md:text-2xl font-bold mt-6 mb-2 font-stacksansnotch"
      {...p}
    />
  ),
  h5: (p: ComponentPropsWithoutRef<"h5">) => (
    <h5
      className="text-lg md:text-xl font-bold mt-4 mb-2 font-stacksansnotch"
      {...p}
    />
  ),
  h6: (p: ComponentPropsWithoutRef<"h6">) => (
    <h6
      className="text-base md:text-lg font-bold mt-4 mb-2 font-stacksansnotch"
      {...p}
    />
  ),
  p: (p: ComponentPropsWithoutRef<"p">) => (
    <p className="text-lg leading-relaxed mb-6 font-stacksanstext" {...p} />
  ),
  a: (p: ComponentPropsWithoutRef<"a">) => (
    <a
      className="text-[#0046c7] underline inline-flex items-center gap-1"
      {...p}
    >
      {p.children}
    </a>
  ),
  blockquote: (p: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className="border-l-4 border-accent pl-6 py-2 mb-6 italic text-foreground"
      {...p}
    />
  ),
  ul: (p: ComponentPropsWithoutRef<"ul">) => (
    <ul className="list-disc list-inside mb-6 space-y-2" {...p} />
  ),
  ol: (p: ComponentPropsWithoutRef<"ol">) => (
    <ol className="list-decimal list-inside mb-6 space-y-2" {...p} />
  ),
  li: (p: ComponentPropsWithoutRef<"li">) => (
    <li className="text-lg leading-relaxed" {...p} />
  ),
  hr: (p: ComponentPropsWithoutRef<"hr">) => (
    <hr className="my-8 border-t border-foreground/40" {...p} />
  ),
  code: (p: ComponentPropsWithoutRef<"code">) => (
    <code
      className="bg-foreground/10 rounded p-2.5 font-ibmplexmono text-sm"
      {...p}
    />
  ),
  pre: (p: ComponentPropsWithoutRef<"pre">) => (
    <pre
      className="bg-foreground/10 rounded-lg p-4 mb-6 overflow-x-auto"
      {...p}
    />
  ),
};

export default async function BlogPost(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;

  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { content } = await compileMDX({
    source: post.content,
    components,
    options: {
      mdxOptions: {
        rehypePlugins: [
          [
            rehypePrettyCode,
            {
              theme: "github-dark",
              keepBackground: true,
            },
          ],
        ],
      },
    },
  });

  const allPosts = getAllPosts().filter((p) => p.slug !== slug);
  const relatedPosts = allPosts.slice(0, 3);

  return (
    <article className="py-20 my-10 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-foreground hover:text-accent mb-8 transition-colors"
        >
          <FaArrowLeft />
          Back to articles
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-2.5 capitalize">
            {post.title}
          </h1>
          <div className="flex items-center gap-2.5 mt-8 text-foreground">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            {post.tags && post.tags.length > 0 && (
              <div className="flex gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-accent/50 text-foreground px-2 py-1 rounded-full font-stacksanstext"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </header>

        {post.image && (
          <div className="relative w-full h-[400px] rounded-2xl overflow-hidden mb-12">
            <Image
              src={post.image}
              fill
              alt={post.title}
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="prose prose-lg max-w-none font-stacksanstext font-normal">
          {content}
        </div>

        {relatedPosts.length > 0 && (
          <section className="mt-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((rel) => (
                <BlogCard key={rel.slug} post={rel} />
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
