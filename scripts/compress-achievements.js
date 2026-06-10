const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const INPUT_DIR = path.join(__dirname, "../public/images/achievements");
const files = fs.readdirSync(INPUT_DIR).filter((f) => /\.(jpg|jpeg)$/i.test(f));

let totalBefore = 0;
let totalAfter = 0;

async function compressAll() {
  for (const file of files) {
    const filePath = path.join(INPUT_DIR, file);
    const tmpPath = filePath + ".tmp";
    const sizeBefore = fs.statSync(filePath).size;
    totalBefore += sizeBefore;

    await sharp(filePath)
      .resize({ width: 1600, withoutEnlargement: true })
      .jpeg({ quality: 72, mozjpeg: true, progressive: true })
      .toFile(tmpPath);

    const sizeAfter = fs.statSync(tmpPath).size;
    totalAfter += sizeAfter;

    fs.renameSync(tmpPath, filePath);
    console.log(
      `${file}: ${(sizeBefore / 1024 / 1024).toFixed(1)}MB → ${(sizeAfter / 1024 / 1024).toFixed(1)}MB (-${Math.round((1 - sizeAfter / sizeBefore) * 100)}%)`
    );
  }

  console.log(
    `\nTotal: ${(totalBefore / 1024 / 1024).toFixed(1)}MB → ${(totalAfter / 1024 / 1024).toFixed(1)}MB (-${Math.round((1 - totalAfter / totalBefore) * 100)}%)`
  );
}

compressAll().catch(console.error);
