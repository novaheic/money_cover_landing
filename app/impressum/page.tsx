import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum — Money Coven",
  robots: { index: false },
};

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-[#0d0d0f] px-6 py-20 text-white/80">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/"
          className="mb-12 inline-flex items-center gap-2 text-sm text-white/40 transition-colors hover:text-white/70"
        >
          <svg viewBox="0 0 16 16" className="h-4 w-4 fill-current" aria-hidden="true">
            <path d="M10.5 3.5 5 8l5.5 4.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back
        </Link>

        <h1 className="mb-10 font-display text-3xl font-medium text-white">Impressum</h1>

        <section className="space-y-6 text-sm leading-relaxed">
          <div>
            <h2 className="mb-2 text-xs font-semibold uppercase tracking-widest text-white/40">
              Angaben gemäß § 5 TMG
            </h2>
            <p>
              Nova Heidt<br />
              Eckerstr. 2B<br />
              10249 Berlin<br />
              Germany
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xs font-semibold uppercase tracking-widest text-white/40">
              Kontakt
            </h2>
            <p>
              E-Mail:{" "}
              <a
                href="mailto:nova@money-coven.com"
                className="text-white/60 underline underline-offset-2 hover:text-white"
              >
                nova@money-coven.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xs font-semibold uppercase tracking-widest text-white/40">
              Verantwortlich für den Inhalt (§ 18 Abs. 2 MStV)
            </h2>
            <p>
              Nova Heidt<br />
              Eckerstr. 2B<br />
              10249 Berlin
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xs font-semibold uppercase tracking-widest text-white/40">
              Streitschlichtung
            </h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 underline underline-offset-2 hover:text-white"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              . Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
