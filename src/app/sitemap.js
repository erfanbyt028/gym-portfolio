import { siteConfig } from "@/lib/site";
import { blogPosts } from "@/data/blogs";

export default function sitemap() {
  const staticPages = [
    { url: "/", changeFrequency: "daily", priority: 1 },
    { url: "/aboutus", changeFrequency: "monthly", priority: 0.9 },
    { url: "/classes", changeFrequency: "weekly", priority: 0.9 },
    { url: "/blogs", changeFrequency: "daily", priority: 0.8 },
    { url: "/contactus", changeFrequency: "monthly", priority: 0.8 },
    { url: "/fitnessplan", changeFrequency: "monthly", priority: 0.85 },
    { url: "/bmi", changeFrequency: "monthly", priority: 0.7 },
  ];

  const blogPages = blogPosts.map((post) => ({
    url: `/blogs/${post.id}`,
    changeFrequency: "weekly",
    priority: 0.7,
    lastModified: post.dateISO ? new Date(post.dateISO) : new Date(),
  }));

  return [...staticPages, ...blogPages].map((page) => ({
    url: `${siteConfig.url}${page.url}`,
    lastModified: page.lastModified || new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
