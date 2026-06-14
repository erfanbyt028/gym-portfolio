"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Dumbbell, Trophy, Users } from "lucide-react";
import { MotionFloat, smoothEase } from "@/components/motion";
import aboutImg from "../../public/images/about.png";

const features = [
  "برنامه تمرینی شخصی‌سازی شده",
  "پشتیبانی حرفه‌ای و دائمی",
  "تغذیه تخصصی و اصولی",
  "تمرینات ویژه چربی‌سوزی و عضله‌سازی",
];

export default function AboutUs() {
  return (
    <section className="theme-section relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 h-[250px] w-[250px] rounded-full bg-pink-500/10 blur-[120px] dark:bg-pink-500/20" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[120px] dark:bg-cyan-500/20" />
        <div className="grid-bg absolute inset-0 opacity-40" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: smoothEase }}
            className="relative flex justify-center"
          >
            <div className="absolute h-[300px] w-[300px] rounded-full bg-gradient-to-r from-pink-500/20 to-cyan-500/20 blur-[100px] md:h-[500px] md:w-[500px]" />
            <div className="absolute h-[320px] w-[320px] rounded-full border border-[var(--border-color)] md:h-[550px] md:w-[550px]" />

            <MotionFloat className="absolute bottom-0 right-0 z-20 md:right-10" duration={4.5}>
              <div className="theme-card rounded-3xl p-5">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-pink-500/15 p-3">
                    <Trophy className="text-pink-500" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">+۱۲ سال تجربه</h4>
                    <p className="theme-text-muted text-sm">در حوزه تناسب اندام</p>
                  </div>
                </div>
              </div>
            </MotionFloat>

            <MotionFloat duration={5.5}>
              <Image
                src={aboutImg}
                alt="درباره مربی فیتنس"
                priority
                className="relative z-10 w-full max-w-[520px] object-contain drop-shadow-[0_20px_60px_var(--shadow-glow)]"
              />
            </MotionFloat>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: smoothEase }}
            className="text-center lg:text-right"
          >
            <div className="theme-badge mb-8 inline-flex items-center gap-2 rounded-full px-5 py-2">
              <Dumbbell size={18} className="text-pink-500" />
              <span className="text-sm font-medium">همراز قاسمی — مربی فیتنس قزوین</span>
            </div>

            <h2 className="relative z-10 text-4xl font-black leading-[1.2] md:text-6xl">
              آماده‌ای تا
              <span className="gradient-text"> تغییر واقعی </span>
              ایجاد کنی؟
            </h2>

            <p className="theme-text-secondary mt-8 text-lg leading-8">
              همراز قاسمی با بیش از ۱۲ سال تجربه در TRX و فیتنس، در قزوین
              همراهت است تا با برنامه‌های تمرینی حرفه‌ای و تغذیه اصولی به
              بهترین نسخه‌ی خودت برسی.
            </p>

            <div className="mt-10 space-y-4">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, ease: smoothEase }}
                  className="flex items-center justify-center gap-3 lg:justify-start"
                >
                  <CheckCircle2 className="min-w-[22px] text-pink-500" size={22} />
                  <span className="theme-text-secondary">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-2 gap-5">
              <div className="theme-card rounded-3xl p-6">
                <Users className="mx-auto mb-3 text-cyan-500 lg:mx-0" />
                <h3 className="text-3xl font-black">+۵K</h3>
                <p className="theme-text-muted mt-1">شاگرد فعال</p>
              </div>
              <div className="theme-card rounded-3xl p-6">
                <Trophy className="mx-auto mb-3 text-pink-500 lg:mx-0" />
                <h3 className="text-3xl font-black">+۲۵۰</h3>
                <p className="theme-text-muted mt-1">برنامه حرفه‌ای</p>
              </div>
            </div>

            <div className="mt-12">
              <Link href="/aboutus" className="theme-btn-primary group inline-flex items-center gap-3 rounded-2xl px-8 py-4">
                بیشتر بدانید
                <ArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
