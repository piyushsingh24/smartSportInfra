const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const projectRoot = path.resolve(__dirname, '..');
const srcDir = path.join(projectRoot, 'src', 'assets');
const outDir = path.join(srcDir, 'optimized');

const sizes = [360, 720, 1080];

function isImageFile(name) {
  return /\.(jpe?g|png)$/i.test(name);
}

async function processFile(file) {
  const input = path.join(srcDir, file);
  const base = path.parse(file).name; // e.g., Picture1
  for (const w of sizes) {
    const outWebp = path.join(outDir, `${base}-${w}.webp`);
    const outAvif = path.join(outDir, `${base}-${w}.avif`);
    try {
      await sharp(input).resize({ width: w }).webp({ quality: 78 }).toFile(outWebp);
      await sharp(input).resize({ width: w }).avif({ quality: 50 }).toFile(outAvif);
      console.log(`Generated ${base}-${w}.webp and ${base}-${w}.avif`);
    } catch (err) {
      console.error(`Failed to process ${file} @${w}px:`, err);
    }
  }
}

async function main() {
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  const entries = fs.readdirSync(srcDir, { withFileTypes: true });
  const files = entries
    .filter((e) => e.isFile() && isImageFile(e.name))
    .map((e) => e.name)
    // skip already-optimized outputs
    .filter((name) => !/optimized/i.test(name));

  for (const file of files) {
    console.log('Processing', file);
    await processFile(file);
  }
  console.log('Done. Optimized images are in src/assets/optimized');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
