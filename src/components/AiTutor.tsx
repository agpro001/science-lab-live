import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";

const SUGGESTIONS = [
  "Explain this chapter in simple steps",
  "Solve a numerical step by step",
  "Give me 3 board questions with answers",
  "What mistakes lose marks here?",
];

function messageText(parts: { type: string; text?: string }[]) {
  return parts.map((p) => (p.type === "text" ? (p.text ?? "") : "")).join("");
}

export function AiTutor({ context }: { context?: string }) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const transport = useMemo(
    () => new DefaultChatTransport({ api: "/api/chat", body: { context } }),
    [context],
  );

  const { messages, sendMessage, status, setMessages } = useChat({
    transport,
    onError: (e) => setError(e.message || "The tutor could not answer right now. Please try again."),
  });

  const busy = status === "submitted" || status === "streaming";

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!busy) inputRef.current?.focus();
  }, [busy]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, status]);

  const ask = (text: string) => {
    const q = text.trim();
    if (!q || busy) return;
    setError(null);
    setInput("");
    void sendMessage({ text: q });
    inputRef.current?.focus();
  };

  return (
    <>
      <motion.button
        onClick={() => setOpen((o) => !o)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={open ? "Close the AI science tutor" : "Ask the AI science tutor"}
        className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-lg"
      >
        <motion.span
          animate={{ scale: [1, 1.25, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="inline-block h-2 w-2 rounded-full bg-primary-foreground"
        />
        {open ? "Close tutor" : "Ask AI Tutor"}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.section
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
            className="glass-strong fixed bottom-20 right-3 z-40 flex h-[70vh] w-[calc(100vw-1.5rem)] max-w-md flex-col overflow-hidden rounded-3xl sm:right-5"
          >
            <header className="border-b border-glass-border px-5 py-4">
              <h2 className="font-display text-base font-semibold">AI Science Tutor</h2>
              <p className="mt-0.5 text-xs text-muted-foreground">
                {context ? `Context: ${context}` : "CBSE Class 10 Science — step-by-step answers"}
              </p>
            </header>

            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.length === 0 && (
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Ask anything from Class 10 Science — numericals, diagrams, definitions, board answers. Every reply is
                    broken into steps.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {SUGGESTIONS.map((s) => (
                      <button
                        key={s}
                        onClick={() => ask(context ? `${s} (${context})` : s)}
                        className="rounded-full border border-glass-border bg-glass px-3 py-1.5 text-xs text-muted-foreground transition hover:text-foreground"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((m) => (
                <div key={m.id} className={m.role === "user" ? "flex justify-end" : "flex justify-start"}>
                  <div
                    className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm ${
                      m.role === "user"
                        ? "bg-primary/25 text-foreground"
                        : "border border-glass-border bg-glass text-foreground"
                    }`}
                  >
                    {m.role === "assistant" ? (
                      <div className="prose prose-sm prose-invert max-w-none prose-headings:font-display prose-p:my-1.5 prose-li:my-0.5 prose-strong:text-foreground">
                        <ReactMarkdown>{messageText(m.parts)}</ReactMarkdown>
                      </div>
                    ) : (
                      <p className="whitespace-pre-wrap">{messageText(m.parts)}</p>
                    )}
                  </div>
                </div>
              ))}

              {status === "submitted" && (
                <div className="flex justify-start">
                  <div className="flex gap-1 rounded-2xl border border-glass-border bg-glass px-4 py-3">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
                        transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
                        className="h-1.5 w-1.5 rounded-full bg-accent"
                      />
                    ))}
                  </div>
                </div>
              )}

              {error && (
                <p className="rounded-2xl border border-destructive/40 bg-destructive/10 px-4 py-3 text-xs">{error}</p>
              )}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                ask(input);
              }}
              className="border-t border-glass-border p-3"
            >
              <div className="flex items-end gap-2">
                <textarea
                  ref={inputRef}
                  value={input}
                  rows={1}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      ask(input);
                    }
                  }}
                  placeholder="Ask a question…"
                  className="max-h-28 flex-1 resize-none rounded-2xl border border-glass-border bg-glass px-4 py-3 text-sm outline-none focus:border-primary"
                />
                <button
                  type="submit"
                  disabled={busy || !input.trim()}
                  className="rounded-2xl bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition disabled:opacity-40"
                >
                  Send
                </button>
              </div>
              {messages.length > 0 && (
                <button
                  type="button"
                  onClick={() => {
                    setMessages([]);
                    setError(null);
                    inputRef.current?.focus();
                  }}
                  className="mt-2 text-[11px] text-muted-foreground transition hover:text-foreground"
                >
                  Clear conversation
                </button>
              )}
            </form>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
}