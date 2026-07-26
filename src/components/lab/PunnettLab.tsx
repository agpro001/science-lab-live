import { useMemo, useState } from "react";
import { Choice, LabShell, Readout } from "./controls";

type Geno = "TT" | "Tt" | "tt";

const alleles = (g: Geno) => g.split("");

export function PunnettLab() {
  const [p1, setP1] = useState<Geno>("Tt");
  const [p2, setP2] = useState<Geno>("Tt");
  const [trait, setTrait] = useState<"height" | "seed">("height");

  const labels = trait === "height" ? { dom: "Tall", rec: "Dwarf", letter: "T" } : { dom: "Round seed", rec: "Wrinkled seed", letter: "R" };

  const grid = useMemo(() => {
    const a = alleles(p1);
    const b = alleles(p2);
    return b.map((y) => a.map((x) => [x, y].sort((m, n) => (m === n ? 0 : m === m.toUpperCase() ? -1 : 1)).join("")));
  }, [p1, p2]);

  const flat = grid.flat();
  const counts = flat.reduce<Record<string, number>>((acc, g) => ({ ...acc, [g]: (acc[g] ?? 0) + 1 }), {});
  const dominant = flat.filter((g) => g.includes("T")).length;

  const opts: { id: Geno; label: string }[] = [
    { id: "TT", label: `${labels.letter}${labels.letter} (homozygous dominant)` },
    { id: "Tt", label: `${labels.letter}${labels.letter.toLowerCase()} (heterozygous)` },
    { id: "tt", label: `${labels.letter.toLowerCase()}${labels.letter.toLowerCase()} (homozygous recessive)` },
  ];

  const show = (g: string) => g.replace(/T/g, labels.letter).replace(/t/g, labels.letter.toLowerCase());

  return (
    <LabShell
      title="Punnett Square Lab — Monohybrid Cross"
      blurb="Pick the parent genotypes; the gametes, square, genotypic ratio and phenotypic ratio are generated live."
      readout={
        <>
          <Choice
            value={trait}
            onChange={setTrait}
            options={[
              { id: "height", label: "Tall vs dwarf" },
              { id: "seed", label: "Round vs wrinkled" },
            ]}
          />
          <p className="text-xs text-muted-foreground">Parent 1</p>
          <Choice value={p1} onChange={setP1} options={opts} />
          <p className="text-xs text-muted-foreground">Parent 2</p>
          <Choice value={p2} onChange={setP2} options={opts} />
          <Readout
            rows={[
              { k: "Cross", v: `${show(p1)} × ${show(p2)}` },
              ...Object.entries(counts).map(([g, n]) => ({ k: `${show(g)}`, v: `${n}/4` })),
              { k: "Phenotype", v: `${dominant}/4 ${labels.dom}, ${4 - dominant}/4 ${labels.rec}` },
              { k: "Phenotypic ratio", v: dominant === 4 ? "All dominant" : dominant === 0 ? "All recessive" : `${dominant} : ${4 - dominant}` },
            ]}
          />
        </>
      }
    >
      <div className="p-4">
        <div className="mx-auto grid max-w-sm grid-cols-3 gap-2 text-center text-sm">
          <div />
          {alleles(p1).map((a, k) => (
            <div key={`c${k}`} className="rounded-xl bg-primary/20 py-2 font-mono">{show(a)}</div>
          ))}
          {grid.map((row, r) => (
            <div key={`r${r}`} className="contents">
              <div className="rounded-xl bg-accent/20 py-2 font-mono">{show(alleles(p2)[r])}</div>
              {row.map((cell, c) => (
                <div
                  key={`${r}-${c}`}
                  className={`rounded-xl border py-4 font-mono ${cell.includes("T") ? "border-success/50 bg-success/10" : "border-warning/50 bg-warning/10"}`}
                >
                  {show(cell)}
                  <div className="mt-1 text-[10px] font-sans text-muted-foreground">{cell.includes("T") ? labels.dom : labels.rec}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <p className="mt-5 text-center text-sm text-muted-foreground">
          Each gamete carries only one allele (law of segregation); fertilisation is random, so each box is equally likely.
        </p>
      </div>
    </LabShell>
  );
}
