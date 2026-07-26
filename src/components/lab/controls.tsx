import type { ReactNode } from "react";

export function LabShell({ title, blurb, children, readout }: { title: string; blurb: string; children: ReactNode; readout?: ReactNode }) {
  return (
    <div className="glass-strong glow-ring rounded-3xl p-4 sm:p-6">
      <h3 className="font-display text-xl font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{blurb}</p>
      <div className="mt-5 grid gap-5 lg:grid-cols-[1.6fr_1fr]">
        <div className="rounded-2xl border border-glass-border bg-glass p-2">{children}</div>
        <div className="space-y-3">{readout}</div>
      </div>
    </div>
  );
}

export function Slider({
  label,
  value,
  min,
  max,
  step = 1,
  unit,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  unit?: string;
  onChange: (v: number) => void;
}) {
  return (
    <label className="block rounded-2xl border border-glass-border bg-glass px-4 py-3">
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>{label}</span>
        <span className="font-mono text-foreground">
          {value}
          {unit ? ` ${unit}` : ""}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-2 w-full accent-[var(--color-primary)]"
      />
    </label>
  );
}

export function Choice<T extends string>({ options, value, onChange }: { options: { id: T; label: string }[]; value: T; onChange: (v: T) => void }) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => (
        <button
          key={o.id}
          onClick={() => onChange(o.id)}
          className={`rounded-full border px-3 py-1.5 text-xs transition ${
            value === o.id ? "border-primary bg-primary/20 text-foreground" : "border-glass-border bg-glass text-muted-foreground hover:text-foreground"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

export function Readout({ rows }: { rows: { k: string; v: string }[] }) {
  return (
    <div className="rounded-2xl border border-glass-border bg-glass p-4">
      <dl className="space-y-2 text-sm">
        {rows.map((r) => (
          <div key={r.k} className="flex items-baseline justify-between gap-3">
            <dt className="text-muted-foreground">{r.k}</dt>
            <dd className="font-mono text-right">{r.v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
