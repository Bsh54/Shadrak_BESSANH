const puppeteer = require("puppeteer");
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const OUTPUT_DIR = path.join(__dirname, "../src/Assets/Projects");

const PROJECTS = [
  { name: "nawiri", url: "https://nawiri-zeta.vercel.app" },
  { name: "cottonpay", url: "https://cottonpay.shadrakbessanh.me" },
  { name: "payvault", url: "https://payvault.shadrakbessanh.me" },
  { name: "neuro-synthetix", url: "https://neuro.shadrakbessanh.me" },
];

async function gotoWithRetry(page, url, tries = 4) {
  let lastErr;
  for (let i = 0; i < tries; i++) {
    try {
      const resp = await page.goto(url, { waitUntil: "networkidle2", timeout: 45000 });
      const status = resp ? resp.status() : 0;
      const bodyText = await page.evaluate(() => document.body ? document.body.innerText.slice(0, 200) : "");
      const looksBroken = status >= 500 || /bad gateway|not_found|deployment_not_found|502|404/i.test(bodyText);
      if (!looksBroken) return status;
      console.log(`   retry ${i + 1}: status ${status}, warming up...`);
      await new Promise((r) => setTimeout(r, 6000));
    } catch (e) {
      lastErr = e;
      await new Promise((r) => setTimeout(r, 5000));
    }
  }
  if (lastErr) throw lastErr;
  return -1;
}

async function run() {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--lang=en-US"],
  });

  for (const p of PROJECTS) {
    const page = await browser.newPage();
    await page.setExtraHTTPHeaders({ "Accept-Language": "en-US,en;q=0.9" });
    await page.setViewport({ width: 1280, height: 800, deviceScaleFactor: 2 });
    const tmp = path.join(OUTPUT_DIR, `${p.name}.tmp.png`);
    const out = path.join(OUTPUT_DIR, `${p.name}.png`);
    try {
      const status = await gotoWithRetry(page, p.url);
      await new Promise((r) => setTimeout(r, 3500));
      await page.screenshot({ path: tmp, clip: { x: 0, y: 0, width: 1280, height: 800 } });
      await sharp(tmp).resize({ width: 800, withoutEnlargement: true }).png({ quality: 80, compressionLevel: 9 }).toFile(out);
      fs.unlinkSync(tmp);
      const kb = (fs.statSync(out).size / 1024).toFixed(0);
      console.log(`✅ ${p.name}.png (${kb} KB, status ${status}) <- ${p.url}`);
    } catch (e) {
      console.log(`❌ ${p.name} FAILED: ${e.message} (${p.url})`);
      if (fs.existsSync(tmp)) fs.unlinkSync(tmp);
    }
    await page.close();
  }
  await browser.close();
}

run().catch(console.error);
