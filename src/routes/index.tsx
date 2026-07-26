import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { allChapters, subjectClass, subjectLabel } from "@/data/chapters";
import type { Subject } from "@/data/types";

export const Route = createFileRoute("/")({
  head: () => {
    const title = "CBSE Class 10 Science Live Lab — Interactive Simulators";
    const description =
      "Learn all 13 CBSE Class 10 Science chapters with live physics, chemistry and biology simulators, ray diagrams solved in real time, step-by-step numericals, board answers and quizzes.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: Index,
});

const FILTERS: { id: Subject | "all"; label: string }[] = [
  { id: "all", label: "All chapters" },
  { id: "physics", label: "Physics" },
  { id: "chemistry", label: "Chemistry" },
  { id: "biology", label: "Biology" },
];

function Index() {
  const [filter, setFilter] = useState<Subject | "all">("all");
  const [q, setQ] = useState("");

  const chapters = useMemo(
    () =>
      allChapters.filter(
        (c) =>
          (filter === "all" || c.subject === filter) &&
          (q.trim() === "" || `${c.title} ${c.tagline} ${c.moduleTitle}`.toLowerCase().includes(q.toLowerCase())),
      ),
    [filter, q],
  );

  return (
    <main className="mx-auto w-full max-w-6xl px-4 pb-24 pt-10 sm:px-6">
      <section className="relative overflow-hidden rounded-[2rem] glass-strong p-6 sm:p-12">
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/30 blur-3xl animate-float-slow" />
        <div className="pointer-events-none absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-accent/20 blur-3xl animate-float-slow" />
        <p className="relative text-xs uppercase tracking-[0.3em] text-accent">CBSE Class 10 · Science</p>
        <h1 className="relative mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.05] sm:text-6xl">
          The <span className="text-gradient">Live Lab</span> where every diagram is solved, not drawn.
        </h1>
        <p className="relative mt-4 max-w-2xl text-sm text-muted-foreground sm:text-lg">
          Thirteen chapters. Real simulators built from the actual equations — mirrors and lenses, circuits, pH, balanced reactions,
          Punnett squares — plus labelled diagram trainers, step-by-step numericals, board answers and quizzes.
        </p>
        <div className="relative mt-7 flex flex-wrap gap-3">
          <Link
            to="/chapters/$slug"
            params={{ slug: "light-reflection-and-refraction" }}
            className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            Open the Optical Bench
          </Link>
          <Link
            to="/chapters/$slug"
            params={{ slug: "electricity" }}
            className="rounded-full border border-glass-border bg-glass px-6 py-3 text-sm font-medium transition hover:border-primary/60"
          >
            Try the Circuit Lab
          </Link>
        </div>
        <dl className="relative mt-9 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { k: "Chapters", v: `${allChapters.length}` },
            { k: "Live modules", v: `${allChapters.length}` },
            { k: "Solved numericals", v: `${allChapters.reduce((n, c) => n + c.numericals.length, 0)}` },
            { k: "Quiz questions", v: `${allChapters.reduce((n, c) => n + c.quiz.length, 0)}` },
          ].map((s) => (
            <div key={s.k} className="rounded-2xl border border-glass-border bg-glass px-4 py-3">
              <dt className="text-xs text-muted-foreground">{s.k}</dt>
              <dd className="font-display text-2xl font-semibold">{s.v}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-10">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`rounded-full border px-4 py-2 text-xs transition ${
                  filter === f.id ? "border-primary bg-primary/20" : "border-glass-border bg-glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search chapters…"
            className="w-full rounded-full border border-glass-border bg-glass px-4 py-2 text-sm outline-none focus:border-primary sm:w-64"
          />
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {chapters.map((c) => (
            <Link
              key={c.slug}
              to="/chapters/$slug"
              params={{ slug: c.slug }}
              className="glass lift group flex flex-col rounded-3xl p-5"
            >
              <div className="flex items-center justify-between">
                <span className={`text-xs uppercase tracking-[0.2em] ${subjectClass[c.subject]}`}>{subjectLabel[c.subject]}</span>
                <span className="rounded-full border border-glass-border px-2.5 py-1 text-[11px] text-muted-foreground">Ch {c.number}</span>
              </div>
              <h2 className="mt-3 font-display text-lg font-semibold leading-snug">{c.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{c.tagline}</p>
              <p className="mt-4 rounded-2xl border border-glass-border bg-glass px-3 py-2 text-xs text-foreground/80">
                Live module · {c.moduleTitle}
              </p>
              <span className="mt-4 text-xs text-accent transition group-hover:translate-x-1">Enter the lab →</span>
            </Link>
          ))}
        </div>
        {chapters.length === 0 && <p className="mt-8 text-sm text-muted-foreground">No chapter matches that search.</p>}
      </section>
    </main>
  );
}
