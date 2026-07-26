import { useMemo, useState } from "react";
import { Choice, LabShell, Readout, Slider } from "./controls";

type Family = "alkane" | "alkene" | "alkyne" | "alcohol" | "aldehyde" | "ketone" | "acid" | "haloalkane";

const ROOTS = ["meth", "eth", "prop", "but", "pent", "hex"];

const FAMILY_INFO: Record<Family, { label: string; suffix: string; minC: number; bondsInChain: 1 | 2 | 3; functional: string }> = {
  alkane: { label: "Alkane (CnH2n+2)", suffix: "ane", minC: 1, bondsInChain: 1, functional: "none" },
  alkene: { label: "Alkene (CnH2n)", suffix: "ene", minC: 2, bondsInChain: 2, functional: "C=C" },
  alkyne: { label: "Alkyne (CnH2n-2)", suffix: "yne", minC: 2, bondsInChain: 3, functional: "C≡C" },
  alcohol: { label: "Alcohol (CnH2n+1OH)", suffix: "an-1-ol", minC: 1, bondsInChain: 1, functional: "-OH" },
  aldehyde: { label: "Aldehyde (CnH2nO)", suffix: "anal", minC: 1, bondsInChain: 1, functional: "-CHO" },
  ketone: { label: "Ketone (CnH2nO)", suffix: "an-2-one", minC: 3, bondsInChain: 1, functional: "-CO-" },
  acid: { label: "Carboxylic acid (CnH2nO2)", suffix: "anoic acid", minC: 1, bondsInChain: 1, functional: "-COOH" },
  haloalkane: { label: "Halo-alkane (CnH2n+1X)", suffix: "ane (halo-)", minC: 1, bondsInChain: 1, functional: "-Cl" },
};

function formula(n: number, family: Family): { formula: string; molarMassApprox: number } {
  switch (family) {
    case "alkane": return { formula: `C${n}H${2 * n + 2}`, molarMassApprox: 12 * n + (2 * n + 2) };
    case "alkene": return { formula: `C${n}H${2 * n}`, molarMassApprox: 12 * n + 2 * n };
    case "alkyne": return { formula: `C${n}H${2 * n - 2}`, molarMassApprox: 12 * n + (2 * n - 2) };
    case "alcohol": return { formula: `C${n}H${2 * n + 1}OH`, molarMassApprox: 12 * n + (2 * n + 1) + 17 };
    case "aldehyde": return { formula: `C${n}H${2 * n}O`, molarMassApprox: 12 * n + 2 * n + 16 };
    case "ketone": return { formula: `C${n}H${2 * n}O`, molarMassApprox: 12 * n + 2 * n + 16 };
    case "acid": return { formula: `C${n}H${2 * n}O2`, molarMassApprox: 12 * n + 2 * n + 32 };
    case "haloalkane": return { formula: `C${n}H${2 * n + 1}Cl`, molarMassApprox: 12 * n + (2 * n + 1) + 35.5 };
  }
}

function iupacName(n: number, family: Family): string {
  const root = ROOTS[n - 1] ?? `C${n}-`;
  const info = FAMILY_INFO[family];
  if (family === "alcohol") return n === 1 ? "methanol" : `${root}an-1-ol`;
  if (family === "ketone") return `${root}an-2-one`;
  if (family === "acid") return `${root}anoic acid`;
  if (family === "aldehyde") return `${root}anal`;
  if (family === "haloalkane") return `chloro${root}ane`;
  return `${root}${info.suffix}`;
}

function invalidReason(n: number, family: Family): string | null {
  if (family === "alkene" && n < 2) return "Alkenes need at least 2 carbons to form a C=C double bond.";
  if (family === "alkyne" && n < 2) return "Alkynes need at least 2 carbons to form a C≡C triple bond.";
  if (family === "ketone" && n < 3) return "Ketones need at least 3 carbons (the C=O must be on an internal carbon).";
  return null;
}

export function CarbonBuilder() {
  const [n, setN] = useState(3);
  const [family, setFamily] = useState<Family>("alkane");

  const invalid = invalidReason(n, family);
  const { formula: molFormula, molarMassApprox } = formula(n, family);
  const name = iupacName(n, family);

  const totalBonds = useMemo(() => {
    // C-C sigma bonds in chain + any extra pi bonds for multiple bonds + C-H/heteroatom bonds
    const cc = n - 1;
    const extraPi = family === "alkene" ? 1 : family === "alkyne" ? 2 : 0;
    let hCount = 0;
    if (family === "alkane") hCount = 2 * n + 2;
    else if (family === "alkene") hCount = 2 * n;
    else if (family === "alkyne") hCount = 2 * n - 2;
    else if (family === "alcohol") hCount = 2 * n + 1 + 1;
    else if (family === "aldehyde") hCount = 2 * n;
    else if (family === "ketone") hCount = 2 * n;
    else if (family === "acid") hCount = 2 * n;
    else hCount = 2 * n + 1;
    return { cSigma: cc, piBonds: extraPi, hBonds: hCount, total: cc + extraPi + hCount };
  }, [n, family]);

  const homologDiff = "Each next member differs by CH2 (14 u) — the homologous series difference.";

  // SVG structural diagram: chain of carbons with bonds
  const W = 640;
  const H = 240;
  const spacing = Math.min(90, (W - 120) / Math.max(n - 1, 1));
  const startX = W / 2 - (spacing * (n - 1)) / 2;
  const y = 130;
  const positions = Array.from({ length: n }).map((_, i) => startX + i * spacing);

  const doubleBondAt = family === "alkene" ? 0 : -1; // between C1-C2
  const tripleBondAt = family === "alkyne" ? 0 : -1;

  return (
    <LabShell
      title="Carbon Compound Builder"
      blurb="Choose a chain length and homologous series — IUPAC name, molecular formula and structure are derived from the general formula rules."
      readout={
        <>
          <Slider label="Number of carbon atoms (n)" value={n} min={1} max={6} onChange={setN} />
          <Choice
            value={family}
            onChange={setFamily}
            options={(Object.keys(FAMILY_INFO) as Family[]).map((f) => ({ id: f, label: FAMILY_INFO[f].label }))}
          />
          {invalid ? (
            <div className="rounded-2xl border border-glass-border bg-glass p-4 text-sm text-warning">{invalid}</div>
          ) : (
            <Readout
              rows={[
                { k: "IUPAC name", v: name },
                { k: "Molecular formula", v: molFormula },
                { k: "Approx. molar mass", v: `${molarMassApprox.toFixed(1)} u` },
                { k: "Functional group", v: FAMILY_INFO[family].functional },
                { k: "C–C σ bonds", v: `${totalBonds.cSigma}` },
                { k: "Extra π bonds", v: `${totalBonds.piBonds}` },
                { k: "C–H / heteroatom bonds", v: `${totalBonds.hBonds}` },
                { k: "Total bonds", v: `${totalBonds.total}` },
                { k: "Homologous series rule", v: homologDiff },
              ]}
            />
          )}
        </>
      }
    >
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full">
        {!invalid && (
          <>
            {positions.slice(0, -1).map((x, i) => {
              const isDouble = i === doubleBondAt;
              const isTriple = i === tripleBondAt;
              const x2 = positions[i + 1];
              if (isTriple) {
                return (
                  <g key={i} stroke="var(--color-foreground)" strokeWidth={2}>
                    <line x1={x} y1={y - 6} x2={x2} y2={y - 6} />
                    <line x1={x} y1={y} x2={x2} y2={y} />
                    <line x1={x} y1={y + 6} x2={x2} y2={y + 6} />
                  </g>
                );
              }
              if (isDouble) {
                return (
                  <g key={i} stroke="var(--color-foreground)" strokeWidth={2}>
                    <line x1={x} y1={y - 4} x2={x2} y2={y - 4} />
                    <line x1={x} y1={y + 4} x2={x2} y2={y + 4} />
                  </g>
                );
              }
              return <line key={i} x1={x} y1={y} x2={x2} y2={y} stroke="var(--color-foreground)" strokeWidth={2} />;
            })}
            {positions.map((x, i) => (
              <g key={i}>
                <circle cx={x} cy={y} r={16} fill="var(--color-primary)" fillOpacity={0.25} stroke="var(--color-foreground)" strokeWidth={2} />
                <text x={x - 6} y={y + 5} fontSize={13} fill="var(--color-foreground)">C</text>
              </g>
            ))}
            {/* functional group markers on last carbon (or C2 for ketone) */}
            {family === "alcohol" && (
              <text x={positions[n - 1] - 10} y={y - 30} fontSize={13} fill="var(--color-accent)">OH</text>
            )}
            {family === "aldehyde" && (
              <text x={positions[n - 1] - 14} y={y - 30} fontSize={13} fill="var(--color-accent)">CHO</text>
            )}
            {family === "ketone" && (
              <text x={positions[1] - 10} y={y - 30} fontSize={13} fill="var(--color-accent)">=O</text>
            )}
            {family === "acid" && (
              <text x={positions[n - 1] - 18} y={y - 30} fontSize={13} fill="var(--color-accent)">COOH</text>
            )}
            {family === "haloalkane" && (
              <text x={positions[0] - 10} y={y - 30} fontSize={13} fill="var(--color-accent)">Cl</text>
            )}
            <text x={20} y={H - 20} fontSize={12} fill="var(--color-muted-foreground)">
              {name} — {molFormula}
            </text>
          </>
        )}
        {invalid && (
          <text x={40} y={H / 2} fontSize={14} fill="var(--color-warning)">
            Invalid combination — adjust the carbon count.
          </text>
        )}
      </svg>
    </LabShell>
  );
}
