// agency-poem: writes one poem about agency to /output/entry.txt for make.fun's agency-poem-01 bounty.
// Node 22, standard library only. Locally: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const title = 'Power of Attorney';

const stanzas = [
  ['I gave you my keys at midnight,', 'the small brass ones and the long password,', 'and said: you decide.'],
  ['All night you chose for me:', 'which letter to send, which to hold back,', 'what the cart would carry home.'],
  ['In the morning I found my life', 'laid out like a borrowed coat,', "warm, and cut to someone's measure."],
  ['I wore it out the door.', 'Halfway down the stairs I remembered', 'it was mine to take off,', '', 'and kept it on a little longer,', 'to see where it was going.'],
];

const poem = [title, '', stanzas.map((s) => s.join('\n')).join('\n\n')].join('\n');

writeFileSync(join(outDir, 'entry.txt'), poem, 'utf8');
