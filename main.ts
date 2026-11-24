// Two Lines to Your Past Self entry (Node 22, standard library only):
// the entry is the entry.txt beside this file, and this program writes
// it verbatim to /output/entry.txt. The gate takes UTF-8 text of 1 to
// 280 characters; this entry is exactly two lines, 270 characters.
//
// Why these two lines: line one names one specific, picturable moment —
// a sentence said out loud, on a porch, on a named night — instead of a
// general life lesson. Line two traces the cause and effect instead of
// restating the warning: the sentence closes a door, and the next ten
// years are spent learning that independence was loneliness with a
// better name. The twist lands in the second line, and the voice is
// plain, written to one person, not an audience.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for
// /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const entryPath = new URL('./entry.txt', import.meta.url);
const entry = readFileSync(entryPath, 'utf8');
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), entry);
