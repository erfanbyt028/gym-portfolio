"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Dumbbell,
  Flame,
  HeartPulse,
  Music4,
  Trophy,
  Users,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Clock3,
  X,
  Phone,
  Instagram,
  TimerReset,
  CheckCircle2,
} from "lucide-react";

// ===== Images =====
import slider1 from "../../../public/images/slider1.webp";
import slider2 from "../../../public/images/slider2.webp";
import slider3 from "../../../public/images/slider3.webp";

import talar1 from "../../../public/images/talar1.webp";
import talar2 from "../../../public/images/talar2.webp";
import talar3 from "../../../public/images/talar3.webp";
import talar4 from "../../../public/images/talar4.webp";

import { BsInstagram } from "react-icons/bs";

export default function ClassesPage() {
  // ================= HERO SLIDER =================
  const slides = [
    {
      id: 1,
      title: "قدرت واقعی از اینجا شروع میشه",
      description:
        "با کلاس‌های حرفه‌ای و مربیان تخصصی، بهترین نسخه خودت رو بساز.",
      image: slider1,
    },
    {
      id: 2,
      title: "انرژی، انگیزه، نتیجه",
      description:
        "تمرینات مدرن، محیط حرفه‌ای و تجهیزات کامل برای رسیدن به هدف.",
      image: slider2,
    },
    {
      id: 3,
      title: "بدن رویایی خودتو بساز",
      description: "از کراس‌فیت تا تی‌آر‌ایکس، همه چیز برای رشد تو آماده است.",
      image: slider3,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // ================= CLASSES =================
  const classes = [
    {
      title: "کراس‌فیت",
      description:
        "تمرینات حرفه‌ای قدرتی و هوازی برای افزایش استقامت و عضله‌سازی.",
      icon: <Dumbbell size={30} />,
      color: "from-rose-500 to-orange-500",
      time: "شنبه تا چهارشنبه - 18:00",
    },
    {
      title: "زومبا",
      description: "کلاس‌های پرانرژی همراه با موسیقی برای چربی‌سوزی و نشاط.",
      icon: <Music4 size={30} />,
      color: "from-pink-500 to-fuchsia-500",
      time: "شنبه و دوشنبه - 17:00",
    },
    {
      title: "فیتنس بانوان",
      description: "تمرینات تخصصی تناسب اندام بانوان همراه با برنامه حرفه‌ای.",
      icon: <HeartPulse size={30} />,
      color: "from-cyan-500 to-blue-500",
      time: "همه روزه - 16:00",
    },
    {
      title: "چربی‌سوزی حرفه‌ای",
      description: "برنامه‌های شدید HIIT برای کاهش وزن سریع و اصولی.",
      icon: <Flame size={30} />,
      color: "from-amber-500 to-red-500",
      time: "شنبه تا پنجشنبه - 19:00",
    },
    {
      title: "بدنسازی حرفه‌ای",
      description: "برنامه‌های تخصصی حجم و کات زیر نظر مربیان حرفه‌ای.",
      icon: <Trophy size={30} />,
      color: "from-violet-500 to-indigo-500",
      time: "همه روزه - 20:00",
    },
    {
      title: "تمرین گروهی",
      description: "تمرینات گروهی انگیزشی همراه با مربی و فضای حرفه‌ای.",
      icon: <Users size={30} />,
      color: "from-emerald-500 to-teal-500",
      time: "جمعه‌ها - 10:00",
    },
  ];

  // ================= BRANCHES =================
  const branches = [
    {
      id: 1,
      title: "باشگاه تالار شهر",
      image: talar2,
      gallery: [talar2, talar3, talar4],
      address: "قزوین - میدان آزادی",
      desc: "سالن VIP با تجهیزات مدرن و کلاس‌های TRX و فیتنس حرفه‌ای.",
      phone: "028-33334455",
      instagram: "@hamraz.ghasemi",
      hours: "06:00 الی 23:00",
      features: [
        "سالن VIP",
        "تجهیزات حرفه‌ای",
        "پارکینگ اختصاصی",
        "کلاس خصوصی",
      ],
    },

    {
      id: 2,
      title: "باشگاه خیابان دانشگاه",
      image: talar1,
      gallery: [talar2, talar3, talar4],
      address: "قزوین - خیابان دانشگاه",
      desc: "محیطی مدرن و پرانرژی مناسب بانوان و آقایان.",
      phone: "028-33778899",
      instagram: "@hamraz.ghasemi",
      hours: "07:00 الی 22:00",
      features: ["کلاس گروهی", "مربی حرفه‌ای", "کافی شاپ", "بدنسازی تخصصی"],
    },

    {
      id: 3,
      title: "باشگاه نوروزیان",
      image: talar1,
      gallery: [talar2, talar3, talar4],
      address: "قزوین - بلوار آیت‌الله خامنه‌ای",
      desc: "فضای بزرگ، دستگاه‌های حرفه‌ای و کلاس‌های تخصصی TRX.",
      phone: "028-33998877",
      instagram: "@hamraz.ghasemi",
      hours: "24 ساعته",
      features: ["سالن بزرگ", "فضای کراس‌فیت", "تجهیزات مدرن", "برنامه تخصصی"],
    },
  ];
  const [selectedBranch, setSelectedBranch] = useState(null);

  return (
    <main className="theme-bg overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ${
              currentSlide === index
                ? "opacity-100 scale-100"
                : "opacity-0 scale-110"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/65" />

            <div className="relative z-10 flex h-full items-center justify-center px-4 text-center">
              <div className="max-w-4xl">
                <p className="mb-5 text-sm font-bold uppercase tracking-[0.4em] text-pink-300">
                  fitness classes
                </p>

                <h1 className="mb-6 text-5xl font-black leading-tight md:text-7xl">
                  {slide.title}
                </h1>

                <p className="mx-auto max-w-2xl text-lg leading-9 text-white/80 md:text-xl">
                  {slide.description}
                </p>

                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Link
                    href="/contactus"
                    className="rounded-2xl bg-gradient-to-r from-pink-500 to-cyan-500 px-8 py-4 text-lg font-bold text-white shadow-2xl transition-all duration-300 hover:scale-105"
                  >
                    شروع عضویت
                  </Link>

                  <Link
                    href="/contactus"
                    className="rounded-2xl border border-white/20 bg-white/10 px-8 py-4 text-lg font-bold backdrop-blur-xl transition-all duration-300 hover:bg-white/20"
                  >
                    مشاوره رایگان
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Controls */}
        <button
          onClick={prevSlide}
          className="absolute right-4 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 backdrop-blur-xl transition-all hover:bg-white/20"
        >
          <ChevronRight />
        </button>

        <button
          onClick={nextSlide}
          className="absolute left-4 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 backdrop-blur-xl transition-all hover:bg-white/20"
        >
          <ChevronLeft />
        </button>

        {/* Dots */}
        <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? "w-10 bg-pink-400" : "w-3 bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* ================= CLASSES ================= */}
      <section className="relative py-24">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-pink-500/20 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm uppercase tracking-[0.4em] text-pink-300">
              our classes
            </p>

            <h2 className="text-4xl font-black md:text-6xl">
              کلاس‌های <span className="text-pink-400">حرفه‌ای</span>
            </h2>

            <p className="theme-text-secondary mx-auto mt-6 max-w-2xl text-lg leading-8">
              مجموعه‌ای کامل از کلاس‌های تخصصی همراز قاسمی در قزوین برای تناسب اندام،
              عضله‌سازی، چربی‌سوزی و سلامتی.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {classes.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="theme-card group relative overflow-hidden rounded-[2rem] p-8 transition-all duration-500"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-20`}
                />

                <div
                  className={`relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${item.color}`}
                >
                  {item.icon}
                </div>

                <h3 className="mb-4 text-2xl font-black">{item.title}</h3>

                <p className="theme-text-secondary mb-6 leading-8">
                  {item.description}
                </p>

                <div className="theme-text-muted flex items-center gap-3">
                  <Clock3 size={18} />
                  <span>{item.time}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BRANCHES ================= */}
      <section className="theme-section py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm uppercase tracking-[0.4em] text-pink-500">
              our branches
            </p>

            <h2 className="text-4xl font-black md:text-6xl">
              محل‌های <span className="text-pink-500">برگزاری کلاس</span>
            </h2>

            <p className="theme-text-secondary mx-auto mt-6 max-w-2xl text-lg leading-8">
              در سه باشگاه مدرن قزوین آماده ارائه خدمات حرفه‌ای به شما هستیم.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {branches.map((branch) => (
              <div
                key={branch.id}
                className="theme-card group overflow-hidden rounded-[2.5rem] shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
              >
                <div className="relative h-[320px] overflow-hidden">
                  <Image
                    src={branch.image}
                    alt={branch.title}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  <div className="absolute bottom-6 right-6">
                    <div className="rounded-2xl bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur-xl">
                      شعبه فعال
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="mb-4 text-3xl font-black">{branch.title}</h3>

                  <div className="mb-5 flex items-start gap-3 text-pink-500">
                    <MapPin size={20} className="mt-1 shrink-0" />

                    <span className="leading-7">{branch.address}</span>
                  </div>

                  <p className="theme-text-secondary leading-8">{branch.desc}</p>

                  <button
                    onClick={() => setSelectedBranch(branch)}
                    className="mt-8 w-full rounded-2xl bg-gradient-to-r from-pink-500 to-cyan-500 px-6 py-4 font-bold text-white transition-all duration-300 hover:scale-[1.02]"
                  >
                    مشاهده اطلاعات باشگاه
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MODAL ================= */}
      {selectedBranch && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md">
          {/* BACKDROP */}
          <div
            onClick={() => setSelectedBranch(null)}
            className="absolute inset-0"
          />

          {/* MODAL */}
          <div className="relative z-10 max-h-[95vh] w-full max-w-6xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-950 shadow-[0_20px_100px_rgba(0,0,0,0.7)]">
            {/* CLOSE */}
            <button
              onClick={() => setSelectedBranch(null)}
              className="absolute right-5 top-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-xl transition-all duration-300 hover:rotate-90 hover:bg-pink-500"
            >
              <X size={22} />
            </button>

            {/* SCROLL AREA */}
            <div className="max-h-[95vh] overflow-y-auto">
              {/* HERO IMAGE */}
              <div className="relative h-[350px] w-full">
                <Image
                  src={selectedBranch.image}
                  alt={selectedBranch.title}
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-black/30 to-transparent" />

                <div className="absolute bottom-10 right-10">
                  <h2 className="text-4xl font-black md:text-6xl">
                    {selectedBranch.title}
                  </h2>

                  <p className="mt-3 max-w-xl text-lg leading-8 text-white/80">
                    {selectedBranch.desc}
                  </p>
                </div>
              </div>

              {/* CONTENT */}
              <div className="grid grid-cols-1 gap-10 p-8 lg:grid-cols-3 lg:p-12">
                {/* LEFT */}
                <div className="lg:col-span-2">
                  {/* INFO */}
                  <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
                    <h3 className="mb-8 text-3xl font-black">اطلاعات باشگاه</h3>

                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/20 text-pink-400">
                          <MapPin size={22} />
                        </div>

                        <div>
                          <p className="mb-1 text-sm text-white/40">آدرس</p>

                          <p className="text-lg text-white/80">
                            {selectedBranch.address}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/20 text-cyan-400">
                          <Phone size={22} />
                        </div>

                        <div>
                          <p className="mb-1 text-sm text-white/40">
                            شماره تماس
                          </p>

                          <p className="text-lg text-white/80">
                            {selectedBranch.phone}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/20 text-pink-400">
                          <BsInstagram size={20} />
                        </div>

                        <div>
                          <p className="mb-1 text-sm text-white/40">
                            اینستاگرام
                          </p>

                          <p className="text-lg text-white/80">
                            {selectedBranch.instagram}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/20 text-cyan-400">
                          <TimerReset size={22} />
                        </div>

                        <div>
                          <p className="mb-1 text-sm text-white/40">
                            ساعت کاری
                          </p>

                          <p className="text-lg text-white/80">
                            {selectedBranch.hours}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* GALLERY */}
                  <div className="mt-8">
                    <h3 className="mb-6 text-3xl font-black">گالری باشگاه</h3>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      {selectedBranch.gallery.map((img, index) => (
                        <div
                          key={index}
                          className="group relative h-[240px] overflow-hidden rounded-[2rem]"
                        >
                          <Image
                            src={img}
                            alt="Gym"
                            fill
                            className="object-cover transition-all duration-700 group-hover:scale-110"
                          />

                          <div className="absolute inset-0 bg-black/10 transition-all duration-300 group-hover:bg-black/30" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* RIGHT */}
                <div>
                  <div className="sticky top-5 rounded-[2rem] border border-white/10 bg-white/5 p-8">
                    <h3 className="mb-8 text-3xl font-black">امکانات</h3>

                    <div className="space-y-4">
                      {selectedBranch.features.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
                        >
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-cyan-500">
                            <CheckCircle2 size={18} />
                          </div>

                          <span className="text-white/80">{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-10 space-y-4">
                      <Link
                        href="/contactus"
                        className="flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-pink-500 to-cyan-500 px-6 py-4 text-lg font-black text-white transition-all duration-300 hover:scale-[1.03]"
                      >
                        ثبت‌نام کلاس
                      </Link>

                      <button
                        onClick={() => setSelectedBranch(null)}
                        className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-lg font-black transition-all duration-300 hover:bg-white/10"
                      >
                        بستن پنجره
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= CTA ================= */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500" />

        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center text-white">
          <h2 className="text-4xl font-black leading-tight md:text-6xl">
            آماده‌ای نسخه جدید خودتو بسازی؟
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-9 text-white/90">
            همین امروز ثبت‌نام کن و تمرین حرفه‌ای رو با مربیان تخصصی شروع کن.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contactus"
              className="rounded-2xl bg-white px-8 py-4 text-lg font-black text-pink-500 shadow-2xl transition-all duration-300 hover:scale-105"
            >
              عضویت آنلاین
            </Link>

            <Link
              href="/contactus"
              className="rounded-2xl border border-white/30 bg-white/10 px-8 py-4 text-lg font-black backdrop-blur-xl transition-all duration-300 hover:bg-white/20"
            >
              تماس با ما
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
