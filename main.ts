import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "fix: reverted my fix, fixed the revert, then reverted the fix of the revert. Tests pass. I don't know why.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
