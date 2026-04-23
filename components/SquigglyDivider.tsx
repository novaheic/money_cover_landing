"use client";

type SquigglyDividerProps = {
  fill?: string;
  height?: number;
  flip?: boolean;
  className?: string;
};

export function SquigglyDivider({
  fill = "#0A0A0A",
  height = 220,
  flip = false,
  className = "",
}: SquigglyDividerProps) {
  return (
    <svg
      viewBox="0 0 400 160"
      preserveAspectRatio="none"
      aria-hidden
      className={`block w-full ${className}`}
      style={{
        height,
        transform: flip ? "scaleY(-1)" : undefined,
      }}
    >
      <path
        d="M0,105 C 120,15 270,155 400,65 L400,160 L0,160 Z"
        fill={fill}
      />
    </svg>
  );
}
