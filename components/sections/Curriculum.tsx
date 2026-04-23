"use client";

import { Reveal } from "../Reveal";
import { MeshBlob } from "../MeshBlob";
import { SolidBlob } from "../SolidBlob";
import { Pentagram, CrescentMoon, VenusSymbol } from "../Symbols";

const sessions = [
  {
    n: "01",
    title: "Money mindset",
    body: "Unlearning the shame. What we inherited, what we can put down.",
  },
  {
    n: "02",
    title: "Income & taxes",
    body: "What lands in your account, and what the state takes — and why.",
  },
  {
    n: "03",
    title: "Budgeting that sticks",
    body: "Systems that survive real life. No colour-coded spreadsheets required.",
  },
  {
    n: "04",
    title: "Debt, demystified",
    body: "Good debt, bad debt, and how to look it in the eye without flinching.",
  },
  {
    n: "05",
    title: "Saving & emergency funds",
    body: "Future-you deserves a cushion. Here's how big and where to park it.",
  },
  {
    n: "06",
    title: "Investing 101",
    body: "Index funds, compounding, and why time matters more than timing.",
  },
  {
    n: "07",
    title: "Retirement & pensions",
    body: "The gendered pension gap is real. Here's how to close yours.",
  },
  {
    n: "08",
    title: "Money & the big picture",
    body: "Negotiation, values-led spending, building wealth on your terms.",
  },
];

export function Curriculum() {
  return (
    <section
      id="curriculum"
      className="relative w-full px-6 py-32 md:py-40 overflow-hidden"
    >
      {/* LEFT SIDE: single static solid blob, mid-height */}
      <SolidBlob
        className="top-1/3 -left-32"
        size={420}
        gradient="radial-gradient(circle at 30% 30%, #55CDFC 0%, #9C59D1 65%, transparent)"
        shape="58% 42% 50% 50% / 55% 55% 45% 45%"
        rotate={-8}
        blur={50}
        opacity={0.45}
      />

      {/* RIGHT SIDE: vertical lava column — stacked bubbles rising */}
      <MeshBlob
        src="/brand/gradient-2.png"
        className="-top-10 -right-24"
        size={280}
        rotate={10}
        blur={16}
        opacity={0.85}
        morph="a"
        duration={22}
      />
      <SolidBlob
        className="top-[30%] -right-16"
        size={160}
        gradient="radial-gradient(circle at 40% 40%, #F5E642, #FF9A56 70%)"
        shape="62% 38% 56% 44% / 48% 52% 48% 52%"
        rotate={14}
        blur={14}
        opacity={0.65}
        glow="rgba(245, 230, 66, 0.3)"
      />
      <MeshBlob
        src="/brand/gradient-4.png"
        className="top-[55%] -right-32"
        size={340}
        rotate={-14}
        blur={18}
        opacity={0.78}
        morph="b"
        duration={28}
        delay={2}
      />
      <SolidBlob
        className="bottom-10 -right-10"
        size={120}
        gradient="linear-gradient(135deg, #E0407C, #9C59D1)"
        shape="52% 48% 45% 55% / 55% 45% 55% 45%"
        rotate={-8}
        blur={10}
        opacity={0.8}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <Reveal className="mb-16 max-w-3xl">
          <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-cyan">
            <CrescentMoon size={14} color="#55CDFC" />
            Eight sessions
          </p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05] tracking-tight">
            The{" "}
            <span className="italic text-gradient-brand">curriculum</span>.
          </h2>
          <p className="mt-6 max-w-xl text-white/60 leading-relaxed">
            Each session blends a short lecture, a guest speaker from the
            industry, and a hands-on group assignment you actually leave with.
          </p>
        </Reveal>

        <div className="relative">
          <div
            aria-hidden
            className="absolute -top-8 right-4 text-white/[0.08] animate-twinkle"
            style={{ animationDelay: "1.2s" }}
          >
            <Pentagram size={36} strokeWidth={1} />
          </div>
          <div
            aria-hidden
            className="absolute -bottom-8 left-6 text-white/[0.08] animate-twinkle"
            style={{ animationDelay: "2.4s" }}
          >
            <VenusSymbol size={32} strokeWidth={1.2} />
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm md:grid-cols-2">
            {sessions.map((s, i) => (
              <Reveal key={s.n} delay={(i % 4) * 0.08}>
                <div className="group relative h-full bg-ink/80 p-8 transition-colors hover:bg-white/[0.03]">
                  <div className="flex items-start gap-6">
                    <span className="font-display text-3xl italic text-white/30 transition-colors group-hover:text-buttercup">
                      {s.n}
                    </span>
                    <div className="flex-1">
                      <h3 className="mb-2 font-display text-xl md:text-2xl">
                        {s.title}
                      </h3>
                      <p className="text-[14px] text-white/55 leading-relaxed">
                        {s.body}
                      </p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-buttercup via-fuchsia to-cyan transition-all duration-500 group-hover:w-full" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
