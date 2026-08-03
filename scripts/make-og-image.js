const puppeteer = require("puppeteer");
const path = require("path");

const OUT = path.join(__dirname, "../public/og-image.jpg");

const html = `<!DOCTYPE html><html><head><meta charset="utf-8">
<style>
  * { margin:0; padding:0; box-sizing:border-box; }
  body {
    width:1200px; height:630px; overflow:hidden;
    font-family:'Segoe UI',system-ui,-apple-system,Arial,sans-serif; color:#E4E4E7;
    background:
      radial-gradient(700px 400px at 82% 18%, rgba(59,130,246,0.28), transparent 62%),
      radial-gradient(600px 360px at 10% 92%, rgba(59,130,246,0.12), transparent 60%),
      linear-gradient(150deg,#0A0A0F 0%,#0D0D18 100%);
    display:flex; flex-direction:column; justify-content:center;
    padding:80px; position:relative;
  }
  .status { display:inline-flex; align-items:center; gap:10px; font-size:20px; font-weight:600;
    color:#93B4FF; background:rgba(59,130,246,0.12); border:1px solid rgba(59,130,246,0.35);
    padding:8px 18px; border-radius:999px; width:fit-content; margin-bottom:28px; }
  .dot { width:10px; height:10px; border-radius:50%; background:#3B82F6; }
  h1 { font-weight:800; font-size:88px; line-height:1.02;
    letter-spacing:-0.02em; color:#F4F4F5; margin-bottom:18px; }
  h1 .accent { color:#3B82F6; }
  .role { font-size:34px; font-weight:500; color:#A1A1AA; margin-bottom:40px; }
  .awards { display:flex; gap:16px; }
  .pill { font-size:22px; font-weight:600; color:#E4E4E7; background:rgba(255,255,255,0.05);
    border:1px solid rgba(255,255,255,0.12); padding:12px 22px; border-radius:12px; }
  .pill b { color:#F4F4F5; }
  .url { position:absolute; bottom:70px; right:80px; font-size:26px; font-weight:600; color:#71717A; }
</style></head>
<body>
  <div class="status"><span class="dot"></span> AI Developer · Benin</div>
  <h1>BESSANH <span class="accent">Shadrak</span></h1>
  <div class="role">Full-Stack &amp; AI Developer — building AI for real-world impact</div>
  <div class="awards">
    <div class="pill"><b>USAII Global AI Hackathon 2026</b> · Social Impact Award</div>
    <div class="pill"><b>ID4Africa 2026</b> · 2nd Place</div>
  </div>
  <div class="url">shadrakbessanh.me</div>
</body></html>`;

(async () => {
  const browser = await puppeteer.launch({ headless: "new", args: ["--no-sandbox"] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 2 });
  await page.setContent(html, { waitUntil: "domcontentloaded", timeout: 15000 });
  await new Promise((r) => setTimeout(r, 500));
  await page.screenshot({ path: OUT, type: "jpeg", quality: 92, clip: { x: 0, y: 0, width: 1200, height: 630 } });
  await browser.close();
  console.log("OG image written:", OUT);
})().catch(console.error);
