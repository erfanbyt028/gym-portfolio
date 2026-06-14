"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Dumbbell, ArrowUpRight } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "./ThemeProvider";
import { siteConfig } from "@/lib/site";
import logoWhite from "../../public/images/logo-white.png";
import logoDark from "../../public/images/logo-dark.png";

const navLinks = [
  { href: "/", label: "خانه" },
  { href: "/aboutus", label: "درباره ما" },
  { href: "/bmi", label: "محاسبه BMI" },
  { href: "/classes", label: "کلاس‌ها" },
  { href: "/blogs", label: "بلاگ" },
  { href: "/contactus", label: "تماس با ما" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div
            className={`relative flex items-center justify-between rounded-[2rem] border transition-all duration-500 ${
              isScrolled
                ? "border-[var(--nav-border)] bg-[var(--nav-bg)] px-5 py-3 shadow-lg backdrop-blur-2xl"
                : "border-transparent bg-transparent px-0 py-0"
            }`}
          >
            {isScrolled && (
              <>
                <div className="absolute left-0 top-0 h-32 w-32 rounded-full bg-pink-500/10 blur-3xl" />
                <div className="absolute bottom-0 right-0 h-32 w-32 rounded-full bg-cyan-500/10 blur-3xl" />
              </>
            )}

            <Link href="/" className="relative z-20 flex items-center gap-3">
              <motion.div
                whileHover={{ rotate: 10, scale: 1.05 }}
                className="hidden sm:flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-pink-500 to-cyan-500 shadow-xl"
              >
                <Dumbbell className="text-white" size={22} />
              </motion.div>

              <Image
                src={isDark ? logoWhite : logoDark}
                alt={siteConfig.author}
                width={140}
                height={45}
                priority
                className="h-auto w-[110px] object-contain md:w-[135px]"
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.06 }}
                >
                  <Link
                    href={item.href}
                    className={`group relative rounded-2xl px-4 py-2.5 text-[15px] font-bold transition-all duration-300 ${
                      isActive(item.href)
                        ? "text-pink-500"
                        : "theme-text-secondary hover:text-[var(--text-primary)]"
                    }`}
                  >
                    <span className="absolute inset-0 rounded-2xl bg-white/5 opacity-0 transition-all duration-300 group-hover:opacity-100" />
                    <span className="relative flex items-center gap-1.5">
                      {item.label}
                      <ArrowUpRight
                        size={14}
                        className="opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                      />
                    </span>
                    {isActive(item.href) && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-1/2 h-0.5 w-3/5 -translate-x-1/2 rounded-full bg-gradient-to-r from-pink-500 to-cyan-500"
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <ThemeToggle />

              <motion.div whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/fitnessplan"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-cyan-500 p-px shadow-[0_10px_40px_rgba(236,72,153,0.35)]"
                >
                  <span className="relative flex items-center gap-2.5 rounded-2xl bg-white px-6 py-3 text-slate-900 transition-all duration-300 group-hover:bg-slate-50 dark:bg-[#0B1120] dark:text-white dark:group-hover:bg-[#111827]">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-r from-pink-500 to-cyan-500">
                      <Dumbbell size={16} className="text-white" />
                    </span>
                    <span className="text-sm font-bold">دریافت برنامه</span>
                    <ArrowUpRight
                      size={16}
                      className="transition-all duration-300 group-hover:rotate-45"
                    />
                  </span>
                </Link>
              </motion.div>
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              <ThemeToggle />
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="منو"
                className={`relative z-[60] flex h-11 w-11 items-center justify-center rounded-2xl border backdrop-blur-xl theme-text border-[var(--border-color)] bg-[var(--bg-glass)]`}
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                    >
                      <X size={22} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                    >
                      <Menu size={22} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-xl lg:hidden"
            />

            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              className="fixed inset-x-3 top-3 z-50 overflow-hidden rounded-[2rem] border border-[var(--border-color)] bg-[var(--nav-bg)] shadow-2xl backdrop-blur-2xl lg:hidden"
            >
              <div className="absolute top-0 left-0 h-48 w-48 rounded-full bg-pink-500/20 blur-[100px]" />
              <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-cyan-500/20 blur-[100px]" />

              <div className="relative z-10 p-5">
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-r from-pink-500 to-cyan-500">
                      <Dumbbell className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-black">{siteConfig.author}</h3>
                      <p className="theme-text-muted text-xs">
                        مربی فیتنس {siteConfig.city}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border-color)] bg-[var(--bg-glass)]"
                  >
                    <X size={20} />
                  </button>
                </div>

                <nav className="flex flex-col gap-2">
                  {navLinks.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.06 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center justify-between rounded-2xl border px-5 py-4 text-base font-bold transition-all duration-300 ${
                          isActive(item.href)
                            ? "border-pink-500/40 bg-pink-500/10 text-pink-500"
                            : "theme-text border-[var(--border-color)] bg-[var(--bg-glass)] hover:border-pink-500/30"
                        }`}
                      >
                        <span>{item.label}</span>
                        <ArrowUpRight size={18} />
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="mt-6"
                >
                  <Link
                    href="/fitnessplan"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-pink-500 to-cyan-500 px-6 py-4 text-base font-bold text-white shadow-[0_0_40px_rgba(236,72,153,0.35)]"
                  >
                    دریافت برنامه تمرینی
                    <ArrowUpRight size={18} />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
