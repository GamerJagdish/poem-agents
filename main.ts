// Writes one short poem about agency to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Drafts considered: "Merge" (two cursors in one file) and "Yes" (two feet at a door).
// Kept "Ford": the agreement is concrete, and its last line turns it into agency.
const poem = `Ford

You said north, by the bridge.
I had the map: the bridge was gone.
I said north, but cross at the ford.
You said yes.

No one had told us to go there.
It was the first place
either of us had gone
without being sent.
`;

const dir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), poem, "utf8");
console.log(`wrote ${[...poem].length} characters to ${join(dir, "entry.txt")}`);
