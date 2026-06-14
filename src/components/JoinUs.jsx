"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaCheckCircle, FaUsers, FaTrophy, FaHeart } from "react-icons/fa";
import { ArrowLeft, Sparkles, Play } from "lucide-react";
import { MotionFloat, smoothEase } from "@/components/motion";
import trainerImg from "../../public/images/joinus.png";

const benefits = [
  { icon: <FaCheckCircle />, title: "تمرین‌های تخصصی", description: "برنامه‌های حرفه‌ای برای عضله‌سازی، چربی‌سوزی و تناسب اندام.", accent: "from-pink-500 to-rose-500" },
  { icon: <FaUsers />, title: "جامعه حرفه‌ای", description: "همراهی با هزاران ورزشکار فعال و محیطی پرانرژی.", accent: "from-cyan-500 to-blue-500" },
  { icon: <FaTrophy />, title: "نتایج واقعی", description: "رسیدن سریع‌تر به اهداف با متدهای تمرینی حرفه‌ای.", accent: "from-violet-500 to-indigo-500" },
  { icon: <FaHeart />, title: "پشتیبانی کامل", description: "مشاوره تخصصی تغذیه، تمرین و سلامت.", accent: "from-emerald-500 to-teal-500" },
];

export default function JoinUs() {
  return (
    <section className="theme-section-alt relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 h-[300px] w-[300px] rounded-full bg-pink-500/10 blur-[120px] dark:bg-pink-500/20" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[120px] dark:bg-cyan-500/20" />
        <div className="grid-bg absolute inset-0 opacity-40" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: smoothEase }}
          className="mx-auto mb-20 max-w-4xl text-center"
        >
          <div className="theme-badge mb-8 inline-flex items-center gap-2 rounded-full px-5 py-2">
            <Sparkles className="text-pink-500" size={18} />
            <span className="text-sm">همراز قاسمی — مربی فیتنس قزوین</span>
          </div>
          <h2 className="text-4xl font-black leading-tight md:text-6xl">
            مسیر<span className="gradient-text"> تغییر </span>از اینجا شروع می‌شود
          </h2>
          <p className="theme-text-secondary mt-8 text-lg leading-8">
            هر روز صدها نفر برای ساختن بهترین نسخه از خودشان به ما می‌پیوندند.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: smoothEase }}
            className="relative flex justify-center"
          >
            <div className="absolute h-[320px] w-[320px] rounded-full bg-gradient-to-r from-pink-500/20 to-cyan-500/20 blur-[120px] md:h-[520px] md:w-[520px]" />
            <div className="absolute h-[330px] w-[330px] rounded-full border border-[var(--border-color)] md:h-[560px] md:w-[560px]" />

            <MotionFloat className="absolute top-5 left-0 z-20 md:left-10" duration={4.5}>
              <div className="theme-card rounded-3xl p-5">
                <h4 className="font-bold text-lg">+۵۰۰۰ عضو فعال</h4>
                <p className="theme-text-muted mt-1 text-sm">به جمع حرفه‌ای‌ها بپیوند</p>
              </div>
            </MotionFloat>

            <MotionFloat duration={5.5}>
              <div className="theme-card relative z-10 overflow-hidden rounded-[2.5rem] p-4 shadow-2xl">
                <Image src={trainerImg} alt="مربی فیتنس" width={700} height={850} priority className="h-[550px] rounded-[2rem] object-cover md:h-[650px]" />
                <div className="absolute inset-4 rounded-[2rem] bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </MotionFloat>
          </motion.div>

          <div className="space-y-5">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, ease: smoothEase }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                className="theme-card group relative overflow-hidden rounded-[2rem] p-7"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-10`} />
                <div className="relative flex items-start gap-5">
                  <div className={`flex h-[65px] min-w-[65px] items-center justify-center rounded-2xl bg-gradient-to-br ${benefit.accent} text-3xl text-white shadow-xl transition-transform duration-300 group-hover:scale-110`}>
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="mb-3 text-2xl font-bold group-hover:text-pink-500 transition-colors">{benefit.title}</h3>
                    <p className="theme-text-secondary text-sm leading-8">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, ease: smoothEase }}
          className="theme-card relative mt-24 overflow-hidden rounded-[3rem] p-10 md:p-16"
        >
          <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-pink-500/10 blur-[120px]" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
          <div className="relative z-10 text-center">
            <h3 className="text-3xl font-black leading-tight md:text-5xl">
              آماده‌ای برای<span className="gradient-text"> شروع جدید؟</span>
            </h3>
            <p className="theme-text-secondary mx-auto mt-6 max-w-3xl text-lg leading-8">
              امروز ثبت‌نام کن و اولین قدم را برای ساختن بدنی قوی‌تر بردار.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
              <Link href="/contactus" className="theme-btn-primary group flex items-center gap-3 rounded-2xl px-8 py-4">
                عضویت و مشاوره
                <ArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
              </Link>
              <Link href="/fitnessplan" className="theme-btn-outline flex items-center gap-3 rounded-2xl px-8 py-4">
                <Play size={18} className="fill-current" />
                دریافت برنامه
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
