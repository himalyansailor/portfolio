import localFont from "next/font/local";
import { Inter, Instrument_Serif } from "next/font/google";
import { SEO, SITE_URL } from "@/config/seo";
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
  metadataBase: new URL(SITE_URL),
  title: SEO.title,
  description: SEO.description,
  keywords: SEO.keywords,
  applicationName: SEO.shortTitle,
  authors: [{ name: "Sachin Sharma", url: SITE_URL }],
  creator: "Sachin Sharma",
  category: "technology",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: SEO.shortTitle,
    title: SEO.title,
    description: SEO.description,
    locale: "en_US",
    firstName: "Sachin",
    lastName: "Sharma",
    username: "himalyansailor",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.shortTitle,
    description: SEO.description,
  },
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
