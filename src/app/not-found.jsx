import Link from "next/link";
import { Home, ArrowLeft, SearchX } from "lucide-react";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "صفحه یافت نشد",
  description: "صفحه مورد نظر یافت نشد. به صفحه اصلی همراز قاسمی بازگردید.",
  path: "/404",
  noIndex: true,
});

export default function NotFound() {
  return (
    <main className="theme-bg relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-10 pt-28">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-100px] right-[-100px] h-[320px] w-[320px] rounded-full bg-pink-500/10 blur-3xl" />
        <div className="absolute bottom-[-100px] left-[-100px] h-[320px] w-[320px] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="grid-bg absolute inset-0 opacity-40" />
      </div>

      <div className="theme-card relative z-10 w-full max-w-4xl overflow-hidden rounded-[2.5rem] shadow-2xl">
        <div className="flex flex-col items-center px-6 py-16 text-center md:px-14">
          <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-[2rem] bg-pink-500/10">
            <SearchX size={42} className="text-pink-500" />
          </div>

          <h1 className="text-[90px] font-black leading-none md:text-[160px]">404</h1>
          <h2 className="mt-4 text-3xl font-black md:text-5xl">صفحه پیدا نشد</h2>

          <p className="theme-text-secondary mt-6 max-w-2xl text-base leading-8 md:text-lg">
            صفحه‌ای که به دنبال آن هستید وجود ندارد یا حذف شده است.
          </p>

          <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/" className="theme-btn-primary flex w-full items-center justify-center gap-3 rounded-2xl px-8 py-4 sm:w-auto">
              <Home size={20} />
              بازگشت به خانه
            </Link>
            <Link href="/classes" className="theme-btn-outline group flex w-full items-center justify-center gap-3 rounded-2xl px-8 py-4 sm:w-auto">
              مشاهده کلاس‌ها
              <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
