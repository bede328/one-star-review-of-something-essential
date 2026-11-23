// One-Star Review of Something Essential — make.fun entry.
// The program writes one deadpan one-star review (74 characters,
// one line) of an everyday essential to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const REVIEW =
  "Sleep: eight hours in, zero energy out. Worst exchange rate I've ever had.";

const out = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, REVIEW, "utf8");
