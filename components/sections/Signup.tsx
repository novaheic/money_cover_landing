"use client";

import { useState } from "react";
import { Reveal } from "../Reveal";
import { StarGlyph } from "../Stars";
import { CrescentMoon } from "../Symbols";

export function Signup({ witchCount = 0 }: { witchCount?: number }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");
  const [count, setCount] = useState<number>(witchCount);

  async function handleSubmit(e: { preventDefault(): void }) {
    e.preventDefault();
    if (!email || status === "loading") return;

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
      setCount((c) => c + 1);
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="join"
      className="relative w-full px-6 py-32 md:py-48 overflow-hidden"
    >
      {/* Large corner stars */}
      <div
        aria-hidden
        className="absolute left-[4%] top-[8%] text-white/55 animate-twinkle scale-50 md:scale-100 origin-top-left"
      >
        <StarGlyph size={60} color="currentColor" />
      </div>
      <div
        aria-hidden
        className="absolute left-[20%] md:left-[10%] top-[13%] text-white/40 animate-twinkle scale-50 md:scale-100 origin-top-left"
        style={{ animationDelay: "0.8s" }}
      >
        <StarGlyph size={36} color="currentColor" />
      </div>
      <div
        aria-hidden
        className="absolute right-[5%] bottom-[7%] text-white/55 animate-twinkle scale-50 md:scale-100 origin-bottom-right"
        style={{ animationDelay: "1.4s" }}
      >
        <StarGlyph size={62} color="currentColor" />
      </div>
      <div
        aria-hidden
        className="absolute right-[20%] md:right-[11%] bottom-[12%] text-white/40 animate-twinkle scale-50 md:scale-100 origin-bottom-right"
        style={{ animationDelay: "2s" }}
      >
        <StarGlyph size={34} color="currentColor" />
      </div>

      {/* Scattered smaller stars */}
      <div aria-hidden className="absolute left-[12%] top-[42%] text-white/30 animate-twinkle" style={{ animationDelay: "0.4s" }}>
        <StarGlyph size={12} color="currentColor" />
      </div>
      <div aria-hidden className="absolute right-[14%] top-[22%] text-white/25 animate-twinkle" style={{ animationDelay: "1.6s" }}>
        <StarGlyph size={10} color="currentColor" />
      </div>
      <div aria-hidden className="absolute left-[18%] bottom-[24%] text-white/30 animate-twinkle" style={{ animationDelay: "2.4s" }}>
        <StarGlyph size={14} color="currentColor" />
      </div>
      <div aria-hidden className="absolute right-[26%] bottom-[30%] text-white/25 animate-twinkle" style={{ animationDelay: "1s" }}>
        <StarGlyph size={11} color="currentColor" />
      </div>
      <div aria-hidden className="absolute left-[42%] top-[16%] text-white/20 animate-twinkle" style={{ animationDelay: "2.8s" }}>
        <StarGlyph size={9} color="currentColor" />
      </div>
      <div aria-hidden className="absolute right-[38%] top-[14%] text-white/25 animate-twinkle" style={{ animationDelay: "0.2s" }}>
        <StarGlyph size={10} color="currentColor" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <Reveal>
          <div className="mb-8 flex items-center justify-center gap-4">
            <StarGlyph size={14} color="#F7A8C4" />
            <CrescentMoon size={22} color="#FFFFFF" />
            <StarGlyph size={10} color="#55CDFC" />
          </div>
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-white/60">
            ✦ Join the waitlist
          </p>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
            Come{" "}
            <span className="italic text-gradient-brand">join us</span>.
          </h2>
          <p className="mx-auto mt-8 max-w-lg text-white/70 leading-relaxed">
            Drop your email and we'll let you know when applications open —
            plus occasional notes from the coven. No spam. Unsubscribe anytime.
          </p>
          {count > 0 && (
            <p className="mt-4 text-xs text-white/40 tracking-wide">
              ✦ Join {count.toLocaleString()} others on the waitlist
            </p>
          )}
        </Reveal>

        <Reveal delay={0.2}>
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-12 flex max-w-xl flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              disabled={status === "sent" || status === "loading"}
              className="flex-1 rounded-full border border-white/20 bg-black/40 px-6 py-4 text-base text-white placeholder:text-white/40 backdrop-blur-md transition-colors focus:border-buttercup focus:outline-none focus:ring-2 focus:ring-buttercup/40 disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={status === "sent" || status === "loading"}
              className="group relative overflow-hidden rounded-full bg-buttercup px-8 py-4 text-sm font-medium uppercase tracking-[0.18em] text-ink shadow-[0_10px_40px_rgba(245,230,66,0.35)] transition-transform hover:scale-[1.03] active:scale-[0.98] disabled:opacity-60"
            >
              <span className="relative z-10">
                {status === "sent"
                  ? "You're in ✦"
                  : status === "loading"
                    ? "Sending..."
                    : "Subscribe"}
              </span>
              <span
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                aria-hidden
              />
            </button>
          </form>

          {status === "sent" && (
            <p className="mt-6 text-sm text-white/70">
              You're subscribed. Welcome to the coven.
            </p>
          )}
          {status === "error" && (
            <p className="mt-6 text-sm text-rose-200">
              Something went wrong. Please try again in a moment.
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
