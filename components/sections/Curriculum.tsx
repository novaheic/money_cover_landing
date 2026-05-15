"use client";

import { Reveal } from "../Reveal";
import { MeshBlob } from "../MeshBlob";
import { SolidBlob } from "../SolidBlob";
import { Pentagram, CrescentMoon, VenusSymbol } from "../Symbols";
import { useCenterVisible } from "../useCenterVisible";

const sessions = [
  {
    n: "01",
    title: "Intro & Admin",
    body: "Welcome to the coven. We set community agreements, cover program logistics, and take a first honest look at where each of us stands financially. No judgment, just a starting point.",
    bullets: [
      "Cohort introductions & community agreements",
      "Setting your personal financial goals for the program",
      "Baseline financial self-assessment (just for you)",
    ],
  },
  {
    n: "02",
    title: "PF Basics & Debt",
    body: "The fundamentals nobody taught us: net worth, cash flow, credit scores, and how debt actually works. We break down good debt vs. bad debt and build a plan to face what you owe.",
    bullets: [
      "Reading your credit report and understanding your score",
      "Debt payoff strategies: avalanche vs. snowball",
      "Building your first net worth statement",
    ],
  },
  {
    n: "03",
    title: "Budgeting",
    body: "Not a spreadsheet lecture. A real conversation about how money moves through your life. We explore frameworks that fit irregular income and real life, and leave with a system you'll actually use.",
    bullets: [
      "Finding your spending leaks without shame",
      "50/30/20, zero-based, and envelope methods compared",
      "Building a budget that survives an irregular paycheck",
    ],
  },
  {
    n: "04",
    title: "Portfolio Management",
    body: "From index funds to retirement accounts, we cover the building blocks of investing: asset allocation, diversification, and compounding. You'll leave knowing how to set up a portfolio that works long-term.",
    bullets: [
      "How to open and fund a brokerage account or IRA",
      "Understanding risk tolerance and asset allocation",
      "Index funds, ETFs, and why most active managers lose",
    ],
  },
  {
    n: "05",
    title: "Digital Assets",
    body: "Money is changing, and understanding how is a form of protection. We cover peer-to-peer transactions, what decentralization means in practice, and how to recognize the scams that target newcomers.",
    bullets: [
      "How blockchain and peer-to-peer transactions actually work",
      "Spotting red flags: rug pulls, phishing, and pump-and-dump schemes",
      "Safely engaging with wallets, exchanges, and self-custody",
    ],
  },
  {
    n: "06",
    title: "Entrepreneurship",
    body: "For freelancers, side hustlers, and small business owners: how to manage irregular income, set rates, handle taxes, and keep business money separate so your work builds wealth instead of consuming it.",
    bullets: [
      "Pricing your work: calculating your real hourly rate",
      "Quarterly taxes, write-offs, and self-employment deductions",
      "Separating personal and business finances from day one",
    ],
  },
  {
    n: "07",
    title: "Insurance, Risk & Safety Nets",
    body: "The unsexy stuff that actually protects everything else you've built. We decode what you need, what you can skip, and how to stop letting gaps in coverage turn into financial emergencies.",
    bullets: [
      "Health, renter's, and disability insurance decoded",
      "Emergency funds: how much, where to keep it, when to use it",
      "Understanding employer benefits and what to do without them",
    ],
  },
  {
    n: "08",
    title: "Capstone Presentations",
    body: "Eight sessions in, you know something worth sharing. Pick the topic that resonated most with you and create something others can learn from. Any format works: the point is to contribute.",
    bullets: [
      "Choose your topic: something that changed how you see money",
      "Choose your format: infographic, article, video, or guide",
      "Share with the cohort and celebrate what everyone has built",
    ],
  },
];

type Session = (typeof sessions)[number];

function SessionCard({ s }: { s: Session }) {
  const [cardRef, isActive] = useCenterVisible<HTMLDivElement>();
  return (
    <div
      ref={cardRef}
      className="group relative h-full bg-ink/80 p-8 transition-colors hover:bg-white/[0.03]"
      style={{ backgroundColor: isActive ? "rgba(255,255,255,0.03)" : undefined }}
    >
      <div className="flex items-start gap-6">
        <span
          className="font-display text-3xl italic group-hover:text-buttercup"
          style={{
            color: isActive ? "#F5E642" : "rgba(255,255,255,0.3)",
            transition: isActive ? "color 300ms ease-out" : "color 300ms ease",
          }}
        >
          {s.n}
        </span>
        <div className="flex-1">
          <h3 className="mb-2 font-display text-xl md:text-2xl">{s.title}</h3>
          <p className="mb-4 text-[14px] text-white/55 leading-relaxed">{s.body}</p>
          <ul className="space-y-1.5">
            {s.bullets.map((b) => (
              <li key={b} className="flex items-start gap-2 text-[13px] text-white/40">
                <span className="mt-[3px] shrink-0 text-buttercup/60">✦</span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-buttercup via-fuchsia to-cyan group-hover:w-full"
        style={{
          width: isActive ? "100%" : undefined,
          transition: isActive ? "width 300ms ease-out" : "width 500ms ease",
        }}
      />
    </div>
  );
}

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

          <div className="grid overflow-hidden rounded-2xl border border-white/10 backdrop-blur-sm md:grid-cols-2 divide-y divide-white/10 md:divide-y-0 md:[&>*:nth-child(odd)]:border-r md:[&>*:nth-child(odd)]:border-white/10 md:[&>*:nth-child(n+3)]:border-t md:[&>*:nth-child(n+3)]:border-white/10">
            {sessions.map((s, i) => (
              <Reveal key={s.n} delay={(i % 4) * 0.08}>
                <SessionCard s={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
