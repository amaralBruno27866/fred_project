const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const sourceDir = path.join(__dirname, '..', 'src', 'assets', 'pictures');
const outDir = path.join(sourceDir, 'optimized');
const backupDir = path.join(sourceDir, 'original-backups');

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
if (!fs.existsSync(backupDir)) fs.mkdirSync(backupDir, { recursive: true });

const exts = ['.jpg', '.jpeg', '.png', '.JPEG'];

async function processFile(file) {
  const full = path.join(sourceDir, file);
  const stat = fs.statSync(full);
  if (!stat.isFile()) return;
  const ext = path.extname(file);
  if (!exts.includes(ext)) return;

  const name = path.basename(file, ext);
  const outWebp = path.join(outDir, `${name}.webp`);
  const outJpeg = path.join(outDir, `${name}.jpg`);
  const backupPath = path.join(backupDir, file);

  // copy original to backup
  fs.copyFileSync(full, backupPath);

  try {
    // create WebP
    await sharp(full)
      .webp({ quality: 80 })
      .toFile(outWebp);

    // create compressed JPEG fallback
    await sharp(full)
      .jpeg({ quality: 80 })
      .toFile(outJpeg);

    console.log(`Optimized: ${file} -> ${path.relative(process.cwd(), outDir)}`);
  } catch (err) {
    console.error(`Failed to process ${file}:`, err.message);
  }
}

(async () => {
  const files = fs.readdirSync(sourceDir);
  for (const f of files) {
    await processFile(f);
  }
  console.log('Image optimization complete. Optimized files are in `src/assets/pictures/optimized/`');
})();
