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

  // ── Content tab ────────────────────────────────────────────────────────────
  {
    name: "content-ai-agent-boats.jpg",
    url: "https://pitterpatterdiving.com/i-built-an-ai-agent-that-monitors-my-boats-while-i-sleep-and-you-can-use-it-too/",
    waitFor: "domcontentloaded",
  },
  {
    name: "content-duplocloud-prompts.jpg",
    url: "https://duplocloud.com/blog/10-prompts-every-engineer-doing-devops-should-know/",
    waitFor: "domcontentloaded",
  },
  {
    name: "content-duplocloud-paas.jpg",
    url: "https://duplocloud.com/blog/is-your-paas-passe/",
    waitFor: "domcontentloaded",
  },
  {
    name: "content-linearb-hacktoberfest.jpg",
    url: "https://linearb.io/blog/how-to-survive-the-pr-overload-from-hacktoberfest/",
    waitFor: "domcontentloaded",
  },
  {
    name: "content-linearb-continuous-merge.jpg",
    url: "https://linearb.io/blog/what-is-continuous-merge/",
    waitFor: "domcontentloaded",
  },

  // ── Impact tab ─────────────────────────────────────────────────────────────
  {
    name: "impact-developer-marketing-guide.jpg",
    url: "https://www.amazon.com/s?k=developer+marketing+essential+guide+slashdata",
    waitFor: "domcontentloaded",
  },
  {
    name: "impact-codegeist.jpg",
    url: "https://www.atlassian.com/blog/add-ons/announcing-codegeist-2015-winners",
    waitFor: "domcontentloaded",
  },
  {
    name: "impact-nutanix-dev-launch.jpg",
    url: "https://www.nutanix.dev/2018/08/16/welcome-to-developer-nutanix-com/",
    waitFor: "domcontentloaded",
  },

  // ── Builder tab ────────────────────────────────────────────────────────────
  {
    name: "builder-mia-kingtide.jpg",
    url: "https://miakingtide.com/",
    waitFor: "domcontentloaded",
  },
  {
    name: "builder-amazon-author.jpg",
    url: "https://www.amazon.com/author/lkilpatrick",
    waitFor: "domcontentloaded",
  },
  {
    name: "builder-tiktok.jpg",
    url: "https://www.tiktok.com/@pitterpatterdiving",
    waitFor: "domcontentloaded",
  },
  {
    name: "builder-redbubble.jpg",
    url: "https://www.redbubble.com/people/lkilpatrick/shop",
    waitFor: "domcontentloaded",
  },
  {
    name: "builder-pitterpatter-blog.jpg",
    url: "https://pitterpatterdiving.com/",
    waitFor: "domcontentloaded",
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
      await page.goto(shot.url, { waitUntil: shot.waitFor, timeout: 45000 });
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
