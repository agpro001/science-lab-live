import { useState } from "react";
import type { QuizQuestion } from "@/data/types";

export function QuizBlock({ questions }: { questions: QuizQuestion[] }) {
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [typed, setTyped] = useState("");
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const q = questions[i];
  if (!q) return null;

  const correct = (v: string) => v.trim().toLowerCase() === q.answer.trim().toLowerCase();

  function submit(v: string) {
    if (answered) return;
    setPicked(v);
    setAnswered(true);
    if (correct(v)) setScore((s) => s + 1);
  }

  return (
    <div className="glass-strong rounded-3xl p-5 sm:p-7">
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>
          Question {i + 1} of {questions.length}
        </span>
        <span>Score {score}</span>
      </div>
      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
        <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${((i + 1) / questions.length) * 100}%` }} />
      </div>

      <p className="mt-4 font-display text-lg leading-snug">{q.q}</p>

      {q.options ? (
        <div className="mt-4 grid gap-2">
          {q.options.map((o) => {
            const state = !answered ? "idle" : correct(o) ? "right" : picked === o ? "wrong" : "idle";
            return (
              <button
                key={o}
                onClick={() => submit(o)}
                className={`rounded-2xl border px-4 py-3 text-left text-sm transition ${
                  state === "right"
                    ? "border-success bg-success/15"
                    : state === "wrong"
                      ? "border-destructive bg-destructive/15"
                      : "border-glass-border bg-glass hover:border-primary/60"
                }`}
              >
                {o}
              </button>
            );
          })}
        </div>
      ) : (
        <div className="mt-4 flex gap-2">
          <input
            value={typed}
            onChange={(e) => setTyped(e.target.value)}
            placeholder="Type your answer"
            className="flex-1 rounded-2xl border border-glass-border bg-glass px-4 py-3 text-sm outline-none focus:border-primary"
          />
          <button onClick={() => submit(typed)} className="rounded-2xl bg-primary px-4 py-3 text-sm font-medium text-primary-foreground">
            Check
          </button>
        </div>
      )}

      {answered && (
        <div className="mt-4 rounded-2xl border border-glass-border bg-glass p-4 text-sm">
          <p className="font-medium">Answer: {q.answer}</p>
          <p className="mt-1 text-muted-foreground">{q.explain}</p>
          <p className="mt-2 text-xs uppercase tracking-wide text-accent">Concept: {q.concept}</p>
        </div>
      )}

      <div className="mt-4 flex justify-between">
        <button
          onClick={() => {
            setI(0);
            setScore(0);
            setAnswered(false);
            setPicked(null);
            setTyped("");
          }}
          className="text-xs text-muted-foreground underline-offset-4 hover:underline"
        >
          Restart
        </button>
        <button
          disabled={!answered || i === questions.length - 1}
          onClick={() => {
            setI((n) => n + 1);
            setAnswered(false);
            setPicked(null);
            setTyped("");
          }}
          className="rounded-full bg-secondary px-4 py-2 text-xs font-medium disabled:opacity-40"
        >
          Next question
        </button>
      </div>
    </div>
  );
}
