// Funniest Autocorrect Fail — a single line under 200 characters.
// The program writes that line to /output/entry.txt, deterministically.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY_LINE =
  "I texted my boss 'working from home today' — autocorrect sent 'working from hell today' and honestly, it wasn't wrong.";

const MAX_CHARS = 200;

const trimmed = ENTRY_LINE.trim();
if (trimmed.length < 1 || trimmed.length > MAX_CHARS) {
  throw new Error(`Entry must be 1 to ${MAX_CHARS} characters, but is ${trimmed.length}.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", trimmed + "\n", "utf8");
