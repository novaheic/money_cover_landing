"use client";

type SolidBlobProps = {
  className?: string;
  size?: number;
  width?: number | string;
  height?: number | string;
  gradient: string;
  shape?: string;
  rotate?: number;
  blur?: number;
  opacity?: number;
  glow?: string;
  morph?: "none" | "a" | "b" | "c";
  delay?: number;
  blend?: string;
  style?: React.CSSProperties;
};

const morphClass = {
  a: "animate-blob-a",
  b: "animate-blob-b",
  c: "animate-blob-c",
  none: "",
};

export function SolidBlob({
  className = "",
  size,
  width,
  height,
  gradient,
  shape = "50%",
  rotate = 0,
  blur = 0,
  opacity = 1,
  glow,
  morph = "none",
  delay = 0,
  blend,
  style,
}: SolidBlobProps) {
  const w = width ?? size ?? 400;
  const h = height ?? size ?? 400;

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute ${morphClass[morph]} ${className}`}
      style={{
        width: w,
        height: h,
        background: gradient,
        borderRadius: morph === "none" ? shape : undefined,
        transform: rotate ? `rotate(${rotate}deg)` : undefined,
        filter: blur ? `blur(${blur}px)` : undefined,
        opacity,
        willChange: "transform",
        boxShadow: glow ? `0 30px 120px ${glow}` : undefined,
        mixBlendMode: blend as React.CSSProperties["mixBlendMode"],
        animationDelay: delay ? `${delay}s` : undefined,
        ...style,
      }}
    />
  );
}
