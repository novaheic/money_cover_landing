import { CrescentMoon, Pentagram } from "../Symbols";

export function Footer() {
  return (
    <footer className="relative w-full border-t border-white/10 px-6 py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-end">
        <div>
          <div className="flex items-center gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/wordmark.png"
              alt="Money Coven"
              className="h-auto w-[160px] select-none opacity-85"
            />
            <CrescentMoon size={22} color="#F5E642" />
          </div>
          <p className="mt-4 max-w-xs text-sm text-white/50 leading-relaxed">
            Inclusive financial literacy for modern witches.
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm text-white/55 md:items-end">
          <a
            href="mailto:hello@moneycoven.com"
            className="inline-flex items-center gap-2 transition-colors hover:text-white md:flex-row-reverse"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-4 w-4 fill-current"
            >
              <path d="M2 5h20v14H2V5Zm2 2v.51L12 13l8-5.49V7H4Zm16 10V9.93l-7.43 5.11a1 1 0 0 1-1.14 0L4 9.93V17h16Z" />
            </svg>
            <span>hello@moneycoven.com</span>
          </a>
          <a
            href="https://www.linkedin.com/company/moneycoven"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Money Coven on LinkedIn"
            className="inline-flex items-center gap-2 transition-colors hover:text-white md:flex-row-reverse"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-4 w-4 fill-current"
            >
              <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9h4v12H3V9Zm7 0h3.83v1.64h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.77 2.65 4.77 6.1V21h-4v-5.56c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94V21h-4V9Z" />
            </svg>
            <span>LinkedIn</span>
          </a>
          <a
            href="https://substack.com/@moneycoven"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Money Coven on Substack"
            className="inline-flex items-center gap-2 transition-colors hover:text-white md:flex-row-reverse"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-4 w-4 fill-current"
            >
              <path d="M2 3h20v2H2V3Zm0 4h20v13H2V7Zm2 2v2h16V9H4Zm0 4v5h16v-5H4Z" />
            </svg>
            <span>Substack</span>
          </a>
          <a
            href="https://www.reddit.com/r/MoneyCoven/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Money Coven on Reddit"
            className="inline-flex items-center gap-2 transition-colors hover:text-white md:flex-row-reverse"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-4 w-4 fill-current"
            >
              <path d="M20.61 12.2a2.17 2.17 0 0 0-2.95-.83 8.03 8.03 0 0 0-4.67-1.53l.8-3.74 2.6.55a1.68 1.68 0 1 0 .3-1.33l-3.11-.66a.67.67 0 0 0-.79.52l-.96 4.5a8.2 8.2 0 0 0-4.52 1.53 2.17 2.17 0 1 0-2.3 3.66 4.47 4.47 0 0 0-.06.7c0 3.05 3.53 5.52 7.87 5.52 4.35 0 7.88-2.47 7.88-5.52a4.5 4.5 0 0 0-.05-.69 2.17 2.17 0 0 0-.04-2.18ZM8.52 13.56a1.29 1.29 0 1 1 0-2.58 1.29 1.29 0 0 1 0 2.58Zm7.06 0a1.29 1.29 0 1 1 0-2.58 1.29 1.29 0 0 1 0 2.58Zm-1.35 3.44a3.6 3.6 0 0 1-2.4.74 3.6 3.6 0 0 1-2.4-.74.67.67 0 0 1 .9-.99c.34.3.89.4 1.5.4.6 0 1.15-.11 1.5-.4a.67.67 0 0 1 .9.99Z" />
            </svg>
            <span>Reddit</span>
          </a>
          <div className="flex items-center gap-2 text-xs text-white/35">
            <Pentagram size={10} color="currentColor" strokeWidth={1} />
            <span>© {new Date().getFullYear()} Money Coven. All spells reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
