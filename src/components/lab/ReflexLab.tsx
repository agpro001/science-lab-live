import { useEffect, useRef, useState } from "react";
import { Choice, LabShell, Readout, Slider } from "./controls";

type Mode = "reflex" | "plant";
type ActionType = "spinal" | "voluntary";
type PlantStimulus = "light" | "gravity" | "water" | "chemical";

const PATH_NODES = [
  { id: "receptor", label: "Receptor (skin)", x: 60 },
  { id: "sensory", label: "Sensory neuron", x: 190 },
  { id: "cord", label: "Spinal cord (relay)", x: 320 },
  { id: "motor", label: "Motor neuron", x: 450 },
  { id: "effector", label: "Effector (muscle)", x: 580 },
];
const BRAIN_NODES = [
  { id: "receptor", label: "Receptor", x: 60 },
  { id: "sensory", label: "Sensory neuron", x: 170 },
  { id: "cord", label: "Spinal cord", x: 280 },
  { id: "brain", label: "Brain (thinking)", x: 390 },
  { id: "motor", label: "Motor neuron", x: 500 },
  { id: "effector", label: "Effector", x: 600 },
];

export function ReflexLab() {
  const [mode, setMode] = useState<Mode>("reflex");
  const [action, setAction] = useState<ActionType>("spinal");
  const [intensity, setIntensity] = useState(50);
  const [firing, setFiring] = useState(false);
  const [progress, setProgress] = useState(0);
  const [plantStim, setPlantStim] = useState<PlantStimulus>("light");
  const rafRef = useRef<number | null>(null);

  const nodes = action === "spinal" ? PATH_NODES : BRAIN_NODES;
  const baseDelayMs = action === "spinal" ? 20 : 200;
  const reactionTimeMs = Math.max(15, baseDelayMs + (100 - intensity) * 2 + (action === "voluntary" ? 150 : 0));

  useEffect(() => {
    if (!firing) return;
    const start = performance.now();
    const duration = 900;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setProgress(p);
      if (p < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setFiring(false);
      }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [firing]);

  const segCount = nodes.length - 1;
  const segIndex = Math.min(segCount - 1, Math.floor(progress * segCount));
  const segT = progress * segCount - segIndex;
  const from = nodes[segIndex];
  const to = nodes[segIndex + 1];
  const impulseX = from && to ? from.x + (to.x - from.x) * segT : nodes[0].x;

  return (
    <LabShell
      title="Reflex Action & Plant Response Lab"
      blurb="Trigger a stimulus and watch the nerve impulse travel; explore synapses and tropisms in plants."
      readout={
        <>
          <Choice
            value={mode}
            onChange={(v) => setMode(v)}
            options={[
              { id: "reflex", label: "Animal reflex" },
              { id: "plant", label: "Plant response" },
            ]}
          />
          {mode === "reflex" ? (
            <>
              <Choice
                value={action}
                onChange={setAction}
                options={[
                  { id: "spinal", label: "Reflex (spinal)" },
                  { id: "voluntary", label: "Voluntary (brain)" },
                ]}
              />
              <Slider label="Stimulus intensity" value={intensity} min={1} max={100} step={1} unit="%" onChange={setIntensity} />
              <button
                onClick={() => setFiring(true)}
                disabled={firing}
                className="w-full rounded-full border border-primary bg-primary/20 px-3 py-2 text-sm font-medium disabled:opacity-40"
              >
                {firing ? "Impulse travelling…" : "Fire stimulus"}
              </button>
              <Readout
                rows={[
                  { k: "Pathway", v: action === "spinal" ? "Receptor → Sensory → Spinal cord → Motor → Effector" : "Receptor → Sensory → Spinal cord → Brain → Motor → Effector" },
                  { k: "Estimated reaction time", v: `${reactionTimeMs.toFixed(0)} ms` },
                  { k: "Involves thinking?", v: action === "spinal" ? "No — involuntary" : "Yes — conscious decision" },
                  { k: "Synapse chemical", v: "Neurotransmitter (e.g. acetylcholine)" },
                ]}
              />
            </>
          ) : (
            <>
              <Choice
                value={plantStim}
                onChange={setPlantStim}
                options={[
                  { id: "light", label: "Light (phototropism)" },
                  { id: "gravity", label: "Gravity (geotropism)" },
                  { id: "water", label: "Water (hydrotropism)" },
                  { id: "chemical", label: "Chemical (chemotropism)" },
                ]}
              />
              <Readout
                rows={[
                  { k: "Stimulus", v: plantStim },
                  { k: "Shoot response", v: plantStim === "gravity" ? "Grows away from gravity (negative geotropism)" : "Grows towards stimulus (positive tropism)" },
                  { k: "Hormone involved", v: "Auxin — accumulates on shaded/lower side, causing faster cell elongation there" },
                ]}
              />
            </>
          )}
        </>
      }
    >
      <div className="p-3 sm:p-4">
        {mode === "reflex" ? (
          <ReflexView nodes={nodes} impulseX={impulseX} progress={progress} firing={firing} />
        ) : (
          <PlantView stimulus={plantStim} />
        )}
      </div>
    </LabShell>
  );
}

function ReflexView({ nodes, impulseX, progress, firing }: { nodes: { id: string; label: string; x: number }[]; impulseX: number; progress: number; firing: boolean }) {
  return (
    <svg viewBox="0 0 660 260" className="w-full">
      <path d={`M ${nodes[0].x} 110 ${nodes.map((n) => `L ${n.x} 110`).join(" ")}`} stroke="var(--color-glass-border)" strokeWidth={6} fill="none" />
      {nodes.map((n, i) => (
        <g key={n.id}>
          <circle cx={n.x} cy={110} r={22} fill="var(--color-glass)" stroke="var(--color-primary)" strokeWidth={2} />
          <text x={n.x} y={150} textAnchor="middle" fontSize={10} fill="var(--color-foreground)">{n.label}</text>
          {n.id === "cord" && <text x={n.x} y={168} textAnchor="middle" fontSize={9} fill="var(--color-accent)">Synapse here</text>}
        </g>
      ))}
      {firing && <circle cx={impulseX} cy={110} r={10} fill="var(--color-accent)"><title>Nerve impulse</title></circle>}
      <text x={330} y={220} textAnchor="middle" fontSize={11} fill="var(--color-muted-foreground)">
        {progress === 0 ? "Press “Fire stimulus” to send the impulse" : progress < 1 ? "Impulse travelling along the pathway…" : "Effector has responded!"}
      </text>
      <g transform="translate(20,190)">
        <rect width={200} height={60} rx={8} fill="var(--color-glass)" stroke="var(--color-glass-border)" />
        <text x={10} y={20} fontSize={10} fill="var(--color-foreground)" fontWeight={600}>Synapse close-up</text>
        <text x={10} y={36} fontSize={9} fill="var(--color-muted-foreground)">Electrical → chemical signal:</text>
        <text x={10} y={50} fontSize={9} fill="var(--color-muted-foreground)">neurotransmitter crosses gap</text>
      </g>
    </svg>
  );
}

function PlantView({ stimulus }: { stimulus: PlantStimulus }) {
  const bendAngle = stimulus === "gravity" ? -35 : 35;
  const stimX = stimulus === "gravity" ? 300 : stimulus === "water" ? 60 : stimulus === "chemical" ? 60 : 540;
  return (
    <svg viewBox="0 0 640 260" className="w-full">
      <rect x={0} y={220} width={640} height={40} fill="var(--color-glass)" />
      <g transform="translate(300,220)">
        <path
          d={`M 0 0 C ${bendAngle > 0 ? "10 -60" : "-10 -60"}, ${bendAngle} -120, ${bendAngle * 1.6} -170`}
          stroke="var(--color-primary)"
          strokeWidth={8}
          fill="none"
          strokeLinecap="round"
        />
        <circle cx={0} cy={0} r={6} fill="var(--color-muted-foreground)" />
      </g>
      {stimulus === "light" && <circle cx={stimX} cy={50} r={20} fill="oklch(0.85 0.18 90)" />}
      {stimulus === "gravity" && <text x={stimX} y={250} textAnchor="middle" fontSize={11} fill="var(--color-muted-foreground)">⬇ Gravity pulls this way</text>}
      {stimulus === "water" && <rect x={stimX - 20} y={200} width={40} height={20} fill="oklch(0.65 0.15 230)" />}
      {stimulus === "chemical" && <circle cx={stimX} cy={200} r={14} fill="oklch(0.65 0.18 145)" />}
      <text x={320} y={20} textAnchor="middle" fontSize={11} fill="var(--color-muted-foreground)">
        Shoot bends {stimulus === "gravity" ? "upward, away from gravity" : "toward the " + stimulus}
      </text>
    </svg>
  );
}
