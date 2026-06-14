"use client";

import { Dumbbell } from "lucide-react";

export default function Loading() {
  return (
    <div className="theme-bg flex min-h-screen items-center justify-center">
      
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 h-[300px] w-[300px] rounded-full bg-pink-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      {/* content */}
      <div className="relative z-10 flex flex-col items-center">
        
        {/* spinner */}
        <div className="relative flex items-center justify-center">
          
          {/* outer ring */}
          <div className="h-40 w-40 rounded-full border border-[var(--border-color)]" />

          {/* animated ring */}
          <div className="absolute h-40 w-40 animate-spin rounded-full border-[4px] border-transparent border-t-pink-500 border-r-cyan-400" />

          {/* center */}
          <div className="absolute flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-cyan-500 shadow-lg">
            <Dumbbell size={32} className="text-white" />
          </div>
        </div>

        {/* text */}
        <div className="mt-10 text-center">
          <h1 className="text-3xl font-bold">
            همراز <span className="text-pink-500">قاسمی</span>
          </h1>
          <p className="theme-text-muted mt-2 text-sm">
            در حال آماده‌سازی...
          </p>
        </div>

        {/* dots */}
        <div className="mt-6 flex gap-2">
          <span className="h-2 w-2 animate-bounce rounded-full bg-pink-500" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-400 [animation-delay:0.2s]" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-pink-500 [animation-delay:0.4s]" />
        </div>
      </div>
    </div>
  );
}