import { useMemo, useState } from "react";
import { Choice, LabShell, Readout, Slider } from "./controls";

type MetalKey = "K" | "Na" | "Ca" | "Mg" | "Al" | "Zn" | "Fe" | "Pb" | "Cu" | "Ag" | "Au";
type Reagent = "cold-water" | "hot-water" | "steam" | "hcl" | "oxygen" | "salt";

const METALS: { sym: MetalKey; name: string; rank: number; valence: number; waterThreshold: "cold" | "hot" | "steam" | "none"; hclSpeed: "violent" | "fast" | "moderate" | "slow" | "none"; salt: { q: number; anion: string } }[] = [
  { sym: "K", name: "Potassium", rank: 0, valence: 1, waterThreshold: "cold", hclSpeed: "violent", salt: { q: 1, anion: "Cl" } },
  { sym: "Na", name: "Sodium", rank: 1, valence: 1, waterThreshold: "cold", hclSpeed: "violent", salt: { q: 1, anion: "Cl" } },
  { sym: "Ca", name: "Calcium", rank: 2, valence: 2, waterThreshold: "cold", hclSpeed: "fast", salt: { q: 1, anion: "Cl" } },
  { sym: "Mg", name: "Magnesium", rank: 3, valence: 2, waterThreshold: "hot", hclSpeed: "fast", salt: { q: 2, anion: "SO4" } },
  { sym: "Al", name: "Aluminium", rank: 4, valence: 3, waterThreshold: "steam", hclSpeed: "moderate", salt: { q: 2, anion: "SO4" } },
  { sym: "Zn", name: "Zinc", rank: 5, valence: 2, waterThreshold: "steam", hclSpeed: "moderate", salt: { q: 2, anion: "SO4" } },
  { sym: "Fe", name: "Iron", rank: 6, valence: 2, waterThreshold: "steam", hclSpeed: "moderate", salt: { q: 2, anion: "SO4" } },
  { sym: "Pb", name: "Lead", rank: 7, valence: 2, waterThreshold: "none", hclSpeed: "slow", salt: { q: 1, anion: "NO3" } },
  { sym: "Cu", name: "Copper", rank: 8, valence: 2, waterThreshold: "none", hclSpeed: "none", salt: { q: 2, anion: "SO4" } },
  { sym: "Ag", name: "Silver", rank: 9, valence: 1, waterThreshold: "none", hclSpeed: "none", salt: { q: 1, anion: "NO3" } },
  { sym: "Au", name: "Gold", rank: 10, valence: 3, waterThreshold: "none", hclSpeed: "none", salt: { q: 1, anion: "Cl" } },
];

function metal(sym: MetalKey) {
  return METALS.find((m) => m.sym === sym)!;
}

function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}
function lcm(a: number, b: number) {
  return (a * b) / gcd(a, b);
}

function saltFormula(sym: string, q: number, anion: string, valence: number) {
  const g = gcd(valence, q);
  const m = q / g;
  const a = valence / g;
  const parens = anion.length > 2 && a > 1;
  const anionPart = parens ? `(${anion})${a}` : `${anion}${a > 1 ? a : ""}`;
  return `${sym}${m > 1 ? m : ""}${anionPart}`;
}

function displacementEquation(A: MetalKey, B: MetalKey) {
  const a = metal(A);
  const b = metal(B);
  const { q, anion } = b.salt;
  const gB = gcd(b.valence, q);
  const mB = q / gB;
  const aB = b.valence / gB;
  const gA = gcd(a.valence, q);
  const mA = q / gA;
  const aA = a.valence / gA;
  const t = lcm(aB, aA);
  let y = t / aB;
  let z = t / aA;
  let x = z * mA;
  let w = y * mB;
  const g = [x, y, z, w].reduce((acc, n) => gcd(acc, n));
  x /= g; y /= g; z /= g; w /= g;
  const fB = saltFormula(b.sym, q, anion, b.valence);
  const fA = saltFormula(a.sym, q, anion, a.valence);
  return `${x > 1 ? x : ""}${a.sym} + ${y > 1 ? y : ""}${fB} → ${z > 1 ? z : ""}${fA} + ${w > 1 ? w : ""}${b.sym}`;
}

function waterEquation(m: typeof METALS[number], stage: "cold" | "hot" | "steam") {
  const gV = gcd(m.valence, 2);
  const hSub = 2 / gV;
  const oxSub = m.valence / gV;
  if (stage === "steam" && m.waterThreshold === "steam") {
    // forms oxide directly
    return `${oxSub > 1 ? "2" : ""}${m.sym}${oxSub > 1 ? oxSub : ""} + ${hSub}H2O → ${m.sym}${oxSub > 1 ? oxSub : ""}O${hSub > 1 ? hSub : ""} + ${hSub}H2`;
  }
  const hydroxAnionCount = m.valence;
  return `${m.sym} + ${hydroxAnionCount}H2O → ${m.sym}(OH)${hydroxAnionCount > 1 ? hydroxAnionCount : ""} + ${hydroxAnionCount}H2`;
}

function hclEquation(m: typeof METALS[number]) {
  const cCount = m.valence;
  const metalCoeff = cCount === 3 ? 2 : 1;
  const hclCoeff = metalCoeff * cCount;
  const hCoeff = hclCoeff / 2;
  return `${metalCoeff > 1 ? metalCoeff : ""}${m.sym} + ${hclCoeff}HCl → ${metalCoeff > 1 ? metalCoeff : ""}${m.sym}Cl${cCount > 1 ? cCount : ""} + ${hCoeff}H2`;
}

function oxygenEquation(m: typeof METALS[number]) {
  const g = gcd(m.valence, 2);
  const mCoeff = 2 / g;
  const oCoeff = m.valence / g;
  return `${mCoeff > 1 ? mCoeff : ""}${m.sym} + O2 → ${mCoeff > 1 ? mCoeff : ""}${m.sym}${oCoeff > 1 ? "" : ""}O${oCoeff > 1 ? oCoeff : ""}`;
}

export function ReactivityLab() {
  const [metalSym, setMetalSym] = useState<MetalKey>("Zn");
  const [reagent, setReagent] = useState<Reagent>("hcl");
  const [saltTarget, setSaltTarget] = useState<MetalKey>("Cu");

  const m = metal(metalSym);

  const result = useMemo(() => {
    if (reagent === "salt") {
      const target = metal(saltTarget);
      if (target.sym === m.sym) return { reacts: false, equation: "—", observation: "Same metal — no displacement possible.", gas: false, deposit: false, colorChange: false };
      const reacts = m.rank < target.rank;
      if (!reacts) {
        return {
          reacts: false,
          equation: "No reaction",
          observation: `${m.name} is less reactive than ${target.name}, so it cannot displace ${target.name} from its salt solution.`,
          gas: false,
          deposit: false,
          colorChange: false,
        };
      }
      return {
        reacts: true,
        equation: displacementEquation(m.sym, target.sym),
        observation: `${m.name} displaces ${target.name} from solution — a reddish/grey deposit of ${target.name} forms on the ${m.name} surface and the solution fades in colour.`,
        gas: false,
        deposit: true,
        colorChange: true,
      };
    }
    if (reagent === "oxygen") {
      if (m.waterThreshold === "none" && (m.sym === "Ag" || m.sym === "Au")) {
        return { reacts: false, equation: "No reaction", observation: `${m.name} does not react with oxygen/air under normal conditions.`, gas: false, deposit: false, colorChange: false };
      }
      const vigor = m.rank <= 1 ? "bursts into flame spontaneously" : m.sym === "Mg" ? "burns with a dazzling white light" : "slowly forms a dull oxide coating";
      return { reacts: true, equation: oxygenEquation(m), observation: `${m.name} reacts with oxygen and ${vigor}.`, gas: false, deposit: false, colorChange: true };
    }
    if (reagent === "hcl") {
      if (m.hclSpeed === "none") return { reacts: false, equation: "No reaction", observation: `${m.name} lies below hydrogen in the reactivity series and cannot displace H⁺ from the acid.`, gas: false, deposit: false, colorChange: false };
      if (m.hclSpeed === "slow") return { reacts: false, equation: hclEquation(m), observation: `${m.name} reacts only negligibly — an insoluble ${m.sym}Cl2 layer coats the metal and stops further reaction.`, gas: false, deposit: false, colorChange: false };
      const vigor = m.hclSpeed === "violent" ? "explosively, often igniting the hydrogen gas" : m.hclSpeed === "fast" ? "vigorously" : "steadily";
      return { reacts: true, equation: hclEquation(m), observation: `Brisk effervescence — hydrogen gas bubbles off ${vigor} as the metal dissolves.`, gas: true, deposit: false, colorChange: false };
    }
    // water group
    const order = { cold: 0, hot: 1, steam: 2, none: 3 } as const;
    const stageOrder = { "cold-water": 0, "hot-water": 1, steam: 2 } as const;
    const need = order[m.waterThreshold];
    const have = stageOrder[reagent as "cold-water" | "hot-water" | "steam"];
    if (need > have) {
      return { reacts: false, equation: "No reaction", observation: `${m.name} needs more energetic conditions than ${reagent.replace("-", " ")} to react with water.`, gas: false, deposit: false, colorChange: false };
    }
    const stage = reagent === "cold-water" ? "cold" : reagent === "hot-water" ? "hot" : "steam";
    const vigor = m.rank <= 1 ? "violently, often catching fire" : m.sym === "Ca" ? "steadily" : "producing a steady stream of gas";
    return { reacts: true, equation: waterEquation(m, stage as "cold" | "hot" | "steam"), observation: `Reaction proceeds ${vigor}; hydrogen gas is released and the solution turns alkaline.`, gas: true, deposit: false, colorChange: true };
  }, [m, reagent, saltTarget]);

  const liquidColor = useMemo(() => {
    if (reagent === "salt") {
      const t = metal(saltTarget);
      if (result.reacts) return "oklch(0.7 0.05 200)"; // faded after displacement
      if (t.sym === "Cu") return "oklch(0.6 0.16 220)"; // blue CuSO4
      if (t.sym === "Fe") return "oklch(0.75 0.1 140)"; // pale green FeSO4
      return "oklch(0.7 0.05 200)";
    }
    return result.reacts ? "oklch(0.68 0.08 145)" : "oklch(0.75 0.02 230)";
  }, [reagent, saltTarget, result]);

  return (
    <LabShell
      title="Metal Reactivity Lab"
      blurb="Pick a metal and a reagent — outcomes, equations and observations come from the standard reactivity series (K Na Ca Mg Al Zn Fe Pb Cu Ag Au)."
      readout={
        <>
          <Choice value={metalSym} onChange={setMetalSym} options={METALS.map((x) => ({ id: x.sym, label: x.sym }))} />
          <Choice
            value={reagent}
            onChange={setReagent}
            options={[
              { id: "cold-water", label: "Cold water" },
              { id: "hot-water", label: "Hot water" },
              { id: "steam", label: "Steam" },
              { id: "hcl", label: "Dilute HCl" },
              { id: "oxygen", label: "Oxygen/air" },
              { id: "salt", label: "Metal salt solution" },
            ]}
          />
          {reagent === "salt" && (
            <Choice
              value={saltTarget}
              onChange={setSaltTarget}
              options={METALS.filter((x) => x.sym !== metalSym).map((x) => ({ id: x.sym, label: `${x.sym} salt` }))}
            />
          )}
          <Readout
            rows={[
              { k: "Metal", v: `${m.name} (${m.sym}), reactivity rank #${m.rank + 1}` },
              { k: "Reaction occurs?", v: result.reacts ? "Yes" : "No" },
              { k: "Equation", v: result.equation },
              { k: "Observation", v: result.observation },
            ]}
          />
        </>
      }
    >
      <svg viewBox="0 0 640 320" className="w-full">
        <path d="M 220 60 L 220 230 Q 220 260 250 260 L 390 260 Q 420 260 420 230 L 420 60" fill="none" stroke="var(--color-foreground)" strokeWidth={3} />
        <path d="M 224 150 L 224 228 Q 224 254 250 254 L 390 254 Q 416 254 416 228 L 416 150 Z" fill={liquidColor} fillOpacity={0.55} />
        <line x1={200} y1={60} x2={440} y2={60} stroke="var(--color-muted-foreground)" strokeWidth={2} />

        {/* metal strip */}
        <rect x={310} y={90} width={18} height={140} rx={3} fill="var(--color-chart-2)" stroke="var(--color-foreground)" strokeWidth={1.5} />
        <text x={280} y={80} fontSize={12} fill="var(--color-foreground)">{m.sym}</text>

        {/* deposit */}
        {result.deposit && (
          <>
            <circle cx={314} cy={170} r={6} fill="var(--color-warning)" opacity={0.8} />
            <circle cx={322} cy={190} r={5} fill="var(--color-warning)" opacity={0.7} />
            <circle cx={312} cy={210} r={4} fill="var(--color-warning)" opacity={0.6} />
            <text x={340} y={200} fontSize={11} fill="var(--color-muted-foreground)">deposit forming</text>
          </>
        )}

        {/* gas bubbles */}
        {result.gas && (
          <g fill="var(--color-accent)" opacity={0.75}>
            <circle cx={300} cy={200} r={4}><animate attributeName="cy" values="230;100" dur="1.6s" repeatCount="indefinite" /></circle>
            <circle cx={330} cy={220} r={3}><animate attributeName="cy" values="230;100" dur="1.2s" repeatCount="indefinite" /></circle>
            <circle cx={315} cy={210} r={5}><animate attributeName="cy" values="230;100" dur="2s" repeatCount="indefinite" /></circle>
          </g>
        )}

        {!result.reacts && (
          <text x={230} y={40} fontSize={12} fill="var(--color-muted-foreground)">No visible change</text>
        )}
        {result.reacts && (
          <text x={230} y={40} fontSize={12} fill="var(--color-success)">Reaction in progress</text>
        )}
      </svg>
    </LabShell>
  );
}
