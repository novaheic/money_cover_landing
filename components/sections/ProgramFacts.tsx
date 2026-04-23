"use client";

import { useState } from "react";
import { Reveal } from "../Reveal";

const facts = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <polygon points="5,3 19,12 5,21" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.2" opacity="0.35" />
      </svg>
    ),
    glow: "rgba(224, 64, 124, 0.5)",
    accent: "#E0407C",
    label: "Format",
    value: "2h live sessions",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.3" />
        <ellipse cx="12" cy="12" rx="4" ry="9.5" stroke="currentColor" strokeWidth="1.1" opacity="0.5" />
        <path d="M2.5 8.5 Q12 10.5 21.5 8.5M2.5 15.5 Q12 13.5 21.5 15.5" stroke="currentColor" strokeWidth="1.1" opacity="0.5" />
      </svg>
    ),
    glow: "rgba(85, 205, 252, 0.5)",
    accent: "#55CDFC",
    label: "Location",
    value: "Fully online",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3" y="5" width="18" height="16" rx="2.5" stroke="currentColor" strokeWidth="1.3" />
        <path d="M3 10 L21 10" stroke="currentColor" strokeWidth="1.1" opacity="0.5" />
        <path d="M8 3 L8 7 M16 3 L16 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M7 14.5 L17 14.5 M7 18 L13 18" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" opacity="0.45" />
      </svg>
    ),
    glow: "rgba(156, 89, 209, 0.5)",
    accent: "#C8A4E8",
    label: "Duration",
    value: "8 weeks, 8 sessions",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.3" />
        <path d="M12 7 L12 12.5 L16 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    glow: "rgba(245, 230, 66, 0.45)",
    accent: "#F5E642",
    label: "Schedule",
    value: "Wed · 18:00–20:00 Berlin",
  },
];

function GlassButton() {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href="#join"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative inline-flex items-center gap-3 overflow-hidden rounded-full px-10 py-4 text-sm font-medium uppercase tracking-[0.2em] text-white transition-transform duration-300 hover:scale-[1.04] active:scale-[0.97]"
      style={{
        background: hovered
          ? "linear-gradient(135deg, rgba(200,164,232,0.22) 0%, rgba(156,89,209,0.14) 50%, rgba(85,205,252,0.1) 100%)"
          : "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.03) 100%)",
        border: `1px solid ${hovered ? "rgba(200,164,232,0.5)" : "rgba(255,255,255,0.15)"}`,
        boxShadow: hovered
          ? "0 0 40px rgba(156,89,209,0.5), 0 0 80px rgba(156,89,209,0.2), inset 0 1px 0 rgba(255,255,255,0.2)"
          : "0 4px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
        backdropFilter: "blur(20px)",
        transition: "background 400ms ease, border 400ms ease, box-shadow 400ms ease, transform 300ms ease",
      }}
    >
      {/* Sweep shimmer on hover */}
      <span
        aria-hidden
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.12] to-transparent"
        style={{
          transition: hovered ? "transform 600ms ease" : "none",
          transform: hovered ? "translateX(100%)" : "translateX(-100%)",
        }}
      />
      <span className="relative z-10">Join the waitlist</span>
      <svg
        className="relative z-10 transition-transform duration-300"
        style={{ transform: hovered ? "translateY(2px)" : "translateY(0)" }}
        width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden
      >
        <path d="M12 5 L12 19 M6 13 L12 19 L18 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}

export function ProgramFacts() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Gradient background */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(115deg, #1a0a2e 0%, #2d0a3e 25%, #3b0f2f 50%, #1e0f3a 75%, #0d1a2e 100%)",
        }}
      />
      {/* Depth overlay */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 20% 50%, rgba(156,89,209,0.25) 0%, transparent 60%), radial-gradient(ellipse 60% 80% at 80% 50%, rgba(85,205,252,0.12) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            {facts.map((f) => (
              <div
                key={f.label}
                className="group flex flex-col gap-3 rounded-2xl border border-white/[0.1] bg-white/[0.04] px-5 py-5 backdrop-blur-sm transition-colors duration-300 hover:border-white/[0.2] hover:bg-white/[0.07]"
              >
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/40 transition-transform duration-300 group-hover:scale-105"
                  style={{ color: f.accent, boxShadow: `0 0 20px ${f.glow}` }}
                >
                  {f.icon}
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/35 mb-1">
                    {f.label}
                  </p>
                  <p className="font-display text-[15px] leading-snug text-white/90">
                    {f.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <GlassButton />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
