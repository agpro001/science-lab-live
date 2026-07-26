import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { allChapters, getChapter, subjectClass, subjectLabel } from "@/data/chapters";
import { DiagramTrainer } from "@/components/DiagramTrainer";
import { QuizBlock } from "@/components/QuizBlock";
import { LiveLab } from "@/components/lab";
import type { Chapter, Numerical } from "@/data/types";

export const Route = createFileRoute("/chapters/$slug")({
  loader: ({ params }) => {
    const chapter = getChapter(params.slug);
    if (!chapter) throw notFound();
    return { chapter };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Chapter unavailable — Science Live Lab" }, { name: "robots", content: "noindex" }] };
    }
    const c = loaderData.chapter;
    const title = `${c.title} — Class 10 ${subjectLabel[c.subject]} Live Lab`;
    const description = `${c.tagline} Interactive simulator, ray/diagram trainer, solved numericals, board questions and a quiz for CBSE Class 10 ${subjectLabel[c.subject]}.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ChapterPage,
});

const TABS = ["lab", "theory", "diagrams", "numericals", "activities", "board", "quiz", "watch"] as const;
type Tab = (typeof TABS)[number];
const TAB_LABEL: Record<Tab, string> = {
  lab: "Live Lab",
  theory: "Theory",
  diagrams: "Diagrams",
  numericals: "Numericals",
  activities: "Activities",
  board: "Board Q&A",
  quiz: "Quiz",
  watch: "Video & Notes",
};

function NumericalCard({ n }: { n: Numerical }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="glass rounded-3xl p-5">
      <p className="font-medium leading-snug">{n.question}</p>
      <div className="mt-3 flex flex-wrap gap-2 text-xs text-muted-foreground">
        {n.given.map((g) => (
          <span key={g} className="rounded-full border border-glass-border bg-glass px-3 py-1 font-mono">{g}</span>
        ))}
      </div>
      <button
        onClick={() => setOpen((o) => !o)}
        className="mt-4 rounded-full bg-secondary px-4 py-2 text-xs font-medium transition hover:bg-secondary/70"
      >
        {open ? "Hide solution" : "Show step-by-step solution"}
      </button>
      {open && (
        <div className="mt-4 space-y-3 text-sm">
          <p className="font-mono text-accent">{n.formula}</p>
          <p className="font-mono text-muted-foreground">{n.substitution}</p>
          <ol className="space-y-1.5">
            {n.steps.map((s, k) => (
              <li key={k} className="flex gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/25 text-[11px]">{k + 1}</span>
                <span>{s}</span>
              </li>
            ))}
          </ol>
          <p className="rounded-2xl border border-success/50 bg-success/10 px-4 py-3 font-medium">Answer: {n.answer}</p>
          <p className="text-xs text-muted-foreground">Unit check: {n.unitCheck}</p>
          <p className="text-xs text-accent">Concept: {n.concept}</p>
          {n.alternative && <p className="text-xs text-muted-foreground">Alternative method: {n.alternative}</p>}
        </div>
      )}
    </div>
  );
}

function ChapterPage() {
  const { chapter } = Route.useLoaderData() as { chapter: Chapter };
  const [tab, setTab] = useState<Tab>("lab");
  const idx = allChapters.findIndex((c) => c.slug === chapter.slug);
  const prev = allChapters[idx - 1];
  const next = allChapters[idx + 1];

  return (
    <main className="mx-auto w-full max-w-6xl px-4 pb-24 pt-8 sm:px-6">
      <Link to="/" className="text-xs text-muted-foreground transition hover:text-foreground">
        ← All chapters
      </Link>

      <header className="mt-4">
        <p className={`text-xs uppercase tracking-[0.2em] ${subjectClass[chapter.subject]}`}>
          Chapter {chapter.number} · {subjectLabel[chapter.subject]}
        </p>
        <h1 className="mt-2 font-display text-3xl font-bold leading-tight sm:text-5xl">{chapter.title}</h1>
        <p className="mt-3 max-w-3xl text-sm text-muted-foreground sm:text-base">{chapter.intro}</p>
      </header>

      <div className="sticky top-0 z-20 -mx-4 mt-6 overflow-x-auto bg-background/70 px-4 py-3 backdrop-blur-xl sm:-mx-6 sm:px-6">
        <div className="flex gap-2">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`whitespace-nowrap rounded-full border px-4 py-2 text-xs transition ${
                tab === t ? "border-primary bg-primary/20 text-foreground" : "border-glass-border bg-glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {TAB_LABEL[t]}
            </button>
          ))}
        </div>
      </div>

      <section className="mt-6 space-y-6">
        {tab === "lab" && (
          <>
            <LiveLab chapter={chapter} />
            <div className="glass rounded-3xl p-5">
              <h2 className="font-display text-lg font-semibold">Formula sheet</h2>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {chapter.formulas.map((f) => (
                  <div key={f.name} className="rounded-2xl border border-glass-border bg-glass p-4">
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">{f.name}</p>
                    <p className="mt-1 font-mono text-accent">{f.expr}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{f.meaning}</p>
                    {f.note && <p className="mt-1 text-xs text-muted-foreground/80">{f.note}</p>}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {tab === "theory" && (
          <div className="space-y-4">
            {chapter.theory.map((t) => (
              <article key={t.id} className="glass rounded-3xl p-5">
                <h2 className="font-display text-lg font-semibold">{t.title}</h2>
                <p className="mt-2 text-sm">{t.simple}</p>
                {t.deeper && <p className="mt-2 text-sm text-muted-foreground">{t.deeper}</p>}
                {t.keywords && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {t.keywords.map((k) => (
                      <span key={k} className="rounded-full border border-glass-border bg-glass px-3 py-1 text-xs text-muted-foreground">{k}</span>
                    ))}
                  </div>
                )}
                {t.misconception && (
                  <p className="mt-3 rounded-2xl border border-warning/40 bg-warning/10 px-4 py-3 text-xs">
                    Common misconception: {t.misconception}
                  </p>
                )}
              </article>
            ))}
            {chapter.commonErrors.length > 0 && (
              <div className="glass rounded-3xl p-5">
                <h2 className="font-display text-lg font-semibold">Mistakes that cost marks</h2>
                <div className="mt-3 space-y-3">
                  {chapter.commonErrors.map((e) => (
                    <div key={e.wrong} className="grid gap-2 sm:grid-cols-2">
                      <p className="rounded-2xl border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm">✗ {e.wrong}</p>
                      <p className="rounded-2xl border border-success/40 bg-success/10 px-4 py-3 text-sm">✓ {e.right}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {tab === "diagrams" && (
          <div className="space-y-5">
            {chapter.diagrams.map((d) => (
              <DiagramTrainer key={d.id} spec={d} />
            ))}
          </div>
        )}

        {tab === "numericals" && (
          <div className="grid gap-4 lg:grid-cols-2">
            {chapter.numericals.length === 0 ? (
              <p className="text-sm text-muted-foreground">This chapter is theory-based — no numericals in the CBSE syllabus.</p>
            ) : (
              chapter.numericals.map((n) => <NumericalCard key={n.id} n={n} />)
            )}
          </div>
        )}

        {tab === "activities" && (
          <div className="space-y-5">
            {chapter.activities.map((a) => (
              <article key={a.id} className="glass rounded-3xl p-5">
                <h2 className="font-display text-lg font-semibold">{a.title}</h2>
                <p className="mt-2 text-sm"><span className="text-muted-foreground">Aim: </span>{a.aim}</p>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">Materials</p>
                    <ul className="mt-1 list-disc space-y-1 pl-5 text-sm">
                      {a.materials.map((m) => <li key={m}>{m}</li>)}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">Procedure</p>
                    <ol className="mt-1 list-decimal space-y-1 pl-5 text-sm">
                      {a.procedure.map((s) => <li key={s}>{s}</li>)}
                    </ol>
                  </div>
                </div>
                <p className="mt-4 text-sm"><span className="text-muted-foreground">Observation: </span>{a.observation}</p>
                <p className="mt-1 text-sm"><span className="text-muted-foreground">Explanation: </span>{a.explanation}</p>
                <p className="mt-1 text-sm"><span className="text-muted-foreground">Conclusion: </span>{a.conclusion}</p>
                <div className="mt-4">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Precautions</p>
                  <ul className="mt-1 list-disc space-y-1 pl-5 text-sm">
                    {a.precautions.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Viva questions</p>
                  {a.viva.map((v) => (
                    <div key={v.q} className="rounded-2xl border border-glass-border bg-glass px-4 py-3 text-sm">
                      <p className="font-medium">{v.q}</p>
                      <p className="mt-1 text-muted-foreground">{v.a}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        )}

        {tab === "board" && (
          <div className="space-y-4">
            {chapter.board.map((b) => (
              <article key={b.q} className="glass rounded-3xl p-5">
                <div className="flex items-start justify-between gap-4">
                  <p className="font-medium">{b.q}</p>
                  <span className="shrink-0 rounded-full bg-primary/20 px-3 py-1 text-xs">{b.marks} marks</span>
                </div>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                  {b.answer.map((a) => <li key={a}>{a}</li>)}
                </ul>
              </article>
            ))}
            <div className="glass rounded-3xl p-5">
              <h2 className="font-display text-lg font-semibold">Last-minute summary</h2>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
                {chapter.summary.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </div>
          </div>
        )}

        {tab === "quiz" && <QuizBlock questions={chapter.quiz} />}

        {tab === "watch" && (
          <div className="space-y-5">
            <div className="glass rounded-3xl p-4">
              <h2 className="font-display text-lg font-semibold">{chapter.videoTitle}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{chapter.videoDescription}</p>
              <div className="mt-4 aspect-video w-full overflow-hidden rounded-2xl border border-glass-border">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube-nocookie.com/embed/${chapter.videoId}`}
                  title={chapter.videoTitle}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
            <div className="glass rounded-3xl p-4">
              <h2 className="font-display text-lg font-semibold">{chapter.notesTitle}</h2>
              <div className="mt-4 h-[70vh] w-full overflow-hidden rounded-2xl border border-glass-border">
                <iframe
                  className="h-full w-full"
                  src={`https://drive.google.com/file/d/${chapter.notesFileId}/preview`}
                  title={chapter.notesTitle}
                  loading="lazy"
                  allow="autoplay"
                />
              </div>
              <a
                href={`https://drive.google.com/file/d/${chapter.notesFileId}/view`}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-xs text-accent underline-offset-4 hover:underline"
              >
                Open notes in Google Drive
              </a>
            </div>
          </div>
        )}
      </section>

      <nav className="mt-10 flex flex-wrap justify-between gap-3 text-sm">
        {prev ? (
          <Link to="/chapters/$slug" params={{ slug: prev.slug }} className="glass rounded-2xl px-4 py-3 lift">
            ← Ch {prev.number}: {prev.title}
          </Link>
        ) : <span />}
        {next && (
          <Link to="/chapters/$slug" params={{ slug: next.slug }} className="glass rounded-2xl px-4 py-3 lift">
            Ch {next.number}: {next.title} →
          </Link>
        )}
      </nav>
    </main>
  );
}
