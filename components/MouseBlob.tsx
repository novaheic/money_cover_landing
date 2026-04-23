"use client";

import { RefObject, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";

type MouseBlobProps = {
  containerRef: RefObject<HTMLElement | null>;
  src: string;
  size?: number;
  blur?: number;
  opacity?: number;
  stiffness?: number;
  damping?: number;
  morph?: "a" | "b" | "c";
  glow?: string;
  className?: string;
};

const morphClass = {
  a: "animate-blob-a",
  b: "animate-blob-b",
  c: "animate-blob-c",
};

export function MouseBlob({
  containerRef,
  src,
  size = 420,
  blur = 40,
  opacity = 0.55,
  stiffness = 50,
  damping = 22,
  morph = "a",
  glow,
  className = "",
}: MouseBlobProps) {
  const reduce = useReducedMotion();
  const x = useMotionValue(-9999);
  const y = useMotionValue(-9999);
  const sx = useSpring(x, { stiffness, damping });
  const sy = useSpring(y, { stiffness, damping });

  useEffect(() => {
    if (reduce) return;
    const el = containerRef.current;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      x.set(e.clientX - rect.left - size / 2);
      y.set(e.clientY - rect.top - size / 2);
    };
    const handleLeave = () => {
      const rect = el.getBoundingClientRect();
      x.set(rect.width / 2 - size / 2);
      y.set(rect.height / 2 - size / 2);
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);
    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, [containerRef, size, reduce, x, y]);

  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none absolute top-0 left-0 ${className}`}
      style={{
        x: sx,
        y: sy,
        width: size,
        height: size,
        filter: glow ? `drop-shadow(0 40px 80px ${glow})` : undefined,
      }}
    >
      <div className={`h-full w-full overflow-hidden ${morphClass[morph]}`}>
        <img
          src={src}
          alt=""
          aria-hidden
          className="h-full w-full object-cover"
          style={{ filter: `blur(${blur}px)`, opacity }}
        />
      </div>
    </motion.div>
  );
}
