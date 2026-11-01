import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

export function renderOg(title: string, subtitle: string) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0c1b2a",
          color: "#f3f5f7",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 28 }}>
          <div
            style={{
              width: 18,
              height: 18,
              background: "#0f766e",
              borderRadius: 4,
            }}
          />
          Sienaworks
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 58, lineHeight: 1.1, maxWidth: 920, fontWeight: 600 }}>
            {title}
          </div>
          <div style={{ fontSize: 26, color: "#c9d4de", maxWidth: 760 }}>{subtitle}</div>
        </div>
      </div>
    ),
    ogSize,
  );
}
