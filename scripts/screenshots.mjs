import { chromium } from "playwright";
import { mkdir } from "fs/promises";
import { existsSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, "..", "public", "screenshots");

const SCREENSHOTS = [
  {
    name: "nutanix-dev.jpg",
    url: "https://www.nutanix.dev/",
    waitFor: "domcontentloaded",
  },
  {
    name: "gitstream-docs.jpg",
    url: "https://docs.gitstream.cm/",
    waitFor: "networkidle",
  },
  {
    name: "harness-ci.jpg",
    url: "https://developer.harness.io/release-notes/continuous-integration/#version-141",
    waitFor: "networkidle",
  },
];

const VIEWPORT = { width: 1280, height: 800 };

async function takeScreenshots() {
  if (!existsSync(OUT_DIR)) await mkdir(OUT_DIR, { recursive: true });

  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: VIEWPORT,
    deviceScaleFactor: 1,
  });

  for (const shot of SCREENSHOTS) {
    console.log(`📸 Capturing ${shot.url}`);
    const page = await context.newPage();
    try {
      await page.goto(shot.url, { waitUntil: shot.waitFor, timeout: 30000 });
      // Wait a beat for fonts/images to settle
      await page.waitForTimeout(1500);
      // Hide cookie banners / chat widgets that obscure content
      await page.evaluate(() => {
        const selectors = [
          "[id*='cookie']", "[class*='cookie']",
          "[id*='consent']", "[class*='consent']",
          "[id*='banner']", "[class*='banner']",
          "[id*='chat']",   "[class*='chat']",
          "[id*='intercom']","[class*='intercom']",
        ];
        selectors.forEach(sel => {
          document.querySelectorAll(sel).forEach(el => {
            el.style.display = "none";
          });
        });
      });
      const outPath = path.join(OUT_DIR, shot.name);
      await page.screenshot({
        path: outPath,
        clip: { x: 0, y: 0, width: VIEWPORT.width, height: VIEWPORT.height },
        type: "jpeg",
        quality: 85,
      });
      console.log(`  ✔ Saved → public/screenshots/${shot.name}`);
    } catch (err) {
      console.error(`  ✗ Failed: ${err.message}`);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  console.log("\n✅ All screenshots done.");
}

takeScreenshots().catch(err => {
  console.error(err);
  process.exit(1);
});
