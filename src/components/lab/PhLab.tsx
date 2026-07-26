import { useState } from "react";
import { LabShell, Readout, Slider } from "./controls";

const SAMPLES = [
  { name: "Dilute HCl", pH: 1 },
  { name: "Gastric juice", pH: 1.5 },
  { name: "Lemon juice", pH: 2.2 },
  { name: "Vinegar", pH: 3 },
  { name: "Tomato juice", pH: 4.1 },
  { name: "Black coffee", pH: 5 },
  { name: "Milk", pH: 6.4 },
  { name: "Pure water", pH: 7 },
  { name: "Blood", pH: 7.4 },
  { name: "Baking soda", pH: 8.5 },
  { name: "Milk of magnesia", pH: 10 },
  { name: "Lime water", pH: 11.5 },
  { name: "NaOH solution", pH: 13.5 },
];

function phColor(p: number) {
  if (p < 3) return "oklch(0.60 0.22 25)";
  if (p < 5) return "oklch(0.70 0.19 45)";
  if (p < 6.5) return "oklch(0.80 0.17 85)";
  if (p <= 7.5) return "oklch(0.75 0.17 145)";
  if (p < 9) return "oklch(0.70 0.15 190)";
  if (p < 11) return "oklch(0.62 0.17 245)";
  return "oklch(0.55 0.20 300)";
}

export function PhLab() {
  const [ph, setPh] = useState(7);
  const nature = ph < 6.5 ? "Acidic" : ph > 7.5 ? "Basic (alkaline)" : "Neutral";
  const h = Math.pow(10, -ph);
  const oh = Math.pow(10, -(14 - ph));

  return (
    <LabShell
      title="pH Lab — Universal Indicator & Indicator Colours"
      blurb="Drag the pH or pick a real sample. Colours, ion concentrations and indicator responses are computed from the pH value."
      readout={
        <>
          <Slider label="pH of solution" value={ph} min={0} max={14} step={0.1} onChange={setPh} />
          <div className="flex flex-wrap gap-2">
            {SAMPLES.map((s) => (
              <button
                key={s.name}
                onClick={() => setPh(s.pH)}
                className="rounded-full border border-glass-border bg-glass px-3 py-1 text-xs text-muted-foreground transition hover:text-foreground"
              >
                {s.name}
              </button>
            ))}
          </div>
          <Readout
            rows={[
              { k: "pH", v: ph.toFixed(1) },
              { k: "Nature", v: nature },
              { k: "[H⁺]", v: `${h.toExponential(2)} mol/L` },
              { k: "[OH⁻]", v: `${oh.toExponential(2)} mol/L` },
              { k: "Blue litmus", v: ph < 6.5 ? "turns red" : "stays blue" },
              { k: "Red litmus", v: ph > 7.5 ? "turns blue" : "stays red" },
              { k: "Phenolphthalein", v: ph > 8.3 ? "pink" : "colourless" },
              { k: "Methyl orange", v: ph < 3.1 ? "red" : ph > 4.4 ? "yellow" : "orange" },
            ]}
          />
        </>
      }
    >
      <svg viewBox="0 0 640 300" className="w-full">
        {Array.from({ length: 15 }).map((_, k) => (
          <g key={k}>
            <rect x={20 + k * 40} y={30} width={38} height={38} rx={6} fill={phColor(k)} fillOpacity={0.85} />
            <text x={33 + k * 40} y={84} fontSize={11} fill="var(--color-muted-foreground)">{k}</text>
          </g>
        ))}
        <path d={`M ${20 + (ph / 14) * 560} 24 l -8 -12 h 16 z`} fill="var(--color-foreground)" />

        {/* test tube */}
        <g>
          <rect x={280} y={120} width={70} height={150} rx={34} fill={phColor(ph)} fillOpacity={0.7} stroke="var(--color-foreground)" strokeWidth={2} />
          <rect x={280} y={110} width={70} height={30} rx={8} fill="var(--color-card)" stroke="var(--color-foreground)" strokeWidth={2} />
          <text x={288} y={295} fontSize={12} fill="var(--color-muted-foreground)">pH {ph.toFixed(1)} — {nature}</text>
        </g>

        {/* litmus strips */}
        <g>
          <rect x={80} y={150} width={110} height={40} rx={8} fill={ph < 6.5 ? "oklch(0.60 0.22 25)" : "oklch(0.55 0.18 265)"} />
          <text x={92} y={175} fontSize={12} fill="var(--color-background)">Blue litmus</text>
          <rect x={450} y={150} width={110} height={40} rx={8} fill={ph > 7.5 ? "oklch(0.55 0.18 265)" : "oklch(0.60 0.22 25)"} />
          <text x={464} y={175} fontSize={12} fill="var(--color-background)">Red litmus</text>
        </g>
      </svg>
    </LabShell>
  );
}
