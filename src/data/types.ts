export type Subject = "physics" | "chemistry" | "biology";

export type Formula = {
  name: string;
  expr: string;
  meaning: string;
  note?: string;
};

export type TheorySection = {
  id: string;
  title: string;
  simple: string;
  deeper?: string;
  keywords?: string[];
  misconception?: string;
};

export type Activity = {
  id: string;
  title: string;
  aim: string;
  materials: string[];
  procedure: string[];
  observation: string;
  explanation: string;
  conclusion: string;
  precautions: string[];
  viva: { q: string; a: string }[];
};

export type Numerical = {
  id: string;
  question: string;
  given: string[];
  formula: string;
  substitution: string;
  steps: string[];
  answer: string;
  unitCheck: string;
  concept: string;
  alternative?: string;
};

export type QuizQuestion = {
  id: string;
  type: "mcq" | "assertion" | "fill" | "short";
  q: string;
  options?: string[];
  answer: string;
  explain: string;
  concept: string;
};

export type BoardQuestion = {
  q: string;
  marks: number;
  answer: string[];
};

/** Primitive shapes for the code-drawn diagram engine (no images anywhere). */
export type Shape =
  | { k: "line"; x1: number; y1: number; x2: number; y2: number; c?: string; w?: number; dash?: string }
  | { k: "rect"; x: number; y: number; w: number; h: number; c?: string; fill?: string; r?: number }
  | { k: "circle"; cx: number; cy: number; r: number; c?: string; fill?: string }
  | { k: "ellipse"; cx: number; cy: number; rx: number; ry: number; c?: string; fill?: string }
  | { k: "path"; d: string; c?: string; fill?: string; w?: number; dash?: string }
  | { k: "text"; x: number; y: number; t: string; size?: number; c?: string };

export type DiagramPart = {
  id: string;
  label: string;
  /** Where the leader line points (the actual part). */
  x: number;
  y: number;
  /** Where the label chip sits. */
  lx: number;
  ly: number;
  hint: string;
};

export type DiagramSpec = {
  id: string;
  title: string;
  width: number;
  height: number;
  shapes: Shape[];
  parts: DiagramPart[];
};

export type Chapter = {
  number: number;
  slug: string;
  title: string;
  subject: Subject;
  tagline: string;
  intro: string;
  /** Key of the live module implemented in code. */
  moduleKey: string;
  moduleTitle: string;
  moduleBlurb: string;
  videoId: string;
  videoTitle: string;
  videoDescription: string;
  notesFileId: string;
  notesTitle: string;
  formulas: Formula[];
  theory: TheorySection[];
  activities: Activity[];
  numericals: Numerical[];
  diagrams: DiagramSpec[];
  commonErrors: { wrong: string; right: string }[];
  board: BoardQuestion[];
  quiz: QuizQuestion[];
  summary: string[];
};