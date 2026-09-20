import { readFile, stat } from "node:fs/promises";
import { resolve } from "node:path";

const outputDirectory = resolve("out");
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const html = await readFile(resolve(outputDirectory, "index.html"), "utf8");
const assets = new Set(
  Array.from(html.matchAll(/(?:src|href)="(\/[^"\s]*)"/g), (match) => match[1])
);

if (assets.size === 0) throw new Error("No local assets found in the static export.");

for (const asset of assets) {
  const pathname = decodeURIComponent(new URL(asset, "https://example.invalid").pathname);
  if (!pathname.startsWith(`${basePath}/`)) {
    throw new Error(`Asset is outside the deployment base path: ${asset}`);
  }
  const filePath = resolve(outputDirectory, `.${pathname.slice(basePath.length)}`);
  if (!filePath.startsWith(`${outputDirectory}/`) && filePath !== outputDirectory) {
    throw new Error(`Asset escapes the export directory: ${asset}`);
  }
  try {
    await stat(filePath);
  } catch {
    throw new Error(`Export references a missing file: ${asset}`);
  }
}

console.log(`Verified ${assets.size} local asset paths for ${basePath || "/"}.`);
