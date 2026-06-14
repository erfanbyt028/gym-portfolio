"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaTelegram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { ArrowUpRight, Dumbbell, HeartPulse } from "lucide-react";
import { siteConfig } from "@/lib/site";

const footerLinks = [
  {
    title: "صفحات",
    links: [
      { label: "خانه", href: "/" },
      { label: "درباره مربی", href: "/aboutus" },
      { label: "کلاس‌ها", href: "/classes" },
      { label: "بلاگ", href: "/blogs" },
      { label: "محاسبه BMI", href: "/bmi" },
    ],
  },
  {
    title: "خدمات",
    links: [
      { label: "تمرین شخصی", href: "/#services" },
      { label: "برنامه غذایی", href: "/fitnessplan" },
      { label: "محاسبه BMI", href: "/bmi" },
      { label: "مشاوره آنلاین", href: "/contactus" },
    ],
  },
  {
    title: "پشتیبانی",
    links: [
      { label: "تماس با ما", href: "/contactus" },
      { label: "برنامه تمرینی", href: "/fitnessplan" },
      { label: "کلاس‌ها", href: "/classes" },
      { label: "درباره مربی", href: "/aboutus" },
    ],
  },
];

const socialLinks = [
  {
    icon: FaInstagram,
    href: siteConfig.social.instagram,
    label: "Instagram",
    color: "hover:bg-pink-500",
  },
  {
    icon: FaTelegram,
    href: siteConfig.social.telegram,
    label: "Telegram",
    color: "hover:bg-cyan-500",
  },
  {
    icon: FaYoutube,
    href: siteConfig.social.youtube,
    label: "Youtube",
    color: "hover:bg-red-500",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const phoneHref = `tel:${siteConfig.mobile.replace(/\D/g, "")}`;

  return (
    <footer className="theme-footer relative overflow-hidden pt-20">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 h-[350px] w-[350px] rounded-full bg-pink-500/15 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-cyan-500/15 blur-[120px]" />
        <div className="grid-bg absolute inset-0 opacity-50" />
      </div>

      <div className="container relative z-10 mx-auto px-4 pb-8 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 gap-12 pb-16 md:grid-cols-2 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-pink-500 to-cyan-500 shadow-xl">
                <Dumbbell className="text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-black">
                  {siteConfig.author.split(" ")[0]}
                  <span className="text-pink-400">
                    {" "}
                    {siteConfig.author.split(" ")[1]}
                  </span>
                </h3>
                <p className="text-sm text-gray-400">
                  {siteConfig.authorTitle} — {siteConfig.city}
                </p>
              </div>
            </div>

            <p className="mb-8 max-w-md leading-8 text-gray-400">
              {siteConfig.description}
            </p>

            <div className="space-y-4">
              <a
                href={phoneHref}
                className="flex items-center gap-4 text-gray-300 transition-colors hover:text-pink-400"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <FaPhoneAlt />
                </div>
                <span>{siteConfig.mobile}</span>
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-4 text-gray-300 transition-colors hover:text-cyan-400"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <FaEnvelope />
                </div>
                <span>{siteConfig.email}</span>
              </a>

              <div className="flex items-center gap-4 text-gray-300">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <FaMapMarkerAlt />
                </div>
                <span>{siteConfig.address}</span>
              </div>
            </div>
          </motion.div>

          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="mb-6 text-lg font-bold text-white">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-gray-400 transition-colors hover:text-white"
                    >
                      <ArrowUpRight
                        size={14}
                        className="opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0"
                      />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="flex flex-col items-center justify-between gap-6 py-8 lg:flex-row">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400">
              <HeartPulse size={18} className="text-pink-400" />
              <span>ما را دنبال کنید</span>
            </div>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.div key={social.label} whileHover={{ y: -4 }}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className={`flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-all duration-300 ${social.color}`}
                    >
                      <Icon />
                    </a>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="text-center lg:text-left">
            <p className="text-gray-400">
              © {currentYear} تمامی حقوق محفوظ است برای
              <span className="font-bold text-pink-400"> {siteConfig.author}</span>
            </p>
            <p className="mt-1 text-sm text-gray-500">
              مربی فیتنس قزوین — {siteConfig.nameEn}
            </p>
          </div>
        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-pink-500/50 via-transparent to-cyan-500/50" />
    </footer>
  );
}
