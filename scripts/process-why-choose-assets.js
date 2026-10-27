const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const outDir = path.join("public", "images", "why-choose");
const assets = "C:/Users/dipak/.cursor/projects/d-css-Clients-mona-dahiya/assets";

async function makeTransparentDoctor() {
  const src = path.join(assets, "why-choose-doctor-gen.jpg");
  const out = path.join(outDir, "doctor-cutout.png");

  const { data, info } = await sharp(src)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  // Make near-white background transparent + soft bottom fade
  for (let y = 0; y < info.height; y++) {
    const bottomFade =
      y > info.height * 0.82
        ? Math.max(0, 1 - (y - info.height * 0.82) / (info.height * 0.18))
        : 1;

    for (let x = 0; x < info.width; x++) {
      const i = (y * info.width + x) * 4;
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      const isWhite = r > 235 && g > 235 && b > 235 && max - min < 18;
      const isNearWhite = r > 245 && g > 245 && b > 245;

      let a = data[i + 3];
      if (isNearWhite) a = 0;
      else if (isWhite) a = Math.round(a * 0.15);
      a = Math.round(a * bottomFade);
      data[i + 3] = a;
    }
  }

  await sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .png()
    .toFile(out);

  console.log("doctor", out);
}

async function softenIcon(name) {
  const src = path.join(outDir, `${name}.jpg`);
  const out = path.join(outDir, `${name}.png`);
  const meta = await sharp(src).metadata();
  const w = meta.width || 1024;
  const h = meta.height || 1024;
  const size = Math.min(w, h);

  // Circular soft mask
  const mask = Buffer.from(`
    <svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="g" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="white" stop-opacity="1"/>
          <stop offset="82%" stop-color="white" stop-opacity="1"/>
          <stop offset="94%" stop-color="white" stop-opacity="0.55"/>
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

  console.log("icon", out);
}

(async () => {
  await makeTransparentDoctor();
  for (const name of [
    "why-icon-mother-baby",
    "why-icon-pregnant",
    "why-icon-heart",
    "why-icon-uterus",
  ]) {
    await softenIcon(name);
  }
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
