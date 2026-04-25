import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Money Coven — Inclusive financial literacy for modern witches",
  description:
    "A free community mentorship program in personal finance for women and people of marginalized genders.",
  openGraph: {
    title: "Money Coven — Inclusive financial literacy for modern witches",
    description:
      "Inclusive financial literacy for modern witches. A free community mentorship program.",
    type: "website",
    url: "https://www.moneycoven.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Money Coven — Inclusive financial literacy for modern witches",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
