const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const assets =
  "C:/Users/dipak/.cursor/projects/d-css-Clients-mona-dahiya/assets";
const outDir = path.join("public", "images", "meet");

fs.mkdirSync(outDir, { recursive: true });

function isBg(r, g, b) {
  // Pure / near white
  if (r > 232 && g > 232 && b > 232) return true;
  // Light gray studio
  if (r > 210 && g > 210 && b > 210 && Math.max(r, g, b) - Math.min(r, g, b) < 12)
    return true;
  return false;
}

async function cutoutDoctor() {
  const src = path.join(assets, "meet-doctor-portrait.jpg");
  const out = path.join(outDir, "doctor-cutout.png");

  const { data, info } = await sharp(src)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const w = info.width;
  const h = info.height;
  const visited = new Uint8Array(w * h);
  const queue = [];

  // Flood-fill from edges for background removal
  const push = (x, y) => {
    if (x < 0 || y < 0 || x >= w || y >= h) return;
    const idx = y * w + x;
    if (visited[idx]) return;
    const i = idx * 4;
    if (!isBg(data[i], data[i + 1], data[i + 2])) return;
    visited[idx] = 1;
    queue.push(idx);
  };

  for (let x = 0; x < w; x++) {
    push(x, 0);
    push(x, h - 1);
  }
  for (let y = 0; y < h; y++) {
    push(0, y);
    push(w - 1, y);
  }

  while (queue.length) {
    const idx = queue.pop();
    const x = idx % w;
    const y = (idx / w) | 0;
    data[idx * 4 + 3] = 0;
    push(x + 1, y);
    push(x - 1, y);
    push(x, y + 1);
    push(x, y - 1);
  }

  // Soft bottom fade
  for (let y = 0; y < h; y++) {
    const bottomFade =
      y > h * 0.84 ? Math.max(0, 1 - (y - h * 0.84) / (h * 0.16)) : 1;
    for (let x = 0; x < w; x++) {
      const i = (y * w + x) * 4;
      data[i + 3] = Math.round(data[i + 3] * bottomFade);
    }
  }

  await sharp(data, {
    raw: { width: w, height: h, channels: 4 },
  })
    .png()
    .toFile(out);

  console.log("doctor", out);
}

async function softenBadge() {
  const src = path.join(assets, "meet-icon-stethoscope.jpg");
  const out = path.join(outDir, "stethoscope-badge.png");
  const meta = await sharp(src).metadata();
  const size = Math.min(meta.width || 1024, meta.height || 1024);

  const mask = Buffer.from(`
    <svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="g" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="white" stop-opacity="1"/>
          <stop offset="86%" stop-color="white" stop-opacity="1"/>
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

  console.log("badge", out);
}

(async () => {
  await cutoutDoctor();
  await softenBadge();
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
