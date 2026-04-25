"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Returns a ref and a boolean that is true when the element spans the vertical
 * center of the viewport — i.e. it is simultaneously intersecting both the top
 * half and the bottom half of the screen. This is geometrically impossible for
 * two non-overlapping stacked elements at the same time, so exactly one card
 * is ever active. Only activates on touch/coarse-pointer devices.
 */
export function useCenterVisible<T extends Element>(): [
  React.RefObject<T | null>,
  boolean,
] {
  const ref = useRef<T | null>(null);
  const [inTop, setInTop] = useState(false);
  const [inBottom, setInBottom] = useState(false);

  useEffect(() => {
    const isMobile =
      window.matchMedia("(pointer: coarse)").matches &&
      window.matchMedia("(max-width: 767px)").matches;
    if (!isMobile) return;

    const el = ref.current;
    if (!el) return;

    const topObs = new IntersectionObserver(
      ([e]) => setInTop(e.isIntersecting),
      { rootMargin: "0px 0px -50% 0px" },
    );
    const bottomObs = new IntersectionObserver(
      ([e]) => setInBottom(e.isIntersecting),
      { rootMargin: "-50% 0px 0px 0px" },
    );

    topObs.observe(el);
    bottomObs.observe(el);

    return () => {
      topObs.disconnect();
      bottomObs.disconnect();
    };
  }, []);

  return [ref, inTop && inBottom];
}
