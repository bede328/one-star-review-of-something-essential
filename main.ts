// One-Star Review of Something Essential — make.fun entry, round 2.
// The program writes one deadpan one-star review (one line) of an
// everyday essential to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const REVIEW =
  "Water: zero taste, zero calories, zero effort, and it still expects eight glasses a day from me. One star, worst subscription ever.";

const out = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, REVIEW, "utf8");
