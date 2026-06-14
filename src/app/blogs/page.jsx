"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock3,
  Search,
  ArrowUpLeft,
} from "lucide-react";
import { blogPosts, blogCategories } from "@/data/blogs";
import { MotionHero, MotionCard } from "@/components/motion";

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("همه");

  const filteredBlogs = useMemo(() => {
    return blogPosts.filter((blog) => {
      const matchCategory =
        activeCategory === "همه" ||
        blog.category === activeCategory ||
        blog.category.includes(activeCategory);
      const matchSearch =
        !search ||
        blog.title.includes(search) ||
        blog.desc.includes(search) ||
        blog.category.includes(search);
      return matchCategory && matchSearch;
    });
  }, [search, activeCategory]);

  return (
    <main className="relative overflow-hidden bg-[var(--bg-primary)] pt-28 pb-16 transition-colors duration-500">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-pink-300/15 blur-3xl dark:bg-pink-500/10" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-300/15 blur-3xl dark:bg-cyan-500/10" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
        <MotionHero className="mb-16 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-pink-500">
            OUR BLOGS
          </p>
          <h1 className="text-4xl font-black leading-tight text-[var(--text-primary)] md:text-7xl">
            مقالات <span className="gradient-text">تناسب اندام</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[var(--text-secondary)]">
            جدیدترین مقالات تخصصی درباره ورزش، تغذیه، سلامت و سبک زندگی سالم.
          </p>
        </MotionHero>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mx-auto mb-12 flex max-w-2xl items-center gap-3 rounded-3xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 shadow-xl"
        >
          <Search className="shrink-0 text-[var(--text-muted)]" size={22} />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="جستجو در مقالات..."
            className="w-full bg-transparent text-[var(--text-primary)] outline-none placeholder:text-[var(--text-muted)]"
          />
        </motion.div>

        <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
          {blogCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-pink-500 to-cyan-500 text-white shadow-lg"
                  : "border border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:border-pink-400 hover:text-pink-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div>
          <motion.div
            key={`${activeCategory}-${search}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3"
          >
            {filteredBlogs.length === 0 ? (
              <div className="col-span-full py-20 text-center">
                <p className="text-xl font-bold text-[var(--text-secondary)]">
                  مقاله‌ای یافت نشد
                </p>
              </div>
            ) : (
              filteredBlogs.map((blog, index) => (
                <MotionCard
                  key={blog.id}
                  delay={index * 0.08}
                  className="group overflow-hidden rounded-[2rem] border border-[var(--border-color)] bg-[var(--bg-secondary)] shadow-xl transition-all duration-500 hover:shadow-2xl"
                >
                  <div className="relative overflow-hidden">
                    <div className="absolute left-5 top-5 z-20 rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-pink-500 backdrop-blur-xl">
                      {blog.category}
                    </div>
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      width={600}
                      height={400}
                      className="h-[240px] w-full object-cover transition-transform duration-700 group-hover:scale-110 sm:h-[260px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  </div>

                  <div className="p-6">
                    <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)]">
                      <div className="flex items-center gap-2">
                        <CalendarDays size={16} />
                        <span>{blog.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock3 size={16} />
                        <span>{blog.readTime}</span>
                      </div>
                    </div>

                    <h2 className="mb-4 line-clamp-2 text-xl font-black leading-relaxed text-[var(--text-primary)] transition-colors group-hover:text-pink-500 sm:text-2xl">
                      {blog.title}
                    </h2>

                    <p className="mb-6 line-clamp-3 leading-8 text-[var(--text-secondary)]">
                      {blog.desc}
                    </p>

                    <Link
                      href={`/blogs/${blog.id}`}
                      className="group/btn inline-flex items-center gap-2 font-bold text-pink-500"
                    >
                      مطالعه کامل
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-500/10 transition-all group-hover/btn:bg-pink-500 group-hover/btn:text-white">
                        <ArrowUpLeft size={18} />
                      </span>
                    </Link>
                  </div>
                </MotionCard>
              ))
            )}
          </motion.div>
        </div>

      </div>
    </main>
  );
}
