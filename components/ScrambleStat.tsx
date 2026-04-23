"use client";

import { useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const POOL = "0123456789¢×~%½";
const DURATION = 1100;
const TICK_MS = 65; // ~15fps — readable, not frantic

export function ScrambleStat({
  value,
  delay = 0,
}: {
  value: string;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!inView || reduce) return;

    let interval: ReturnType<typeof setInterval>;

    const timer = setTimeout(() => {
      const start = Date.now();

      interval = setInterval(() => {
        const t = Math.min((Date.now() - start) / DURATION, 1);

        // all chars scramble until t=0.25, then settle left-to-right
        const resolved = value.split("").map((char, i) => {
          if (char === " ") return char;
          const settleAt = 0.25 + (i / value.length) * 0.75;
          if (t >= settleAt) return char;
          return POOL[Math.floor(Math.random() * POOL.length)];
        });

        setDisplay(resolved.join(""));

        if (t >= 1) {
          setDisplay(value);
          clearInterval(interval);
        }
      }, TICK_MS);
    }, delay * 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [inView, value, delay, reduce]);

  return <span ref={ref}>{display}</span>;
}
