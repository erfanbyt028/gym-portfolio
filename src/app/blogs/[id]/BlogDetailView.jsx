"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  User,
  Share2,
  ChevronLeft,
  Lightbulb,
  Dumbbell,
} from "lucide-react";
import { blogPosts } from "@/data/blogs";
import { MotionDiv, MotionSection, MotionStagger, MotionItem, smoothEase } from "@/components/motion";

export default function BlogDetailView({ blog }) {
  const related = blogPosts.filter((p) => p.id !== blog.id).slice(0, 3);

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      await navigator.share({ title: blog.title, url });
    } else {
      await navigator.clipboard.writeText(url);
    }
  };

  return (
    <main className="theme-bg relative overflow-hidden pt-28 pb-16 transition-colors duration-500">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-pink-500/8 blur-3xl dark:bg-pink-500/12" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-cyan-500/8 blur-3xl dark:bg-cyan-500/12" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 md:px-8">
        <MotionDiv>
          <Link
            href="/blogs"
            className="mb-8 inline-flex items-center gap-2 font-bold text-pink-500 transition-colors hover:text-pink-400"
          >
            <ArrowRight size={18} />
            بازگشت به مقالات
          </Link>

          <div className="mb-6 flex flex-wrap items-center gap-3 text-sm">
            <span className="rounded-full bg-pink-500/10 px-4 py-1.5 font-bold text-pink-500">
              {blog.category}
            </span>
            <span className="theme-text-muted flex items-center gap-2">
              <CalendarDays size={16} /> {blog.date}
            </span>
            <span className="theme-text-muted flex items-center gap-2">
              <Clock3 size={16} /> {blog.readTime}
            </span>
            <span className="theme-text-muted flex items-center gap-2">
              <User size={16} /> {blog.author}
            </span>
          </div>

          <h1 className="mb-8 text-3xl font-black leading-tight md:text-5xl">
            {blog.title}
          </h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, ease: smoothEase }}
            className="relative mb-10 overflow-hidden rounded-[2rem]"
          >
            <Image
              src={blog.image}
              alt={blog.title}
              width={900}
              height={500}
              className="h-[280px] w-full object-cover md:h-[450px]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </motion.div>

          <div className="space-y-6">
            {blog.content.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: index * 0.06, duration: 0.6, ease: smoothEase }}
                className="theme-text-secondary text-lg leading-9"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {blog.tips && blog.tips.length > 0 && (
            <MotionSection className="theme-card mt-10 rounded-[2rem] p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-pink-500 to-cyan-500">
                  <Lightbulb className="text-white" size={22} />
                </div>
                <h2 className="text-2xl font-black">نکات کلیدی</h2>
              </div>
              <ul className="space-y-4">
                {blog.tips.map((tip, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, ease: smoothEase }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-pink-500/15 text-sm font-bold text-pink-500">
                      {i + 1}
                    </span>
                    <span className="theme-text-secondary leading-8">{tip}</span>
                  </motion.li>
                ))}
              </ul>
            </MotionSection>
          )}

          <div className="theme-card mt-10 flex flex-col gap-4 rounded-[2rem] p-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-pink-500 to-cyan-500">
                <Dumbbell className="text-white" size={24} />
              </div>
              <div>
                <p className="font-bold">نیاز به برنامه اختصاصی داری؟</p>
                <p className="theme-text-muted text-sm">همراز قاسمی آماده کمک است</p>
              </div>
            </div>
            <Link href="/fitnessplan" className="theme-btn-primary rounded-2xl px-6 py-3 text-center text-sm">
              دریافت برنامه رایگان
            </Link>
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-[var(--border-color)] pt-8 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              onClick={handleShare}
              className="theme-btn-outline flex items-center justify-center gap-2 rounded-2xl px-5 py-3"
            >
              <Share2 size={18} />
              اشتراک‌گذاری
            </button>
            <Link href="/contactus" className="theme-btn-primary rounded-2xl px-6 py-3 text-center">
              مشاوره رایگان
            </Link>
          </div>
        </MotionDiv>

        {related.length > 0 && (
          <MotionSection className="mt-20">
            <h2 className="mb-8 text-2xl font-black md:text-3xl">مقالات مرتبط</h2>
            <MotionStagger className="grid gap-6 sm:grid-cols-3">
              {related.map((item) => (
                <MotionItem key={item.id}>
                  <Link
                    href={`/blogs/${item.id}`}
                    className="theme-card group block overflow-hidden rounded-2xl transition-all hover:-translate-y-1"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={300}
                      height={180}
                      className="h-36 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="p-4">
                      <p className="mb-2 text-xs font-bold text-pink-500">{item.category}</p>
                      <h3 className="line-clamp-2 font-bold group-hover:text-pink-500 transition-colors">
                        {item.title}
                      </h3>
                      <span className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-pink-500">
                        مطالعه
                        <ChevronLeft size={14} />
                      </span>
                    </div>
                  </Link>
                </MotionItem>
              ))}
            </MotionStagger>
          </MotionSection>
        )}
      </div>
    </main>
  );
}
