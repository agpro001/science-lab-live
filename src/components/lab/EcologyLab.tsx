import { useMemo, useState } from "react";
import { Choice, LabShell, Readout, Slider } from "./controls";

type Ecosystem = "grassland" | "pond" | "forest";

const CHAINS: Record<Ecosystem, string[]> = {
  grassland: ["Grass", "Grasshopper", "Frog", "Snake", "Eagle"],
  pond: ["Algae", "Zooplankton", "Small fish", "Big fish", "Heron"],
  forest: ["Leaves", "Caterpillar", "Small bird", "Hawk", "Decomposers"],
};

const LEVEL_NAMES = ["Producer", "Primary consumer", "Secondary consumer", "Tertiary consumer", "Quaternary consumer"];

const BIODEGRADABLE = ["Banana peel", "Paper", "Cotton cloth", "Wood", "Vegetable waste"];
const NON_BIODEGRADABLE = ["Plastic bag", "DDT/pesticide", "Glass bottle", "Aluminium can", "Styrofoam"];

export function EcologyLab() {
  const [ecosystem, setEcosystem] = useState<Ecosystem>("grassland");
  const [length, setLength] = useState(4);
  const [producerEnergy, setProducerEnergy] = useState(10000);
  const [removedLevel, setRemovedLevel] = useState<number | null>(null);

  const chain = CHAINS[ecosystem].slice(0, length);
  const energies = useMemo(() => chain.map((_, i) => producerEnergy * Math.pow(0.1, i)), [chain, producerEnergy]);
  const pollutant = useMemo(() => chain.map((_, i) => Math.pow(4, i)), [chain]);

  const maxEnergy = energies[0];

  return (
    <LabShell
      title="Ecology Lab — Food Chains, Energy Flow & Pollution"
      blurb="Build a food chain, watch the 10% energy law shrink the pyramid, and see pollutants biomagnify up the chain."
      readout={
        <>
          <Choice
            value={ecosystem}
            onChange={setEcosystem}
            options={[
              { id: "grassland", label: "Grassland" },
              { id: "pond", label: "Pond" },
              { id: "forest", label: "Forest" },
            ]}
          />
          <Slider label="Chain length" value={length} min={3} max={5} step={1} onChange={setLength} />
          <Slider label="Producer energy" value={producerEnergy} min={1000} max={100000} step={1000} unit="kcal" onChange={setProducerEnergy} />
          <button
            onClick={() => setRemovedLevel((v) => (v === null ? 1 : null))}
            className={`w-full rounded-full border px-3 py-2 text-xs ${removedLevel !== null ? "border-warning bg-warning/20" : "border-glass-border bg-glass"}`}
          >
            {removedLevel !== null ? "Restore removed level" : "Remove level 2 (primary consumer)"}
          </button>
          <Readout
            rows={chain.map((org, i) => ({
              k: `${LEVEL_NAMES[i]} (${org})`,
              v: `${energies[i].toFixed(1)} kcal · pollutant ×${pollutant[i]}`,
            }))}
          />
        </>
      }
    >
      <div className="grid gap-4 p-3 sm:p-4 md:grid-cols-2">
        <div>
          <p className="mb-2 text-xs font-medium text-foreground">Food chain ({ecosystem})</p>
          <svg viewBox="0 0 640 100" className="w-full">
            {chain.map((org, i) => (
              <g key={org} opacity={removedLevel === 1 && i === 1 ? 0.2 : 1}>
                <rect x={10 + i * (620 / chain.length)} y={30} width={620 / chain.length - 20} height={40} rx={8} fill="var(--color-glass)" stroke="var(--color-glass-border)" />
                <text x={10 + i * (620 / chain.length) + (620 / chain.length - 20) / 2} y={54} textAnchor="middle" fontSize={11} fill="var(--color-foreground)">{org}</text>
                {i < chain.length - 1 && <path d={`M ${10 + i * (620 / chain.length) + 620 / chain.length - 20} 50 L ${10 + (i + 1) * (620 / chain.length)} 50`} stroke="var(--color-muted-foreground)" strokeWidth={2} markerEnd="url(#e1)" />}
              </g>
            ))}
            <defs>
              <marker id="e1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 z" fill="var(--color-muted-foreground)" />
              </marker>
            </defs>
          </svg>
          {removedLevel !== null && (
            <p className="mt-2 text-xs text-warning">
              Removing {chain[1]} lets {chain[0]} population explode (no grazer) while {chain[2] ?? "the next consumer"} starves — the chain destabilises.
            </p>
          )}
        </div>

        <div>
          <p className="mb-2 text-xs font-medium text-foreground">Energy pyramid (10% law)</p>
          <svg viewBox="0 0 400 200" className="w-full">
            {chain.map((org, i) => {
              const w = Math.max(20, (energies[i] / maxEnergy) * 360);
              const h = 200 / chain.length;
              return (
                <g key={org}>
                  <rect x={(400 - w) / 2} y={i * h} width={w} height={h - 4} fill="var(--color-primary)" fillOpacity={0.25 + i * 0.12} stroke="var(--color-primary)" />
                  <text x={200} y={i * h + h / 2} textAnchor="middle" fontSize={10} fill="var(--color-foreground)">
                    {org}: {energies[i].toFixed(0)} kcal
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      <div className="border-t border-glass-border p-3 sm:p-4">
        <BiodegradableSort />
      </div>
    </LabShell>
  );
}

function BiodegradableSort() {
  const items = useMemo(() => [...BIODEGRADABLE, ...NON_BIODEGRADABLE].sort(() => 0.5 - Math.random()), []);
  const [answers, setAnswers] = useState<Record<string, "biodegradable" | "non-biodegradable" | undefined>>({});

  const check = (item: string, guess: "biodegradable" | "non-biodegradable") => {
    setAnswers((a) => ({ ...a, [item]: guess }));
  };
  const isCorrect = (item: string, guess: string) => (BIODEGRADABLE.includes(item) ? guess === "biodegradable" : guess === "non-biodegradable");

  return (
    <div>
      <p className="mb-2 text-xs font-medium text-foreground">Sort: biodegradable vs non-biodegradable</p>
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => {
          const guess = answers[item];
          return (
            <div key={item} className="rounded-xl border border-glass-border bg-glass p-2">
              <p className="text-xs text-foreground">{item}</p>
              <div className="mt-1 flex gap-1">
                <button onClick={() => check(item, "biodegradable")} className="rounded-full border border-glass-border px-2 py-0.5 text-[10px] text-muted-foreground hover:text-foreground">
                  Biodegradable
                </button>
                <button onClick={() => check(item, "non-biodegradable")} className="rounded-full border border-glass-border px-2 py-0.5 text-[10px] text-muted-foreground hover:text-foreground">
                  Non-biodegradable
                </button>
              </div>
              {guess && (
                <p className={`mt-1 text-[10px] ${isCorrect(item, guess) ? "text-success" : "text-danger"}`}>
                  {isCorrect(item, guess) ? "Correct!" : `Incorrect — it's ${BIODEGRADABLE.includes(item) ? "biodegradable" : "non-biodegradable"}`}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
