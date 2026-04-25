import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Money Coven",
  robots: { index: false },
};

export default function DatenschutzPage() {
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

        <h1 className="mb-2 font-display text-3xl font-medium text-white">Privacy Policy</h1>
        <p className="mb-10 text-xs text-white/35">Last updated: April 2026</p>

        <div className="space-y-10 text-sm leading-relaxed">

          <section>
            <h2 className="mb-3 font-display text-lg font-medium text-white">1. Controller</h2>
            <p>
              The controller responsible for data processing on this website is:
            </p>
            <p className="mt-3">
              Nova Heidt<br />
              Eckerstr. 2B, 10249 Berlin, Germany<br />
              <a href="mailto:nova@money-coven.com" className="text-white/60 underline underline-offset-2 hover:text-white">
                nova@money-coven.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-lg font-medium text-white">2. What data we collect</h2>
            <p>
              We collect only your <strong className="text-white">email address</strong> when you
              sign up for the Money Coven waitlist. No other personal data is
              collected through this website.
            </p>
            <p className="mt-3">
              Our hosting provider automatically processes standard server log
              data (IP address, browser type, date/time of request) for
              operational purposes. We do not access or store these logs
              ourselves.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-lg font-medium text-white">3. Legal basis</h2>
            <p>
              Processing your email address is based on your <strong className="text-white">consent</strong> (Art. 6(1)(a)
              GDPR), given when you submit the signup form. You may withdraw your
              consent at any time by emailing{" "}
              <a href="mailto:nova@money-coven.com" className="text-white/60 underline underline-offset-2 hover:text-white">
                nova@money-coven.com
              </a>{" "}
              and requesting removal.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-lg font-medium text-white">4. Purpose of processing</h2>
            <p>
              Your email address is used solely to contact you about the Money
              Coven program — including launch announcements and waitlist
              updates. We will not use it for unrelated marketing or share it
              with third parties for their own purposes.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-lg font-medium text-white">5. Service providers</h2>
            <p className="mb-4">
              We use the following third-party processors who may handle your data:
            </p>
            <div className="space-y-4 rounded-lg border border-white/10 p-4">
              <div>
                <p className="font-medium text-white">Resend</p>
                <p className="mt-1 text-white/55">
                  Email delivery and contact list management. Resend, Inc. is
                  based in the United States. Data transfers are covered by
                  Standard Contractual Clauses (SCCs) under Art. 46 GDPR.{" "}
                  <a
                    href="https://resend.com/legal/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 underline underline-offset-2 hover:text-white"
                  >
                    Resend Privacy Policy
                  </a>
                </p>
              </div>
              <div className="border-t border-white/10 pt-4">
                <p className="font-medium text-white">Netlify</p>
                <p className="mt-1 text-white/55">
                  Website hosting and infrastructure. Netlify, Inc. is based in
                  the United States. Data transfers are covered by SCCs under
                  Art. 46 GDPR.{" "}
                  <a
                    href="https://www.netlify.com/privacy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 underline underline-offset-2 hover:text-white"
                  >
                    Netlify Privacy Policy
                  </a>
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-3 font-display text-lg font-medium text-white">6. Cookies & tracking</h2>
            <p>
              This website uses <strong className="text-white">no cookies</strong> and no
              analytics or tracking tools of any kind. No data is collected
              about your browsing behaviour.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-lg font-medium text-white">7. Data retention</h2>
            <p>
              Your email address is retained until you withdraw consent or
              request deletion. We will delete your data promptly upon request.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-lg font-medium text-white">8. Your rights</h2>
            <p className="mb-3">Under the GDPR you have the right to:</p>
            <ul className="space-y-1 pl-4 text-white/70">
              <li className="list-disc">Access the personal data we hold about you</li>
              <li className="list-disc">Rectification of inaccurate data</li>
              <li className="list-disc">Erasure ("right to be forgotten")</li>
              <li className="list-disc">Restriction of processing</li>
              <li className="list-disc">Data portability</li>
              <li className="list-disc">Object to processing</li>
              <li className="list-disc">Withdraw consent at any time</li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, email{" "}
              <a href="mailto:nova@money-coven.com" className="text-white/60 underline underline-offset-2 hover:text-white">
                nova@money-coven.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-lg font-medium text-white">9. Right to lodge a complaint</h2>
            <p>
              You have the right to lodge a complaint with the supervisory
              authority responsible for Berlin:
            </p>
            <p className="mt-3 text-white/70">
              Berliner Beauftragte für Datenschutz und Informationsfreiheit<br />
              Friedrichstr. 219, 10969 Berlin<br />
              <a
                href="https://www.datenschutz-berlin.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 underline underline-offset-2 hover:text-white"
              >
                www.datenschutz-berlin.de
              </a>
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
