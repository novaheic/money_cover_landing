type GlyphProps = {
  size?: number;
  color?: string;
  className?: string;
  strokeWidth?: number;
};

export function Pentagram({ size = 18, color = "currentColor", strokeWidth = 1, className }: GlyphProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <circle cx="12" cy="12" r="10.5" stroke={color} strokeWidth={strokeWidth} opacity="0.6" />
      <path
        d="M12 2.5 L14.47 9.76 L22.15 9.76 L15.84 14.24 L18.32 21.5 L12 17.02 L5.68 21.5 L8.16 14.24 L1.85 9.76 L9.53 9.76 Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function VenusSymbol({ size = 18, color = "currentColor", strokeWidth = 1.5, className }: GlyphProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden
    >
      <circle cx="12" cy="9" r="5" stroke={color} strokeWidth={strokeWidth} />
      <path
        d="M12 14 L12 22 M9 19 L15 19"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function GenderqueerSymbol({ size = 20, color = "currentColor", strokeWidth = 1.4, className }: GlyphProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden
    >
      <circle cx="12" cy="12" r="4" stroke={color} strokeWidth={strokeWidth} />
      <path
        d="M14.5 9.5 L19 5 M19 5 L15.5 5 M19 5 L19 8.5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 16 L12 21 M9.5 18.5 L14.5 18.5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M9.5 9.5 L5 5 M5 5 L8.5 5 M5 5 L5 8.5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.5"
      />
    </svg>
  );
}

export function CrescentMoon({ size = 22, color = "#F5E642", className }: GlyphProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M20.5 14.5A8.5 8.5 0 1 1 9.5 3.5a6.8 6.8 0 0 0 11 11Z"
        fill={color}
      />
    </svg>
  );
}

export function TripleMoon({ size = 48, color = "currentColor", strokeWidth = 1, className }: GlyphProps) {
  return (
    <svg
      width={size}
      height={size / 2}
      viewBox="0 0 48 24"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M10 2 A10 10 0 0 0 10 22 A6 10 0 0 1 10 2 Z"
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
      />
      <circle cx="24" cy="12" r="9.5" stroke={color} strokeWidth={strokeWidth} fill="none" />
      <path
        d="M38 2 A10 10 0 0 1 38 22 A6 10 0 0 0 38 2 Z"
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
      />
    </svg>
  );
}

export function EyeSymbol({ size = 20, color = "currentColor", strokeWidth = 1.2, className }: GlyphProps) {
  return (
    <svg
      width={size}
      height={size / 2}
      viewBox="0 0 24 12"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M1 6 C 5 1, 19 1, 23 6 C 19 11, 5 11, 1 6 Z"
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
      />
      <circle cx="12" cy="6" r="2.5" fill={color} />
    </svg>
  );
}
