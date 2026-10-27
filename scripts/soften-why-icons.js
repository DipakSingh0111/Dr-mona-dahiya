const sharp = require("sharp");
const path = require("path");

const dir = path.join("public", "images", "why-choose");
const names = [
  "why-icon-mother-baby",
  "why-icon-pregnant",
  "why-icon-heart",
  "why-icon-uterus",
];

async function softenIcon(name) {
  const src = path.join(dir, `${name}.jpg`);
  const out = path.join(dir, `${name}.png`);
  const meta = await sharp(src).metadata();
  const size = Math.min(meta.width || 1024, meta.height || 1024);

  const mask = Buffer.from(`
    <svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="g" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="white" stop-opacity="1"/>
          <stop offset="84%" stop-color="white" stop-opacity="1"/>
          <stop offset="95%" stop-color="white" stop-opacity="0.5"/>
          <stop offset="100%" stop-color="white" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <circle cx="50%" cy="50%" r="50%" fill="url(#g)"/>
    </svg>
  `);

  const alpha = await sharp(mask).ensureAlpha().extractChannel(3).toBuffer();

  await sharp(src)
    .resize(size, size, { fit: "cover" })
    .ensureAlpha()
    .joinChannel(alpha)
    .png()
    .toFile(out);

  console.log("ok", out);
}

(async () => {
  for (const name of names) await softenIcon(name);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
