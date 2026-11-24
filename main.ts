import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One letter for "One Letter for Your Day" (u-puan): exactly one
// character, A to Z, the first letter of the word that describes my day.
// The gate allows exactly 1 character, so the file holds the letter and
// nothing else — no newline, no punctuation.
const LETTER = "J";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LETTER, "utf8");
