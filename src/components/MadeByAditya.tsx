import { motion, useReducedMotion } from "motion/react";

const LETTERS = "Made by Aditya".split("");

/** Animated signature credit — pure motion graphics, no images. */
export function MadeByAditya() {
  const reduce = useReducedMotion();

  return (
    <div className="relative mt-6 inline-flex flex-col items-start">
      <div className="relative flex items-center gap-2 rounded-full border border-glass-border bg-glass px-4 py-2">
        {!reduce && (
          <motion.span
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-full"
            style={{
              background:
                "linear-gradient(110deg, transparent 20%, oklch(0.99 0.02 275 / 22%) 50%, transparent 80%)",
              backgroundSize: "220% 100%",
            }}
            animate={{ backgroundPosition: ["-120% 50%", "220% 50%"] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "linear", repeatDelay: 1.4 }}
          />
        )}

        <motion.span
          aria-hidden
          className="relative h-2 w-2 rounded-full bg-accent"
          animate={reduce ? undefined : { scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />

        <p className="relative flex text-xs font-medium tracking-[0.18em] uppercase" aria-label="Made by Aditya">
          {LETTERS.map((ch, i) => (
            <motion.span
              key={`${ch}-${i}`}
              aria-hidden
              className={ch === " " ? "w-1.5" : "text-gradient"}
              initial={{ opacity: 0, y: 8, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.25 + i * 0.05, duration: 0.5, ease: "easeOut" }}
            >
              {ch === " " ? "\u00A0" : ch}
            </motion.span>
          ))}
        </p>
      </div>

      <motion.span
        aria-hidden
        className="mt-1.5 ml-4 block h-[2px] rounded-full bg-primary"
        initial={{ width: 0 }}
        animate={{ width: "72%" }}
        transition={{ delay: 1.1, duration: 0.8, ease: "easeOut" }}
      />
    </div>
  );
}