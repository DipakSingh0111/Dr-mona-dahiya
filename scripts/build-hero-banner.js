const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

async function main() {
  const src = path.join("public", "images", "new-banner.png");
  const out = path.join("public", "images", "hero-home-banner.png");
  const generated = path.join(
    "C:/Users/dipak/.cursor/projects/d-css-Clients-mona-dahiya/assets/hero-home-banner.jpg",
  );

  const meta = await sharp(src).metadata();
  const h = meta.height || 935;
  const photoW = meta.width || 1683;
  const canvasW = Math.round(photoW * 1.52);

  const navy = Buffer.from(`
    <svg width="${canvasW}" height="${h}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#041224"/>
          <stop offset="42%" stop-color="#061830"/>
          <stop offset="70%" stop-color="#0a2f5c"/>
          <stop offset="100%" stop-color="#0c3f7a"/>
        </linearGradient>
        <radialGradient id="g1" cx="18%" cy="32%" r="38%">
          <stop offset="0%" stop-color="#2a6fd4" stop-opacity="0.28"/>
          <stop offset="100%" stop-color="#2a6fd4" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#bg)"/>
      <rect width="100%" height="100%" fill="url(#g1)"/>
    </svg>
  `);

  const leftFadeOverlay = Buffer.from(`
    <svg width="${photoW}" height="${h}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="lf" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#041224" stop-opacity="0.95"/>
          <stop offset="22%" stop-color="#041224" stop-opacity="0.55"/>
          <stop offset="48%" stop-color="#041224" stop-opacity="0.12"/>
          <stop offset="65%" stop-color="#041224" stop-opacity="0"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#lf)"/>
    </svg>
  `);

  const photoWithFade = await sharp(src)
    .composite([{ input: leftFadeOverlay, blend: "over" }])
    .png()
    .toBuffer();

  await sharp(navy)
    .composite([
      {
        input: photoWithFade,
        left: canvasW - photoW,
        top: 0,
      },
    ])
    .png({ quality: 95 })
    .toFile(out);

  // Also keep generated AI banner as alternate
  if (fs.existsSync(generated)) {
    await sharp(generated)
      .resize(canvasW, h, { fit: "cover", position: "right" })
      .png()
      .toFile(path.join("public", "images", "hero-home-banner-ai.png"));
  }

  console.log("wrote", out, `${canvasW}x${h}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
