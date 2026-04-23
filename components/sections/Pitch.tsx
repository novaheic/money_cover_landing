"use client";

import { useState } from "react";
import { Reveal } from "../Reveal";
import { GenderqueerSymbol, CrescentMoon, Pentagram } from "../Symbols";

const pillars = [
  {
    Icon: GenderqueerSymbol,
    gradient: "/brand/gradient-2.png",
    glow: "rgba(247, 168, 196, 0.35)",
    eyebrow: "The problem",
    title: "The system wasn't built for us.",
    body: "Women, trans, and non-binary people earn less, are charged more, and are almost never taught how money actually works. Financial knowledge has always been passed down inside the right families and the right circles. We're here to change that.",
  },
  {
    Icon: CrescentMoon,
    gradient: "/brand/gradient-4.png",
    glow: "rgba(200, 164, 232, 0.35)",
    eyebrow: "The program",
    title: "Free sessions. Real knowledge.",
    body: "A virtual, peer-to-peer mentorship program with guided sessions, guest speakers, and hands-on assignments — always free. We cover budgeting, credit, investing, and how to protect yourself from scams. No jargon, no shame, no upsell.",
  },
  {
    Icon: GenderqueerSymbol,
    gradient: "/brand/gradient-1.png",
    glow: "rgba(85, 205, 252, 0.32)",
    eyebrow: "The community",
    title: "Graduate and join the coven.",
    body: "Finish all sessions and you're invited to join our community. Because everyone went through the same program, we share a common foundation. Real people from every cohort, no hierarchy, no bots, no spam. Organize, learn, and support each other.",
  },
];

const steps = [
  {
    num: "01",
    label: "Join a cohort",
    detail: "Apply to an upcoming cohort - it's always free, always remote.",
  },
  {
    num: "02",
    label: "Complete the program",
    detail: "Attend all sessions, learn with your cohort, and finish the assignments.",
  },
  {
    num: "03",
    label: "Enter the community",
    detail: "Graduates are invited to our coven. A decentralized global network.",
  },
];

type Pillar = (typeof pillars)[number];

function PillarCard({ p }: { p: Pillar; index: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="group relative h-full overflow-hidden rounded-2xl border bg-white/[0.02] p-8 backdrop-blur-sm"
      style={{ borderColor: hovered ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.1)" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={p.gradient}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover select-none pointer-events-none"
        style={{
          opacity: hovered ? 0.88 : 0,
          transition: "opacity 600ms ease",
          filter: "saturate(1.1)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "rgba(10,10,10,0.22)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 600ms ease",
        }}
      />
      <p className="relative z-10 mb-4 text-[11px] uppercase tracking-[0.3em] text-white/30">
        {p.eyebrow}
      </p>
      <div
        className="relative z-10 mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white/70 transition-transform group-hover:scale-110"
        style={{ boxShadow: `0 0 28px ${p.glow}` }}
      >
        <p.Icon size={20} color="currentColor" strokeWidth={1.3} />
      </div>
      <h3 className="relative z-10 mb-3 font-display text-xl leading-tight">
        {p.title}
      </h3>
      <p className="relative z-10 text-white/55 leading-relaxed text-[15px]">
        {p.body}
      </p>
    </div>
  );
}

export function Pitch() {
  return (
    <section id="about" className="relative w-full px-6 py-32 md:py-40">
      <div className="mx-auto max-w-6xl">

        {/* Heading block */}
        <Reveal className="mb-5 max-w-3xl">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-white/30">
            What is Money Coven?
          </p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05] tracking-tight">
            Personal finance,{" "}
            <span className="italic text-gradient-warm inline-block pr-[3px]">demystified</span> for
            the rest of us.
          </h2>
        </Reveal>

        <Reveal delay={0.08} className="mb-20">
          <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-2xl">
            Money Coven is a free financial literacy program built for{" "}
            <span className="text-white/90">
              women, trans, non-binary, and gender-nonconforming people
            </span>{" "}
            - anyone who feels their gender or sexuality has put them at a financial disadvantage. We
            can't fix the system. But we can make sure we understand exactly how
            it works.
          </p>
        </Reveal>

        {/* Pillars */}
        <div className="grid gap-8 md:grid-cols-3 mb-10">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.12}>
              <PillarCard p={p} index={i} />
            </Reveal>
          ))}
        </div>

        {/* How it works */}
        <Reveal delay={0.35}>
          <div className="rounded-2xl border border-white/8 bg-white/[0.018] px-8 py-7">
            <p className="mb-7 text-[11px] uppercase tracking-[0.35em] text-white/30">
              How it works
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-0">
              {steps.map((s, i) => (
                <div key={s.num} className="relative flex items-start gap-4 md:pr-8">
                  {/* Connector line between steps */}
                  {i < steps.length - 1 && (
                    <div
                      aria-hidden
                      className="hidden md:block absolute right-0 top-3 h-px w-8 bg-gradient-to-r from-white/15 to-transparent"
                    />
                  )}
                  <span className="shrink-0 font-mono text-xs text-white/20 pt-0.5 w-7">
                    {s.num}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-white/80 mb-1">{s.label}</p>
                    <p className="text-[13px] text-white/40 leading-snug">{s.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>


      </div>
    </section>
  );
}
