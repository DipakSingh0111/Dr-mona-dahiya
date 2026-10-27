const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const dir = path.join("public", "images", "services");
const files = fs.readdirSync(dir).filter((f) => f.endsWith(".jpg"));

async function processFile(file) {
  const input = path.join(dir, file);
  const outName = file.replace(/\.jpg$/i, "-soft.png");
  const output = path.join(dir, outName);

  const meta = await sharp(input).metadata();
  const w = meta.width || 1024;
  const h = meta.height || 1024;

  // Keep subject sharp/clear — only soft white fade at outer edges
  const whiteFade = Buffer.from(`
    <svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="g" cx="52%" cy="52%" r="68%">
          <stop offset="0%" stop-color="white" stop-opacity="0"/>
          <stop offset="55%" stop-color="white" stop-opacity="0"/>
          <stop offset="78%" stop-color="white" stop-opacity="0.45"/>
          <stop offset="92%" stop-color="white" stop-opacity="0.88"/>
          <stop offset="100%" stop-color="white" stop-opacity="1"/>
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#g)"/>
    </svg>
  `);

  const base = await sharp(input)
    .modulate({ brightness: 1.04, saturation: 1.08 })
    .sharpen({ sigma: 0.8 })
    .ensureAlpha()
    .toBuffer();

  await sharp(base)
    .composite([{ input: whiteFade, blend: "over" }])
    .png({ quality: 95, compressionLevel: 7 })
    .toFile(output);

  console.log("ok", outName);
}

(async () => {
  for (const f of files) await processFile(f);
  console.log("done", files.length);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
