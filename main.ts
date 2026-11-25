import { copyFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = "/output";

function copyEntry(name: string): void {
  const src = join(here, name);
  if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
  copyFileSync(src, join(outDir, name));
}

copyEntry("entry.png");
