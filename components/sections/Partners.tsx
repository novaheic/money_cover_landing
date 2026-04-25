"use client";

import Image from "next/image";
import { useState } from "react";
import { Reveal } from "../Reveal";
import { StarGlyph } from "../Stars";
import { SolidBlob } from "../SolidBlob";

const ETH_ADDRESS = "0x741DA088450ed57cA6004D5653142164C6674517";

function CopyAddress() {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(ETH_ADDRESS).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <span className="inline-flex items-center gap-2 flex-wrap justify-center">
      <span className="font-mono text-lilac/70 break-all">{ETH_ADDRESS}</span>
      <button
        type="button"
        onClick={handleCopy}
        aria-label="Copy Ethereum address"
        className="relative inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] text-white/50 transition-all duration-200 hover:border-lilac/40 hover:text-white/80 hover:bg-white/[0.07] active:scale-95"
      >
        {copied ? (
          <>
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none" className="text-lilac/80">
              <path d="M2 6.5L4.5 9L10 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-lilac/80">copied</span>
          </>
        ) : (
          <>
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none" className="opacity-60">
              <rect x="4" y="1" width="7" height="8" rx="1.2" stroke="currentColor" strokeWidth="1.1" />
              <rect x="1" y="3.5" width="7" height="8" rx="1.2" stroke="currentColor" strokeWidth="1.1" fill="none" />
            </svg>
            <span>copy</span>
          </>
        )}
      </button>
    </span>
  );
}

const partners = [
  {
    name: "Partner Name",
    logo: "/partners/partner-1-logo.png",
    href: "https://finzen.org",
  },
];

export function Partners() {
  return (
    <section
      id="partners"
      className="relative w-full px-6 py-28 md:py-36 overflow-hidden"
    >
      <SolidBlob
        className="top-[10%] -right-40"
        size={420}
        gradient="radial-gradient(circle at 50% 50%, #C8A4E8 0%, #9C59D1 55%, transparent 78%)"
        shape="55% 45% 50% 50% / 50% 55% 45% 50%"
        rotate={8}
        blur={100}
        opacity={0.14}
        morph="a"
      />
      <SolidBlob
        className="bottom-[8%] -left-32"
        size={380}
        gradient="radial-gradient(circle at 45% 55%, #F7A8C4 0%, #E0407C 55%, transparent 80%)"
        shape="52% 48% 56% 44% / 48% 52% 48% 52%"
        rotate={-6}
        blur={90}
        opacity={0.12}
        morph="b"
        delay={2.5}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "min(90%, 800px)",
          height: "60%",
          background:
            "radial-gradient(ellipse at center, rgba(200, 164, 232, 0.07) 0%, rgba(247, 168, 196, 0.04) 40%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div
        aria-hidden
        className="absolute left-[7%] top-[20%] text-white/15 animate-twinkle"
        style={{ animationDelay: "1.1s" }}
      >
        <StarGlyph size={9} color="currentColor" />
      </div>
      <div
        aria-hidden
        className="absolute right-[9%] top-[28%] text-white/20 animate-twinkle"
        style={{ animationDelay: "0.4s" }}
      >
        <StarGlyph size={11} color="currentColor" />
      </div>
      <div
        aria-hidden
        className="absolute left-[15%] bottom-[22%] text-white/15 animate-twinkle"
        style={{ animationDelay: "2.0s" }}
      >
        <StarGlyph size={8} color="currentColor" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">
        <Reveal className="mb-14 text-center">
          <p className="mb-6 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.3em] text-lilac/80">
            <StarGlyph size={10} color="#C8A4E8" />
            Held together
          </p>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.05] tracking-tight">
            Our{" "}
            <span className="italic text-gradient-brand">Partners</span>{" "}
            &amp; Sponsors
          </h2>
          <p className="mx-auto mt-5 max-w-md text-white/50 leading-relaxed text-[15px]">
            The circle that makes this work possible.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
            {partners.map((p) => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-10 py-7 backdrop-blur-sm transition-all duration-300 hover:border-lilac/30 hover:bg-white/[0.06] hover:-translate-y-1"
                style={{ minWidth: 180 }}
              >
                <Image
                  src={p.logo}
                  alt={p.name}
                  width={160}
                  height={60}
                  className="h-12 w-auto object-contain opacity-100 transition-opacity duration-300 group-hover:opacity-90"
                />
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mt-16 text-center text-[12.5px] text-white/35 leading-relaxed">
            <span className="text-white/50">Donate</span>{" "}
            &mdash; Ethereum (and tokens):{" "}
            <CopyAddress />
          </p>
        </Reveal>
      </div>
    </section>
  );
}
