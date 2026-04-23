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
            className="transition-colors hover:text-white"
          >
            hello@moneycoven.com
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
