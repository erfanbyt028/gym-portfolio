import { notFound } from "next/navigation";
import { getBlogById, blogPosts } from "@/data/blogs";
import {
  buildMetadata,
  buildArticleJsonLd,
  buildBreadcrumbJsonLd,
} from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import BlogDetailView from "./BlogDetailView";

// SSG: تمام مقالات در زمان build تولید می‌شوند
export const dynamic = "force-static";
export const dynamicParams = false;

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ id: String(post.id) }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const blog = getBlogById(id);

  if (!blog) {
    return buildMetadata({
      title: "مقاله یافت نشد",
      path: `/blogs/${id}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    title: blog.title,
    description: blog.desc,
    path: `/blogs/${blog.id}`,
    keywords: [blog.category, "مقاله فیتنس", "تناسب اندام"],
    type: "article",
    publishedTime: blog.dateISO || blog.date,
    authors: [{ name: blog.author }],
    image: blog.imagePath || "/images/trainer.jpg",
  });
}

export default async function BlogDetailPage({ params }) {
  const { id } = await params;
  const blog = getBlogById(id);

  if (!blog) notFound();

  return (
    <>
      <JsonLd data={buildArticleJsonLd(blog)} />
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "خانه", path: "/" },
          { name: "بلاگ", path: "/blogs" },
          { name: blog.title, path: `/blogs/${blog.id}` },
        ])}
      />
      <BlogDetailView blog={blog} />
    </>
  );
}
