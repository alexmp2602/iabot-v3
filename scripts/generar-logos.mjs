// scripts/generar-logos.mjs
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const SRC_DIR = "public/assets/img/marcas/webp"; // ⇦ origen (donde subís los .webp grandes)
const OUTS = [
  { fmt: "webp", size: 48, dir: "public/assets/img/webp/48", suffix: "@1x" },
  { fmt: "webp", size: 96, dir: "public/assets/img/webp/96", suffix: "@2x" },
  { fmt: "avif", size: 48, dir: "public/assets/img/avif/48", suffix: "@1x" },
  { fmt: "avif", size: 96, dir: "public/assets/img/avif/96", suffix: "@2x" },
];

for (const o of OUTS) fs.mkdirSync(o.dir, { recursive: true });

const files = fs
  .readdirSync(SRC_DIR)
  .filter((f) => f.toLowerCase().endsWith(".webp"));

for (const file of files) {
  const base = path.basename(file, path.extname(file)); // p.ej: fk-latam
  const input = path.join(SRC_DIR, file);

  for (const o of OUTS) {
    const output = path.join(o.dir, `${base}${o.suffix}.${o.fmt}`);
    const img = sharp(input).resize({
      width: o.size * 3,
      height: o.size,
      fit: "inside",
      withoutEnlargement: true,
    });
    await (
      o.fmt === "webp" ? img.webp({ quality: 90 }) : img.avif({ quality: 50 })
    ).toFile(output);
    console.log("✔", output);
  }
}
console.log("Listo ✅");
