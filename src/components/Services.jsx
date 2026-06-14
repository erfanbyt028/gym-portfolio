"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { FaDumbbell, FaChild } from "react-icons/fa";

import { MdOutlineSportsGymnastics } from "react-icons/md";

import { IoMdMusicalNotes } from "react-icons/io";

import { TbActivityHeartbeat } from "react-icons/tb";

import { GiJumpingRope } from "react-icons/gi";

import { ArrowLeft, Sparkles } from "lucide-react";
import { MotionFloat, smoothEase } from "@/components/motion";

import servicesImg from "../../public/images/servi.png";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "بازی کودک",
      description:
        "کلاس‌های تخصصی برای تقویت تمرکز، تحرک و رشد مهارت‌های حرکتی کودکان.",
      icon: <FaChild />,
      accent: "from-amber-400 to-orange-500",
    },
    {
      id: 2,
      title: "حرکات اصلاحی",
      description:
        "تمرینات حرفه‌ای برای بهبود فرم بدن و کاهش مشکلات عضلانی.",
      icon: <MdOutlineSportsGymnastics />,
      accent: "from-cyan-500 to-blue-600",
    },
    {
      id: 3,
      title: "زومبا",
      description:
        "تمرینات شاد و موزیکال برای چربی‌سوزی و افزایش انرژی.",
      icon: <IoMdMusicalNotes />,
      accent: "from-pink-500 to-fuchsia-600",
    },
    {
      id: 4,
      title: "کراس فیت",
      description:
        "تمرینات قدرتی و استقامتی حرفه‌ای برای عملکرد کامل بدن.",
      icon: <FaDumbbell />,
      accent: "from-rose-500 to-red-600",
    },
    {
      id: 5,
      title: "TRX",
      description:
        "تمرینات تعلیقی برای تقویت عضلات مرکزی و تعادل بدن.",
      icon: <GiJumpingRope />,
      accent: "from-emerald-500 to-teal-600",
    },
    {
      id: 6,
      title: "آمادگی جسمانی",
      description:
        "برنامه‌های تخصصی برای افزایش توان و سلامت عمومی بدن.",
      icon: <TbActivityHeartbeat />,
      accent: "from-violet-500 to-indigo-600",
    },
  ];

  return (
    <section id="services" className="theme-section-alt relative scroll-mt-28 overflow-hidden py-28">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 h-[300px] w-[300px] rounded-full bg-pink-500/10 blur-[120px] dark:bg-pink-500/20" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[120px] dark:bg-cyan-500/20" />
        <div className="grid-bg absolute inset-0 opacity-40" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: smoothEase }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-4xl text-center"
        >
          <div className="theme-badge mb-8 inline-flex items-center gap-2 rounded-full px-5 py-2">
            <Sparkles className="text-pink-500" size={18} />
            <span className="text-sm">خدمات حرفه‌ای تناسب اندام</span>
          </div>

          <h2 className="text-4xl font-black leading-tight md:text-6xl">
            خدمات<span className="gradient-text"> ویژه </span>ما
          </h2>

          <p className="theme-text-secondary mt-8 text-lg leading-8">
            مجموعه‌ای از برنامه‌ها و کلاس‌های تخصصی برای ساخت
            بهترین نسخه از بدن و سبک زندگی شما.
          </p>
        </motion.div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 items-center">
          {/* Left Services */}
          <div className="space-y-6">
            {services.slice(0, 3).map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                delay={index * 0.15}
              />
            ))}
          </div>

          {/* Center Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            {/* Glow */}
            <div className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] bg-gradient-to-r from-pink-500/30 to-cyan-500/30 rounded-full blur-[120px]" />

            {/* Ring */}
            <div className="absolute h-[320px] w-[320px] rounded-full border border-[var(--border-color)] md:h-[550px] md:w-[550px]" />

            <MotionFloat duration={5.5} className="relative z-10">
              <div className="theme-card rounded-[2.5rem] p-4 shadow-2xl">
                <Image
                  src={servicesImg}
                  alt="خدمات فیتنس"
                  width={700}
                  height={800}
                  priority
                  className="h-[550px] rounded-[2rem] object-cover"
                />
              </div>
            </MotionFloat>
          </motion.div>

          {/* Right Services */}
          <div className="space-y-6">
            {services.slice(3, 6).map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                delay={index * 0.15}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center mt-20"
        >
          <Link href="/classes" className="theme-btn-primary group flex items-center gap-3 rounded-2xl px-10 py-5">
            مشاهده همه کلاس‌ها
            <ArrowLeft className="transition-all duration-300 group-hover:-translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({ service, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay, ease: smoothEase }}
      viewport={{ once: true }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className="theme-card group relative overflow-hidden rounded-[2rem] p-7"
    >
      {/* Hover Glow */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-all duration-500 bg-gradient-to-br ${service.accent}`}
      />

      {/* Blur */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-3xl" />

      <div className="relative flex items-start gap-5">
        {/* Icon */}
        <div
          className={`min-w-[65px] h-[65px] rounded-2xl bg-gradient-to-br ${service.accent} flex items-center justify-center text-white text-3xl shadow-xl group-hover:scale-110 transition-all duration-300`}
        >
          {service.icon}
        </div>

        {/* Content */}
        <div>
          <h3 className="mb-3 text-2xl font-bold group-hover:text-pink-500 transition-colors">
            {service.title}
          </h3>
          <p className="theme-text-secondary text-sm leading-8">
            {service.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}