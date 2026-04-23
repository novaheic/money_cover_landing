"use client";

import { Reveal } from "../Reveal";
import { ScrambleStat } from "../ScrambleStat";

const stats = [
  {
    number: "2–3×",
    label: "more likely to live in poverty — trans and non-binary people are significantly more likely to face increased economic exclusion",
    source: "2015 U.S. Transgender Survey · NCTE",
    href: "https://transequality.org/sites/default/files/docs/usts/USTS-Full-Report-Dec17.pdf",
  },
  {
    number: "82¢",
    label: "on the dollar for women broadly; less for trans women, non-binary people, and those at the intersection of race and gender",
    source: "BLS Highlights of Women's Earnings, 2023",
    href: "https://www.bls.gov/opub/reports/womens-earnings/2023/home.htm",
  },
  {
    number: "~½",
    label: "of LGBTQ+ adults report living paycheck to paycheck, with significantly lower rates of retirement savings",
    source: "Prudential Financial Wellness Census, 2022",
    href: "https://news.prudential.com/2022-08-15-Prudential-Financial-Wellness-Census-Reveals-Disparities-in-Financial-Health-for-LGBTQ-Americans",
  },
  {
    number: "0.",
    label: "personal finance courses required to graduate in most U.S. states - the knowledge gap is structural",
    source: "Council for Economic Education, Survey of the States 2024",
    href: "https://www.councilforeconed.org/survey-of-the-states/",
  },
];

export function Problem() {
  return (
    <section
      id="problem"
      className="relative w-full px-6 py-24 md:py-36 overflow-hidden"
    >
      {/* Faint ambient bleed — red, ominous */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-1/4 w-[480px] h-[480px] rounded-full blur-[140px]"
        style={{
          background: "radial-gradient(ellipse, rgba(224,64,124,0.13) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <Reveal className="mb-16">
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05] tracking-tight max-w-3xl">
            We were never handed{" "}
            <span className="italic text-gradient-brand">the spellbook.</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-white/55 leading-relaxed max-w-2xl">
            The financial system wasn't built for us. The knowledge, the
            shortcuts, the head starts - they've been passed down in rooms we
            weren't invited into, in a language designed to keep us out.
          </p>
        </Reveal>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.05] rounded-2xl overflow-hidden border border-white/[0.07]">
          {stats.map((s, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="bg-[#0A0A0A] px-6 py-8 md:px-8 md:py-10 h-full flex flex-col">
                <p className="font-display text-5xl md:text-6xl text-white mb-4 leading-none tabular-nums">
                  <ScrambleStat value={s.number} delay={i * 0.12} />
                </p>
                <p className="text-sm text-white/40 leading-relaxed flex-1">
                  {s.label}
                </p>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 text-[11px] text-white/20 hover:text-white/45 transition-colors leading-tight"
                >
                  Source
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Pull quote */}
        <Reveal className="mt-14" delay={0.25}>
          <blockquote className="max-w-2xl border-l-2 border-fuchsia/30 pl-5">
            <p className="text-lg md:text-xl text-white/50 leading-relaxed italic">
              "Wealth-building isn't complicated, there are some basic principles that are just not commonly taught. We're here to ungatekeep."
            </p>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
