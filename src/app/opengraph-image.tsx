import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name} — ${site.descriptor}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#efece6",
          color: "#141311",
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 12,
              height: 12,
              background: "#9a3412",
            }}
          />
          <div
            style={{
              fontSize: 22,
              letterSpacing: "0.28em",
              fontWeight: 500,
            }}
          >
            {site.name}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 64,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              maxWidth: 920,
              fontFamily: "Georgia, serif",
            }}
          >
            WordPress & Web Development Studio
          </div>
          <div
            style={{
              fontSize: 24,
              color: "#6f6b62",
              maxWidth: 720,
              lineHeight: 1.4,
            }}
          >
            Custom WordPress, WooCommerce and modern web development for
            businesses and digital agencies.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
