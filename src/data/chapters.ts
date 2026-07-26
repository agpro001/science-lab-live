import { physicsChapters } from "./chapters-physics";
import { chemistryChapters } from "./chapters-chemistry";
import { biologyChapters } from "./chapters-biology";
import { extraPhysics } from "./extra-physics";
import { extraChemistry } from "./extra-chemistry";
import { extraBiology } from "./extra-biology";
import type { Chapter, Subject } from "./types";

const extras = { ...extraPhysics, ...extraChemistry, ...extraBiology };

function withExtras(chapter: Chapter): Chapter {
  const extra = extras[chapter.slug];
  if (!extra) return chapter;
  return {
    ...chapter,
    diagrams: [...chapter.diagrams, ...(extra.diagrams ?? [])],
    board: [...chapter.board, ...(extra.board ?? [])],
    quiz: [...chapter.quiz, ...(extra.quiz ?? [])],
  };
}

export const allChapters: Chapter[] = [...chemistryChapters, ...biologyChapters, ...physicsChapters]
  .map(withExtras)
  .sort((a, b) => a.number - b.number);

export function getChapter(slug: string): Chapter | undefined {
  return allChapters.find((c) => c.slug === slug);
}

export const subjectLabel: Record<Subject, string> = {
  physics: "Physics",
  chemistry: "Chemistry",
  biology: "Biology",
};

export const subjectClass: Record<Subject, string> = {
  physics: "text-physics",
  chemistry: "text-chemistry",
  biology: "text-biology",
};
