"use client";

import { useRef } from "react";
import { Reveal } from "../Reveal";
import { StarGlyph } from "../Stars";
import { MouseBlob } from "../MouseBlob";
import { SolidBlob } from "../SolidBlob";
import {
  Pentagram,
  GenderqueerSymbol,
  VenusSymbol,
  CrescentMoon,
} from "../Symbols";

const perks = [
  {
    Icon: VenusSymbol,
    color: "#F7A8C4",
    numeral: "I",
    arcana: "The Sanctum",
    body: "A vetted space for graduates. No lurkers, no scrapers, no AI bots.",
  },
  {
    Icon: GenderqueerSymbol,
    color: "#C8A4E8",
    numeral: "II",
    arcana: "The Coven",
    body: "Keep asking questions long after the program ends. The coven answers.",
  },
  {
    Icon: CrescentMoon,
    color: "#55CDFC",
    numeral: "III",
    arcana: "The Oracle",
    body: "Candid conversations about new products, policies, and markets as they happen.",
  },
  {
    Icon: Pentagram,
    color: "#F5E642",
    numeral: "IV",
    arcana: "The Gathering",
    body: "Occasional in-person workshops and meetups with people who've walked the same path.",
  },
];

export function Coven() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="coven"
      className="relative w-full px-6 py-32 md:py-40 overflow-hidden"
    >
      {/* Ambient solid blobs */}
      <SolidBlob
        className="top-0 -left-40"
        size={500}
        gradient="radial-gradient(circle at 40% 40%, #9C59D1 0%, #E0407C 70%, transparent)"
        shape="56% 44% 62% 38% / 48% 52% 48% 52%"
        rotate={12}
        blur={70}
        opacity={0.35}
      />
      <SolidBlob
        className="bottom-10 right-[-80px]"
        size={420}
        gradient="radial-gradient(circle at 60% 50%, #FF9A56 0%, #E0407C 80%, transparent)"
        shape="50% 50% 45% 55% / 55% 45% 55% 45%"
        rotate={-18}
        blur={60}
        opacity={0.3}
      />

      {/* Mouse-reactive blob trailing the cursor */}
      <MouseBlob
        containerRef={sectionRef}
        src="/brand/gradient-1.png"
        size={460}
        blur={50}
        opacity={0.5}
        morph="a"
        glow="rgba(156, 89, 209, 0.35)"
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          <Reveal>
            <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-fuchsia">
              <Pentagram size={14} color="#E0407C" strokeWidth={1.2} />
              After the program
            </p>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05] tracking-tight">
              You join{" "}
              <span className="italic text-gradient-warm">the coven</span>.
            </h2>
            <p className="mt-6 max-w-md text-white/65 leading-relaxed">
              Finishing the eight weeks isn't the end — it's the door. Graduates
              get lifetime access to a small, private community where we keep
              the conversation going and look out for each other.
            </p>
            <p className="mt-4 max-w-md text-white/35 text-xs uppercase tracking-[0.2em]">
              ✦ move your cursor around
            </p>
          </Reveal>

          <div className="relative">
            <Reveal delay={0.2}>
              <div className="relative">
                {/* Ambient conic glow */}
                <div
                  aria-hidden
                  className="absolute -inset-8 rounded-3xl pointer-events-none blur-3xl opacity-35"
                  style={{
                    background:
                      "conic-gradient(from 180deg at 50% 50%, #9C59D1, #E0407C, #FF9A56, #F5E642, #55CDFC, #9C59D1)",
                  }}
                />

                {/* Pentagram watermark */}
                <div
                  aria-hidden
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white/5 pointer-events-none"
                >
                  <Pentagram size={160} strokeWidth={0.5} />
                </div>

                {/* 2×2 tarot card grid */}
                <div className="relative grid grid-cols-2 gap-3">
                  {perks.map((p) => (
                    <div
                      key={p.arcana}
                      className="group relative flex flex-col items-center overflow-hidden rounded-xl border border-white/15 bg-ink/90 backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:scale-[1.025]"
                    >
                      {/* Per-card colour glow on hover */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                        style={{
                          background: `radial-gradient(ellipse at 50% 0%, ${p.color}22 0%, transparent 70%)`,
                        }}
                      />

                      {/* Inner inset border (classic tarot double-frame) */}
                      <div className="absolute inset-[5px] rounded-[8px] border border-white/8 pointer-events-none z-10" />

                      {/* Card content */}
                      <div className="relative z-10 flex flex-col items-center w-full px-4 py-5">
                        {/* Roman numeral */}
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-white/20 text-[8px]">✦</span>
                          <span
                            className="font-mono text-[11px] tracking-[0.4em]"
                            style={{ color: `${p.color}60` }}
                          >
                            {p.numeral}
                          </span>
                          <span className="text-white/20 text-[8px]">✦</span>
                        </div>

                        {/* Top rule */}
                        <div className="flex items-center gap-1.5 w-full mb-5">
                          <div className="flex-1 h-px bg-white/10" />
                          <StarGlyph size={4} color={p.color} />
                          <div className="flex-1 h-px bg-white/10" />
                        </div>

                        {/* Icon */}
                        <div
                          className="py-5"
                          style={{
                            filter: `drop-shadow(0 0 16px ${p.color}70)`,
                          }}
                        >
                          <p.Icon size={52} color={p.color} strokeWidth={0.75} />
                        </div>

                        {/* Bottom rule */}
                        <div className="flex items-center gap-1.5 w-full mt-5 mb-4">
                          <div className="flex-1 h-px bg-white/10" />
                          <StarGlyph size={4} color={p.color} />
                          <div className="flex-1 h-px bg-white/10" />
                        </div>

                        {/* Arcana name */}
                        <h4 className="font-display text-sm italic text-center leading-tight text-white/85">
                          {p.arcana}
                        </h4>

                        {/* Body */}
                        <p className="text-center text-[10px] text-white/45 mt-2 leading-relaxed">
                          {p.body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
