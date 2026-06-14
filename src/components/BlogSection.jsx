"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpLeft, Clock3, CalendarDays, ChevronLeft } from "lucide-react";
import { blogPosts } from "@/data/blogs";

export default function BlogSection() {
  const blogs = blogPosts.slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-[var(--bg-primary)] py-24 transition-colors duration-500">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-pink-300/15 blur-3xl dark:bg-pink-500/10" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-300/15 blur-3xl dark:bg-cyan-500/10" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
        <div className="mb-16 flex flex-col items-center justify-between gap-6 lg:flex-row">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-right"
          >
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-pink-500">
              BLOG & ARTICLES
            </p>
            <h2 className="text-4xl font-black leading-tight text-[var(--text-primary)] md:text-6xl">
              جدیدترین <span className="gradient-text">مقالات</span> ما
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
              نکات حرفه‌ای درباره تناسب اندام، تغذیه و سبک زندگی سالم از مربی حرفه‌ای ما.
            </p>
          </motion.div>

          <Link
            href="/blogs"
            className="group flex items-center gap-2 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)] px-6 py-4 font-bold text-[var(--text-primary)] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-pink-400 hover:text-pink-500"
          >
            مشاهده همه مقالات
            <ChevronLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-[2rem] border border-[var(--border-color)] bg-[var(--bg-secondary)] shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-pink-100/20 dark:hover:shadow-pink-500/10"
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80" />
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

                <h3 className="mb-4 line-clamp-2 text-xl font-black leading-relaxed text-[var(--text-primary)] transition-colors duration-300 group-hover:text-pink-500 sm:text-2xl">
                  {blog.title}
                </h3>

                <p className="mb-6 line-clamp-3 leading-8 text-[var(--text-secondary)]">
                  {blog.desc}
                </p>

                <Link
                  href={`/blogs/${blog.id}`}
                  className="group/btn inline-flex items-center gap-2 font-bold text-pink-500"
                >
                  مطالعه مقاله
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-500/10 transition-all duration-300 group-hover/btn:bg-pink-500 group-hover/btn:text-white">
                    <ArrowUpLeft
                      size={18}
                      className="transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
                    />
                  </span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
