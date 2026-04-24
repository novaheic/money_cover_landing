"use client";

import { useEffect, useRef, type RefObject } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

type Props = {
  containerRef: RefObject<HTMLElement | null>;
  size?: number;
  color?: string;
  blur?: number;
  stiffness?: number;
  damping?: number;
};

export function CursorGlow({
  containerRef,
  size = 520,
  color = "rgba(156, 89, 209, 0.22)",
  blur = 28,
  stiffness = 55,
  damping = 24,
}: Props) {
  const reduce = useReducedMotion();
  const x = useMotionValue(-9999);
  const y = useMotionValue(-9999);
  const sx = useSpring(x, { stiffness, damping, mass: 0.6 });
  const sy = useSpring(y, { stiffness, damping, mass: 0.6 });
  const firstMoveRef = useRef(true);

  useEffect(() => {
    if (reduce) return;
    const el = containerRef.current;
    if (!el) return;
    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const nx = e.clientX - rect.left - size / 2;
      const ny = e.clientY - rect.top - size / 2;
      if (firstMoveRef.current) {
        sx.jump(nx);
        sy.jump(ny);
        firstMoveRef.current = false;
      }
      x.set(nx);
      y.set(ny);
    };
    const handleLeave = () => {
      firstMoveRef.current = true;
      x.set(-9999);
      y.set(-9999);
      sx.jump(-9999);
      sy.jump(-9999);
    };
    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);
    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, [containerRef, size, reduce, x, y, sx, sy]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute top-0 left-0 rounded-full"
      style={{
        x: sx,
        y: sy,
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 65%)`,
        filter: `blur(${blur}px)`,
      }}
    />
  );
}
