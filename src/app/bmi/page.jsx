"use client";

import React, { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import {
  Scale,
  Ruler,
  Weight,
  User,
  Venus,
  Mars,
  Sparkles,
  X,
  ArrowUpRight,
  HeartPulse,
  Flame,
  ShieldCheck,
  AlertTriangle,
} from "lucide-react";

export default function BmiCalculator() {
  const [formData, setFormData] = useState({
    gender: "مرد",
    age: "",
    height: "",
    weight: "",
  });

  const [result, setResult] = useState(null);

  const [isOpen, setIsOpen] = useState(false);

  const calculate = (e) => {
    e.preventDefault();

    const { gender, age, height, weight } = formData;

    if (!height || !weight || !age) return;

    const h = height / 100;

    const bmi = (weight / (h * h)).toFixed(1);

    const inches = height / 2.54;

    const baseWeight =
      gender === "مرد"
        ? 50 + 2.3 * (inches - 60)
        : 45.5 + 2.3 * (inches - 60);

    const ageFactor = age > 30 ? (age - 30) * 0.05 : 0;

    const idealWeight = baseWeight + ageFactor;

    const diff = (weight - idealWeight).toFixed(1);

    let status = "";
    let color = "";
    let bg = "";
    let icon = null;

    if (bmi < 18.5) {
      status = "کمبود وزن";
      color = "text-sky-400";
      bg = "from-sky-500 to-cyan-500";
      icon = <AlertTriangle size={24} />;
    } else if (bmi < 25) {
      status = "وزن نرمال";
      color = "text-emerald-400";
      bg = "from-emerald-500 to-green-500";
      icon = <ShieldCheck size={24} />;
    } else if (bmi < 30) {
      status = "اضافه وزن";
      color = "text-amber-400";
      bg = "from-amber-500 to-orange-500";
      icon = <Flame size={24} />;
    } else {
      status = "چاقی";
      color = "text-rose-400";
      bg = "from-rose-500 to-pink-500";
      icon = <HeartPulse size={24} />;
    }

    setResult({
      bmi,
      status,
      color,
      bg,
      icon,
      idealWeight: idealWeight.toFixed(1),
      diff,
    });

    setIsOpen(true);
  };

  return (
    <section className="theme-bg relative flex min-h-screen items-center justify-center overflow-hidden px-4 pb-16 pt-28">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 h-[350px] w-[350px] rounded-full bg-pink-500/10 blur-[120px] dark:bg-pink-500/20" />
        <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[120px] dark:bg-cyan-500/20" />
        <div className="grid-bg absolute inset-0 opacity-40" />
      </div>

      {/* CARD */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="theme-card relative z-10 w-full max-w-2xl overflow-hidden rounded-[2.5rem] shadow-2xl"
      >
        {/* Glow */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-pink-500/20 blur-[120px] rounded-full " />

        <div className="mt-10 absolute bottom-0 right-0 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full" />

        <div className="relative z-10 p-6 md:p-10">
          {/* HEADER */}
          <div className="text-center mb-10">
            
            <div className="theme-badge mb-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm">
              <Sparkles size={15} className="text-pink-500" />
              محاسبه هوشمند BMI
            </div>

            <h1 className="text-4xl font-black leading-tight md:text-5xl">
              سلامت بدن خودتو
              <span className="gradient-text"> بررسی کن</span>
            </h1>

            <p className="theme-text-secondary mx-auto mt-5 max-w-xl leading-8">
              شاخص توده بدنی، وزن ایده‌آل و وضعیت سلامتی خودت رو
              با طراحی مدرن و حرفه‌ای مشاهده کن.
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={calculate} className="space-y-6">
            {/* GENDER */}
            <div>
              <label className="mb-3 block font-bold">
                جنسیت
              </label>

              <div className="grid grid-cols-2 gap-4">
                {["مرد", "زن"].map((item) => (
                  <button
                    type="button"
                    key={item}
                    onClick={() =>
                      setFormData({
                        ...formData,
                        gender: item,
                      })
                    }
                    className={`group relative overflow-hidden rounded-2xl border px-5 py-4 transition-all duration-300 ${
                      formData.gender === item
                        ? "border-pink-500 bg-pink-500/10"
                        : "theme-btn-outline"
                    }`}
                  >
                    <div className="flex items-center justify-center gap-3 font-bold">
                      {item === "مرد" ? (
                        <Mars
                          className={`${
                            formData.gender === item
                              ? "text-pink-400"
                              : "text-cyan-400"
                          }`}
                        />
                      ) : (
                        <Venus
                          className={`${
                            formData.gender === item
                              ? "text-pink-400"
                              : "text-cyan-400"
                          }`}
                        />
                      )}

                      {item}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* INPUTS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* AGE */}
              <InputBox
                icon={<User size={18} />}
                label="سن"
                placeholder="25"
                value={formData.age}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    age: e.target.value,
                  })
                }
              />

              {/* HEIGHT */}
              <InputBox
                icon={<Ruler size={18} />}
                label="قد (cm)"
                placeholder="175"
                value={formData.height}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    height: e.target.value,
                  })
                }
              />

              {/* WEIGHT */}
              <InputBox
                icon={<Weight size={18} />}
                label="وزن (kg)"
                placeholder="70"
                value={formData.weight}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    weight: e.target.value,
                  })
                }
              />
            </div>

            {/* BUTTON */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-cyan-500 p-[1px] shadow-[0_10px_50px_rgba(236,72,153,0.35)]"
            >
              <span className="relative flex items-center justify-center gap-3 rounded-2xl bg-[var(--bg-secondary)] px-6 py-5 text-lg font-black transition-all duration-300 group-hover:bg-[var(--bg-tertiary)]">
                محاسبه BMI

                <ArrowUpRight className="transition-all duration-300 group-hover:rotate-45 group-hover:-translate-y-1" />
              </span>
            </motion.button>
          </form>
        </div>
      </motion.div>

      {/* RESULT MODAL */}
      <AnimatePresence>
        {isOpen && result && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xl"
            />

            {/* MODAL */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
                y: 50,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
                y: 50,
              }}
              transition={{
                duration: 0.35,
              }}
              className="fixed inset-0 z-50 flex items-center justify-center px-4"
            >
              <div className="theme-card relative w-full max-w-xl overflow-hidden rounded-[2.5rem] shadow-2xl">
                {/* Glow */}
                <div
                  className={`absolute top-0 left-0 w-72 h-72 bg-gradient-to-r ${result.bg} opacity-20 blur-[120px] rounded-full`}
                />

                {/* CLOSE */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute left-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--border-color)] bg-[var(--bg-glass)] transition-all duration-300 hover:bg-[var(--bg-tertiary)]"
                >
                  <X />
                </button>

                <div className="relative z-10 p-8 md:p-10">
                  {/* ICON */}
                  <div
                    className={`mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-[2rem] bg-gradient-to-r ${result.bg} text-white shadow-2xl`}
                  >
                    {result.icon}
                  </div>

                  {/* TITLE */}
                  <div className="text-center">
                    <p className="theme-text-muted mb-3">شاخص توده بدنی شما</p>
                    <h2 className="text-7xl font-black">{result.bmi}</h2>

                    <p
                      className={`mt-4 text-3xl font-black ${result.color}`}
                    >
                      {result.status}
                    </p>
                  </div>

                  {/* INFO */}
                  <div className="mt-8 grid grid-cols-2 gap-5">
                    <InfoCard
                      title="وزن ایده‌آل"
                      value={`${result.idealWeight} kg`}
                    />

                    <InfoCard
                      title="اختلاف وزن"
                      value={`${
                        result.diff > 0
                          ? "+"
                          : ""
                      }${result.diff} kg`}
                    />
                  </div>

                  {/* TEXT */}
                  <div className="theme-card mt-8 rounded-3xl p-6 text-center">
                    <p className="theme-text-secondary text-lg leading-8">
                      {parseFloat(result.diff) > 0
                        ? `شما ${result.diff} کیلوگرم بالاتر از وزن ایده‌آل خود هستید.`
                        : parseFloat(result.diff) < 0
                        ? `شما ${Math.abs(
                            result.diff
                          )} کیلوگرم کمتر از وزن ایده‌آل خود هستید.`
                        : "شما دقیقاً در محدوده وزن ایده‌آل قرار دارید."}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}

/* INPUT */
function InputBox({
  icon,
  label,
  placeholder,
  value,
  onChange,
}) {
  return (
    <div>
      <label className="mb-3 block font-bold">{label}</label>
      <div className="relative">
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-pink-500">{icon}</span>
        <input
          type="number"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required
          className="theme-input w-full rounded-2xl py-4 pr-12 pl-4 outline-none"
        />
      </div>
    </div>
  );
}

/* INFO CARD */
function InfoCard({ title, value }) {
  return (
    <div className="theme-card rounded-3xl p-5 text-center">
      <p className="theme-text-muted mb-2 text-sm">{title}</p>
      <h4 className="text-2xl font-black">{value}</h4>
    </div>
  );
}