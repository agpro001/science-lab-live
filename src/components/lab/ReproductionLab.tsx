import { useMemo, useState } from "react";
import { Choice, LabShell, Readout, Slider } from "./controls";

type Mode = "binary" | "multiple" | "budding" | "fragmentation" | "regeneration" | "spore" | "vegetative" | "sexual";

const ASEXUAL_STEPS: Record<string, string[]> = {
  binary: ["Amoeba grows to full size", "Nucleus divides by mitosis", "Cytoplasm constricts in the middle", "Two identical daughter amoebae separate"],
  multiple: ["Plasmodium (malarial parasite) inside host cell", "Nucleus divides repeatedly (many times)", "Cytoplasm divides around each nucleus", "Many daughter cells (merozoites) released together"],
  budding: ["Parent (Hydra/yeast) develops a small bud", "Bud grows, forming its own body parts", "Bud develops mouth & tentacles / cell wall", "Bud detaches (Hydra) or stays attached (yeast) as new individual"],
  fragmentation: ["Spirogyra filament breaks into pieces (fragments)", "Each fragment is a separate piece", "Each fragment grows by mitosis", "Each fragment becomes a new filament"],
  regeneration: ["Planaria body is cut into pieces", "Each piece has cells that can specialise", "Missing parts regrow from the cut surface", "Each piece regenerates into a complete new organism"],
  spore: ["Rhizopus (bread mould) grows hyphae over food", "Sporangium (spore case) forms at hyphal tip", "Thousands of spores develop inside sporangium", "Sporangium bursts; spores disperse and germinate in favourable conditions"],
  vegetative: ["A vegetative part (stem/root/leaf) is selected, e.g. potato eye", "Part is planted in soil", "Adventitious roots and shoots develop from nodes/buds", "New plant genetically identical to parent grows"],
  sexual: ["Pollination: pollen transferred to stigma", "Pollen tube grows down through style to ovary", "Fertilisation: male gamete fuses with egg cell", "Zygote develops into embryo; ovule becomes seed; ovary becomes fruit"],
};

const NAMES: Record<Mode, { label: string; asexual: boolean; organism: string }> = {
  binary: { label: "Binary fission", asexual: true, organism: "Amoeba" },
  multiple: { label: "Multiple fission", asexual: true, organism: "Plasmodium" },
  budding: { label: "Budding", asexual: true, organism: "Hydra / Yeast" },
  fragmentation: { label: "Fragmentation", asexual: true, organism: "Spirogyra" },
  regeneration: { label: "Regeneration", asexual: true, organism: "Planaria" },
  spore: { label: "Spore formation", asexual: true, organism: "Rhizopus" },
  vegetative: { label: "Vegetative propagation", asexual: true, organism: "Potato / plants" },
  sexual: { label: "Sexual reproduction (flowering plant)", asexual: false, organism: "Flowering plant" },
};

function cyclePhase(day: number) {
  if (day <= 5) return "Menstruation (uterine lining sheds)";
  if (day <= 13) return "Follicular phase (egg maturing, lining rebuilds)";
  if (day <= 15) return "Ovulation (egg released, day ~14)";
  return "Luteal phase (lining thickens for possible pregnancy)";
}

export function ReproductionLab() {
  const [mode, setMode] = useState<Mode>("binary");
  const [step, setStep] = useState(0);
  const [generations, setGenerations] = useState(4);
  const [day, setDay] = useState(14);
  const steps = ASEXUAL_STEPS[mode];
  const meta = NAMES[mode];

  const offspring = useMemo(() => {
    if (mode === "binary" || mode === "budding" || mode === "fragmentation") return Math.pow(2, generations);
    if (mode === "multiple" || mode === "spore") return Math.pow(8, generations);
    return null;
  }, [mode, generations]);

  const clampedStep = Math.min(step, steps.length - 1);

  return (
    <LabShell
      title="Reproduction Lab"
      blurb="Step through asexual and sexual reproduction strategies, and explore the human menstrual cycle."
      readout={
        <>
          <Choice
            value={mode}
            onChange={(v) => {
              setMode(v);
              setStep(0);
            }}
            options={(Object.keys(NAMES) as Mode[]).map((id) => ({ id, label: NAMES[id].label }))}
          />
          {meta.asexual && (
            <>
              <Slider label="Generations" value={generations} min={1} max={6} step={1} onChange={setGenerations} />
              <Readout
                rows={[
                  { k: "Organism", v: meta.organism },
                  { k: "Offspring after", v: `${generations} generation(s)` },
                  { k: "Count", v: `${offspring}` },
                ]}
              />
            </>
          )}
          {!meta.asexual && (
            <>
              <Slider label="Menstrual cycle day" value={day} min={1} max={28} step={1} onChange={setDay} />
              <Readout rows={[{ k: "Day", v: `${day}` }, { k: "Phase", v: cyclePhase(day) }]} />
            </>
          )}
        </>
      }
    >
      <div className="p-3 sm:p-4">
        <svg viewBox="0 0 640 220" className="w-full">
          {steps.map((s, i) => (
            <g key={i} onClick={() => setStep(i)} className="cursor-pointer">
              <circle cx={70 + i * (560 / (steps.length - 1))} cy={70} r={30} fill={i === clampedStep ? "var(--color-primary)" : "var(--color-glass)"} fillOpacity={i === clampedStep ? 0.35 : 1} stroke={i === clampedStep ? "var(--color-primary)" : "var(--color-glass-border)"} strokeWidth={2} />
              <text x={70 + i * (560 / (steps.length - 1))} y={75} textAnchor="middle" fontSize={16} fill="var(--color-foreground)">{i + 1}</text>
            </g>
          ))}
          <rect x={20} y={120} width={600} height={80} rx={12} fill="var(--color-glass)" stroke="var(--color-glass-border)" />
          <text x={35} y={150} fontSize={12} fill="var(--color-foreground)" fontWeight={600}>Step {clampedStep + 1}: {meta.label}</text>
          <foreignObject x={35} y={158} width={570} height={50}>
            <p className="text-xs text-muted-foreground">{steps[clampedStep]}</p>
          </foreignObject>
        </svg>
        <div className="mt-2 flex items-center justify-center gap-3">
          <button onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={clampedStep === 0} className="rounded-full border border-glass-border bg-glass px-3 py-1 text-xs disabled:opacity-30">
            ← Prev
          </button>
          <span className="text-xs text-muted-foreground">Step {clampedStep + 1} / {steps.length}</span>
          <button onClick={() => setStep((s) => Math.min(steps.length - 1, s + 1))} disabled={clampedStep === steps.length - 1} className="rounded-full border border-glass-border bg-glass px-3 py-1 text-xs disabled:opacity-30">
            Next →
          </button>
        </div>

        {mode === "sexual" && <FlowerSequence />}
      </div>
    </LabShell>
  );
}

function FlowerSequence() {
  return (
    <div className="mt-4 rounded-2xl border border-glass-border bg-glass p-3">
      <p className="mb-2 text-xs font-medium text-foreground">Pollination → Fertilisation → Seed</p>
      <svg viewBox="0 0 640 120" className="w-full">
        <circle cx={80} cy={60} r={40} fill="oklch(0.75 0.15 340)" fillOpacity={0.5} />
        <text x={80} y={110} textAnchor="middle" fontSize={10} fill="var(--color-muted-foreground)">Flower (pollination)</text>
        <path d="M 130 60 H 240" stroke="var(--color-muted-foreground)" strokeWidth={2} markerEnd="url(#a1)" />
        <circle cx={320} cy={60} r={40} fill="oklch(0.70 0.15 145)" fillOpacity={0.5} />
        <text x={320} y={110} textAnchor="middle" fontSize={10} fill="var(--color-muted-foreground)">Pollen tube → fertilisation</text>
        <path d="M 370 60 H 480" stroke="var(--color-muted-foreground)" strokeWidth={2} markerEnd="url(#a1)" />
        <circle cx={560} cy={60} r={40} fill="oklch(0.65 0.12 80)" fillOpacity={0.6} />
        <text x={560} y={110} textAnchor="middle" fontSize={10} fill="var(--color-muted-foreground)">Seed & fruit form</text>
        <defs>
          <marker id="a1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 z" fill="var(--color-muted-foreground)" />
          </marker>
        </defs>
      </svg>
    </div>
  );
}
