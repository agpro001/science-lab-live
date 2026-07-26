import { useMemo, useState } from "react";
import { Choice, LabShell, Readout, Slider } from "./controls";

type Device = "concave-mirror" | "convex-mirror" | "convex-lens" | "concave-lens";

const W = 640;
const H = 320;
const AXIS = H / 2;
const ORIGIN = W / 2;
const SCALE = 6; // px per cm

export function OpticsLab() {
  const [device, setDevice] = useState<Device>("concave-mirror");
  const [f0, setF0] = useState(20);
  const [u0, setU0] = useState(30);
  const [h, setH] = useState(6);

  const isMirror = device.includes("mirror");
  const f = device === "concave-mirror" ? -f0 : device === "convex-mirror" ? f0 : device === "convex-lens" ? f0 : -f0;
  const u = -u0; // object always left of the optical element

  const { v, m, hp } = useMemo(() => {
    // mirror: 1/v + 1/u = 1/f  -> v = 1/(1/f - 1/u)
    // lens:   1/v - 1/u = 1/f  -> v = 1/(1/f + 1/u)
    const inv = isMirror ? 1 / f - 1 / u : 1 / f + 1 / u;
    const vv = Math.abs(inv) < 1e-6 ? Infinity : 1 / inv;
    const mm = isMirror ? -vv / u : vv / u;
    return { v: vv, m: mm, hp: mm * h };
  }, [f, u, h, isMirror]);

  const finite = Number.isFinite(v);
  const real = isMirror ? finite && v < 0 : finite && v > 0;
  const erect = m > 0;

  // screen mapping: mirror images at negative v are on the left (same side as object)
  const imgX = finite ? ORIGIN + (isMirror ? v : v) * SCALE : ORIGIN;
  const objX = ORIGIN + u * SCALE;
  const objTop = AXIS - h * SCALE;
  const imgTop = AXIS - hp * SCALE;
  const fx = ORIGIN + (isMirror ? f : f) * SCALE;
  const cx = ORIGIN + (isMirror ? 2 * f : 0) * SCALE;

  const stroke = "var(--color-foreground)";
  const rayA = "var(--color-accent)";
  const rayB = "var(--color-chart-4)";

  return (
    <LabShell
      title="Optical Bench — Mirrors & Lenses"
      blurb="Everything below is solved live from the mirror/lens equation. Nothing is pre-drawn."
      readout={
        <>
          <Choice
            value={device}
            onChange={setDevice}
            options={[
              { id: "concave-mirror", label: "Concave mirror" },
              { id: "convex-mirror", label: "Convex mirror" },
              { id: "convex-lens", label: "Convex lens" },
              { id: "concave-lens", label: "Concave lens" },
            ]}
          />
          <Slider label="Focal length |f|" value={f0} min={5} max={40} unit="cm" onChange={setF0} />
          <Slider label="Object distance |u|" value={u0} min={5} max={60} unit="cm" onChange={setU0} />
          <Slider label="Object height h" value={h} min={2} max={14} unit="cm" onChange={setH} />
          <Readout
            rows={[
              { k: "Formula", v: isMirror ? "1/v + 1/u = 1/f" : "1/v − 1/u = 1/f" },
              { k: "u", v: `${u.toFixed(1)} cm` },
              { k: "f", v: `${f.toFixed(1)} cm` },
              { k: "v", v: finite ? `${v.toFixed(2)} cm` : "∞ (at focus)" },
              { k: "m = h′/h", v: finite ? m.toFixed(2) : "∞" },
              { k: "h′", v: finite ? `${hp.toFixed(2)} cm` : "∞" },
              ...(isMirror ? [] : [{ k: "Power P = 1/f(m)", v: `${(100 / f).toFixed(2)} D` }]),
              { k: "Nature", v: finite ? `${real ? "Real" : "Virtual"}, ${erect ? "erect" : "inverted"}` : "No image formed" },
              { k: "Size", v: finite ? (Math.abs(m) > 1 ? "Enlarged" : Math.abs(m) < 1 ? "Diminished" : "Same size") : "—" },
            ]}
          />
        </>
      }
    >
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full">
        <line x1={0} y1={AXIS} x2={W} y2={AXIS} stroke="var(--color-border)" strokeWidth={1.5} />
        {isMirror ? (
          <path
            d={`M ${ORIGIN} ${AXIS - 90} Q ${ORIGIN + (device === "concave-mirror" ? 26 : -26)} ${AXIS} ${ORIGIN} ${AXIS + 90}`}
            stroke={stroke}
            fill="none"
            strokeWidth={3}
          />
        ) : (
          <path
            d={
              device === "convex-lens"
                ? `M ${ORIGIN} ${AXIS - 90} Q ${ORIGIN + 22} ${AXIS} ${ORIGIN} ${AXIS + 90} Q ${ORIGIN - 22} ${AXIS} ${ORIGIN} ${AXIS - 90}`
                : `M ${ORIGIN - 14} ${AXIS - 90} Q ${ORIGIN + 6} ${AXIS} ${ORIGIN - 14} ${AXIS + 90} L ${ORIGIN + 14} ${AXIS + 90} Q ${ORIGIN - 6} ${AXIS} ${ORIGIN + 14} ${AXIS - 90} Z`
            }
            stroke={stroke}
            fill="var(--color-primary)"
            fillOpacity={0.18}
            strokeWidth={2}
          />
        )}

        {/* F and C / 2F markers */}
        <g fill="var(--color-muted-foreground)" fontSize={11}>
          <circle cx={fx} cy={AXIS} r={3} fill="var(--color-muted-foreground)" />
          <text x={fx - 4} y={AXIS + 18}>F</text>
          <circle cx={cx} cy={AXIS} r={3} fill="var(--color-muted-foreground)" />
          <text x={cx - 6} y={AXIS + 18}>{isMirror ? "C" : "O"}</text>
          {!isMirror && (
            <>
              <circle cx={ORIGIN - (f > 0 ? f : -f) * SCALE} cy={AXIS} r={3} fill="var(--color-muted-foreground)" />
              <text x={ORIGIN - (f > 0 ? f : -f) * SCALE - 6} y={AXIS + 18}>F′</text>
            </>
          )}
        </g>

        {/* object */}
        <line x1={objX} y1={AXIS} x2={objX} y2={objTop} stroke="var(--color-chart-2)" strokeWidth={3} markerEnd="" />
        <path d={`M ${objX - 5} ${objTop + 8} L ${objX} ${objTop} L ${objX + 5} ${objTop + 8}`} stroke="var(--color-chart-2)" fill="none" strokeWidth={3} />
        <text x={objX - 20} y={AXIS + 18} fontSize={11} fill="var(--color-chart-2)">Object</text>

        {/* ray 1: parallel to axis then through focus */}
        <line x1={objX} y1={objTop} x2={ORIGIN} y2={objTop} stroke={rayA} strokeWidth={1.6} className="current-flow" />
        <line
          x1={ORIGIN}
          y1={objTop}
          x2={isMirror ? objX - 60 : W}
          y2={isMirror ? objTop + ((objX - 60 - ORIGIN) * (AXIS - objTop)) / (fx - ORIGIN) : objTop + ((W - ORIGIN) * (AXIS - objTop)) / (Math.abs(f) * SCALE * (f > 0 ? 1 : -1))}
          stroke={rayA}
          strokeWidth={1.6}
          opacity={0.9}
        />

        {/* ray 2: through pole / optical centre */}
        <line
          x1={objX}
          y1={objTop}
          x2={isMirror ? objX + (ORIGIN - objX) * 2 : W}
          y2={isMirror ? AXIS + (AXIS - objTop) : AXIS + ((W - ORIGIN) * (AXIS - objTop)) / (ORIGIN - objX)}
          stroke={rayB}
          strokeWidth={1.6}
          opacity={0.8}
        />

        {/* image */}
        {finite && (
          <>
            <line x1={imgX} y1={AXIS} x2={imgX} y2={imgTop} stroke={real ? "var(--color-success)" : "var(--color-warning)"} strokeWidth={3} strokeDasharray={real ? undefined : "5 4"} />
            <path
              d={`M ${imgX - 5} ${imgTop + (hp >= 0 ? 8 : -8)} L ${imgX} ${imgTop} L ${imgX + 5} ${imgTop + (hp >= 0 ? 8 : -8)}`}
              stroke={real ? "var(--color-success)" : "var(--color-warning)"}
              fill="none"
              strokeWidth={3}
            />
            <text x={imgX - 16} y={hp >= 0 ? imgTop - 8 : imgTop + 18} fontSize={11} fill={real ? "var(--color-success)" : "var(--color-warning)"}>
              Image
            </text>
          </>
        )}
      </svg>
    </LabShell>
  );
}
