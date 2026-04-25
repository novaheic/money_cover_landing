"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Reveal } from "../Reveal";
import { StarGlyph } from "../Stars";
import { SolidBlob } from "../SolidBlob";

const faqs = [
  {
    q: "When does the next cohort start?",
    a: "Applications for the first cohort open in summer 2026, with sessions beginning shortly after. Join the waitlist to be the first to hear exact dates, and to show interest in the program. We are still organizing and will keep you posted!",
  },
  {
    q: "Do I need to be a witch to join?",
    a: "Not at all. The name is a wink at the kind of space we're building — intimate, protective, a little rebellious. What you actually need is a willingness to look honestly at your money, actively participate in assignments, and contribute to the learnings of others",
  },
  {
    q: "How much does it cost?",
    a: "There is no cost to participating. All costs are fully covered by our sponsors and supporters. All we ask of you is that you show up to our sessions on time with enthusiasm and actively participate. You get out what you put in.",
  },
  {
    q: "What's the time commitment?",
    a: "Eight weekly live sessions of two hours each, plus roughly one to two hours of optional reading or reflection between sessions. The capstone in week eight is self-paced and any format you like.",
  },
  {
    q: "Do I need prior financial knowledge?",
    a: "No. The curriculum starts from the fundamentals — credit, cash flow, debt — and builds toward investing, digital assets, and entrepreneurship. If you already know the basics, the group discussions and guest speakers go deeper than most intro resources.",
  },
  {
    q: "Will sessions be recorded?",
    a: "No. Sessions will not be recorded. We take our witches' privacy very seriously. We operate under Chatham House Rule - free use of information from the discussion, but it is not allowed to reveal who made any particular comment. All participants must take part in at least 6 of 8 sessions.",
  },
];

type ItemProps = {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
};

function FAQItem({ q, a, isOpen, onToggle, index }: ItemProps) {
  const reduce = useReducedMotion();

  return (
    <div className="group border-b border-white/10 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-white"
      >
        <div className="flex items-start gap-4">
          <span
            className={`font-mono text-[11px] tracking-[0.3em] transition-colors ${
              isOpen ? "text-buttercup/80" : "text-white/30"
            }`}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3
            className={`font-display text-lg md:text-xl leading-snug transition-colors ${
              isOpen ? "text-white" : "text-white/80"
            }`}
          >
            {q}
          </h3>
        </div>
        <span
          aria-hidden
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] transition-all duration-300 group-hover:border-white/25"
          style={{
            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
            borderColor: isOpen ? "rgba(247, 168, 196, 0.45)" : undefined,
            boxShadow: isOpen ? "0 0 24px rgba(247, 168, 196, 0.2)" : undefined,
          }}
        >
          <svg
            width="11"
            height="11"
            viewBox="0 0 12 12"
            fill="none"
            className="text-white/70"
          >
            <path
              d="M6 1 L6 11 M1 6 L11 6"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            animate={reduce ? { opacity: 1 } : { height: "auto", opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
              opacity: { duration: 0.3, ease: "easeOut" },
            }}
            style={{ overflow: "hidden" }}
          >
            <div className="flex gap-4 pb-6 pr-12 md:pr-20">
              <span className="w-[11px] shrink-0" aria-hidden />
              <p className="text-[15px] leading-relaxed text-white/60">{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section
      id="faq"
      className="relative w-full px-6 py-28 md:py-36 overflow-hidden"
    >
      {/* Ambient drifting blobs — very subtle, low opacity */}
      <SolidBlob
        className="top-[10%] -left-40"
        size={460}
        gradient="radial-gradient(circle at 40% 40%, #C8A4E8 0%, #9C59D1 55%, transparent 75%)"
        shape="58% 42% 50% 50% / 55% 55% 45% 45%"
        rotate={-10}
        blur={90}
        opacity={0.18}
        morph="a"
      />
      <SolidBlob
        className="bottom-[5%] -right-32"
        size={420}
        gradient="radial-gradient(circle at 55% 45%, #55CDFC 0%, #9C59D1 60%, transparent 80%)"
        shape="52% 48% 58% 42% / 48% 55% 45% 52%"
        rotate={12}
        blur={90}
        opacity={0.15}
        morph="b"
        delay={3}
      />

      {/* Centered radial glow behind the card */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "min(90%, 900px)",
          height: "70%",
          background:
            "radial-gradient(ellipse at center, rgba(247, 168, 196, 0.08) 0%, rgba(200, 164, 232, 0.05) 35%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Fine noise/grain overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.35 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
        }}
      />

      {/* Subtle ambient stars */}
      <div
        aria-hidden
        className="absolute left-[8%] top-[18%] text-white/15 animate-twinkle"
        style={{ animationDelay: "0.6s" }}
      >
        <StarGlyph size={10} color="currentColor" />
      </div>
      <div
        aria-hidden
        className="absolute right-[10%] top-[30%] text-white/20 animate-twinkle"
        style={{ animationDelay: "1.8s" }}
      >
        <StarGlyph size={12} color="currentColor" />
      </div>
      <div
        aria-hidden
        className="absolute left-[14%] bottom-[20%] text-white/15 animate-twinkle"
        style={{ animationDelay: "2.4s" }}
      >
        <StarGlyph size={8} color="currentColor" />
      </div>
      <div
        aria-hidden
        className="absolute right-[14%] bottom-[26%] text-white/15 animate-twinkle"
        style={{ animationDelay: "0.2s" }}
      >
        <StarGlyph size={9} color="currentColor" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl">
        <Reveal className="mb-12 text-center">
          <p className="mb-6 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.3em] text-blush">
            <StarGlyph size={10} color="#F7A8C4" />
            Frequently asked
          </p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05] tracking-tight">
            Still have{" "}
            <span className="italic text-gradient-warm">questions</span>?
          </h2>
          <p className="mx-auto mt-5 max-w-md text-white/55 leading-relaxed">
            A few things we get asked often. If something else is on your mind,{" "}
            <a
              href="mailto:hello@moneycoven.com"
              className="text-white/80 underline decoration-white/20 underline-offset-4 transition-colors hover:text-buttercup hover:decoration-buttercup/60"
            >
              write to us
            </a>
            .
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] px-6 backdrop-blur-sm md:px-8">
            {faqs.map((item, i) => (
              <FAQItem
                key={item.q}
                q={item.q}
                a={item.a}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
