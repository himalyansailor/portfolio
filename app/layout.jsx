import localFont from "next/font/local";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const satoshi = localFont({
  src: [
    { path: "./fonts/Satoshi-Bold.woff2", weight: "700", style: "normal" },
    { path: "./fonts/Satoshi-Black.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-satoshi",
  display: "swap",
  fallback: ["Inter", "Helvetica Neue", "Arial", "sans-serif"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
});

export const metadata = {
  title: "Sachin Sharma — Full-Stack AI Engineer",
  description:
    "Full-stack AI engineer working in software and ML since 2015. Co-founder of AskCodi, MakersClaw and Papersafe.",
};

export const viewport = {
  themeColor: "#fff7fb",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${satoshi.variable} ${inter.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
