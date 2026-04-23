"use client";

import { Reveal } from "../Reveal";
import { CrescentMoon } from "../Symbols";

export function Definition() {
  return (
    <section
      id="definition"
      className="relative w-full px-6 py-24 md:py-32 overflow-hidden"
    >
      {/* Subtle ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-[120px] opacity-20"
        style={{
          background:
            "radial-gradient(ellipse, #9C59D1 0%, #E0407C 50%, transparent 100%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl">
        <Reveal>
          {/* Dictionary-style entry */}
          <div className="font-sans">
            {/* Headword */}
            <div className="flex items-end gap-4 flex-wrap">
              <h2
                className="font-display text-6xl md:text-8xl tracking-tight text-white leading-none"
                style={{ textShadow: "0 0 60px rgba(156,89,209,0.4)" }}
              >
                coven
              </h2>
              {/* Phonetic */}
              <span className="mb-2 font-sans text-lg md:text-xl text-white/40 italic tracking-wide">
                /ˈkʌv.ən/
              </span>
            </div>

            {/* Divider */}
            <div className="mt-4 mb-5 flex items-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-plum/60 via-fuchsia/40 to-transparent" />
              <CrescentMoon size={12} color="#C8A4E8" />
            </div>

            {/* Part of speech */}
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-lilac/70">
              noun
            </p>

            {/* Definitions */}
            <ol className="space-y-4 text-white/75 leading-relaxed">
              <li className="flex gap-3">
                <span className="shrink-0 mt-0.5 font-mono text-xs text-plum/60 tracking-widest pt-1">
                  1.
                </span>
                <p>
                  A group of witches who gather, practice, and protect one
                  another. Traditionally thirteen; always a circle, never a
                  hierarchy.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="shrink-0 mt-0.5 font-mono text-xs text-plum/60 tracking-widest pt-1">
                  2.
                </span>
                <p>
                  <span className="italic text-white/45">
                    Money Coven, proper noun.
                  </span>{" "}
                  A financial literacy program and lifetime community for people
                  who were never handed the rulebook — and are rewriting it
                  anyway.
                </p>
              </li>
            </ol>

            {/* Etymology note */}
            <div className="mt-8 border-l-2 border-plum/30 pl-4">
              <p className="text-xs text-white/30 leading-relaxed">
                <span className="text-white/45 uppercase tracking-[0.2em] text-[10px]">
                  Origin
                </span>{" "}
                · Old English <span className="italic">cofen</span>, from Old
                French <span className="italic">cove</span> — a chamber, a
                shelter, a place of belonging.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
