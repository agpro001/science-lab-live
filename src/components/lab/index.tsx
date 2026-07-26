import type { ComponentType } from "react";
import type { Chapter } from "@/data/types";
import { DiagramTrainer } from "@/components/DiagramTrainer";
import { CircuitLab } from "./CircuitLab";
import { EquationBalancer } from "./EquationBalancer";
import { OpticsLab } from "./OpticsLab";
import { PhLab } from "./PhLab";
import { PunnettLab } from "./PunnettLab";
import { EyeLab } from "./EyeLab";
import { MagnetismLab } from "./MagnetismLab";
import { ReactivityLab } from "./ReactivityLab";
import { CarbonBuilder } from "./CarbonBuilder";
import { LifeProcessesLab } from "./LifeProcessesLab";
import { ReflexLab } from "./ReflexLab";
import { ReproductionLab } from "./ReproductionLab";
import { EcologyLab } from "./EcologyLab";

const REGISTRY: Record<string, ComponentType> = {
  "optics-lab": OpticsLab,
  "circuit-lab": CircuitLab,
  "ph-lab": PhLab,
  "equation-balancer": EquationBalancer,
  "punnett-lab": PunnettLab,
  "eye-lab": EyeLab,
  "magnetism-lab": MagnetismLab,
  "reactivity-lab": ReactivityLab,
  "carbon-builder": CarbonBuilder,
  "life-processes-lab": LifeProcessesLab,
  "reflex-lab": ReflexLab,
  "reproduction-lab": ReproductionLab,
  "ecology-lab": EcologyLab,
};

export function LiveLab({ chapter }: { chapter: Chapter }) {
  const Mod = REGISTRY[chapter.moduleKey];
  if (Mod) return <Mod />;

  const spec = chapter.diagrams[0];
  return (
    <div className="glass-strong glow-ring rounded-3xl p-4 sm:p-6">
      <h3 className="font-display text-xl font-semibold">{chapter.moduleTitle}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{chapter.moduleBlurb}</p>
      <div className="mt-5">
        {spec ? (
          <DiagramTrainer spec={spec} />
        ) : (
          <p className="rounded-2xl border border-glass-border bg-glass p-6 text-sm text-muted-foreground">
            Interactive module for this chapter is being built — use the labelled diagrams and numerical solver below in the meantime.
          </p>
        )}
      </div>
    </div>
  );
}
