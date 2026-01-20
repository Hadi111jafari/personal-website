import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  image?: string;
  tags?: string[];
  content: string;
}

const postsDir = path.join(process.cwd(), "src/app/blog/posts");

export function getAllPosts(): BlogPost[] {
  const files = fs
    .readdirSync(postsDir)
    .filter((file) => file.endsWith(".mdx"));

  return files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const fullPath = path.join(postsDir, file);
      const fileContents = fs.readFileSync(fullPath, "utf-8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title,
        date: data.date,
        description: data.description,
        image: data.image,
        tags: data.tags || [],
        content,
      } as BlogPost;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | null {
  const fullPath = path.join(postsDir, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    date: data.date,
    description: data.description,
    image: data.image,
    tags: data.tags || [],
    content,
  } as BlogPost;
}

export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tags = new Set<string>();
  posts.forEach((post) => post.tags?.forEach((tag) => tags.add(tag)));
  return Array.from(tags).sort();
}

export function formatDate(date: string, includeRelative = false) {
  const current = new Date();
  const target = new Date(date);

  const years = current.getFullYear() - target.getFullYear();
  const months = current.getMonth() - target.getMonth();
  const days = current.getDate() - target.getDate();

  let relative = "";
  if (years > 0) relative = `${years}y ago`;
  else if (months > 0) relative = `${months}mo ago`;
  else if (days > 0) relative = `${days}d ago`;
  else relative = "Today";

  const fullDate = target.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return includeRelative ? `${fullDate} (${relative})` : fullDate;
}
