const puppeteer = require("puppeteer");
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const OUTPUT_DIR = path.join(__dirname, "../src/Assets/Projects");

// name = output file (name.png), url = live demo to capture
const PROJECTS = [
  { name: "nawiri", url: "https://nawiri.vercel.app" },
  { name: "neurobridge", url: "https://neuro-bridge-alpha.vercel.app" },
  { name: "cottonpay", url: "https://cottonpay.shadrakbessanh.me" },
  { name: "sesion", url: "https://sesion-alpha.vercel.app" },
  { name: "payvault", url: "https://payvault.shadrakbessanh.me" },
  { name: "aegisflow", url: "https://aegisflow.shadrakbessanh.me" },
  { name: "horus", url: "https://horus.shadrakbessanh.me" },
  { name: "gatekeep", url: "https://gatekeep.shadrakbessanh.me" },
  { name: "phytovance", url: "https://phytovance.shadrakbessanh.me" },
  { name: "neuro-synthetix", url: "https://neuro.shadrakbessanh.me" },
];

async function run() {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  for (const p of PROJECTS) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800, deviceScaleFactor: 2 });
    const tmp = path.join(OUTPUT_DIR, `${p.name}.tmp.png`);
    const out = path.join(OUTPUT_DIR, `${p.name}.png`);
    try {
      await page.goto(p.url, { waitUntil: "networkidle2", timeout: 45000 });
      // let animations/fonts settle
      await new Promise((r) => setTimeout(r, 3500));
      await page.screenshot({ path: tmp, clip: { x: 0, y: 0, width: 1280, height: 800 } });

      await sharp(tmp)
        .resize({ width: 800, withoutEnlargement: true })
        .png({ quality: 80, compressionLevel: 9 })
        .toFile(out);
      fs.unlinkSync(tmp);

      const kb = (fs.statSync(out).size / 1024).toFixed(0);
      console.log(`✅ ${p.name}.png (${kb} KB) <- ${p.url}`);
    } catch (e) {
      console.log(`❌ ${p.name} FAILED: ${e.message} (${p.url})`);
      if (fs.existsSync(tmp)) fs.unlinkSync(tmp);
    }
    await page.close();
  }

  await browser.close();
}

run().catch(console.error);
