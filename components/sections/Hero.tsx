"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Stars } from "../Stars";
import { SquigglyDivider } from "../SquigglyDivider";

export function Hero() {
  const reduce = useReducedMotion();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || status === "loading" || status === "sent") return;
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  const heroStars = [
    { top: "8%", left: "4%", size: 84, delay: "0.1s", color: "rgba(255,255,255,0.62)", mobileSize: 32, mobileTop: "6%", mobileLeft: "3%" },
    { top: "14%", left: "11%", size: 52, delay: "0.8s", color: "rgba(255,255,255,0.45)", mobileSize: 20, mobileTop: "16%", mobileLeft: "8%" },
    { top: "74%", left: "87%", size: 86, delay: "1.4s", color: "rgba(255,255,255,0.62)", mobileSize: 32, mobileTop: "72%", mobileLeft: "84%" },
    { top: "68%", left: "80%", size: 50, delay: "2s", color: "rgba(255,255,255,0.45)", mobileSize: 20, mobileTop: "82%", mobileLeft: "78%" },
    { top: "20%", left: "84%", size: 10, delay: "1.6s", color: "rgba(255,255,255,0.28)" },
    { top: "38%", left: "12%", size: 12, delay: "0.4s", color: "rgba(255,255,255,0.32)" },
    { top: "56%", left: "6%", size: 9, delay: "2.2s", color: "rgba(255,255,255,0.28)" },
    { top: "24%", left: "34%", size: 8, delay: "2.8s", color: "rgba(255,255,255,0.24)" },
    { top: "30%", left: "58%", size: 11, delay: "0.6s", color: "rgba(255,255,255,0.3)" },
    { top: "44%", left: "74%", size: 7, delay: "1.9s", color: "rgba(255,255,255,0.22)" },
    { top: "62%", left: "36%", size: 10, delay: "2.5s", color: "rgba(255,255,255,0.27)" },
    { top: "82%", left: "22%", size: 12, delay: "1.2s", color: "rgba(255,255,255,0.3)" },
    { top: "88%", left: "62%", size: 9, delay: "0.9s", color: "rgba(255,255,255,0.25)" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center px-6 pb-40 pt-32"
    >
      {/* Full-bleed gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/gradient-1.png"
          alt=""
          aria-hidden
          className={`absolute inset-0 h-full w-full object-cover ${
            reduce ? "" : "animate-slow-pulse"
          }`}
          style={{
            filter: "saturate(1.05)",
            transformOrigin: "center",
          }}
        />
        {/* Subtle vignette for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at center, transparent 0%, rgba(10,10,10,0.25) 60%, rgba(10,10,10,0.55) 100%)",
          }}
        />
        <div className="absolute inset-0 grain" />
      </div>

      <Stars
        stars={heroStars}
        moon={{ top: "14%", left: "78%", size: 30, delay: "0.2s", color: "#FFFFFF" }}
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/25 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white backdrop-blur-md"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-buttercup animate-pulse" />
          Applications open summer 2026
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-[min(86vw,680px)]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/wordmark.png"
            alt="Money Coven"
            className="h-auto w-full select-none"
            style={{
              filter: "drop-shadow(0 6px 28px rgba(10,10,10,0.45))",
            }}
          />
        </motion.div>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="mt-10 max-w-2xl font-display text-xl md:text-2xl italic text-white leading-snug"
          style={{ textShadow: "0 2px 20px rgba(10,10,10,0.4)" }}
        >
          Inclusive financial literacy mentorship program & community for modern witches.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="mt-12 flex w-full max-w-lg flex-col items-center"
        >
          <form
            onSubmit={handleSubmit}
            className="relative flex w-full flex-col gap-2 rounded-3xl border border-white/25 bg-black/30 p-2 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.35)] sm:flex-row sm:gap-0 sm:rounded-full"
          >
            <label htmlFor="hero-email" className="sr-only">
              Email address
            </label>
            <input
              id="hero-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              disabled={status === "sent" || status === "loading"}
              className="flex-1 rounded-full bg-transparent px-5 py-3 text-base text-white placeholder:text-white/50 focus:outline-none disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={status === "sent" || status === "loading"}
              className="group relative overflow-hidden rounded-full bg-buttercup px-8 py-3 text-xs font-medium uppercase tracking-[0.14em] text-ink shadow-[0_6px_24px_rgba(245,230,66,0.4)] transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60"
            >
              <span className="relative z-10 whitespace-nowrap">
                {status === "sent"
                  ? "You're in ✦"
                  : status === "loading"
                    ? "Sending..."
                    : "Join the waitlist"}
              </span>
              <span
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                aria-hidden
              />
            </button>
          </form>
          <div className="mt-4 flex min-h-[20px] items-center justify-center text-xs text-white/60">
            {status === "sent" ? (
              <span>Welcome to the coven.</span>
            ) : status === "error" ? (
              <span className="text-rose-200">Something went wrong. Please try again.</span>
            ) : null}
          </div>
        </motion.div>
      </div>

      {/* Squiggly lava-lamp transition */}
      <div className="absolute bottom-0 left-0 right-0 z-[5] pointer-events-none">
        <SquigglyDivider fill="#0A0A0A" height={200} />
      </div>

      <motion.a
        href="#definition"
        aria-label="Learn more"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-3 left-1/2 z-10 -translate-x-1/2 text-white/50 hover:text-white transition-colors"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em]">Learn more</span>
          <motion.div
            animate={reduce ? {} : { y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="h-10 w-px bg-gradient-to-b from-white/50 to-transparent"
          />
        </div>
      </motion.a>
    </section>
  );
}
