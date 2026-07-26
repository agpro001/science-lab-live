import { useMemo, useState } from "react";
import { Choice, LabShell, Readout, Slider } from "./controls";

export function CircuitLab() {
  const [mode, setMode] = useState<"series" | "parallel">("series");
  const [emf, setEmf] = useState(6);
  const [r1, setR1] = useState(4);
  const [r2, setR2] = useState(6);
  const [r3, setR3] = useState(12);
  const [minutes, setMinutes] = useState(10);

  const rs = [r1, r2, r3];
  const req = useMemo(
    () => (mode === "series" ? rs.reduce((a, b) => a + b, 0) : 1 / rs.reduce((a, b) => a + 1 / b, 0)),
    [mode, r1, r2, r3],
  );
  const i = emf / req;
  const branch = rs.map((r) => (mode === "series" ? i : emf / r));
  const drop = rs.map((r, k) => branch[k] * r);
  const power = emf * i;
  const heat = power * minutes * 60;
  const glow = Math.min(1, power / 12);

  return (
    <LabShell
      title="Circuit Lab — Ohm's Law, Series & Parallel"
      blurb="Change the cell and resistances; current, voltage drops, power and heat are recomputed from V = IR and H = I²Rt."
      readout={
        <>
          <Choice
            value={mode}
            onChange={setMode}
            options={[
              { id: "series", label: "Series" },
              { id: "parallel", label: "Parallel" },
            ]}
          />
          <Slider label="Cell EMF" value={emf} min={1} max={24} unit="V" onChange={setEmf} />
          <Slider label="R₁" value={r1} min={1} max={30} unit="Ω" onChange={setR1} />
          <Slider label="R₂" value={r2} min={1} max={30} unit="Ω" onChange={setR2} />
          <Slider label="R₃" value={r3} min={1} max={30} unit="Ω" onChange={setR3} />
          <Slider label="Time" value={minutes} min={1} max={60} unit="min" onChange={setMinutes} />
          <Readout
            rows={[
              { k: mode === "series" ? "Rs = R₁+R₂+R₃" : "1/Rp = ΣR⁻¹", v: `${req.toFixed(2)} Ω` },
              { k: "Total current I", v: `${i.toFixed(3)} A` },
              { k: "V₁ / V₂ / V₃", v: drop.map((d) => d.toFixed(2)).join(" / ") + " V" },
              { k: "I₁ / I₂ / I₃", v: branch.map((b) => b.toFixed(2)).join(" / ") + " A" },
              { k: "Power P = VI", v: `${power.toFixed(2)} W` },
              { k: `Heat in ${minutes} min`, v: `${heat.toFixed(0)} J` },
              { k: "Energy", v: `${(heat / 3.6e6).toFixed(5)} kWh` },
            ]}
          />
        </>
      }
    >
      <svg viewBox="0 0 640 300" className="w-full">
        <defs>
          <radialGradient id="bulbglow">
            <stop offset="0%" stopColor="var(--color-warning)" stopOpacity={glow} />
            <stop offset="100%" stopColor="var(--color-warning)" stopOpacity={0} />
          </radialGradient>
        </defs>

        {/* battery */}
        <g stroke="var(--color-foreground)" strokeWidth={2} fill="none">
          <line x1={60} y1={150} x2={60} y2={120} />
          <line x1={44} y1={120} x2={76} y2={120} />
          <line x1={52} y1={112} x2={68} y2={112} />
          <line x1={60} y1={112} x2={60} y2={80} />
        </g>
        <text x={20} y={150} fontSize={12} fill="var(--color-muted-foreground)">{emf} V</text>

        {mode === "series" ? (
          <g>
            <path d="M 60 80 H 140" className="current-flow" stroke="var(--color-accent)" strokeWidth={2} fill="none" />
            {rs.map((r, k) => (
              <g key={k}>
                <rect x={140 + k * 150} y={64} width={80} height={32} rx={6} fill="var(--color-card)" stroke="var(--color-foreground)" strokeWidth={2} />
                <text x={150 + k * 150} y={85} fontSize={12} fill="var(--color-foreground)">{`R${k + 1}=${r}Ω`}</text>
                <text x={150 + k * 150} y={54} fontSize={11} fill="var(--color-accent)">{drop[k].toFixed(2)} V</text>
                <path d={`M ${220 + k * 150} 80 H ${290 + k * 150}`} className="current-flow" stroke="var(--color-accent)" strokeWidth={2} fill="none" />
              </g>
            ))}
            <path d="M 590 80 V 220 H 60 V 150" className="current-flow" stroke="var(--color-accent)" strokeWidth={2} fill="none" />
          </g>
        ) : (
          <g>
            <path d="M 60 80 H 160" className="current-flow" stroke="var(--color-accent)" strokeWidth={2} fill="none" />
            <path d="M 480 80 H 590 V 220 H 60 V 150" className="current-flow" stroke="var(--color-accent)" strokeWidth={2} fill="none" />
            <line x1={160} y1={80} x2={160} y2={230} stroke="var(--color-accent)" strokeWidth={2} />
            <line x1={480} y1={80} x2={480} y2={230} stroke="var(--color-accent)" strokeWidth={2} />
            {rs.map((r, k) => {
              const y = 80 + k * 75;
              return (
                <g key={k}>
                  <path d={`M 160 ${y} H 280`} className="current-flow" stroke="var(--color-accent)" strokeWidth={2} fill="none" />
                  <rect x={280} y={y - 16} width={80} height={32} rx={6} fill="var(--color-card)" stroke="var(--color-foreground)" strokeWidth={2} />
                  <text x={290} y={y + 5} fontSize={12} fill="var(--color-foreground)">{`R${k + 1}=${r}Ω`}</text>
                  <path d={`M 360 ${y} H 480`} className="current-flow" stroke="var(--color-accent)" strokeWidth={2} fill="none" />
                  <text x={392} y={y - 8} fontSize={11} fill="var(--color-accent)">{branch[k].toFixed(2)} A</text>
                </g>
              );
            })}
          </g>
        )}

        {/* bulb brightness indicator */}
        <circle cx={560} cy={250} r={40} fill="url(#bulbglow)" />
        <circle cx={560} cy={250} r={16} fill="var(--color-warning)" fillOpacity={0.25 + glow * 0.75} stroke="var(--color-foreground)" strokeWidth={2} />
        <text x={500} y={295} fontSize={11} fill="var(--color-muted-foreground)">Brightness ∝ P = {power.toFixed(1)} W</text>
      </svg>
    </LabShell>
  );
}
