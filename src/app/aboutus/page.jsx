"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  ArrowUpRight,
  Award,
  BadgeCheck,
  Brain,
  Calendar,
  Camera,
  CheckCircle2,
  Dumbbell,
  HeartPulse,
  Play,
  Quote,
  Star,
  Trophy,
  Users,
} from "lucide-react";
import { useState } from "react";
import "swiper/css";

// به imports:
import { AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import { CgInstagram } from "react-icons/cg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import heroBg from "../../../public/images/aboutusBg.webp";
import heroImg from "../../../public/images/aboutusimg.webp";

import coachImg from "../../../public/images/coach.webp";

import gallery1 from "../../../public/images/facility.webp";
import gallery2 from "../../../public/images/mentor-1.webp";
import gallery3 from "../../../public/images/mentor-3.webp";

import cert1 from "../../../public/images/mdrk1.webp";
import cert2 from "../../../public/images/mdrk2.webp";
import cert3 from "../../../public/images/mdrk3.webp";
import cert4 from "../../../public/images/mdrk4.webp";
import cert5 from "../../../public/images/mdrk5.webp";
import cert6 from "../../../public/images/mdrk6.webp";
import cert7 from "../../../public/images/mdrk7.webp";
import cert8 from "../../../public/images/mdrk8.webp";
import { siteConfig } from "@/lib/site";

export default function AboutCoachPage() {
  // به جای useState قبلی برای selectedImage:
  const [selectedItem, setSelectedItem] = useState(null);

  const stats = [
    {
      number: "12+",
      title: "سال تجربه",
      icon: <Trophy size={28} />,
    },
    {
      number: "8K+",
      title: "شاگرد موفق",
      icon: <Users size={28} />,
    },
    {
      number: "25+",
      title: "دوره تخصصی",
      icon: <Dumbbell size={28} />,
    },
    {
      number: "98%",
      title: "رضایت هنرجو",
      icon: <HeartPulse size={28} />,
    },
  ];

  const certificates = [
    {
      title: "مدرک کارگاه بین‌المللی TRX",
      desc: "آکادمی تخصصی IFBB",
      image: cert1,
    },
    {
      title: "مدرک تخصصی فانکشنال فیتنس",
      desc: "Nutrition Expert",
      image: cert2,
    },
    {
      title: "مدرک مربیگری بین‌المللی TRX",
      desc: "CrossFit Level 1",
      image: cert3,
    },
    {
      title: "گواهی مربیگری درجه 3 فیزیکال فیتنس",
      desc: "Corrective Exercise",
      image: cert4,
    },
    {
      title: "سمینار TRX",
      desc: "آکادمی تخصصی IFBB",
      image: cert5,
    },
    {
      title: "مدرک تخصصی فانکشنال فیتنس",
      desc: "Nutrition Expert",
      image: cert6,
    },
    {
      title: "مدرک مربیگری بین‌المللی TRX",
      desc: "CrossFit Level 1",
      image: cert7,
    },
    {
      title: "گواهی مربیگری درجه 3 فیزیکال فیتنس",
      desc: "Corrective Exercise",
      image: cert8,
    },
  ];

  const achievements = [
    "دارای مدرک رسمی مربیگری بین‌المللی",
    "متخصص طراحی برنامه تمرینی و تغذیه",
    "تجربه آماده‌سازی ورزشکاران حرفه‌ای",
    "مشاور سبک زندگی و فیتنس",
    "مربی تخصصی کراس‌فیت و بدنسازی",
    "برگزاری ورکشاپ‌های تخصصی ورزشی",
  ];

  const services = [
    {
      title: "برنامه تمرینی شخصی",
      desc: "برنامه اختصاصی بر اساس فرم بدن، هدف و سبک زندگی شما.",
      icon: <Dumbbell size={26} />,
    },
    {
      title: "رژیم غذایی تخصصی",
      desc: "طراحی رژیم حرفه‌ای برای چربی‌سوزی یا عضله‌سازی.",
      icon: <Brain size={26} />,
    },
    {
      title: "مشاوره آنلاین",
      desc: "پشتیبانی و بررسی روند پیشرفت به صورت آنلاین.",
      icon: <Calendar size={26} />,
    },
  ];

  const gallery = [gallery1, gallery2, gallery3];

  return (
    <main className="theme-bg overflow-hidden">
      <section className="relative min-h-[90vh] overflow-hidden pt-24">
        <Image
          src={heroBg}
          alt="Coach"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        {/* Glow */}
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-pink-500/30 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/30 blur-3xl" />

        <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-7xl items-center px-4 md:px-8 lg:px-16">
          <div className="grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="mb-6 text-sm font-bold uppercase tracking-[0.5em] text-pink-300">
                personal trainer
              </p>

              <h1 className="text-5xl font-black leading-tight md:text-7xl">
                همراز قاسمی
              </h1>

              <h2 className="mt-4 text-2xl font-bold text-pink-300 md:text-3xl">
                مربی حرفه‌ای TRX و فیتنس — {siteConfig.city}
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-9 text-white/75">
                کمک می‌کنم بهترین نسخه از خودت رو بسازی؛ چه هدفت چربی‌سوزی باشه،
                چه عضله‌سازی یا ساختن یک سبک زندگی سالم و حرفه‌ای.
              </p>

              {/* BUTTONS */}
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/fitnessplan"
                  className="group flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-pink-500 to-cyan-500 px-8 py-4 text-lg font-black text-white shadow-2xl shadow-pink-500/20 transition-all duration-300 hover:scale-105"
                >
                  دریافت برنامه
                  <ArrowUpRight
                    size={20}
                    className="transition-all duration-300 group-hover:rotate-45"
                  />
                </Link>

                <Link
                  href="/aboutus#about"
                  className="group flex items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-8 py-4 text-lg font-bold backdrop-blur-xl transition-all duration-300 hover:bg-white/20"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-900">
                    <Play size={18} fill="currentColor" />
                  </span>
                  مشاهده معرفی
                </Link>
              </div>

              {/* SOCIAL */}
              <div className="mt-10 flex items-center gap-4">
                <span className="text-white/60">شبکه‌های اجتماعی:</span>

                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl transition-all duration-300 hover:bg-pink-500"
                >
                  <CgInstagram size={20} />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-r from-pink-500/30 to-cyan-500/30 blur-[80px]" />
              <Image
                src={heroImg}
                alt="مربی فیتنس"
                width={600}
                height={700}
                className="relative z-10 rounded-[2.5rem] object-cover shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="relative z-20 -mt-24 py-16 px-4 pb-24 md:px-8 lg:px-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -8 }}
              className="theme-card group rounded-[2rem] p-8 transition-all duration-500"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-pink-500 to-cyan-500 text-white shadow-2xl">
                {item.icon}
              </div>

              <h3 className="text-5xl font-black">{item.number}</h3>

              <p className="theme-text-secondary mt-3 text-lg">{item.title}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="relative py-24">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 px-4 md:px-8 lg:grid-cols-2 lg:px-16">
          {/* IMAGE */}
          <div className="relative overflow-hidden rounded-[3rem]">
            <Image
              src={coachImg}
              alt="Lifestyle"
              width={800}
              height={900}
              className="h-[700px] w-full object-cover"
            />
          </div>

          {/* CONTENT */}
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.4em] text-pink-300">
              about coach
            </p>

            <h2 className="text-4xl font-black leading-tight md:text-6xl">
              بیشتر از یک
              <span className="text-pink-400"> مربی </span>
            </h2>

            <p className="theme-text-secondary mt-8 leading-9">
              هدف من فقط تغییر ظاهر افراد نیست؛ بلکه ساختن ذهنی قوی، سبک زندگی
              سالم و افزایش اعتمادبه‌نفس در کنار تناسب اندام است. به‌عنوان مربی
              فیتنس در {siteConfig.city}، سال‌ها تجربه و کار با صدها هنرجو باعث
              شده امروز بتوانم بهترین مسیر را برای رشد فیزیکی و ذهنی افراد طراحی
              کنم.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {achievements.map((item, index) => (
                <div
                  key={index}
                  className="theme-card flex items-center gap-3 rounded-2xl p-4"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-cyan-500 text-white">
                    <CheckCircle2 size={18} />
                  </div>

                  <span className="theme-text-secondary">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* ================= madarek ================= */}
      <section className="relative overflow-hidden py-24">
      {/* BG */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-pink-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
        {/* HEADER */}
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r from-pink-500 to-cyan-500 shadow-2xl">
            <Award size={36} />
          </div>

          <p className="mb-4 text-sm font-bold uppercase tracking-[0.4em] text-pink-300">
            certificates
          </p>

          <h2 className="text-4xl font-black md:text-6xl">
            مدارک و گواهینامه‌ها
          </h2>

          <p className="theme-text-muted mt-6 max-w-2xl leading-8">
            مجموعه‌ای از مدارک تخصصی و حرفه‌ای در حوزه فیتنس، بدنسازی،
            تغذیه ورزشی و کوچینگ حرفه‌ای.
          </p>
        </div>

        {/* SLIDER */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
        >
          {certificates.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                layoutId={`card-${item.title}`}
                onClick={() => setSelectedItem(item)}
                className="theme-card group cursor-pointer overflow-hidden rounded-[2.5rem] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_60px_-10px_rgba(236,72,153,0.4)]"
              >
                {/* IMAGE */}
                <div className="relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={700}
                    height={500}
                    className="h-[320px] w-full object-cover transition-all duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute left-5 top-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-xl">
                    <BadgeCheck size={28} />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-8">
                  <h3 className="text-2xl font-black leading-relaxed">
                    {item.title}
                  </h3>

                  <p className="theme-text-muted mt-4">{item.desc}</p>

                  <button className="mt-8 flex items-center gap-2 font-bold text-pink-400 transition-all duration-300 hover:gap-4">
                    مشاهده مدرک
                    <ArrowUpRight size={18} />
                  </button>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* MODAL */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* BACKDROP */}
              <motion.div
                className="absolute inset-0 bg-black/70 backdrop-blur-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedItem(null)}
              />

              {/* MODAL CARD */}
              <motion.div
                layoutId={`card-${selectedItem.title}`}
                drag="y"
                dragConstraints={{ top: 0, bottom: 0 }}
                onDragEnd={(e, info) => {
                  if (info.offset.y > 150) setSelectedItem(null);
                }}
                className="relative z-10 w-full max-w-4xl overflow-hidden rounded-[2.5rem] bg-zinc-900 shadow-2xl"
              >
                {/* IMAGE */}
                <motion.div
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="overflow-hidden"
                >
                  <Image
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    width={1000}
                    height={600}
                    className="h-[450px] w-full object-cover hover:scale-105 transition duration-700"
                  />
                </motion.div>

                {/* CLOSE */}
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md hover:scale-110 transition"
                >
                  <X />
                </button>

                {/* CONTENT */}
                <motion.div
                  className="p-8"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-3xl font-bold">
                    {selectedItem.title}
                  </h3>

                  <p className="text-white/60 mt-4 leading-8">
                    {selectedItem.desc}
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
      {/* ================= SERVICES ================= */}
      <section className="theme-section py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm uppercase tracking-[0.4em] text-pink-500">
              services
            </p>

            <h2 className="text-4xl font-black md:text-6xl">خدمات مربی</h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {[
              { ...services[0], href: "/fitnessplan" },
              { ...services[1], href: "/fitnessplan" },
              { ...services[2], href: "/contactus" },
            ].map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="theme-card group rounded-[2.5rem] p-8 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-pink-500 to-cyan-500 text-white shadow-xl">
                  {service.icon}
                </div>

                <h3 className="text-3xl font-black">{service.title}</h3>

                <p className="theme-text-secondary mt-5 leading-8">
                  {service.desc}
                </p>

                <span className="mt-8 flex items-center gap-2 font-bold text-pink-500">
                  مشاهده بیشتر
                  <ArrowUpRight size={18} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm uppercase tracking-[0.4em] text-pink-300">
              gallery
            </p>

            <h2 className="text-4xl font-black md:text-6xl">گالری فعالیت‌ها</h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {gallery.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[2.5rem]"
              >
                <Image
                  src={image}
                  alt="Gallery"
                  width={700}
                  height={800}
                  className="h-[500px] w-full object-cover transition-all duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/20 transition-all duration-500 group-hover:bg-black/40" />

                <div className="absolute bottom-6 right-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-xl">
                  <Camera size={26} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIAL ================= */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500" />

        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
          <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-white/20 backdrop-blur-xl">
            <Quote size={40} />
          </div>

          <h2 className="text-4xl font-black leading-tight text-white md:text-6xl">
            موفقیت از تصمیم شروع میشه
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-10 text-white/90">
            هر تغییری با یک تصمیم شروع میشه. من اینجام تا در این مسیر کنارت باشم
            و کمکت کنم بهترین نسخه خودت رو بسازی.
          </p>

          <div className="mt-10 flex items-center justify-center gap-2 text-amber-300">
            <Star fill="currentColor" />
            <Star fill="currentColor" />
            <Star fill="currentColor" />
            <Star fill="currentColor" />
            <Star fill="currentColor" />
          </div>

          <Link
            href="/fitnessplan"
            className="mt-10 inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-lg font-black text-pink-500 shadow-2xl transition-all duration-300 hover:scale-105"
          >
            دریافت برنامه تخصصی
          </Link>
        </div>
      </section>
    </main>
  );
}
