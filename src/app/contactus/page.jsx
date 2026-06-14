"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  Send,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";
import { FaInstagram, FaYoutube, FaTelegram } from "react-icons/fa";
import { MotionHero, MotionCard } from "@/components/motion";
import { siteConfig } from "@/lib/site";

const socials = [
  {
    icon: FaInstagram,
    name: "Instagram",
    color: "from-pink-500 to-fuchsia-500",
    link: siteConfig.social.instagram,
  },
  {
    icon: FaTelegram,
    name: "Telegram",
    color: "from-blue-400 to-cyan-500",
    link: siteConfig.social.telegram,
  },
  {
    icon: FaYoutube,
    name: "Youtube",
    color: "from-red-500 to-rose-500",
    link: siteConfig.social.youtube,
  },
];

const contactInfo = [
  {
    icon: Phone,
    title: "تماس با ما",
    lines: [siteConfig.mobile, siteConfig.phone],
    color: "from-pink-500 to-fuchsia-500",
    href: `tel:${siteConfig.mobile.replace(/\D/g, "")}`,
  },
  {
    icon: Mail,
    title: "ایمیل",
    lines: [siteConfig.email],
    color: "from-cyan-500 to-blue-500",
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: MapPin,
    title: "آدرس",
    lines: [siteConfig.address, `مربی فیتنس ${siteConfig.city}`],
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Clock3,
    title: "ساعات کاری",
    lines: ["شنبه تا پنجشنبه", "۷ صبح تا ۱۱ شب"],
    color: "from-amber-500 to-orange-500",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <main className="relative overflow-hidden bg-[var(--bg-primary)] pt-28 pb-16 transition-colors duration-500">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-pink-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="grid-bg absolute inset-0 opacity-40" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
        <MotionHero className="mb-16 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.4em] text-pink-500">
            Contact Us
          </p>
          <h1 className="mb-6 text-4xl font-black leading-tight text-[var(--text-primary)] md:text-6xl">
            ارتباط با <span className="gradient-text">{siteConfig.author}</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-[var(--text-secondary)]">
            برای مشاوره رایگان، ثبت‌نام کلاس‌ها و دریافت برنامه تمرینی با مربی
            فیتنس {siteConfig.city} در ارتباط باشید.
          </p>
        </MotionHero>

        <div className="grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-5"
          >
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              const content = (
                <div className="flex items-start gap-5">
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-r ${item.color} shadow-lg`}
                  >
                    <Icon size={22} className="text-white" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold text-[var(--text-primary)]">
                      {item.title}
                    </h3>
                    {item.lines.map((line) => (
                      <p key={line} className="text-[var(--text-secondary)]">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              );

              return (
                <MotionCard
                  key={index}
                  delay={index * 0.08}
                  className="rounded-3xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-6 backdrop-blur-xl transition-all duration-300 hover:border-pink-400/30"
                >
                  {item.href ? (
                    <a href={item.href} className="block">
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </MotionCard>
              );
            })}

            <div className="rounded-3xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-6">
              <h3 className="mb-5 text-xl font-black text-[var(--text-primary)]">
                شبکه‌های اجتماعی
              </h3>
              <div className="flex flex-wrap gap-3">
                {socials.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.name}
                      className={`flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-r ${item.color} p-3.5 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-110`}
                    >
                      <Icon size={22} />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-[var(--border-color)]">
              <iframe
                title={`موقعیت ${siteConfig.author} در ${siteConfig.city}`}
                src={`https://www.openstreetmap.org/export/embed.html?bbox=${siteConfig.geo.longitude - 0.08}%2C${siteConfig.geo.latitude - 0.05}%2C${siteConfig.geo.longitude + 0.08}%2C${siteConfig.geo.latitude + 0.05}&layer=mapnik&marker=${siteConfig.geo.latitude}%2C${siteConfig.geo.longitude}`}
                className="h-56 w-full border-0"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="relative overflow-hidden rounded-[2rem] border border-[var(--border-color)] bg-[var(--bg-secondary)] p-8 backdrop-blur-2xl"
          >
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-pink-500/10 blur-3xl" />

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 text-center"
              >
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-cyan-500">
                  <CheckCircle2 size={40} className="text-white" />
                </div>
                <h2 className="mb-3 text-2xl font-black text-[var(--text-primary)]">
                  پیام شما ارسال شد!
                </h2>
                <p className="mb-8 text-[var(--text-secondary)]">
                  به زودی با شما تماس خواهیم گرفت.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="rounded-2xl bg-gradient-to-r from-pink-500 to-cyan-500 px-8 py-3 font-bold text-white"
                >
                  ارسال پیام جدید
                </button>
              </motion.div>
            ) : (
              <>
                <div className="relative z-10 mb-8">
                  <div className="mb-3 flex items-center gap-3">
                    <MessageCircle className="text-pink-500" size={24} />
                    <h2 className="text-2xl font-black text-[var(--text-primary)]">
                      فرم تماس
                    </h2>
                  </div>
                  <p className="text-[var(--text-secondary)]">
                    سوالات و درخواست‌های خود را برای ما ارسال کنید.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
                  <div>
                    <label className="mb-2 block text-sm text-[var(--text-secondary)]">
                      نام کامل
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="نام خود را وارد کنید"
                      className="w-full rounded-2xl border border-[var(--border-color)] bg-[var(--bg-tertiary)] p-4 text-[var(--text-primary)] outline-none transition-all placeholder:text-[var(--text-muted)] focus:border-pink-400"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-[var(--text-secondary)]">
                      شماره تماس
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="09xxxxxxxxx"
                      className="w-full rounded-2xl border border-[var(--border-color)] bg-[var(--bg-tertiary)] p-4 text-[var(--text-primary)] outline-none transition-all placeholder:text-[var(--text-muted)] focus:border-pink-400"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-[var(--text-secondary)]">
                      موضوع
                    </label>
                    <select className="w-full rounded-2xl border border-[var(--border-color)] bg-[var(--bg-tertiary)] p-4 text-[var(--text-primary)] outline-none focus:border-pink-400">
                      <option>مشاوره رایگان</option>
                      <option>دریافت برنامه تمرینی</option>
                      <option>ثبت‌نام کلاس</option>
                      <option>سایر موارد</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-[var(--text-secondary)]">
                      پیام شما
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="پیام خود را بنویسید..."
                      className="w-full resize-none rounded-2xl border border-[var(--border-color)] bg-[var(--bg-tertiary)] p-4 text-[var(--text-primary)] outline-none transition-all placeholder:text-[var(--text-muted)] focus:border-pink-400"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileTap={{ scale: 0.98 }}
                    className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-pink-500 to-cyan-500 p-4 font-bold text-white shadow-[0_10px_40px_rgba(236,72,153,0.35)] transition-all duration-300 hover:scale-[1.02] disabled:opacity-70"
                  >
                    {loading ? "در حال ارسال..." : "ارسال پیام"}
                    <Send className="transition-transform duration-300 group-hover:-translate-x-1" />
                  </motion.button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </main>
  );
}
