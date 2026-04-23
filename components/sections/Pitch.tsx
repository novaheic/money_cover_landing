"use client";

import { Reveal } from "../Reveal";
import { MeshBlob } from "../MeshBlob";
import { SolidBlob } from "../SolidBlob";
import { VenusSymbol, Pentagram, GenderqueerSymbol } from "../Symbols";

const pillars = [
  {
    Icon: VenusSymbol,
    gradient: "/brand/gradient-2.png",
    glow: "rgba(247, 168, 196, 0.35)",
    title: "The cards are stacked.",
    body:
      "Women and marginalized folks earn less, are taught less, and are charged more. The basics of money aren't actually that hard — they've just been kept behind a velvet rope.",
  },
  {
    Icon: Pentagram,
    gradient: "/brand/gradient-4.png",
    glow: "rgba(200, 164, 232, 0.35)",
    title: "We pull back the curtain.",
    body:
      "Eight guided sessions with guest speakers and hands-on assignments. No jargon, no shame, no upsell. Just the working knowledge that shifts how you move through the world.",
  },
  {
    Icon: GenderqueerSymbol,
    gradient: "/brand/gradient-1.png",
    glow: "rgba(85, 205, 252, 0.32)",
    title: "You leave with a coven.",
    body:
      "Graduates get into a small, curated community of alumni — real people, no bots — for ongoing support, candid money talk, and occasional in-person gatherings.",
  },
];

export function Pitch() {
  return (
    <section
      id="about"
      className="relative w-full px-6 py-32 md:py-40 overflow-hidden"
    >
      {/* Big static gradient blob, bottom-left, graphic */}
      <SolidBlob
        className="-bottom-48 -left-32"
        size={640}
        gradient="linear-gradient(135deg, #9C59D1 0%, #E0407C 55%, #FF9A56 100%)"
        shape="58% 42% 64% 36% / 50% 55% 45% 50%"
        rotate={-12}
        opacity={0.38}
        blur={60}
        glow="rgba(156, 89, 209, 0.4)"
      />

      {/* Animated mesh blob, top-right corner */}
      <MeshBlob
        src="/brand/gradient-3.png"
        className="-top-20 -right-24"
        size={420}
        rotate={18}
        blur={18}
        opacity={0.75}
        morph="b"
        duration={28}
      />

      {/* Tiny decorative sharp solid blob */}
      <SolidBlob
        className="top-[40%] right-[8%]"
        size={90}
        gradient="radial-gradient(circle at 30% 30%, #F5E642, #FF9A56 70%)"
        shape="62% 38% 45% 55% / 50% 55% 45% 50%"
        rotate={22}
        opacity={0.7}
        glow="rgba(245, 230, 66, 0.45)"
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <Reveal className="mb-20 max-w-3xl">
          <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-buttercup">
            <Pentagram size={14} color="#F5E642" strokeWidth={1.2} />
            The idea
          </p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05] tracking-tight">
            Personal finance,{" "}
            <span className="italic text-gradient-warm">demystified</span> for
            the rest of us.
          </h2>
          <p className="mt-6 text-base md:text-lg text-white/70 leading-relaxed max-w-xl">
            A free eight-session mentorship in the magic of money — for women and
            people of marginalized genders who were never handed the spellbook.
          </p>
        </Reveal>

        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.12}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-sm transition-colors hover:border-white/25">
                <MeshBlob
                  src={p.gradient}
                  className="-top-16 -right-16 opacity-0 transition-opacity duration-700 group-hover:opacity-70"
                  size={280}
                  rotate={12}
                  blur={22}
                  glow={p.glow}
                  morph={i === 1 ? "b" : i === 2 ? "c" : "a"}
                  duration={24}
                  delay={i * 0.5}
                />
                <div
                  className="relative z-10 mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-ink/60 text-white/75 transition-transform group-hover:scale-110"
                  style={{ boxShadow: `0 0 40px ${p.glow}` }}
                >
                  <p.Icon size={22} color="currentColor" strokeWidth={1.3} />
                </div>
                <h3 className="relative z-10 mb-4 font-display text-2xl leading-tight">
                  {p.title}
                </h3>
                <p className="relative z-10 text-white/65 leading-relaxed text-[15px]">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
