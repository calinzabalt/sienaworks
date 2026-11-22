import type { HomeCopy } from "@/content/home";

type Item = HomeCopy["sketch"]["items"][number];

const tone = {
  ok: { dot: "st-ok", chip: "chip-ok", line: "ld-ok" },
  warn: { dot: "st-warn", chip: "chip-warn", line: "ld-warn" },
  bad: { dot: "st-bad", chip: "chip-bad", line: "ld-bad" },
} as const;

/*
  Coordinates (px) on a fixed 1176 x 640 board. The website mock sits at 288,40 (600 x 520).
  Each callout's number dot lines up with a marker on the part of the mock it describes:
  1 address bar, 2 hero image, 3 form button, 4 outdated plugins in the footer.
*/
const layout = [
  { card: { left: 0, top: 36 }, line: { left: 248, top: 62, width: 210 }, marker: { left: 446, top: 50 } },
  { card: { left: 928, top: 194 }, line: { left: 850, top: 220, width: 78 }, marker: { left: 838, top: 208 } },
  { card: { left: 0, top: 375 }, line: { left: 248, top: 401, width: 64 }, marker: { left: 316, top: 389 } },
  { card: { left: 928, top: 498 }, line: { left: 860, top: 524, width: 68 }, marker: { left: 848, top: 512 } },
];

function Callout({ item, index, style }: { item: Item; index: number; style?: React.CSSProperties }) {
  const t = tone[item.status];
  return (
    <div className="co" style={style}>
      <p className="co-h">
        <span className={`num-dot ${t.dot}`}>{String(index + 1).padStart(2, "0")}</span>
        {item.title}
      </p>
      <p className="co-t">{item.text}</p>
      <span className={`chip ${t.chip}`}>● {item.chip}</span>
    </div>
  );
}

export function DiagnosticBoard({ sketch }: { sketch: HomeCopy["sketch"] }) {
  const { mock } = sketch;

  return (
    <figure className="m-0 mt-20">
      <figcaption className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-3.5">
        <span className="label-mono">
          <span className="text-accent">{sketch.eyebrow}</span> &nbsp;·&nbsp; {sketch.title}
        </span>
        <span className="mono text-xs text-soft">{sketch.note}</span>
      </figcaption>

      <div className="board">
        {/* illustrated website */}
        <div className="board-mock" aria-hidden="true">
          <div className="absolute inset-x-0 top-0 h-11 border-b border-[#e7ebf0] bg-[#fafbfc]" />
          <span className="blk" style={{ left: 16, top: 17, width: 10, height: 10, borderRadius: 999, background: "#f1a39a" }} />
          <span className="blk" style={{ left: 32, top: 17, width: 10, height: 10, borderRadius: 999, background: "#f4d27e" }} />
          <span className="blk" style={{ left: 48, top: 17, width: 10, height: 10, borderRadius: 999, background: "#9fdcb9" }} />
          <span className="blk" style={{ left: 170, top: 12, width: 260, height: 20, borderRadius: 6, background: "#eef1f4" }} />
          <span className="mono absolute text-[10px] text-soft" style={{ left: 200, top: 14 }}>
            {mock.url}
          </span>
          <span className="blk" style={{ left: 24, top: 58, width: 64, height: 12, background: "#0d1117" }} />
          <span className="blk" style={{ left: 412, top: 61, width: 32, height: 7 }} />
          <span className="blk" style={{ left: 456, top: 61, width: 32, height: 7 }} />
          <span className="blk" style={{ left: 500, top: 61, width: 32, height: 7 }} />
          <span className="blk" style={{ left: 544, top: 56, width: 40, height: 16, background: "#9fb3c8" }} />
          <div
            className="absolute overflow-hidden rounded-[10px]"
            style={{ left: 24, top: 100, width: 552, height: 130, background: "linear-gradient(135deg,#c9d4e0 0%,#e3e9f0 55%,#d3dce6 100%)" }}
          >
            <div className="absolute rounded-[50%] bg-[#b8c6d5]" style={{ right: -40, bottom: -60, width: 260, height: 160 }} />
            <div className="absolute rounded-[50%] bg-[#aebdcd]" style={{ right: 120, bottom: -80, width: 220, height: 150 }} />
          </div>
          <span className="mono absolute rounded-[5px] bg-white px-[7px] py-0.5 text-[10px] text-[#8a5d00]" style={{ left: 36, top: 112 }}>
            {mock.image}
          </span>
          <span className="blk" style={{ left: 52, top: 152, width: 240, height: 14, background: "#fff" }} />
          <span className="blk" style={{ left: 52, top: 174, width: 170, height: 9, background: "rgba(255,255,255,.8)" }} />
          <span className="blk" style={{ left: 52, top: 196, width: 66, height: 16, background: "#0d1117" }} />
          <div className="absolute rounded-[10px] border border-[#e3e8ee]" style={{ left: 24, top: 250, width: 248, height: 176 }} />
          <span className="blk" style={{ left: 40, top: 264, width: 70, height: 7, background: "#c7d0da" }} />
          <span className="blk border border-[#e3e8ee]" style={{ left: 40, top: 276, width: 216, height: 24, background: "#f2f4f7" }} />
          <span className="blk border border-[#e3e8ee]" style={{ left: 40, top: 312, width: 216, height: 24, background: "#f2f4f7" }} />
          <span className="blk" style={{ left: 40, top: 348, width: 104, height: 26, borderRadius: 6, background: "#9fb3c8" }} />
          <span className="mono absolute text-[10px] text-[#b2341a]" style={{ left: 40, top: 386 }}>
            {mock.error}
          </span>
          <span className="blk" style={{ left: 296, top: 256, width: 240, height: 12, background: "#c7d0da" }} />
          <span className="blk" style={{ left: 296, top: 278, width: 278, height: 7 }} />
          <span className="blk" style={{ left: 296, top: 292, width: 256, height: 7 }} />
          <span className="blk" style={{ left: 296, top: 306, width: 200, height: 7 }} />
          {[296, 392, 488].map((left) => (
            <div key={left}>
              <div className="absolute rounded-lg border border-[#e3e8ee]" style={{ left, top: 336, width: 84, height: 80 }} />
              <span className="blk" style={{ left: left + 12, top: 348, width: 18, height: 18, background: "#dfe5ec" }} />
              <span className="blk" style={{ left: left + 12, top: 378, width: 56, height: 6 }} />
            </div>
          ))}
          <div className="absolute inset-x-0 bottom-0 h-[78px] border-t border-[#e3e8ee] bg-[#f1f3f6]" />
          <span className="blk" style={{ left: 24, top: 466, width: 54, height: 9, background: "#c7d0da" }} />
          {mock.versions.map((version, i) => (
            <span
              key={version}
              className="mono absolute rounded-[5px] border border-[#e3e8ee] bg-white px-[7px] py-0.5 text-[10px] text-soft"
              style={{ left: [24, 86, 160][i], top: 484 }}
            >
              {version}
            </span>
          ))}
          <span className="mono absolute rounded-[5px] border border-[#f3d58b] bg-[#fdf2d6] px-2 py-[3px] text-[10px] text-[#8a5d00]" style={{ left: 460, top: 472 }}>
            {mock.updates}
          </span>
        </div>

        {sketch.items.map((item, i) => {
          const pos = layout[i];
          if (!pos) return null;
          const t = tone[item.status];
          return (
            <div key={item.title}>
              <span className={`ld ${t.line}`} style={pos.line} aria-hidden="true" />
              <span className={`mk ${t.dot}`} style={pos.marker} aria-hidden="true">
                {i + 1}
              </span>
              <Callout item={item} index={i} style={pos.card} />
            </div>
          );
        })}
      </div>

      {/* stacked version below 1240px */}
      <div className="board-list mt-6">
        {sketch.items.map((item, i) => (
          <Callout key={item.title} item={item} index={i} />
        ))}
      </div>
      <p className="mono mt-3 text-center text-[11px] text-soft">{sketch.disclaimer}</p>
    </figure>
  );
}
