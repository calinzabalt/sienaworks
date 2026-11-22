import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";

// latin-ext carries the Romanian ă, â, î, ș, ț glyphs.
export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
  display: "swap",
});

// Mono is only used for small labels, so it is not preloaded: it no longer competes
// with the page and the body/heading fonts on slow mobile connections.
// Until it arrives, a system monospace font stands in. Courier New and the default
// monospace fonts on Android, macOS and Linux share JetBrains Mono's character width
// (0.6em), so labels wrap the same way before and after the swap and nothing moves.
// (The automatic fallback is Arial scaled to 135%, which made labels wider and
// shifted the case study heroes on phones.)
export const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  display: "swap",
  preload: false,
  adjustFontFallback: false,
  fallback: ["Courier New", "monospace"],
});

export const fontClassName = `${inter.variable} ${interTight.variable} ${jetbrainsMono.variable}`;
