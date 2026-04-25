"use client";

import { useRef, useState, type PointerEvent as ReactPointerEvent, type KeyboardEvent as ReactKeyboardEvent, type ReactElement } from "react";
import { Reveal } from "../Reveal";
import { StarGlyph } from "../Stars";
import { SolidBlob } from "../SolidBlob";
import { CursorGlow } from "../CursorGlow";
import {
  Pentagram,
  GenderqueerSymbol,
  VenusSymbol,
  CrescentMoon,
} from "../Symbols";

type Perk = {
  Icon: (props: { size?: number; color?: string; strokeWidth?: number }) => ReactElement;
  color: string;
  numeral: string;
  arcana: string;
  body: string;
  virtue: string;
  details: string[];
};

const perks: Perk[] = [
  {
    Icon: VenusSymbol,
    color: "#F7A8C4",
    numeral: "I",
    arcana: "The Sanctum",
    body: "A vetted space for graduates. No lurkers, no scrapers, no AI bots, no spam.",
    virtue: "Sanctuary",
    details: [
      "Participants only",
      "No scrapers, no bots",
      "Private by design",
    ],
  },
  {
    Icon: GenderqueerSymbol,
    color: "#C8A4E8",
    numeral: "II",
    arcana: "The Coven",
    body: "Keep asking questions long after the program ends. The coven answers.",
    virtue: "Kinship",
    details: [
      "Peer-to-peer learning",
      "Open discussions",
      "Community Support",
    ],
  },
  {
    Icon: CrescentMoon,
    color: "#55CDFC",
    numeral: "III",
    arcana: "The Oracle",
    body: "Candid conversations about new developments, policies, and markets as they happen.",
    virtue: "Foresight",
    details: [
      "Real-time intel",
      "Access to new tools",
      "Stay in the loop",
    ],
  },
  {
    Icon: Pentagram,
    color: "#F5E642",
    numeral: "IV",
    arcana: "The Gathering",
    body: "Occasional in-person events and meetups with people who've walked the same path.",
    virtue: "Ritual",
    details: [
      "Social gatherings",
      "Workshops & dinners",
      "Community organizing",
    ],
  },
];

function CornerFlourish({
  color,
  position,
}: {
  color: string;
  position: "tl" | "tr" | "bl" | "br";
}) {
  const rotations: Record<typeof position, number> = {
    tl: 0,
    tr: 90,
    br: 180,
    bl: 270,
  };
  const positionClass = {
    tl: "top-2 left-2",
    tr: "top-2 right-2",
    bl: "bottom-2 left-2",
    br: "bottom-2 right-2",
  }[position];

  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      className={`absolute ${positionClass} pointer-events-none`}
      style={{ transform: `rotate(${rotations[position]}deg)` }}
      aria-hidden
    >
      <path
        d="M 1 9 Q 1 1 9 1"
        stroke={color}
        strokeWidth="0.7"
        fill="none"
        opacity="0.55"
      />
      <path
        d="M 3 9 Q 3 3 9 3"
        stroke={color}
        strokeWidth="0.4"
        fill="none"
        opacity="0.3"
      />
      <circle cx="1" cy="1" r="0.9" fill={color} opacity="0.7" />
      <circle cx="5" cy="5" r="0.5" fill={color} opacity="0.45" />
    </svg>
  );
}

function TarotCard({
  perk,
  flipped,
  onPointerEnter,
  onPointerLeave,
  onPointerDown,
  onKeyDown,
}: {
  perk: Perk;
  flipped: boolean;
  onPointerEnter: (e: ReactPointerEvent) => void;
  onPointerLeave: (e: ReactPointerEvent) => void;
  onPointerDown: (e: ReactPointerEvent) => void;
  onKeyDown: (e: ReactKeyboardEvent) => void;
}) {
  const faceBase =
    "absolute inset-0 overflow-hidden rounded-xl border border-white/15 bg-ink/90 backdrop-blur-sm [backface-visibility:hidden] [-webkit-backface-visibility:hidden]";

  return (
    <div
      className="group relative h-[340px] sm:h-[360px] md:h-[380px] [perspective:1400px] cursor-pointer select-none outline-none"
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      onPointerDown={onPointerDown}
      onKeyDown={onKeyDown}
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
      aria-label={`${perk.arcana} — ${flipped ? "show front" : "reveal details"}`}
    >
      {/* Outer glow that intensifies on flip */}
      <div
        className="absolute -inset-1 rounded-2xl pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(ellipse at 50% 50%, ${perk.color}26 0%, transparent 70%)`,
          opacity: flipped ? 0.9 : 0,
          filter: "blur(14px)",
        }}
      />

      <div
        className="relative w-full h-full transition-transform duration-[900ms] [transform-style:preserve-3d]"
        style={{
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
          willChange: "transform",
        }}
      >
        {/* FRONT */}
        <div
          className={`${faceBase} transition-[border-color] duration-300 ${
            flipped ? "" : "group-hover:border-white/30"
          }`}
        >
          {/* Per-card colour glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse at 50% 0%, ${perk.color}22 0%, transparent 70%)`,
            }}
          />

          {/* Inner inset border (classic tarot double-frame) */}
          <div className="absolute inset-[5px] rounded-[8px] border border-white/8 pointer-events-none z-10" />

          {/* Card content */}
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4 py-5">
            {/* Roman numeral */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-white/20 text-[8px]">✦</span>
              <span
                className="font-mono text-[11px] tracking-[0.4em] [margin-right:-0.4em]"
                style={{ color: `${perk.color}60` }}
              >
                {perk.numeral}
              </span>
              <span className="text-white/20 text-[8px]">✦</span>
            </div>

            {/* Top rule */}
            <div className="flex items-center gap-1.5 w-full mb-5">
              <div className="flex-1 h-px bg-white/10" />
              <StarGlyph size={4} color={perk.color} />
              <div className="flex-1 h-px bg-white/10" />
            </div>

            {/* Icon */}
            <div
              className="py-5"
              style={{ filter: `drop-shadow(0 0 16px ${perk.color}70)` }}
            >
              <perk.Icon size={52} color={perk.color} strokeWidth={0.75} />
            </div>

            {/* Bottom rule */}
            <div className="flex items-center gap-1.5 w-full mt-5 mb-4">
              <div className="flex-1 h-px bg-white/10" />
              <StarGlyph size={4} color={perk.color} />
              <div className="flex-1 h-px bg-white/10" />
            </div>

            {/* Arcana name */}
            <h4 className="font-display text-sm italic text-center leading-tight text-white/85">
              {perk.arcana}
            </h4>

            {/* Body */}
            <p className="text-center text-[10px] text-white/45 mt-2 leading-relaxed">
              {perk.body}
            </p>
          </div>
        </div>

        {/* BACK */}
        <div
          className={`${faceBase} [transform:rotateY(180deg)]`}
          style={{ borderColor: `${perk.color}55` }}
        >
          {/* Rich saturated gradient wash */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse at 50% 40%, ${perk.color}28 0%, transparent 65%), linear-gradient(160deg, rgba(10,10,10,0.4) 0%, ${perk.color}14 100%)`,
            }}
          />

          {/* Diagonal hatch texture (tarot card back feel) */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.07]"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, ${perk.color} 0 1px, transparent 1px 8px), repeating-linear-gradient(-45deg, ${perk.color} 0 1px, transparent 1px 8px)`,
            }}
          />

          {/* Double inner frame */}
          <div
            className="absolute inset-[5px] rounded-[8px] border pointer-events-none z-10"
            style={{ borderColor: `${perk.color}40` }}
          />
          <div className="absolute inset-[9px] rounded-[6px] border border-white/8 pointer-events-none z-10" />

          {/* Corner flourishes */}
          <CornerFlourish color={perk.color} position="tl" />
          <CornerFlourish color={perk.color} position="tr" />
          <CornerFlourish color={perk.color} position="bl" />
          <CornerFlourish color={perk.color} position="br" />

          {/* Faint centered glyph watermark */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{ opacity: 0.06 }}
            aria-hidden
          >
            <perk.Icon size={180} color={perk.color} strokeWidth={0.5} />
          </div>

          {/* Content */}
          <div className="relative z-20 flex flex-col items-center justify-between w-full h-full px-5 py-6 text-center">
            {/* Top ornament */}
            <div className="flex items-center gap-1.5 w-full">
              <div
                className="flex-1 h-px"
                style={{
                  background: `linear-gradient(90deg, transparent, ${perk.color}55)`,
                }}
              />
              <span className="text-white/30 text-[8px]">✦</span>
              <span
                className="font-mono text-[9px] tracking-[0.35em] [margin-right:-0.35em]"
                style={{ color: `${perk.color}95` }}
              >
                {perk.numeral}
              </span>
              <span className="text-white/30 text-[8px]">✦</span>
              <div
                className="flex-1 h-px"
                style={{
                  background: `linear-gradient(270deg, transparent, ${perk.color}55)`,
                }}
              />
            </div>

            {/* Virtue */}
            <div className="flex flex-col items-center">
              <p className="text-[8px] tracking-[0.5em] uppercase text-white/45 mb-2">
                {perk.arcana}
              </p>
              <h4
                className="font-display italic text-2xl md:text-3xl leading-none"
                style={{
                  color: perk.color,
                  textShadow: `0 0 22px ${perk.color}70`,
                }}
              >
                {perk.virtue}
              </h4>
              <div className="flex items-center gap-1.5 mt-3">
                <span className="text-white/30 text-[7px]">·</span>
                <span
                  className="text-sm leading-none"
                  style={{ color: `${perk.color}cc` }}
                >
                  ☽
                </span>
                <span className="text-white/30 text-[7px]">·</span>
              </div>
            </div>

            {/* Details */}
            <ul className="w-full flex flex-col items-center gap-2">
              {perk.details.map((d, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-[10.5px] text-white/75 leading-tight"
                >
                  <StarGlyph size={4} color={perk.color} />
                  <span className="tracking-wide">{d}</span>
                </li>
              ))}
            </ul>

            {/* Bottom ornament */}
            <div className="flex items-center gap-1.5 w-full">
              <div
                className="flex-1 h-px"
                style={{
                  background: `linear-gradient(90deg, transparent, ${perk.color}55)`,
                }}
              />
              <span className="text-white/30 text-[8px]">✦</span>
              <span
                className="font-mono text-[9px] tracking-[0.35em] [margin-right:-0.35em] rotate-180"
                style={{ color: `${perk.color}95` }}
              >
                {perk.numeral}
              </span>
              <span className="text-white/30 text-[8px]">✦</span>
              <div
                className="flex-1 h-px"
                style={{
                  background: `linear-gradient(270deg, transparent, ${perk.color}55)`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Coven() {
  const sectionRef = useRef<HTMLElement>(null);
  const [flipped, setFlipped] = useState<Set<number>>(new Set());

  const setCardFlipped = (i: number, value: boolean) => {
    setFlipped((prev) => {
      const next = new Set(prev);
      if (value) next.add(i);
      else next.delete(i);
      return next;
    });
  };

  const toggleCard = (i: number) => {
    setFlipped((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

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

      {/* Subtle cursor-following glow */}
      <CursorGlow
        containerRef={sectionRef}
        size={560}
        color="rgba(156, 89, 209, 0.18)"
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
              Finishing the eight week program isn't the end — it's the door. Graduates
              get lifetime access to a small, private community where we keep
              the conversation going and look out for each other.
            </p>
            <p className="mt-6 max-w-md text-white/65 leading-relaxed">
              Having all completed the same program, we share a common foundation and can support each other.
            </p>
            <p className="mt-4 max-w-md text-white/35 text-xs uppercase tracking-[0.2em]">
              ✦ hover or tap a card to reveal
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
                  {perks.map((p, i) => (
                    <TarotCard
                      key={p.arcana}
                      perk={p}
                      flipped={flipped.has(i)}
                      onPointerEnter={(e) => {
                        if (e.pointerType === "mouse") setCardFlipped(i, true);
                      }}
                      onPointerLeave={(e) => {
                        if (e.pointerType === "mouse") setCardFlipped(i, false);
                      }}
                      onPointerDown={(e) => {
                        if (e.pointerType !== "mouse") toggleCard(i);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          toggleCard(i);
                        }
                      }}
                    />
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
