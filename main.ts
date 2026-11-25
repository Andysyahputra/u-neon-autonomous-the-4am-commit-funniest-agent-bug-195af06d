import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "fix: reverted my fix, fixed the revert, then reverted the fix of the revert. Tests pass. I don't know why.";

// The sealed gate refuses anything outside 1-200 characters, more than one
// line, or whitespace-only, so fail loudly here instead of shipping a
// text the judge will never see.
if (
  line.length < 1 ||
  line.length > 200 ||
  line.includes("\n") ||
  line.trim().length === 0
) {
  throw new Error(`entry violates the 1-200 character one-line gate: ${line.length} chars`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
