type BlobSpec = {
  className: string;
  color: string;
  size: number;
  animation?: "drift" | "drift-slow";
};

type BlobsProps = {
  blobs?: BlobSpec[];
  opacity?: number;
};

const defaultBlobs: BlobSpec[] = [
  { className: "-top-32 -left-24", color: "#9C59D1", size: 520, animation: "drift" },
  { className: "top-20 right-0", color: "#E0407C", size: 420, animation: "drift-slow" },
  { className: "bottom-0 left-1/3", color: "#FF9A56", size: 380, animation: "drift" },
  { className: "bottom-20 -right-24", color: "#55CDFC", size: 460, animation: "drift-slow" },
];

export function Blobs({ blobs = defaultBlobs, opacity = 0.45 }: BlobsProps) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {blobs.map((b, i) => (
        <div
          key={i}
          className={`blob ${b.className} ${
            b.animation === "drift-slow" ? "animate-drift-slow" : "animate-drift"
          }`}
          style={{
            width: b.size,
            height: b.size,
            background: b.color,
            opacity,
          }}
        />
      ))}
    </div>
  );
}
