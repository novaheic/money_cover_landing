type WordmarkProps = {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
};

const sizeMap = {
  sm: "text-2xl md:text-3xl",
  md: "text-4xl md:text-5xl",
  lg: "text-6xl md:text-8xl",
  xl: "text-7xl md:text-9xl",
};

export function Wordmark({ className = "", size = "lg" }: WordmarkProps) {
  return (
    <div
      className={`font-display font-semibold tracking-tight leading-[0.9] ${sizeMap[size]} ${className}`}
    >
      <div>MONEY</div>
      <div>
        <span className="italic">C</span>OVE<span className="italic">N</span>
      </div>
    </div>
  );
}
