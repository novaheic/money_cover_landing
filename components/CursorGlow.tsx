"use client";

import { useEffect, useRef, useState, type RefObject } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

type Props = {
  containerRef: RefObject<HTMLElement | null>;
  size?: number;
  color?: string;
  colors?: string[];
  colorCycleDuration?: number;
  blur?: number;
  stiffness?: number;
  damping?: number;
};

export function CursorGlow({
  containerRef,
  size = 520,
  color = "rgba(156, 89, 209, 0.22)",
  colors,
  colorCycleDuration = 2500,
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
  const [activeColor, setActiveColor] = useState(0);

  useEffect(() => {
    if (!colors || colors.length <= 1) return;
    const id = setInterval(() => {
      setActiveColor((i) => (i + 1) % colors.length);
    }, colorCycleDuration);
    return () => clearInterval(id);
  }, [colors, colorCycleDuration]);

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

  const sharedStyle = {
    width: size,
    height: size,
    filter: `blur(${blur}px)`,
  };

  if (colors && colors.length > 1) {
    return (
      <>
        {colors.map((c, i) => (
          <motion.div
            key={i}
            aria-hidden
            className="pointer-events-none absolute top-0 left-0 rounded-full"
            style={{
              ...sharedStyle,
              x: sx,
              y: sy,
              background: `radial-gradient(circle, ${c} 0%, transparent 65%)`,
            }}
            animate={{ opacity: i === activeColor ? 1 : 0 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
          />
        ))}
      </>
    );
  }

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute top-0 left-0 rounded-full"
      style={{
        ...sharedStyle,
        x: sx,
        y: sy,
        background: `radial-gradient(circle, ${color} 0%, transparent 65%)`,
      }}
    />
  );
}
