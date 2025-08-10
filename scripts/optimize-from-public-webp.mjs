import { readdir, mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = "public/assets/img"; // ahora buscamos desde IMG entero
const OUT = {
  webp1x: path.join(ROOT, "webp/48"),
  webp2x: path.join(ROOT, "webp/96"),
  avif1x: path.join(ROOT, "avif/48"),
  avif2x: path.join(ROOT, "avif/96"),
};

const H1X = 48;
const H2X = 96;

// helpers
const isVariantName = (p) => /@[12]x\.(webp|avif)$/i.test(p);
const isOutputPath = (p) => /[\\/](webp|avif)[\\/](48|96)[\\/]/i.test(p);
const isWebp = (p) => p.toLowerCase().endsWith(".webp");
const insideWebpFolder = (p) => /[\\/]webp[\\/]/i.test(p);

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const results = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      // saltar directorios de salida (webp/48, webp/96, avif/48, avif/96)
      if (isOutputPath(full)) continue;
      results.push(...(await walk(full)));
    } else {
      results.push(full);
    }
  }
  return results;
}

await Promise.all(Object.values(OUT).map((d) => mkdir(d, { recursive: true })));

const all = (await walk(ROOT))
  // solo archivos .webp que estén dentro de una carpeta "webp/"
  .filter(
    (f) =>
      isWebp(f) && insideWebpFolder(f) && !isOutputPath(f) && !isVariantName(f)
  );

if (!all.length) {
  console.log("No se encontraron .webp dentro de carpetas 'webp/' bajo", ROOT);
  process.exit(0);
}

for (const input of all) {
  const base = path.parse(input).name; // sin extensión
  try {
    // 1x
    await sharp(input)
      .resize({ height: H1X, withoutEnlargement: true })
      .webp({ quality: 75 })
      .toFile(path.join(OUT.webp1x, `${base}@1x.webp`));

    await sharp(input)
      .resize({ height: H1X, withoutEnlargement: true })
      .avif({ quality: 45 })
      .toFile(path.join(OUT.avif1x, `${base}@1x.avif`));

    // 2x
    await sharp(input)
      .resize({ height: H2X, withoutEnlargement: true })
      .webp({ quality: 75 })
      .toFile(path.join(OUT.webp2x, `${base}@2x.webp`));

    await sharp(input)
      .resize({ height: H2X, withoutEnlargement: true })
      .avif({ quality: 45 })
      .toFile(path.join(OUT.avif2x, `${base}@2x.avif`));

    console.log("OK:", path.relative(process.cwd(), input));
  } catch (err) {
    console.error("ERROR:", input, err?.message || err);
  }
}

console.log("Listo ✅");
