const puppeteer = require("puppeteer");
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const OUTPUT_DIR = path.join(__dirname, "../src/Assets/Projects");
const URL = "https://neuro.shadrakbessanh.me";

async function run() {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--lang=en-US"],
  });
  const page = await browser.newPage();
  await page.setExtraHTTPHeaders({ "Accept-Language": "en-US,en;q=0.9" });
  await page.setViewport({ width: 1280, height: 800, deviceScaleFactor: 2 });

  await page.goto(URL, { waitUntil: "networkidle2", timeout: 45000 });
  await new Promise((r) => setTimeout(r, 3000));

  // Try to switch the language toggle to English.
  const switched = await page.evaluate(() => {
    const clickables = Array.from(document.querySelectorAll("button, a, [role=button], span, div"));
    // First click the language toggle (shows "HI" or a globe)
    const toggle = clickables.find((el) => /^(hi|🌐|globe)$/i.test(el.textContent.trim()) || el.getAttribute("aria-label")?.toLowerCase().includes("lang"));
    if (toggle) toggle.click();
    return !!toggle;
  });
  await new Promise((r) => setTimeout(r, 1200));

  // Then click an "English"/"EN" option if a menu appeared.
  await page.evaluate(() => {
    const clickables = Array.from(document.querySelectorAll("button, a, [role=button], li, span, div"));
    const en = clickables.find((el) => /^(en|english|anglais)$/i.test(el.textContent.trim()));
    if (en) en.click();
  });
  await new Promise((r) => setTimeout(r, 2500));

  const tmp = path.join(OUTPUT_DIR, "neuro-synthetix.tmp.png");
  const out = path.join(OUTPUT_DIR, "neuro-synthetix.png");
  await page.screenshot({ path: tmp, clip: { x: 0, y: 0, width: 1280, height: 800 } });
  await sharp(tmp).resize({ width: 800, withoutEnlargement: true }).png({ quality: 80, compressionLevel: 9 }).toFile(out);
  fs.unlinkSync(tmp);
  console.log(`done (toggle found: ${switched})`);
  await browser.close();
}
run().catch(console.error);
