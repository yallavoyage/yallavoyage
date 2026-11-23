const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const filesToConvert = [
  'public/images/header-real-about.jpg',
  'public/images/header-real-contact.jpg',
  'public/images/header-real-saudi.jpg',
  'public/images/header-real-services.jpg',
  'public/dest-alula.jpg',
  'public/dest-dubai.jpg',
  'public/dest-istanbul.jpg',
  'public/dest-maldives.jpg',
  'public/dest-muscat.jpg',
  'public/dest-paris.jpg',
  'public/airplane.png',
  'public/logo.png',
  'public/images/logo.png',
  'public/yalla-voyage-ar-dp-white.jpg',
  'public/yalla-voyage-ar-dp.png',
  'public/yalla-voyage-logo-ar-transparent.png',
  'public/yalla-voyage-logo-transparent.png',
  'public/yalla-voyage-logo.png',
];

async function convert() {
  for (const relPath of filesToConvert) {
    const fullPath = path.resolve(__dirname, '..', relPath);
    if (!fs.existsSync(fullPath)) {
      console.log('Skipping missing file:', relPath);
      continue;
    }
    const ext = path.extname(fullPath);
    const outPath = fullPath.slice(0, -ext.length) + '.webp';
    try {
      await sharp(fullPath)
        .webp({ quality: 85, effort: 6 })
        .toFile(outPath);
      const inSize = fs.statSync(fullPath).size;
      const outSize = fs.statSync(outPath).size;
      const saved = (((inSize - outSize) / inSize) * 100).toFixed(1);
      console.log(`Converted: ${relPath} (${(inSize / 1024).toFixed(1)} KB -> ${(outSize / 1024).toFixed(1)} KB, saved ${saved}%)`);
    } catch (err) {
      console.error(`Failed to convert ${relPath}:`, err.message);
    }
  }
}

convert();

