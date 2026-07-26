import { useMemo, useState } from "react";
import { Choice, LabShell, Readout, Slider } from "./controls";

type System = "digestion" | "respiration" | "transport" | "excretion";

const DIGESTION_STEPS = [
  { organ: "Mouth", enzyme: "Salivary amylase", ph: "6.8 (neutral/slightly acidic)", reaction: "Starch → Maltose" },
  { organ: "Oesophagus", enzyme: "None (peristalsis only)", ph: "~7", reaction: "Bolus transported to stomach" },
  { organ: "Stomach", enzyme: "Pepsin (+ HCl), Rennin", ph: "1.5–2.5 (acidic)", reaction: "Proteins → Peptones" },
  { organ: "Small intestine", enzyme: "Trypsin, Lipase, Amylase, Maltase", ph: "7.5–8.5 (alkaline, bile + pancreatic juice)", reaction: "Peptones→Amino acids; Fats→Fatty acids+Glycerol; Starch→Glucose" },
  { organ: "Large intestine", enzyme: "None (bacterial action)", ph: "~7", reaction: "Water & salts absorbed; faeces formed" },
];

export function LifeProcessesLab() {
  const [system, setSystem] = useState<System>("digestion");

  return (
    <LabShell
      title="Life Processes Lab"
      blurb="Explore digestion, respiration, transport and excretion with step-by-step, computed physiology."
      readout={
        <>
          <Choice
            value={system}
            onChange={setSystem}
            options={[
              { id: "digestion", label: "Digestion" },
              { id: "respiration", label: "Respiration" },
              { id: "transport", label: "Transport" },
              { id: "excretion", label: "Excretion" },
            ]}
          />
          {system === "digestion" && <DigestionReadout />}
          {system === "respiration" && <RespirationReadout />}
          {system === "transport" && <TransportReadout />}
          {system === "excretion" && <ExcretionReadout />}
        </>
      }
    >
      <div className="p-3 sm:p-4">
        {system === "digestion" && <DigestionView />}
        {system === "respiration" && <RespirationView />}
        {system === "transport" && <TransportView />}
        {system === "excretion" && <ExcretionView />}
      </div>
    </LabShell>
  );
}

function useStepper(max: number) {
  const [step, setStep] = useState(0);
  return {
    step,
    setStep,
    next: () => setStep((s) => Math.min(max - 1, s + 1)),
    prev: () => setStep((s) => Math.max(0, s - 1)),
  };
}

function Stepper({ step, max, next, prev }: { step: number; max: number; next: () => void; prev: () => void }) {
  return (
    <div className="mt-3 flex items-center justify-center gap-3">
      <button onClick={prev} disabled={step === 0} className="rounded-full border border-glass-border bg-glass px-3 py-1 text-xs disabled:opacity-30">
        ← Prev
      </button>
      <span className="text-xs text-muted-foreground">
        Step {step + 1} / {max}
      </span>
      <button onClick={next} disabled={step === max - 1} className="rounded-full border border-glass-border bg-glass px-3 py-1 text-xs disabled:opacity-30">
        Next →
      </button>
    </div>
  );
}

function DigestionView() {
  const { step, setStep, next, prev } = useStepper(DIGESTION_STEPS.length);
  const s = DIGESTION_STEPS[step];
  return (
    <div>
      <svg viewBox="0 0 640 260" className="w-full">
        {DIGESTION_STEPS.map((d, i) => (
          <g key={d.organ} onClick={() => setStep(i)} className="cursor-pointer">
            <circle cx={70 + i * 125} cy={110} r={34} fill={i === step ? "var(--color-primary)" : "var(--color-glass)"} fillOpacity={i === step ? 0.35 : 1} stroke={i === step ? "var(--color-primary)" : "var(--color-glass-border)"} strokeWidth={2} />
            <text x={70 + i * 125} y={115} textAnchor="middle" fontSize={10} fill="var(--color-foreground)">{d.organ}</text>
            {i < DIGESTION_STEPS.length - 1 && <path d={`M ${104 + i * 125} 110 L ${141 + i * 125} 110`} stroke="var(--color-muted-foreground)" strokeWidth={2} markerEnd="url(#arrow)" />}
          </g>
        ))}
        <defs>
          <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 z" fill="var(--color-muted-foreground)" />
          </marker>
        </defs>
        <rect x={20} y={170} width={600} height={70} rx={12} fill="var(--color-glass)" stroke="var(--color-glass-border)" />
        <text x={35} y={192} fontSize={12} fill="var(--color-foreground)" fontWeight={600}>{s.organ}</text>
        <text x={35} y={210} fontSize={11} fill="var(--color-muted-foreground)">Enzyme: {s.enzyme} · pH: {s.ph}</text>
        <text x={35} y={228} fontSize={11} fill="var(--color-accent)">{s.reaction}</text>
      </svg>
      <Stepper step={step} max={DIGESTION_STEPS.length} next={next} prev={prev} />
    </div>
  );
}

function DigestionReadout() {
  return <Readout rows={DIGESTION_STEPS.map((d) => ({ k: d.organ, v: d.reaction }))} />;
}

function RespirationView() {
  const [type, setType] = useState<"aerobic" | "muscle" | "yeast">("aerobic");
  return (
    <div>
      <Choice
        value={type}
        onChange={setType}
        options={[
          { id: "aerobic", label: "Aerobic" },
          { id: "muscle", label: "Anaerobic (muscle)" },
          { id: "yeast", label: "Anaerobic (yeast)" },
        ]}
      />
      <svg viewBox="0 0 640 220" className="mt-3 w-full">
        <rect x={20} y={30} width={600} height={60} rx={12} fill="var(--color-glass)" stroke="var(--color-glass-border)" />
        <text x={320} y={65} textAnchor="middle" fontSize={13} fill="var(--color-foreground)" fontFamily="monospace">
          {type === "aerobic" ? "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + Energy (ATP)" : type === "muscle" ? "C₆H₁₂O₆ → 2C₃H₆O₃ (lactic acid) + Energy" : "C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂ + Energy"}
        </text>
        <g>
          {Array.from({ length: type === "aerobic" ? 38 : 2 }).map((_, i) => (
            <circle key={i} cx={40 + (i % 19) * 30} cy={140 + Math.floor(i / 19) * 30} r={9} fill="var(--color-accent)" fillOpacity={0.7}>
              <title>ATP</title>
            </circle>
          ))}
        </g>
        <text x={20} y={200} fontSize={12} fill="var(--color-muted-foreground)">ATP yield per glucose: {type === "aerobic" ? "~38 ATP" : "~2 ATP"}</text>
      </svg>
    </div>
  );
}

function RespirationReadout() {
  return (
    <Readout
      rows={[
        { k: "Aerobic site", v: "Mitochondria" },
        { k: "Aerobic yield", v: "~38 ATP" },
        { k: "Anaerobic (muscle)", v: "Lactic acid, ~2 ATP" },
        { k: "Anaerobic (yeast)", v: "Ethanol + CO₂, ~2 ATP" },
        { k: "Cramps caused by", v: "Lactic acid build-up" },
      ]}
    />
  );
}

const CHAMBERS = [
  { id: "ra", label: "Right atrium", x: 380, y: 70, blood: "deoxygenated" },
  { id: "rv", label: "Right ventricle", x: 380, y: 150, blood: "deoxygenated" },
  { id: "la", label: "Left atrium", x: 220, y: 70, blood: "oxygenated" },
  { id: "lv", label: "Left ventricle", x: 220, y: 150, blood: "oxygenated" },
];

function TransportView() {
  const [hr, setHr] = useState(72);
  const [sv, setSv] = useState(70);
  const co = (hr * sv) / 1000;
  return (
    <div>
      <svg viewBox="0 0 640 260" className="w-full">
        <text x={320} y={20} textAnchor="middle" fontSize={12} fill="var(--color-muted-foreground)">Double circulation: body → RA → RV → lungs → LA → LV → body</text>
        {CHAMBERS.map((c) => (
          <g key={c.id}>
            <rect x={c.x - 60} y={c.y - 30} width={120} height={60} rx={10} fill={c.blood === "oxygenated" ? "oklch(0.60 0.20 25)" : "oklch(0.55 0.18 265)"} fillOpacity={0.6} stroke="var(--color-glass-border)" />
            <text x={c.x} y={c.y - 4} textAnchor="middle" fontSize={11} fill="var(--color-foreground)">{c.label}</text>
            <text x={c.x} y={c.y + 14} textAnchor="middle" fontSize={9} fill="var(--color-background)">{c.blood}</text>
          </g>
        ))}
        <text x={70} y={40} fontSize={11} fill="var(--color-muted-foreground)">Lungs (O₂ uptake)</text>
        <text x={520} y={220} fontSize={11} fill="var(--color-muted-foreground)">Body tissues (O₂ used)</text>
        <path d="M 280 70 H 320" stroke="var(--color-muted-foreground)" strokeWidth={2} markerEnd="url(#arrow2)" />
        <path d="M 220 100 V 120" stroke="var(--color-muted-foreground)" strokeWidth={2} markerEnd="url(#arrow2)" />
        <path d="M 380 100 V 120" stroke="var(--color-muted-foreground)" strokeWidth={2} markerEnd="url(#arrow2)" />
        <defs>
          <marker id="arrow2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 z" fill="var(--color-muted-foreground)" />
          </marker>
        </defs>
      </svg>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        <Slider label="Heart rate" value={hr} min={40} max={180} step={1} unit="bpm" onChange={setHr} />
        <Slider label="Stroke volume" value={sv} min={30} max={120} step={1} unit="mL" onChange={setSv} />
      </div>
      <p className="mt-2 text-center text-sm text-muted-foreground">Cardiac output = HR × SV = {co.toFixed(1)} L/min</p>
    </div>
  );
}

function TransportReadout() {
  return (
    <Readout
      rows={[
        { k: "Right heart", v: "Pumps deoxygenated blood to lungs" },
        { k: "Left heart", v: "Pumps oxygenated blood to body" },
        { k: "Pulmonary circulation", v: "Heart ↔ Lungs" },
        { k: "Systemic circulation", v: "Heart ↔ Body" },
      ]}
    />
  );
}

function ExcretionView() {
  const [bp, setBp] = useState(100);
  const [reabs, setReabs] = useState(99);
  const filtrate = bp * 1.8;
  const urine = filtrate * (1 - reabs / 100);
  return (
    <div>
      <svg viewBox="0 0 640 220" className="w-full">
        <path d="M 60 110 C 100 40, 200 40, 240 110" stroke="var(--color-primary)" strokeWidth={4} fill="none" />
        <circle cx={60} cy={110} r={16} fill="var(--color-accent)" fillOpacity={0.7} />
        <text x={60} y={140} textAnchor="middle" fontSize={10} fill="var(--color-muted-foreground)">Glomerulus</text>
        <text x={150} y={40} textAnchor="middle" fontSize={10} fill="var(--color-muted-foreground)">Bowman's capsule → Tubule</text>
        <rect x={250} y={90} width={330} height={40} rx={8} fill="var(--color-glass)" stroke="var(--color-glass-border)" />
        <text x={415} y={115} textAnchor="middle" fontSize={11} fill="var(--color-foreground)">Selective reabsorption of water, glucose, salts</text>
        <path d="M 580 110 H 620" stroke="var(--color-muted-foreground)" strokeWidth={2} markerEnd="url(#arrow3)" />
        <text x={600} y={150} textAnchor="middle" fontSize={10} fill="var(--color-muted-foreground)">Urine</text>
        <defs>
          <marker id="arrow3" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 z" fill="var(--color-muted-foreground)" />
          </marker>
        </defs>
      </svg>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        <Slider label="Blood pressure factor" value={bp} min={50} max={150} step={5} unit="mL/min filtered basis" onChange={setBp} />
        <Slider label="% reabsorption" value={reabs} min={80} max={99.5} step={0.5} unit="%" onChange={setReabs} />
      </div>
      <p className="mt-2 text-center text-sm text-muted-foreground">
        Filtrate ≈ {filtrate.toFixed(0)} mL/min → Urine formed ≈ {urine.toFixed(2)} mL/min
      </p>
    </div>
  );
}

function ExcretionReadout() {
  return (
    <Readout
      rows={[
        { k: "Structural unit", v: "Nephron" },
        { k: "Filtration site", v: "Glomerulus (Bowman's capsule)" },
        { k: "Reabsorbed", v: "Glucose, amino acids, most water & salts" },
        { k: "Excreted", v: "Urea, excess salts, excess water" },
      ]}
    />
  );
}
