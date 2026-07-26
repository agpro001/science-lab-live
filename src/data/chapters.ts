import { physicsChapters } from "./chapters-physics";
import { chemistryChapters } from "./chapters-chemistry";
import { biologyChapters } from "./chapters-biology";
import type { Chapter, Subject } from "./types";

export const allChapters: Chapter[] = [
  ...chemistryChapters,
  ...biologyChapters,
  ...physicsChapters,
].sort((a, b) => a.number - b.number);

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
