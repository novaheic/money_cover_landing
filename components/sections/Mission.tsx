"use client";

import { type ReactElement } from "react";
import { Reveal } from "../Reveal";
import { StarGlyph } from "../Stars";
import { SolidBlob } from "../SolidBlob";
import {
  TripleMoon,
  CrescentMoon,
  Pentagram,
  VenusSymbol,
  GenderqueerSymbol,
  EyeSymbol,
} from "../Symbols";

type Receipt = { year: string; note: string };

const receipts: Receipt[] = [
  {
    year: "1692",
    note: "Salem. Of the twenty executed, many of the accused women had property, inheritance, or unpaid-debt disputes on the record.",
  },
  {
    year: "1882",
    note: "British women are finally permitted — by law — to own property separately from their husbands.",
  },
  {
    year: "1974",
    note: "The U.S. Equal Credit Opportunity Act. Until then, a woman needed a man to cosign a credit card in her own name.",
  },
  {
    year: "1988",
    note: "The Women's Business Ownership Act lets U.S. women sign a business loan without a male cosigner. Well within our mothers' lifetimes.",
  },
];

type CircleMember = {
  Icon: (props: { size?: number; color?: string; strokeWidth?: number }) => ReactElement;
  label: string;
  hint: string;
  color: string;
};

const circle: CircleMember[] = [
  {
    Icon: VenusSymbol,
    label: "Women",
    hint: "cis, trans, every kind",
    color: "#F7A8C4",
  },
  {
    Icon: GenderqueerSymbol,
    label: "Non-binary & genderqueer",
    hint: "every pronoun",
    color: "#C8A4E8",
  },
  {
    Icon: Pentagram,
    label: "FLINTA*",
    hint: "the full acronym, held",
    color: "#9C59D1",
  },
  {
    Icon: CrescentMoon,
    label: "BIPOC",
    hint: "every story at the table",
    color: "#FF9A56",
  },
  {
    Icon: EyeSymbol,
    label: "LGBTQIA+",
    hint: "every letter",
    color: "#55CDFC",
  },
  {
    Icon: TripleMoon,
    label: "Allies",
    hint: "show up, listen, pass the spellbook",
    color: "#F5E642",
  },
];

function WaxSeal() {
  return (
    <div className="relative inline-flex h-20 w-20 items-center justify-center" aria-hidden>
      <div
        className="absolute inset-0 rounded-full border"
        style={{
          borderColor: "rgba(224, 64, 124, 0.55)",
          background:
            "radial-gradient(circle at 35% 30%, rgba(255, 154, 86, 0.35) 0%, rgba(224, 64, 124, 0.25) 55%, rgba(156, 89, 209, 0.15) 100%)",
          boxShadow:
            "0 0 32px rgba(224, 64, 124, 0.35), inset 0 0 18px rgba(245, 230, 66, 0.15)",
        }}
      />
      <div
        className="absolute inset-[6px] rounded-full border border-dashed"
        style={{ borderColor: "rgba(255, 255, 255, 0.18)" }}
      />
      <div className="relative z-10 flex items-center justify-center">
        <Pentagram size={28} color="#F5E642" strokeWidth={0.9} />
      </div>
    </div>
  );
}

export function Mission() {
  return (
    <section
      id="mission"
      className="relative w-full px-6 py-32 md:py-44 overflow-hidden"
    >
      {/* Warm ambient bleed — fire & ember, contrast to cool signup above */}
      <SolidBlob
        className="top-[8%] -left-40"
        size={540}
        gradient="radial-gradient(circle at 45% 45%, #FF9A56 0%, #E0407C 55%, transparent 78%)"
        shape="58% 42% 50% 50% / 55% 55% 45% 45%"
        rotate={-6}
        blur={110}
        opacity={0.22}
        morph="a"
      />
      <SolidBlob
        className="bottom-[6%] -right-40"
        size={480}
        gradient="radial-gradient(circle at 55% 45%, #F5E642 0%, #FF9A56 50%, transparent 78%)"
        shape="52% 48% 58% 42% / 48% 55% 45% 52%"
        rotate={10}
        blur={100}
        opacity={0.16}
        morph="b"
        delay={3}
      />

      {/* Centered radial ember glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "min(92%, 900px)",
          height: "70%",
          background:
            "radial-gradient(ellipse at center, rgba(255, 154, 86, 0.08) 0%, rgba(224, 64, 124, 0.05) 38%, transparent 72%)",
          filter: "blur(40px)",
        }}
      />

      {/* A scatter of quiet stars */}
      <div
        aria-hidden
        className="absolute left-[9%] top-[16%] text-white/25 animate-twinkle"
        style={{ animationDelay: "0.4s" }}
      >
        <StarGlyph size={10} color="currentColor" />
      </div>
      <div
        aria-hidden
        className="absolute right-[11%] top-[22%] text-white/30 animate-twinkle"
        style={{ animationDelay: "1.6s" }}
      >
        <StarGlyph size={12} color="currentColor" />
      </div>
      <div
        aria-hidden
        className="absolute left-[14%] bottom-[18%] text-white/20 animate-twinkle"
        style={{ animationDelay: "2.2s" }}
      >
        <StarGlyph size={8} color="currentColor" />
      </div>
      <div
        aria-hidden
        className="absolute right-[17%] bottom-[22%] text-white/25 animate-twinkle"
        style={{ animationDelay: "0.9s" }}
      >
        <StarGlyph size={10} color="currentColor" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">
        {/* Eyebrow + heading */}
        <Reveal className="text-center">
          <p className="mb-6 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.3em] text-tangerine/85">
            <EyeSymbol size={18} color="#FF9A56" strokeWidth={1.2} />
            Who this is for
          </p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05] tracking-tight">
            For the granddaughters of the{" "}
            <span className="italic text-gradient-warm">witches</span> you
            couldn&apos;t burn.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-white/55 leading-relaxed text-[15px]">
            Our mission — said plainly and then with a little smoke.
          </p>
        </Reveal>

        {/* Invocation — pull quote with triple moon + wax seal */}
        <Reveal delay={0.15}>
          <div className="relative mt-20 md:mt-24">
            {/* Opening glyph row */}
            <div className="flex items-center justify-center gap-4">
              <span
                className="h-px w-16 md:w-24"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(200,164,232,0.45))",
                }}
              />
              <div
                className="relative animate-twinkle"
                style={{ filter: "drop-shadow(0 0 18px rgba(200,164,232,0.4))" }}
              >
                <TripleMoon size={56} color="#C8A4E8" strokeWidth={0.9} />
              </div>
              <span
                className="h-px w-16 md:w-24"
                style={{
                  background:
                    "linear-gradient(270deg, transparent, rgba(200,164,232,0.45))",
                }}
              />
            </div>

            <blockquote className="mx-auto mt-8 max-w-3xl text-center">
              <p
                className="font-display italic leading-[1.2] text-2xl md:text-4xl lg:text-[42px] text-white/92"
                style={{ textShadow: "0 0 60px rgba(224, 64, 124, 0.22)" }}
              >
                &ldquo;We are the granddaughters of the{" "}
                <span className="text-gradient-warm">witches</span> you were
                never able to burn.&rdquo;
              </p>

              <footer className="mt-10 flex flex-col items-center gap-4">
                <WaxSeal />
                <div className="flex flex-col items-center">
                  <span className="font-display text-sm italic text-white/60">
                    Tish Thawer
                  </span>
                  <span className="mt-1 text-[10px] uppercase tracking-[0.45em] text-white/25">
                    The Witches of BlackBrook
                  </span>
                </div>
              </footer>
            </blockquote>
          </div>
        </Reveal>

        {/* Manifesto body */}
        <Reveal delay={0.25}>
          <div className="mx-auto mt-24 md:mt-28 max-w-2xl space-y-6 text-[16.5px] leading-[1.75] text-white/70">
            <p>
              Money was used to keep women in place long before it was ever used
              to set them free. A wife couldn&apos;t open a bank account. A
              widow couldn&apos;t sign a mortgage. A single woman who earned her
              own coins was often the first one called{" "}
              <span className="italic text-white/90">a witch</span>.
            </p>
            <p>
              <span className="text-white/90">
                The overwhelming majority of people accused of witchcraft in
                early-modern Europe were women
              </span>{" "}
              — and a quiet number of them were midwives, healers, widows, or
              women who had simply figured out how to live without a man. Their
              &ldquo;crime&rdquo; was often little more than financial
              independence at a time when that wasn&apos;t permitted to them.
            </p>
            <p>
              <span className="italic text-lilac">Money Coven</span> is the
              circle we wished had existed when we started — a safe, queer,
              feminist-led space where financial literacy gets un-gatekept and
              passed hand to hand. The label is a wink. The work is serious.
              The door stays open.
            </p>
          </div>
        </Reveal>

        {/* Receipts — historical ledger */}
        <Reveal delay={0.3}>
          <div className="mx-auto mt-24 md:mt-28 max-w-3xl">
            <div className="mb-8 flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.5em] text-white/30">
              <span className="h-px flex-1 bg-gradient-to-r from-transparent to-white/15" />
              <span>Some receipts</span>
              <span className="h-px flex-1 bg-gradient-to-l from-transparent to-white/15" />
            </div>

            <ol className="relative space-y-6 border-l border-white/10 pl-6 md:pl-10">
              {receipts.map((r, i) => (
                <li
                  key={r.year}
                  className="group relative"
                  style={{ transitionDelay: `${i * 40}ms` }}
                >
                  {/* marker */}
                  <span
                    aria-hidden
                    className="absolute -left-[30px] md:-left-[42px] top-[6px] flex h-4 w-4 items-center justify-center"
                  >
                    <span
                      className="absolute inset-0 rounded-full blur-[6px] opacity-70"
                      style={{ background: "rgba(245, 230, 66, 0.4)" }}
                    />
                    <span className="relative h-[6px] w-[6px] rotate-45 bg-buttercup" />
                  </span>

                  <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:gap-6">
                    <p className="font-display text-2xl md:text-3xl italic tabular-nums text-white/85 md:w-24 md:shrink-0">
                      {r.year}
                    </p>
                    <p className="text-[14.5px] leading-relaxed text-white/55 md:flex-1">
                      {r.note}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <p className="mt-8 text-center text-[12px] italic text-white/35">
              Every line here is a grandmother, not a great-grandmother.
            </p>
          </div>
        </Reveal>

        {/* The circle welcomes */}
        <Reveal delay={0.4}>
          <div className="mx-auto mt-24 md:mt-28 max-w-4xl">
            <div className="mb-10 text-center">
              <p className="mb-4 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.3em] text-blush">
                <StarGlyph size={10} color="#F7A8C4" />
                The circle welcomes
              </p>
              <h3 className="font-display text-2xl md:text-3xl italic text-white/85">
                You&apos;re already on the list.
              </h3>
            </div>

            <ul className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
              {circle.map((c) => (
                <li key={c.label}>
                  <div
                    className="group flex items-center gap-3 rounded-full border bg-white/[0.02] px-4 py-2.5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-[2px]"
                    style={{
                      borderColor: `${c.color}38`,
                      boxShadow: `0 0 0px ${c.color}00`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = `${c.color}88`;
                      e.currentTarget.style.boxShadow = `0 0 24px ${c.color}33`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = `${c.color}38`;
                      e.currentTarget.style.boxShadow = `0 0 0px ${c.color}00`;
                    }}
                  >
                    <span
                      className="flex h-6 w-6 shrink-0 items-center justify-center"
                      style={{ color: c.color }}
                    >
                      <c.Icon size={16} color="currentColor" strokeWidth={1.3} />
                    </span>
                    <span className="flex flex-col leading-tight">
                      <span className="text-[13px] font-medium text-white/90">
                        {c.label}
                      </span>
                      <span className="text-[10.5px] italic text-white/40">
                        {c.hint}
                      </span>
                    </span>
                  </div>
                </li>
              ))}
            </ul>

            <p className="mx-auto mt-12 max-w-xl text-center text-[13.5px] italic leading-relaxed text-white/45">
              If anyone&apos;s ever hinted your gender, body, or love belonged on
              the margins of the money conversation — you&apos;re exactly who we
              built this for.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
