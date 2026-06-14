"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Home, User, Dumbbell, BookOpen, Phone } from "lucide-react";

const navItems = [
  { href: "/", label: "خانه", icon: Home },
  { href: "/aboutus", label: "درباره", icon: User },
  { href: "/classes", label: "کلاس‌ها", icon: Dumbbell },
  { href: "/blogs", label: "بلاگ", icon: BookOpen },
  { href: "/contactus", label: "تماس", icon: Phone },
];

export default function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
      <div className="mx-3 mb-3 overflow-hidden rounded-[1.75rem] border border-[var(--border-color)] bg-[var(--nav-bg)] shadow-lg backdrop-blur-2xl">
        <div className="grid grid-cols-5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative flex flex-col items-center gap-1 px-2 py-3"
              >
                {isActive && (
                  <motion.div
                    layoutId="mobile-nav-active"
                    className="absolute inset-x-2 inset-y-1 rounded-2xl bg-gradient-to-r from-pink-500/20 to-cyan-500/20"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}

                <Icon
                  size={20}
                  className={`relative z-10 transition-colors ${
                    isActive
                      ? "text-pink-400"
                      : "text-gray-400 dark:text-gray-400"
                  }`}
                />

                <span
                  className={`relative z-10 text-[10px] font-bold transition-colors ${
                    isActive ? "text-pink-500" : "theme-text-muted"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
