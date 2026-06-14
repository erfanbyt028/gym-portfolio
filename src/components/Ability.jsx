"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Play, Sparkles, ShieldCheck, Trophy, Dumbbell } from "lucide-react";
import { MotionFloat, smoothEase } from "@/components/motion";
import headerImg from "../../public/images/ability.png";

export default function Ability() {
  return (
    <section className="theme-section relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 h-[300px] w-[300px] rounded-full bg-pink-500/10 blur-[120px] dark:bg-pink-500/20" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[120px] dark:bg-cyan-500/20" />
        <div className="grid-bg absolute inset-0 opacity-40" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: smoothEase }}
            className="relative flex justify-center"
          >
            <div className="absolute h-[320px] w-[320px] rounded-full bg-gradient-to-r from-pink-500/20 to-cyan-500/20 blur-[120px] md:h-[500px] md:w-[500px]" />
            <div className="absolute h-[330px] w-[330px] rounded-full border border-[var(--border-color)] md:h-[560px] md:w-[560px]" />

            <MotionFloat className="absolute top-5 left-0 z-20 md:left-10" duration={4.5}>
              <div className="theme-card rounded-3xl p-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-pink-500 to-cyan-500">
                    <Trophy className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">+۱۲ سال تجربه</h4>
                    <p className="theme-text-muted text-sm">در حوزه فیتنس و سلامت</p>
                  </div>
                </div>
              </div>
            </MotionFloat>

            <MotionFloat duration={5.5}>
              <div className="theme-card relative z-10 overflow-hidden rounded-[2.5rem] p-4 shadow-2xl">
                <Image
                  src={headerImg}
                  alt="توانمندی‌های فیتنس"
                  width={700}
                  height={850}
                  priority
                  className="h-[550px] rounded-[2rem] object-cover md:h-[650px]"
                />
                <div className="absolute inset-4 rounded-[2rem] bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </MotionFloat>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: smoothEase }}
            className="relative text-center lg:text-right"
          >
            <div className="theme-badge mb-8 inline-flex items-center gap-2 rounded-full px-5 py-2">
              <Sparkles className="text-pink-500" size={18} />
              <span className="text-sm">مسیر حرفه‌ای تناسب اندام</span>
            </div>

            <h2 className="text-4xl font-black leading-[1.2] md:text-6xl">
              درباره کسی که<span className="gradient-text"> می‌توانی </span>بشوی
            </h2>

            <p className="theme-text-secondary mt-8 max-w-2xl text-lg leading-9">
              با همراز قاسمی، تناسب اندام فقط ساختن بدن نیست؛ بلکه ساختن نسخه‌ای قدرتمندتر،
              سالم‌تر و بااعتمادبه‌نفس‌تر از خودت در قزوین است.
            </p>

            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="theme-card rounded-3xl p-5">
                <ShieldCheck className="mb-4 text-cyan-500" size={28} />
                <h4 className="mb-2 text-lg font-bold">برنامه تخصصی</h4>
                <p className="theme-text-muted text-sm leading-7">تمرینات شخصی‌سازی شده برای رسیدن سریع‌تر به اهداف.</p>
              </div>
              <div className="theme-card rounded-3xl p-5">
                <Dumbbell className="mb-4 text-pink-500" size={28} />
                <h4 className="mb-2 text-lg font-bold">تجهیزات مدرن</h4>
                <p className="theme-text-muted text-sm leading-7">استفاده از تجهیزات حرفه‌ای و استاندارد جهانی.</p>
              </div>
            </div>

            <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row lg:items-start">
              <Link href="/fitnessplan" className="theme-btn-primary group flex items-center gap-3 rounded-2xl px-8 py-4">
                شروع مسیر حرفه‌ای
                <ArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
              </Link>
              <Link href="/aboutus" className="theme-btn-outline flex items-center gap-3 rounded-2xl px-8 py-4">
                <Play size={18} className="fill-current" />
                معرفی مربی
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
