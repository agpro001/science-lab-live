import { useState } from "react";
import type { DiagramSpec, Shape } from "@/data/types";

function renderShape(s: Shape, i: number) {
  const stroke = s.k !== "text" ? (s.c ?? "currentColor") : undefined;
  switch (s.k) {
    case "line":
      return <line key={i} x1={s.x1} y1={s.y1} x2={s.x2} y2={s.y2} stroke={stroke} strokeWidth={s.w ?? 2} strokeDasharray={s.dash} strokeLinecap="round" />;
    case "rect":
      return <rect key={i} x={s.x} y={s.y} width={s.w} height={s.h} rx={s.r ?? 4} stroke={stroke} fill={s.fill ?? "none"} strokeWidth={2} />;
    case "circle":
      return <circle key={i} cx={s.cx} cy={s.cy} r={s.r} stroke={stroke} fill={s.fill ?? "none"} strokeWidth={s.w ?? 2} strokeDasharray={s.dash} />;
    case "ellipse":
      return <ellipse key={i} cx={s.cx} cy={s.cy} rx={s.rx} ry={s.ry} stroke={stroke} fill={s.fill ?? "none"} strokeWidth={s.w ?? 2} strokeDasharray={s.dash} />;
    case "path":
      return <path key={i} d={s.d} stroke={stroke} fill={s.fill ?? "none"} strokeWidth={s.w ?? 2} strokeDasharray={s.dash} strokeLinecap="round" />;
    case "text":
      return (
        <text key={i} x={s.x} y={s.y} fontSize={s.size ?? 12} fill={s.c ?? "currentColor"} fontFamily="var(--font-sans)">
          {s.t}
        </text>
      );
  }
}

export function DiagramTrainer({ spec }: { spec: DiagramSpec }) {
  const [revealed, setRevealed] = useState<string[]>([]);
  const [active, setActive] = useState<string | null>(null);
  const allOut = revealed.length === spec.parts.length;

  return (
    <div className="glass rounded-3xl p-4 sm:p-6">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <h4 className="font-display text-base font-semibold">{spec.title}</h4>
        <div className="flex gap-2">
          <button
            onClick={() => setRevealed(spec.parts.map((p) => p.id))}
            className="rounded-full border border-glass-border bg-glass px-3 py-1 text-xs text-foreground/80 transition hover:text-foreground"
          >
            Reveal all
          </button>
          <button
            onClick={() => setRevealed([])}
            className="rounded-full border border-glass-border bg-glass px-3 py-1 text-xs text-foreground/80 transition hover:text-foreground"
          >
            Reset
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <svg
          viewBox={`0 0 ${spec.width} ${spec.height}`}
          className="min-w-[520px] w-full text-foreground/70"
          role="img"
          aria-label={spec.title}
        >
          {spec.shapes.map(renderShape)}
          {spec.parts.map((p) => {
            const shown = revealed.includes(p.id);
            return (
              <g
                key={p.id}
                className="cursor-pointer"
                onMouseEnter={() => setActive(p.id)}
                onMouseLeave={() => setActive(null)}
                onClick={() => setRevealed((r) => (r.includes(p.id) ? r.filter((x) => x !== p.id) : [...r, p.id]))}
              >
                <line x1={p.x} y1={p.y} x2={p.lx} y2={p.ly} stroke="var(--color-accent)" strokeWidth={1} strokeDasharray="3 3" />
                <circle cx={p.x} cy={p.y} r={4} fill="var(--color-accent)" />
                <rect
                  x={p.lx - 4}
                  y={p.ly - 13}
                  width={Math.max(46, (shown ? p.label.length : 1) * 7 + 14)}
                  height={19}
                  rx={9}
                  fill="var(--color-card)"
                  stroke={shown ? "var(--color-accent)" : "var(--color-border)"}
                />
                <text x={p.lx + 4} y={p.ly} fontSize={11} fill="var(--color-foreground)">
                  {shown ? p.label : "Tap to name"}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <p className="mt-3 min-h-10 text-sm text-muted-foreground">
        {active
          ? spec.parts.find((p) => p.id === active)?.hint
          : allOut
            ? "All parts labelled — now try again from a blank diagram."
            : `Tap each marker to label it. ${revealed.length}/${spec.parts.length} done.`}
      </p>
    </div>
  );
}
