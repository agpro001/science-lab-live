import { useMemo, useState } from "react";
import { Choice, LabShell, Readout, Slider } from "./controls";

type Condition = "normal" | "myopia" | "hypermetropia" | "presbyopia";

const R = 2.5; // retina distance from lens, cm (fixed eyeball axial length)

const PRESETS: Record<Condition, { pmin: number; pmax: number; label: string }> = {
  normal: { pmin: 40, pmax: 44, label: "Normal eye" },
  myopia: { pmin: 42, pmax: 46, label: "Myopia (near-sightedness)" },
  hypermetropia: { pmin: 38, pmax: 42, label: "Hypermetropia (far-sightedness)" },
  presbyopia: { pmin: 40, pmax: 41, label: "Presbyopia (aging lens)" },
};

const SPECTRUM = [
  { name: "Violet", color: "oklch(0.55 0.25 300)", dev: 7 },
  { name: "Indigo", color: "oklch(0.5 0.22 280)", dev: 6 },
  { name: "Blue", color: "oklch(0.6 0.2 250)", dev: 5 },
  { name: "Green", color: "oklch(0.72 0.19 145)", dev: 4 },
  { name: "Yellow", color: "oklch(0.85 0.17 95)", dev: 3 },
  { name: "Orange", color: "oklch(0.75 0.19 55)", dev: 2 },
  { name: "Red", color: "oklch(0.62 0.22 25)", dev: 1 },
];

export function EyeLab() {
  const [condition, setCondition] = useState<Condition>("normal");
  const [u0, setU0] = useState(50);
  const [pCurrent, setPCurrent] = useState(42);
  const [showPrism, setShowPrism] = useState(false);

  const { pmin, pmax } = PRESETS[condition];
  const p = Math.min(Math.max(pCurrent, pmin), pmax);

  const { v, pRequired, focusState, np, fp, correctionD } = useMemo(() => {
    const pReq = 40 + 100 / u0; // power needed to focus this object exactly on retina
    const f = 100 / p; // cm
    const u = -u0;
    const vv = 1 / (1 / f + 1 / u);
    const state = Math.abs(vv - R) < 0.05 ? "sharp" : vv < R ? "front" : "behind";
    const nearPoint = pmax > 40 ? 100 / (pmax - 40) : Infinity;
    const farPoint = pmin > 40 ? 100 / (pmin - 40) : Infinity;
    const corr = 40 - pmin; // negative => concave (myopia), positive => convex (hypermetropia)
    return { v: vv, pRequired: pReq, focusState: state, np: nearPoint, fp: farPoint, correctionD: corr };
  }, [u0, p, pmax, pmin]);

  const readingAdd = pmax < 44 ? 44 - pmax : 0;

  // drawing geometry
  const W = 640;
  const H = 320;
  const AXIS = H / 2;
  const lensX = 420;
  const retinaX = lensX + R * 20;
  // map object distance (10-500cm) to a compressed x position for display
  const objX = lensX - 40 - 220 * (Math.log(u0) / Math.log(500));
  const objH = 30;
  const imgScreenV = lensX + Math.max(-20, Math.min(60, v * 20));
  const stroke = "var(--color-foreground)";

  return (
    <LabShell
      title="Human Eye — Accommodation & Defects of Vision"
      blurb="The lens formula is solved live for the required vs. current ciliary power to show exactly where the image forms relative to the retina."
      readout={
        <>
          <Choice
            value={condition}
            onChange={(c) => {
              setCondition(c);
              setPCurrent(PRESETS[c].pmin);
            }}
            options={[
              { id: "normal", label: "Normal" },
              { id: "myopia", label: "Myopia" },
              { id: "hypermetropia", label: "Hypermetropia" },
              { id: "presbyopia", label: "Presbyopia" },
            ]}
          />
          <Slider label="Object distance" value={u0} min={10} max={500} unit="cm" onChange={setU0} />
          <Slider label="Ciliary (lens) power" value={p} min={pmin} max={pmax} step={0.1} unit="D" onChange={setPCurrent} />
          <Readout
            rows={[
              { k: "Power required for sharp image", v: `${pRequired.toFixed(1)} D` },
              { k: "Current lens power", v: `${p.toFixed(1)} D` },
              { k: "Image distance v", v: `${v.toFixed(2)} cm (retina at ${R} cm)` },
              { k: "Focus", v: focusState === "sharp" ? "Sharp — on retina" : focusState === "front" ? "Blurred — forms in front of retina" : "Blurred — forms behind retina" },
              { k: "Near point", v: Number.isFinite(np) ? `${np.toFixed(1)} cm` : "∞" },
              { k: "Far point", v: Number.isFinite(fp) ? `${fp.toFixed(1)} cm` : "∞ (infinity)" },
              {
                k: "Corrective lens needed",
                v: Math.abs(correctionD) < 0.05 ? "None (distance vision normal)" : `${correctionD > 0 ? "Convex" : "Concave"}, P = ${correctionD.toFixed(1)} D`,
              },
              ...(condition === "presbyopia" ? [{ k: "Reading addition (convex)", v: `+${readingAdd.toFixed(1)} D` }] : []),
            ]}
          />
          <button
            onClick={() => setShowPrism((s) => !s)}
            className="w-full rounded-full border border-glass-border bg-glass px-3 py-1.5 text-xs text-muted-foreground transition hover:text-foreground"
          >
            {showPrism ? "Hide" : "Show"} prism dispersion
          </button>
        </>
      }
    >
      {!showPrism ? (
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full">
          <line x1={0} y1={AXIS} x2={W} y2={AXIS} stroke="var(--color-border)" strokeWidth={1} />
          {/* eyeball */}
          <ellipse cx={lensX + 40} cy={AXIS} rx={90} ry={70} fill="var(--color-primary)" fillOpacity={0.08} stroke={stroke} strokeWidth={2} />
          {/* lens */}
          <path
            d={`M ${lensX} ${AXIS - 65} Q ${lensX + 16} ${AXIS} ${lensX} ${AXIS + 65} Q ${lensX - 16} ${AXIS} ${lensX} ${AXIS - 65}`}
            fill="var(--color-primary)"
            fillOpacity={0.3}
            stroke={stroke}
            strokeWidth={2}
          />
          {/* retina */}
          <line x1={retinaX} y1={AXIS - 68} x2={retinaX} y2={AXIS + 68} stroke="var(--color-accent)" strokeWidth={3} />
          <text x={retinaX - 20} y={AXIS + 90} fontSize={11} fill="var(--color-accent)">Retina</text>

          {/* object */}
          <line x1={objX} y1={AXIS} x2={objX} y2={AXIS - objH} stroke="var(--color-chart-2)" strokeWidth={3} />
          <path d={`M ${objX - 5} ${AXIS - objH + 8} L ${objX} ${AXIS - objH} L ${objX + 5} ${AXIS - objH + 8}`} stroke="var(--color-chart-2)" fill="none" strokeWidth={3} />
          <text x={objX - 24} y={AXIS + 18} fontSize={11} fill="var(--color-chart-2)">Object ({u0} cm)</text>

          {/* rays converging to image point */}
          {[-objH, -objH * 0.5].map((dy, k) => (
            <line key={k} x1={objX} y1={AXIS + dy} x2={imgScreenV} y2={AXIS} stroke="var(--color-chart-4)" strokeWidth={1.4} opacity={0.85} />
          ))}
          <line x1={objX} y1={AXIS - objH} x2={lensX} y2={AXIS - objH * 0.3} stroke="var(--color-chart-4)" strokeWidth={1.4} opacity={0.5} />
          <line x1={lensX} y1={AXIS - objH * 0.3} x2={imgScreenV} y2={AXIS} stroke="var(--color-chart-4)" strokeWidth={1.4} opacity={0.85} />

          {/* focal point marker */}
          <circle cx={imgScreenV} cy={AXIS} r={4} fill={focusState === "sharp" ? "var(--color-success)" : "var(--color-warning)"} />
          <text x={imgScreenV - 20} y={AXIS - 12} fontSize={10} fill={focusState === "sharp" ? "var(--color-success)" : "var(--color-warning)"}>
            {focusState === "sharp" ? "Focus on retina" : focusState === "front" ? "Focus before retina" : "Focus behind retina"}
          </text>
        </svg>
      ) : (
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full">
          <path d={`M 260 60 L 340 260 L 180 260 Z`} fill="var(--color-primary)" fillOpacity={0.12} stroke={stroke} strokeWidth={2} />
          <line x1={40} y1={160} x2={260} y2={160} stroke="var(--color-foreground)" strokeWidth={2} />
          {SPECTRUM.map((s, k) => {
            const angle = s.dev * 4; // degrees, violet deviates most
            const rad = (angle * Math.PI) / 180;
            const x2 = 260 + Math.cos(rad) * 320;
            const y2 = 160 + Math.sin(rad) * 320;
            return <line key={s.name} x1={260} y1={160} x2={x2} y2={y2} stroke={s.color} strokeWidth={3} opacity={0.9} />;
          })}
          <text x={40} y={280} fontSize={12} fill="var(--color-muted-foreground)">
            White light splits into a spectrum: Violet deviates the most, Red the least (deviation ∝ refractive index, which increases with decreasing wavelength).
          </text>
          <g>
            {SPECTRUM.map((s, k) => (
              <g key={s.name}>
                <rect x={20 + k * 85} y={20} width={16} height={16} fill={s.color} rx={3} />
                <text x={40 + k * 85} y={33} fontSize={11} fill="var(--color-muted-foreground)">{s.name}</text>
              </g>
            ))}
          </g>
        </svg>
      )}
    </LabShell>
  );
}
