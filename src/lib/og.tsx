import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

const logo = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <rect width="32" height="32" rx="8" fill="#163047"/>
    <path d="M20.6 11.2C20.6 8.3 11.4 8.1 11.4 12.2c0 2.7 5.2 2.9 7.6 4 2.2.9 1.8 5.6-6.8 4.6" fill="none" stroke="#f4f7fa" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="19.2" y="19.2" width="6.2" height="6.2" rx="1.4" fill="#2dd4bf"/>
  </svg>`,
)}`;

export function renderOg(title: string, subtitle: string) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#0c1b2a",
          color: "#f3f5f7",
        }}
      >
        <div style={{ width: 16, height: "100%", background: "#0f766e" }} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "68px 76px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <img src={logo} width={72} height={72} alt="" />
            <div style={{ fontSize: 36, letterSpacing: -0.5 }}>Sienaworks</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 58, lineHeight: 1.12, maxWidth: 960 }}>{title}</div>
            <div style={{ marginTop: 24, fontSize: 28, color: "#c9d4de", maxWidth: 860 }}>
              {subtitle}
            </div>
          </div>
          <div style={{ fontSize: 24, color: "#9fb0bf" }}>sienaworks.com</div>
        </div>
      </div>
    ),
    ogSize,
  );
}
