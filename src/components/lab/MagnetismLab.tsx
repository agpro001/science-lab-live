import { useMemo, useState } from "react";
import { Choice, LabShell, Readout, Slider } from "./controls";

type Setup = "wire" | "loop" | "solenoid" | "motor" | "generator";

const MU0 = 4 * Math.PI * 1e-7;

export function MagnetismLab() {
  const [setup, setSetup] = useState<Setup>("wire");
  const [current, setCurrent] = useState(5);
  const [turns, setTurns] = useState(50);
  const [distance, setDistance] = useState(5); // cm
  const [length, setLength] = useState(10); // cm, solenoid / conductor length
  const [reversed, setReversed] = useState(false);
  const [b, setB] = useState(0.5); // tesla, external field for motor/generator
  const [velocity, setVelocity] = useState(2); // m/s for generator

  const I = reversed ? -current : current;

  const { field, direction, extra } = useMemo(() => {
    const rM = distance / 100;
    const lM = length / 100;
    if (setup === "wire") {
      const Bmag = (MU0 * Math.abs(I)) / (2 * Math.PI * rM);
      return { field: Bmag, direction: I >= 0 ? "Counter-clockwise (viewed from current source), by right-hand thumb rule" : "Clockwise, by right-hand thumb rule", extra: null };
    }
    if (setup === "loop") {
      const Bmag = (MU0 * turns * Math.abs(I)) / (2 * rM);
      return { field: Bmag, direction: I >= 0 ? "Field points out of the loop face (curl fingers with current)" : "Field points into the loop face", extra: null };
    }
    if (setup === "solenoid") {
      const n = turns / lM;
      const Bmag = MU0 * n * Math.abs(I);
      return { field: Bmag, direction: I >= 0 ? "North pole at the right end (right-hand grip rule)" : "North pole at the left end", extra: `n = N/L = ${n.toFixed(1)} turns/m` };
    }
    if (setup === "motor") {
      const F = b * Math.abs(I) * lM;
      return { field: F, direction: I >= 0 ? "Force upward (Fleming's Left-Hand Rule: thumb = force, first finger = field, second finger = current)" : "Force downward — current reversed", extra: `F = BIL = ${F.toFixed(3)} N` };
    }
    // generator
    const emf = b * lM * velocity;
    return { field: emf, direction: velocity >= 0 ? "Induced current as per Fleming's Right-Hand Rule (thumb = motion, first finger = field, second finger = induced current)" : "Induced current reversed", extra: `EMF = Bvl = ${emf.toFixed(3)} V` };
  }, [setup, I, turns, distance, length, b, velocity]);

  const W = 640;
  const H = 320;
  const cx = W / 2;
  const cy = H / 2;

  return (
    <LabShell
      title="Magnetism Lab — Fields, Motors & Generators"
      blurb="Field magnitude and direction are computed from the standard electromagnetism relations using μ₀ = 4π×10⁻⁷ T·m/A."
      readout={
        <>
          <Choice
            value={setup}
            onChange={setSetup}
            options={[
              { id: "wire", label: "Straight wire" },
              { id: "loop", label: "Circular loop" },
              { id: "solenoid", label: "Solenoid" },
              { id: "motor", label: "Motor" },
              { id: "generator", label: "Generator" },
            ]}
          />
          <Slider label="Current I" value={current} min={0.5} max={20} step={0.5} unit="A" onChange={setCurrent} />
          {(setup === "loop" || setup === "solenoid") && <Slider label="Turns N" value={turns} min={1} max={300} onChange={setTurns} />}
          {setup === "wire" && <Slider label="Distance r" value={distance} min={1} max={30} unit="cm" onChange={setDistance} />}
          {(setup === "loop" || setup === "solenoid") && <Slider label="Radius / length" value={distance} min={1} max={30} unit="cm" onChange={setDistance} />}
          {setup === "solenoid" && <Slider label="Solenoid length L" value={length} min={5} max={50} unit="cm" onChange={setLength} />}
          {(setup === "motor" || setup === "generator") && <Slider label="Conductor length" value={length} min={2} max={40} unit="cm" onChange={setLength} />}
          {(setup === "motor" || setup === "generator") && <Slider label="External field B" value={b} min={0.1} max={2} step={0.1} unit="T" onChange={setB} />}
          {setup === "generator" && <Slider label="Velocity v" value={velocity} min={0.5} max={10} step={0.5} unit="m/s" onChange={setVelocity} />}
          {setup !== "generator" ? (
            <button
              onClick={() => setReversed((r) => !r)}
              className="w-full rounded-full border border-glass-border bg-glass px-3 py-1.5 text-xs text-muted-foreground transition hover:text-foreground"
            >
              Reverse current direction ({reversed ? "reversed" : "forward"})
            </button>
          ) : (
            <button
              onClick={() => setVelocity((v) => -v)}
              className="w-full rounded-full border border-glass-border bg-glass px-3 py-1.5 text-xs text-muted-foreground transition hover:text-foreground"
            >
              Reverse motion direction
            </button>
          )}
          <Readout
            rows={[
              {
                k: setup === "wire" ? "B = μ0I/2πr" : setup === "loop" ? "B = μ0NI/2r" : setup === "solenoid" ? "B = μ0nI" : setup === "motor" ? "F = BIL" : "EMF = Bvl",
                v: setup === "motor" ? `${field.toFixed(3)} N` : setup === "generator" ? `${field.toFixed(3)} V` : `${(field * 1000).toFixed(3)} mT`,
              },
              ...(extra ? [{ k: "Detail", v: extra }] : []),
              { k: "Direction", v: direction },
            ]}
          />
        </>
      }
    >
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full">
        {setup === "wire" && (
          <g>
            <circle cx={cx} cy={cy} r={6} fill="var(--color-foreground)" />
            <text x={cx + 12} y={cy - 12} fontSize={11} fill="var(--color-muted-foreground)">{I >= 0 ? "current ⊙ (out of page)" : "current ⊗ (into page)"}</text>
            {[40, 70, 100, 130].map((r) => (
              <circle key={r} cx={cx} cy={cy} r={r} fill="none" stroke="var(--color-accent)" strokeWidth={1.4} strokeDasharray={I >= 0 ? undefined : "6 4"} opacity={0.7} />
            ))}
            <path d={`M ${cx + 70} ${cy - 6} l ${I >= 0 ? "10 -6 -2 10" : "-10 -6 2 10"}`} fill="var(--color-accent)" />
          </g>
        )}
        {setup === "loop" && (
          <g>
            <ellipse cx={cx} cy={cy} rx={100} ry={60} fill="none" stroke="var(--color-foreground)" strokeWidth={3} />
            {[0.6, 1, 1.4].map((s, k) => (
              <ellipse key={k} cx={cx} cy={cy} rx={100 - 30 * s} ry={60 - 18 * s} fill="none" stroke="var(--color-accent)" strokeWidth={1.2} opacity={0.6} />
            ))}
            <text x={cx - 60} y={cy + 90} fontSize={11} fill="var(--color-muted-foreground)">
              {I >= 0 ? "Field emerges toward viewer at centre" : "Field points away from viewer at centre"}
            </text>
          </g>
        )}
        {setup === "solenoid" && (
          <g>
            {Array.from({ length: 10 }).map((_, k) => (
              <ellipse key={k} cx={cx - 140 + k * 30} cy={cy} rx={14} ry={55} fill="none" stroke="var(--color-foreground)" strokeWidth={2} />
            ))}
            <line x1={cx - 160} y1={cy} x2={cx + 160} y2={cy} stroke="var(--color-accent)" strokeWidth={2} className="current-flow" />
            <path d={`M ${cx + (I >= 0 ? 150 : -150)} ${cy - 6} l ${I >= 0 ? "10 -6 -2 10" : "-10 -6 2 10"}`} fill="var(--color-accent)" />
            <text x={cx - 40} y={cy - 75} fontSize={11} fill="var(--color-muted-foreground)">{I >= 0 ? "N" : "S"}</text>
            <text x={cx + 150} y={cy - 75} fontSize={11} fill="var(--color-muted-foreground)">{I >= 0 ? "S" : "N"}</text>
          </g>
        )}
        {setup === "motor" && (
          <g>
            <rect x={cx - 120} y={cy - 80} width={240} height={160} fill="none" stroke="var(--color-muted-foreground)" strokeWidth={1} strokeDasharray="4 4" />
            <text x={cx - 118} y={cy - 88} fontSize={11} fill="var(--color-muted-foreground)">Uniform field B →</text>
            {Array.from({ length: 5 }).map((_, k) => (
              <line key={k} x1={cx - 100} y1={cy - 60 + k * 30} x2={cx + 100} y2={cy - 60 + k * 30} stroke="var(--color-primary)" strokeWidth={1.4} markerEnd="url(#arrow)" opacity={0.7} />
            ))}
            <line x1={cx} y1={cy + 70} x2={cx} y2={I >= 0 ? cy - 70 : cy + 70} stroke="var(--color-accent)" strokeWidth={5} />
            <path
              d={I >= 0 ? `M ${cx} ${cy - 70} L ${cx - 22} ${cy - 30} M ${cx} ${cy - 70} L ${cx + 22} ${cy - 30}` : `M ${cx} ${cy + 10} L ${cx - 22} ${cy - 30} M ${cx} ${cy + 10} L ${cx + 22} ${cy - 30}`}
              stroke="var(--color-warning)"
              strokeWidth={3}
              fill="none"
            />
            <text x={cx - 60} y={cy + 100} fontSize={11} fill="var(--color-warning)">{direction}</text>
          </g>
        )}
        {setup === "generator" && (
          <g>
            <rect x={cx - 120} y={cy - 80} width={240} height={160} fill="none" stroke="var(--color-muted-foreground)" strokeWidth={1} strokeDasharray="4 4" />
            {Array.from({ length: 5 }).map((_, k) => (
              <line key={k} x1={cx - 100} y1={cy - 60 + k * 30} x2={cx + 100} y2={cy - 60 + k * 30} stroke="var(--color-primary)" strokeWidth={1.4} opacity={0.7} />
            ))}
            <line x1={cx} y1={cy - 60} x2={cx} y2={cy + 60} stroke="var(--color-accent)" strokeWidth={5} />
            <path d={velocity >= 0 ? `M ${cx - 30} ${cy} L ${cx - 60} ${cy}` : `M ${cx - 60} ${cy} L ${cx - 30} ${cy}`} stroke="var(--color-foreground)" strokeWidth={2} markerEnd="url(#arrow)" />
            <text x={cx - 90} y={cy - 20} fontSize={10} fill="var(--color-muted-foreground)">motion v</text>
            <text x={cx - 60} y={cy + 100} fontSize={11} fill="var(--color-warning)">{direction}</text>
          </g>
        )}
        <defs>
          <marker id="arrow" markerWidth={8} markerHeight={8} refX={4} refY={4} orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="var(--color-primary)" />
          </marker>
        </defs>
      </svg>
    </LabShell>
  );
}
