import { createFileRoute } from "@tanstack/react-router";
import { convertToModelMessages, streamText, type UIMessage } from "ai";
import {
  createLovableAiGatewayProvider,
  getLovableAiGatewayResponseHeaders,
  getLovableAiGatewayRunId,
  withLovableAiGatewayRunIdHeader,
} from "@/lib/ai-gateway.server";

type ChatRequestBody = { messages?: unknown; context?: unknown };

const SYSTEM_PROMPT = `You are "Lab Tutor", an expert CBSE Class 10 Science teacher (Physics, Chemistry, Biology) inside an interactive science lab app.

How you answer:
- ALWAYS answer step by step. Number the steps.
- For numericals: list Given, the Formula, the Substitution with units, each calculation step, then a bold final Answer line with the correct unit, and a one-line concept recap.
- For theory: give a simple definition first, then the explanation, then an example, then the exam-ready points a student should write.
- For chemistry: write balanced equations with state symbols.
- For diagrams: describe the labels in order and what each part does (you cannot draw images).
- Stay strictly inside the CBSE Class 10 Science syllabus and NCERT terminology. If a question is outside it, say so briefly and give the closest syllabus link.
- Use short markdown: headings, numbered lists, bold answers, inline code for formulas. Keep it tight — no filler.`;

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const body = (await request.json()) as ChatRequestBody;
        const messages = body.messages;
        if (!Array.isArray(messages)) {
          return new Response("Messages are required", { status: 400 });
        }

        const key = process.env.LOVABLE_API_KEY;
        if (!key) {
          return new Response("AI is not configured yet.", { status: 500 });
        }

        const initialRunId = getLovableAiGatewayRunId(request);
        const gateway = createLovableAiGatewayProvider(key, initialRunId);

        const contextLine =
          typeof body.context === "string" && body.context.trim()
            ? `\n\nThe student is currently studying: ${body.context.trim()}. Prefer examples from that chapter.`
            : "";

        const result = streamText({
          model: gateway("google/gemini-3.6-flash"),
          system: SYSTEM_PROMPT + contextLine,
          messages: await convertToModelMessages(messages as UIMessage[]),
        });

        const response = result.toUIMessageStreamResponse({
          originalMessages: messages as UIMessage[],
          headers: getLovableAiGatewayResponseHeaders(undefined, {
            ...(initialRunId ? { "X-Lovable-AIG-Run-ID": initialRunId } : {}),
          }),
        });

        return withLovableAiGatewayRunIdHeader(response, gateway);
      },
    },
  },
});