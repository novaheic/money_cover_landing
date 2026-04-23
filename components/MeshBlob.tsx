"use client";

import { motion, useReducedMotion } from "framer-motion";

type MeshBlobProps = {
  src: string;
  className?: string;
  size?: number | string;
  width?: number | string;
  height?: number | string;
  rotate?: number;
  blur?: number;
  opacity?: number;
  glow?: string;
  duration?: number;
  delay?: number;
  drift?: { x?: number; y?: number };
  morph?: "a" | "b" | "c";
  style?: React.CSSProperties;
};

const morphClass = {
  a: "animate-blob-a",
  b: "animate-blob-b",
  c: "animate-blob-c",
};

export function MeshBlob({
  src,
  className = "",
  size,
  width,
  height,
  rotate = 0,
  blur = 12,
  opacity = 0.95,
  glow,
  duration = 22,
  delay = 0,
  drift = { x: 30, y: 24 },
  morph = "a",
  style,
}: MeshBlobProps) {
  const reduce = useReducedMotion();
  const dx = drift.x ?? 30;
  const dy = drift.y ?? 24;

  const resolvedWidth = width ?? size ?? 480;
  const resolvedHeight = height ?? size ?? 480;

  const filter = [
    `blur(${blur}px)`,
    glow ? `drop-shadow(0 40px 80px ${glow})` : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none absolute ${className}`}
      style={{ width: resolvedWidth, height: resolvedHeight, ...style }}
      initial={{ x: 0, y: 0, rotate, scale: 1 }}
      animate={
        reduce
          ? { rotate, scale: 1 }
          : {
              x: [0, dx, -dx * 0.6, dx * 0.3, 0],
              y: [0, -dy, dy * 0.7, -dy * 0.4, 0],
              rotate: [rotate, rotate + 5, rotate - 3, rotate + 2, rotate],
              scale: [1, 1.04, 0.98, 1.02, 1],
            }
      }
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div
        className={`h-full w-full overflow-hidden ${reduce ? "" : morphClass[morph]}`}
        style={{
          filter,
          opacity,
          animationDelay: `${delay}s`,
        }}
      >
        <img
          src={src}
          alt=""
          aria-hidden
          className="h-full w-full object-cover"
        />
      </div>
    </motion.div>
  );
}
