import { useState } from "react";
import { LabShell } from "./controls";

type Puzzle = {
  id: string;
  label: string;
  left: { formula: string; correct: number }[];
  right: { formula: string; correct: number }[];
  type: string;
  note: string;
};

const PUZZLES: Puzzle[] = [
  {
    id: "fe-steam",
    label: "Iron + steam",
    left: [{ formula: "Fe", correct: 3 }, { formula: "H₂O", correct: 4 }],
    right: [{ formula: "Fe₃O₄", correct: 1 }, { formula: "H₂", correct: 4 }],
    type: "Displacement (redox)",
    note: "Iron displaces hydrogen from steam to give iron(II,III) oxide.",
  },
  {
    id: "combustion",
    label: "Burning of methane",
    left: [{ formula: "CH₄", correct: 1 }, { formula: "O₂", correct: 2 }],
    right: [{ formula: "CO₂", correct: 1 }, { formula: "H₂O", correct: 2 }],
    type: "Combustion (oxidation)",
    note: "A saturated hydrocarbon burns in air with a clean blue flame.",
  },
  {
    id: "pbno3",
    label: "Lead nitrate + potassium iodide",
    left: [{ formula: "Pb(NO₃)₂", correct: 1 }, { formula: "KI", correct: 2 }],
    right: [{ formula: "PbI₂", correct: 1 }, { formula: "KNO₃", correct: 2 }],
    type: "Double displacement (precipitation)",
    note: "Yellow precipitate of lead iodide forms.",
  },
  {
    id: "aluminium",
    label: "Aluminium + copper chloride",
    left: [{ formula: "Al", correct: 2 }, { formula: "CuCl₂", correct: 3 }],
    right: [{ formula: "AlCl₃", correct: 2 }, { formula: "Cu", correct: 3 }],
    type: "Displacement",
    note: "More reactive aluminium displaces copper from its salt solution.",
  },
  {
    id: "decomp",
    label: "Decomposition of lead nitrate",
    left: [{ formula: "Pb(NO₃)₂", correct: 2 }],
    right: [{ formula: "PbO", correct: 2 }, { formula: "NO₂", correct: 4 }, { formula: "O₂", correct: 1 }],
    type: "Thermal decomposition",
    note: "Brown fumes of nitrogen dioxide are released on heating.",
  },
];

export function EquationBalancer() {
  const [pi, setPi] = useState(0);
  const p = PUZZLES[pi];
  const [coef, setCoef] = useState<number[]>(() => p.left.concat(p.right).map(() => 1));
  const species = p.left.concat(p.right);
  const balanced = species.every((s, k) => coef[k] === s.correct);

  function pick(next: number) {
    setPi(next);
    const np = PUZZLES[next];
    setCoef(np.left.concat(np.right).map(() => 1));
  }

  const term = (idx: number, formula: string) => (
    <span key={`${p.id}-${idx}`} className="inline-flex items-center gap-1">
      <input
        type="number"
        min={1}
        max={9}
        value={coef[idx]}
        onChange={(e) => setCoef((c) => c.map((v, k) => (k === idx ? Math.max(1, Math.min(9, Number(e.target.value) || 1)) : v)))}
        className={`w-12 rounded-lg border bg-glass px-2 py-1 text-center font-mono text-sm outline-none ${
          coef[idx] === species[idx].correct ? "border-success" : "border-glass-border"
        }`}
      />
      <span className="font-mono text-base">{formula}</span>
    </span>
  );

  return (
    <LabShell
      title="Equation Balancer"
      blurb="Set the coefficients so atoms on both sides match. The reaction only 'runs' when the equation is balanced."
      readout={
        <>
          <div className="flex flex-wrap gap-2">
            {PUZZLES.map((q, k) => (
              <button
                key={q.id}
                onClick={() => pick(k)}
                className={`rounded-full border px-3 py-1.5 text-xs transition ${
                  k === pi ? "border-primary bg-primary/20" : "border-glass-border bg-glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {q.label}
              </button>
            ))}
          </div>
          <div className="rounded-2xl border border-glass-border bg-glass p-4 text-sm">
            <p className="text-muted-foreground">Reaction type</p>
            <p className="mt-1 font-medium">{p.type}</p>
            <p className="mt-2 text-muted-foreground">{p.note}</p>
          </div>
          <button
            onClick={() => setCoef(species.map((s) => s.correct))}
            className="w-full rounded-2xl border border-glass-border bg-glass px-4 py-2 text-xs text-muted-foreground hover:text-foreground"
          >
            Show balanced equation
          </button>
        </>
      }
    >
      <div className="p-4">
        <div className="flex flex-wrap items-center gap-3 text-foreground">
          {p.left.map((s, k) => (
            <span key={s.formula} className="flex items-center gap-3">
              {k > 0 && <span className="text-muted-foreground">+</span>}
              {term(k, s.formula)}
            </span>
          ))}
          <span className={`px-2 text-xl ${balanced ? "text-success" : "text-muted-foreground"}`}>→</span>
          {p.right.map((s, k) => (
            <span key={s.formula} className="flex items-center gap-3">
              {k > 0 && <span className="text-muted-foreground">+</span>}
              {term(p.left.length + k, s.formula)}
            </span>
          ))}
        </div>

        <div
          className={`mt-6 rounded-2xl border p-4 text-sm transition ${
            balanced ? "border-success bg-success/10" : "border-glass-border bg-glass"
          }`}
        >
          {balanced ? (
            <p>
              Balanced. Mass is conserved — the number of atoms of every element is the same on both sides, which is exactly what the law of conservation of mass demands.
            </p>
          ) : (
            <p className="text-muted-foreground">Not balanced yet — count each element on the left and the right and adjust the coefficients (never the subscripts).</p>
          )}
        </div>
      </div>
    </LabShell>
  );
}
