import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0A",
        bone: "#FFFFFF",
        buttercup: "#F5E642",
        tangerine: "#FF9A56",
        fuchsia: "#E0407C",
        blush: "#F7A8C4",
        lilac: "#C8A4E8",
        plum: "#9C59D1",
        cyan: "#55CDFC",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(6%, -4%) scale(1.08)" },
          "66%": { transform: "translate(-5%, 5%) scale(0.95)" },
        },
        driftSlow: {
          "0%, 100%": { transform: "translate(0, 0) scale(1) rotate(0deg)" },
          "50%": { transform: "translate(-4%, 3%) scale(1.05) rotate(8deg)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.3", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.15)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        blobA: {
          "0%, 100%": { borderRadius: "63% 37% 54% 46% / 55% 48% 52% 45%" },
          "25%": { borderRadius: "40% 60% 65% 35% / 60% 45% 55% 40%" },
          "50%": { borderRadius: "55% 45% 40% 60% / 45% 65% 35% 55%" },
          "75%": { borderRadius: "50% 50% 60% 40% / 35% 65% 45% 55%" },
        },
        blobB: {
          "0%, 100%": { borderRadius: "48% 52% 62% 38% / 42% 58% 42% 58%" },
          "33%": { borderRadius: "65% 35% 40% 60% / 55% 50% 50% 45%" },
          "66%": { borderRadius: "38% 62% 55% 45% / 58% 42% 58% 42%" },
        },
        blobC: {
          "0%, 100%": { borderRadius: "56% 44% 48% 52% / 50% 55% 45% 50%" },
          "50%": { borderRadius: "42% 58% 62% 38% / 60% 40% 60% 40%" },
        },
        slowPulse: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.04)" },
        },
      },
      animation: {
        drift: "drift 18s ease-in-out infinite",
        "drift-slow": "driftSlow 26s ease-in-out infinite",
        twinkle: "twinkle 3.5s ease-in-out infinite",
        shimmer: "shimmer 8s linear infinite",
        "blob-a": "blobA 22s ease-in-out infinite",
        "blob-b": "blobB 26s ease-in-out infinite",
        "blob-c": "blobC 32s ease-in-out infinite",
        "slow-pulse": "slowPulse 14s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
