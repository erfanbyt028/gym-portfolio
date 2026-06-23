"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Play, Star, Dumbbell, HeartPulse } from "lucide-react";
import { MotionFloat, smoothEase } from "@/components/motion";
import headerImg from "../../public/images/header.webp";

const stats = [
  { icon: Dumbbell, value: "+۲۵۰", label: "برنامه تمرینی", color: "text-pink-500" },
  { icon: HeartPulse, value: "۹۸٪", label: "رضایت شاگردان", color: "text-cyan-500" },
  { icon: Star, value: "+۵K", label: "ورزشکار فعال", color: "text-amber-500" },
];

export default function Hero() {
  return (
    <section className="theme-hero relative flex min-h-screen w-full items-center justify-center overflow-hidden px-4 pt-28 pb-16 md:px-8 lg:px-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 h-[300px] w-[300px] rounded-full bg-pink-500/15 blur-[120px] dark:bg-pink-500/20" />
        <div className="absolute bottom-10 right-10 h-[300px] w-[300px] rounded-full bg-purple-500/15 blur-[120px] dark:bg-purple-500/20" />
        <div className="grid-bg absolute inset-0 opacity-50" />
      </div>

      <div className="relative z-10 grid w-full max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, ease: smoothEase }}
          className="text-center lg:text-right"
        >
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease: smoothEase }}
            className="theme-badge mb-8 inline-flex items-center gap-2 rounded-full px-5 py-2"
          >
            <Star size={16} className="fill-pink-500 text-pink-500" />
            <span className="text-sm font-medium">همراز قاسمی — مربی فیتنس قزوین</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8, ease: smoothEase }}
            className="text-4xl font-black leading-[1.15] sm:text-5xl md:text-7xl"
          >
            با همراز قاسمی
            <br />
            <span className="gradient-text">بهترین نسخه‌ات را بساز</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.75, ease: smoothEase }}
            className="theme-text-secondary mx-auto mt-8 max-w-2xl text-base leading-8 md:text-xl lg:mx-0"
          >
            مربی حرفه‌ای TRX و فیتنس در قزوین — برنامه تمرینی اختصاصی،
            تغذیه اصولی و پشتیبانی حرفه‌ای برای رسیدن به اهدافت.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.75, ease: smoothEase }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
          >
            <Link href="/fitnessplan" className="theme-btn-primary group flex w-full items-center justify-center gap-3 rounded-2xl px-8 py-4 sm:w-auto">
              شروع تمرین
              <ArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
            </Link>
            <Link href="/aboutus" className="theme-btn-outline flex w-full items-center justify-center gap-3 rounded-2xl px-8 py-4 sm:w-auto">
              <Play size={18} className="fill-current" />
              معرفی مربی
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75, duration: 0.8 }}
            className="mt-14 grid grid-cols-3 gap-3 sm:gap-4"
          >
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.08, ease: smoothEase }}
                  whileHover={{ y: -4, transition: { duration: 0.3 } }}
                  className="theme-card rounded-3xl p-4 sm:p-5"
                >
                  <Icon className={`mx-auto mb-2 lg:mx-0 ${stat.color}`} size={22} />
                  <h3 className="text-xl font-black sm:text-2xl">{stat.value}</h3>
                  <p className="theme-text-muted mt-1 text-xs sm:text-sm">{stat.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, ease: smoothEase, delay: 0.1 }}
          className="relative flex items-center justify-center"
        >
          <div className="absolute h-[300px] w-[300px] rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-[100px] md:h-[500px] md:w-[500px]" />
          <div className="absolute h-[320px] w-[320px] rounded-full border border-[var(--border-color)] md:h-[550px] md:w-[550px]" />

          <MotionFloat className="absolute top-10 left-0 z-20 md:left-10" duration={4.5}>
            <div className="theme-card rounded-2xl p-4">
              <p className="font-bold">🔥 کالری سوزی</p>
              <span className="text-sm text-pink-500">+۴۵۰ کالری امروز</span>
            </div>
          </MotionFloat>

          <MotionFloat duration={5.5}>
            <Image
              src={headerImg}
              alt="مربی تناسب اندام"
              priority
              className="relative z-10 h-auto w-full max-w-[550px] object-contain drop-shadow-[0_20px_60px_var(--shadow-glow)]"
            />
          </MotionFloat>
        </motion.div>
      </div>
    </section>
  );
}
