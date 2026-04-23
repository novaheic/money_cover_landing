import { CrescentMoon } from "./Symbols";

type Star = {
  top: string;
  left: string;
  size: number;
  delay: string;
  color?: string;
  mobileSize?: number;
  mobileTop?: string;
  mobileLeft?: string;
};

const defaultStars: Star[] = [
  { top: "10%", left: "8%", size: 14, delay: "0s" },
  { top: "22%", left: "88%", size: 10, delay: "0.8s" },
  { top: "55%", left: "5%", size: 8, delay: "1.4s" },
  { top: "68%", left: "92%", size: 16, delay: "0.3s" },
  { top: "82%", left: "18%", size: 10, delay: "2.1s" },
  { top: "38%", left: "48%", size: 6, delay: "1.8s" },
  { top: "90%", left: "70%", size: 12, delay: "0.6s" },
];

function StarGlyph({ size, color = "#FFFFFF" }: { size: number; color?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 0 C12.6 7 17 11.4 24 12 C17 12.6 12.6 17 12 24 C11.4 17 7 12.6 0 12 C7 11.4 11.4 7 12 0 Z"
        fill={color}
      />
    </svg>
  );
}

type StarsProps = {
  stars?: Star[];
  moon?: { top: string; left: string; size?: number; color?: string; delay?: string } | null;
};

export function Stars({
  stars = defaultStars,
  moon = { top: "14%", left: "78%", size: 30, delay: "0.2s", color: "#FFFFFF" },
}: StarsProps) {
  return (
    <div className="pointer-events-none absolute inset-0">
      {stars.map((s, i) => {
        const hasMobile = s.mobileSize !== undefined || s.mobileTop !== undefined || s.mobileLeft !== undefined;
        return (
          <div key={i}>
            {hasMobile && (
              <div
                className="absolute animate-twinkle sm:hidden"
                style={{
                  top: s.mobileTop ?? s.top,
                  left: s.mobileLeft ?? s.left,
                  animationDelay: s.delay,
                }}
              >
                <StarGlyph size={s.mobileSize ?? s.size} color={s.color} />
              </div>
            )}
            <div
              className={`absolute animate-twinkle${hasMobile ? " hidden sm:block" : ""}`}
              style={{
                top: s.top,
                left: s.left,
                animationDelay: s.delay,
              }}
            >
              <StarGlyph size={s.size} color={s.color} />
            </div>
          </div>
        );
      })}
      {moon && (
        <div
          className="absolute animate-twinkle"
          style={{
            top: moon.top,
            left: moon.left,
            animationDelay: moon.delay ?? "0s",
            filter: "drop-shadow(0 0 14px rgba(255, 255, 255, 0.4))",
          }}
        >
          <CrescentMoon size={moon.size ?? 30} color={moon.color ?? "#FFFFFF"} />
        </div>
      )}
    </div>
  );
}

export { StarGlyph };
