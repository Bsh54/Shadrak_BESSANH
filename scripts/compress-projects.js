const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const DIR = path.join(__dirname, "../src/Assets/Projects");
const MAX_W = 900;      // card images never render wider than this
const THRESHOLD = 200 * 1024; // only recompress files over 200 KB

async function run() {
  const files = fs.readdirSync(DIR).filter((f) => /\.(png|jpe?g)$/i.test(f));
  let before = 0, after = 0;
  for (const f of files) {
    const p = path.join(DIR, f);
    const size = fs.statSync(p).size;
    if (size < THRESHOLD) continue;
    const tmp = p + ".tmp";
    const isPng = /\.png$/i.test(f);
    let pipe = sharp(p).resize({ width: MAX_W, withoutEnlargement: true });
    pipe = isPng
      ? pipe.png({ quality: 80, compressionLevel: 9, palette: true })
      : pipe.jpeg({ quality: 78, mozjpeg: true, progressive: true });
    await pipe.toFile(tmp);
    const newSize = fs.statSync(tmp).size;
    if (newSize < size) {
      fs.renameSync(tmp, p);
      before += size; after += newSize;
      console.log(`${f}: ${(size / 1024).toFixed(0)}KB -> ${(newSize / 1024).toFixed(0)}KB`);
    } else {
      fs.unlinkSync(tmp);
    }
  }
  if (before) console.log(`\nTotal: ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB (-${Math.round((1 - after / before) * 100)}%)`);
  else console.log("Nothing to compress.");
}
run().catch(console.error);
