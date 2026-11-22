import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

// Design F palette
const bg = "#f5f6f8";
const ink = "#0d1117";
const muted = "#4a5462";
const soft = "#5f6a78";
const line = "#c9d0d8";
const accent = "#08796e";
const accentSoft = "#e2f3f0";
const mint = "#2dd4bf";

const logo = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <rect width="32" height="32" rx="8" fill="${ink}"/>
    <path d="M20.6 11.2C20.6 8.3 11.4 8.1 11.4 12.2c0 2.7 5.2 2.9 7.6 4 2.2.9 1.8 5.6-6.8 4.6" fill="none" stroke="#f4f7fa" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="19.2" y="19.2" width="6.2" height="6.2" rx="1.4" fill="${mint}"/>
  </svg>`,
)}`;

type FontSpec = { name: string; family: string; weight: 400 | 500 | 600 };
const fontSpecs: FontSpec[] = [
  { name: "Inter Tight", family: "Inter+Tight", weight: 600 },
  { name: "Inter", family: "Inter", weight: 400 },
  { name: "JetBrains Mono", family: "JetBrains+Mono", weight: 500 },
];

/**
 * Fetches only the glyphs a card needs from Google Fonts, as TrueType (what
 * ImageResponse can read). It runs at build time, like next/font. If the
 * request fails, the card still renders with the built-in font.
 */
async function loadFonts(text: string) {
  try {
    return await Promise.all(
      fontSpecs.map(async ({ name, family, weight }) => {
        const cssUrl = `https://fonts.googleapis.com/css2?family=${family}:wght@${weight}&text=${encodeURIComponent(text)}`;
        const css = await (await fetch(cssUrl)).text();
        const src = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/)?.[1];
        if (!src) throw new Error(`No TrueType source for ${name}`);
        const data = await (await fetch(src)).arrayBuffer();
        return { name, data, weight, style: "normal" as const };
      }),
    );
  } catch {
    return undefined;
  }
}

function Cross({ x, y }: { x: number; y: number }) {
  return (
    <div style={{ position: "absolute", left: x - 9, top: y - 9, width: 18, height: 18, display: "flex" }}>
      <div style={{ position: "absolute", left: 8, top: 0, width: 2, height: 18, background: soft }} />
      <div style={{ position: "absolute", left: 0, top: 8, width: 18, height: 2, background: soft }} />
    </div>
  );
}

/** Share card in the site's "Fișa tehnică" style: paper, ink, one teal accent, mono labels. */
export async function renderOg(input: { title: string; subtitle: string; label: string; status: string }) {
  const { title, subtitle, label, status } = input;
  const fonts = await loadFonts(`${title}${subtitle}${label}${status}Sienaworks·—●0123456789`);
  const mono = fonts ? "JetBrains Mono" : undefined;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: bg,
          backgroundImage: `radial-gradient(${line} 1.4px, transparent 1.4px)`,
          backgroundSize: "26px 26px",
          color: ink,
          fontFamily: fonts ? "Inter" : undefined,
        }}
      >
        <Cross x={44} y={44} />
        <Cross x={1156} y={44} />
        <Cross x={44} y={586} />
        <Cross x={1156} y={586} />
        <div style={{ display: "flex", flexDirection: "column", width: "100%", padding: "70px 84px 64px" }}>
          {/* work-order strip */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderTop: `2px solid ${ink}`,
              borderBottom: `1px solid ${line}`,
              padding: "16px 0",
              fontFamily: mono,
              fontSize: 19,
              letterSpacing: 2.4,
              color: soft,
            }}
          >
            <div style={{ display: "flex" }}>{label.toUpperCase()}</div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                background: accentSoft,
                color: accent,
                borderRadius: 999,
                padding: "6px 16px",
              }}
            >
              ● {status.toUpperCase()}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", marginTop: "auto" }}>
            <div
              style={{
                fontFamily: fonts ? "Inter Tight" : undefined,
                fontWeight: 600,
                fontSize: 66,
                lineHeight: 1.04,
                letterSpacing: -2.2,
                maxWidth: 980,
              }}
            >
              {title}
            </div>
            <div style={{ marginTop: 26, fontSize: 29, lineHeight: 1.35, color: muted, maxWidth: 900 }}>{subtitle}</div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 18, marginTop: 44 }}>
            {/* ImageResponse renders plain HTML, so next/image cannot be used here. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logo} width={56} height={56} alt="" />
            <div style={{ display: "flex", fontFamily: fonts ? "Inter Tight" : undefined, fontWeight: 600, fontSize: 30 }}>
              Sienaworks
            </div>
            <div style={{ display: "flex", flex: 1, height: 1, background: line, marginLeft: 8 }} />
            <div style={{ display: "flex", fontFamily: mono, fontSize: 20, color: soft }}>sienaworks.com</div>
          </div>
        </div>
      </div>
    ),
    { ...ogSize, fonts },
  );
}
