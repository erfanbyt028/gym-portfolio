"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  User,
  Weight,
  Ruler,
  Target,
  Dumbbell,
  HeartPulse,
  Apple,
  Send,
  Flame,
  Activity,
  CheckCircle2,
} from "lucide-react";
import { MotionHero, MotionCard } from "@/components/motion";
import { siteConfig } from "@/lib/site";

export default function FitnessPlanPage() {
  const [goal, setGoal] = useState("کاهش وزن");
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
    <section className="theme-bg relative overflow-hidden px-4 pt-28 pb-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-pink-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="grid-bg absolute inset-0 opacity-40" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
        <MotionHero className="mb-20 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.4em] text-pink-500">
            FITNESS PROGRAM
          </p>
          <h1 className="mb-6 text-4xl font-black leading-tight md:text-6xl">
            دریافت <span className="gradient-text">برنامه تمرینی</span> و رژیم غذایی
          </h1>
          <p className="theme-text-secondary mx-auto max-w-3xl text-lg leading-8">
            اطلاعات خود را وارد کنید تا {siteConfig.author} بهترین برنامه تمرینی
            و رژیم غذایی متناسب با بدن و هدف شما را طراحی کند.
          </p>
        </MotionHero>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="theme-card rounded-[2rem] p-8">
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-pink-500 to-fuchsia-500 shadow-xl text-white">
                  <Dumbbell size={30} />
                </div>

                <div>
                  <h2 className="text-3xl font-black">اطلاعات بدنی</h2>
                  <p className="theme-text-muted">فرم زیر را کامل کنید</p>
                </div>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center py-12 text-center"
                >
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-cyan-500">
                    <CheckCircle2 size={40} className="text-white" />
                  </div>
                  <h3 className="mb-3 text-2xl font-black">درخواست شما ثبت شد!</h3>
                  <p className="theme-text-secondary mb-8">
                    {siteConfig.author} به زودی برنامه اختصاصی شما را آماده می‌کند.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="theme-btn-primary rounded-2xl px-8 py-3"
                  >
                    ارسال درخواست جدید
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="theme-text-secondary mb-2 block text-sm">
                      نام کامل
                    </label>
                    <div className="relative">
                      <User
                        className="theme-text-muted absolute right-4 top-1/2 -translate-y-1/2"
                        size={20}
                      />
                      <input
                        required
                        type="text"
                        placeholder="نام خود را وارد کنید"
                        className="theme-input w-full rounded-2xl py-4 pr-12 pl-4 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="theme-text-secondary mb-2 block text-sm">
                      سن
                    </label>
                    <div className="relative">
                      <HeartPulse
                        className="theme-text-muted absolute right-4 top-1/2 -translate-y-1/2"
                        size={20}
                      />
                      <input
                        required
                        type="number"
                        placeholder="مثلاً 24"
                        className="theme-input w-full rounded-2xl py-4 pr-12 pl-4 outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label className="theme-text-secondary mb-2 block text-sm">
                        قد
                      </label>
                      <div className="relative">
                        <Ruler
                          className="theme-text-muted absolute right-4 top-1/2 -translate-y-1/2"
                          size={20}
                        />
                        <input
                          required
                          type="number"
                          placeholder="175 cm"
                          className="theme-input w-full rounded-2xl py-4 pr-12 pl-4 outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="theme-text-secondary mb-2 block text-sm">
                        وزن
                      </label>
                      <div className="relative">
                        <Weight
                          className="theme-text-muted absolute right-4 top-1/2 -translate-y-1/2"
                          size={20}
                        />
                        <input
                          required
                          type="number"
                          placeholder="70 kg"
                          className="theme-input w-full rounded-2xl py-4 pr-12 pl-4 outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="theme-text-secondary mb-3 block text-sm">
                      هدف شما
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        "کاهش وزن",
                        "افزایش وزن",
                        "عضله سازی",
                        "تناسب اندام",
                      ].map((item) => (
                        <button
                          type="button"
                          key={item}
                          onClick={() => setGoal(item)}
                          className={`rounded-2xl border p-4 text-sm font-bold transition-all duration-300 ${
                            goal === item
                              ? "border-pink-500 bg-pink-500 text-white shadow-lg"
                              : "theme-btn-outline"
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="theme-text-secondary mb-2 block text-sm">
                      میزان فعالیت
                    </label>
                    <div className="relative">
                      <Activity
                        className="theme-text-muted absolute right-4 top-1/2 -translate-y-1/2"
                        size={20}
                      />
                      <select className="theme-input w-full appearance-none rounded-2xl py-4 pr-12 pl-4 outline-none">
                        <option>کم فعالیت</option>
                        <option>متوسط</option>
                        <option>حرفه‌ای</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="theme-text-secondary mb-2 block text-sm">
                      توضیحات اضافی
                    </label>
                    <textarea
                      rows={5}
                      placeholder="اهداف یا شرایط خاص خود را بنویسید..."
                      className="theme-input w-full resize-none rounded-2xl p-4 outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="theme-btn-primary group flex w-full items-center justify-center gap-3 rounded-2xl p-4 disabled:opacity-70"
                  >
                    {loading ? "در حال ارسال..." : "دریافت برنامه اختصاصی"}
                    <Send className="transition-transform duration-300 group-hover:-translate-x-1" />
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div className="theme-card rounded-[2rem] p-8">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-xl">
                  <Apple size={28} />
                </div>
                <h3 className="text-2xl font-black">امکانات برنامه شما</h3>
              </div>

              <div className="space-y-5">
                {[
                  "برنامه تمرینی اختصاصی",
                  "رژیم غذایی شخصی‌سازی شده",
                  "پشتیبانی مربی",
                  "مشاوره آنلاین",
                  "بررسی پیشرفت ماهانه",
                  "برنامه چربی سوزی و عضله سازی",
                ].map((item) => (
                  <div
                    key={item}
                    className="theme-glass flex items-center gap-4 rounded-2xl p-4"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white">
                      <Flame size={20} />
                    </div>
                    <p className="theme-text-secondary font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-pink-500 via-fuchsia-500 to-cyan-500 p-10 shadow-2xl">
              <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

              <div className="relative z-10">
                <Target size={50} className="mb-6 text-white" />
                <h3 className="mb-4 text-4xl font-black text-white">
                  هدف تو،
                  <br />
                  برنامه ماست
                </h3>
                <p className="mb-8 text-lg leading-8 text-white/90">
                  با برنامه‌های حرفه‌ای {siteConfig.author} به بهترین نسخه خودت تبدیل شو.
                </p>
                <Link
                  href="/contactus"
                  className="inline-block rounded-2xl bg-white px-8 py-4 font-bold text-slate-900 shadow-xl transition-all duration-300 hover:scale-105"
                >
                  شروع مسیر
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
