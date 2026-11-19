"use client";

import Image from "next/image";
import { useEffect } from "react";
import { aiLeadership, publicService, socialAccounts } from "../data/portfolio";

const PLATFORM_ICONS: Record<string, string> = {
  YouTube:   "▶",
  TikTok:    "♪",
  Instagram: "◈",
  LinkedIn:  "in",
  GitHub:    "</>",
};

const PLATFORM_COLORS: Record<string, string> = {
  YouTube:   "#FF0000",
  TikTok:    "#69C9D0",
  Instagram: "#E1306C",
  LinkedIn:  "#0A66C2",
  GitHub:    "#333",
};

function TikTokEmbed() {
  useEffect(() => {
    const existing = document.querySelector('script[src="https://www.tiktok.com/embed.js"]');
    if (!existing) {
      const s = document.createElement("script");
      s.src = "https://www.tiktok.com/embed.js";
      s.async = true;
      document.body.appendChild(s);
    } else {
      // @ts-expect-error tiktok embed script
      if (window.tiktok) window.tiktok.reload?.();
    }
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <blockquote
        className="tiktok-embed"
        cite="https://www.tiktok.com/@pitterpatterdiving"
        data-unique-id="pitterpatterdiving"
        data-embed-type="creator"
        style={{ maxWidth: 780, minWidth: 288, width: "100%" }}
      >
        <section>
          <a target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/@pitterpatterdiving?refer=creator_embed">
            @pitterpatterdiving
          </a>
        </section>
      </blockquote>
    </div>
  );
}

function SocialCard({ account }: { account: typeof socialAccounts[0] }) {
  const color = PLATFORM_COLORS[account.platform] ?? "var(--accent)";
  const icon  = PLATFORM_ICONS[account.platform] ?? "→";
  return (
    <a
      href={account.url}
      target="_blank"
      rel="noopener noreferrer"
      className="about-social-card"
      style={{ "--platform-color": color } as React.CSSProperties}
    >
      <div className="about-spc-icon" style={{ background: color }}>{icon}</div>
      <div className="about-spc-body">
        <div className="about-spc-platform">{account.platform}</div>
        <div className="about-spc-handle">{account.handle}</div>
        <div className="about-spc-desc">{account.description}</div>
      </div>
      <div className="about-spc-arrow">→</div>
    </a>
  );
}

export default function AboutPage() {
  const githubAccount = {
    id: 99,
    platform: "GitHub",
    handle: "lkilpatrick",
    url: "https://github.com/lkilpatrick",
    description: "Open-source projects, Victron VRM API reference, Flutter apps, and AI agent code.",
    embedType: "linkedin" as const,
  };
  const allAccounts = [...socialAccounts, githubAccount];

  return (
    <>
      {/* ── Section 1: Personal Story ── */}
      <section className="about-hero section-body">
        <div className="about-hero-inner content-wrap">
          <div className="about-hero-text">
            <div className="about-eyebrow">About</div>
            <h1 className="about-title">I make complex things<br />easy to care about.</h1>
            <p className="about-desc">
              My career is a single thread: take something technical and hard, find the story
              inside it, and put that story in front of the people who need it most. At{" "}
              <a href="https://www.atlassian.com" target="_blank" rel="noopener noreferrer" className="about-inline-link">Atlassian</a>,{" "}
              <a href="https://www.nutanix.com" target="_blank" rel="noopener noreferrer" className="about-inline-link">Nutanix</a>,{" "}
              <a href="https://linearb.io" target="_blank" rel="noopener noreferrer" className="about-inline-link">LinearB</a>, and{" "}
              <a href="https://hazelcast.com" target="_blank" rel="noopener noreferrer" className="about-inline-link">Hazelcast</a> that
              meant developer portals, onboarding flows, and programs that turned engineers into
              advocates. Outside work, it means the{" "}
              <a href="https://miakingtide.com/books/" target="_blank" rel="noopener noreferrer" className="about-inline-link">Mia Kingtide Ocean Adventures</a>{" "}
              series, where a 12-year-old dives Monterey Bay, sails to the Sea of Cortez, and
              fights to protect the ocean. The marine biology is reviewed by scientists at{" "}
              <a href="https://www.mbari.org" target="_blank" rel="noopener noreferrer" className="about-inline-link">MBARI</a> and{" "}
              <a href="https://hopkinsmarine.stanford.edu" target="_blank" rel="noopener noreferrer" className="about-inline-link">Hopkins Marine Station</a>.
            </p>
            <p className="about-desc">
              The skill is the same in both. Reduce the complexity. Find the hook. Build the
              world around the idea until the audience can&apos;t look away. Whether the audience
              is a senior engineer evaluating an API or an eight-year-old on a long car ride,
              the job is identical: make them feel like the subject was made for them.
            </p>
            <div className="about-stat-row">
              <div className="about-stat">
                <div className="about-stat-value">1996</div>
                <div className="about-stat-label">Started Building</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-value">7</div>
                <div className="about-stat-label">Featured Books Published</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-value">2</div>
                <div className="about-stat-label">Boats</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-value">10K</div>
                <div className="about-stat-label">TikTok Followers</div>
              </div>
            </div>
          </div>

          <div className="about-hero-right">
            <div className="about-hero-portrait">
              <Image
                src="/photos/about-portrait.jpg"
                alt="Luke Kilpatrick"
                width={600}
                height={646}
                className="about-portrait-img"
                priority
              />
            </div>
            </div>
        </div>
      </section>

      <section className="about-leadership section-body section-alt" id="ai-leadership">
        <div className="content-wrap">
          <div className="about-section-eyebrow">Technology &amp; Adoption</div>
          <h2 className="about-section-title">AI Technology Leadership</h2>
          <div className="about-leadership-grid">
            <div>
              <p className="about-desc">
                I&apos;ve spent most of my career at the boundary between technology and adoption. Sometimes that meant building developer platforms. Sometimes it meant building the developer community, documentation, go-to-market system, or organizational structure around them. Increasingly, it means applied AI.
              </p>
              <p className="about-desc">
                I&apos;m unusual in that I still build. My recent work spans production web and mobile applications, data systems, developer infrastructure, and AI-enabled workflows developed from architecture through deployment.
              </p>
            </div>
            <div className="about-leadership-card">
              <div className="about-leadership-credential">{aiLeadership.credential}</div>
              <p>{aiLeadership.description}</p>
              <p>The program extended my hands-on engineering and developer-platform background into the organizational and executive questions that determine whether AI systems actually succeed in production.</p>
              <div className="about-leadership-areas">
                {aiLeadership.areas.map(area => <span key={area}>{area}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-early section-body" id="early-years">
        <div className="content-wrap">
          <div className="about-section-eyebrow">The Early Years · 1996–2009</div>
          <h2 className="about-section-title">Before Silicon Valley</h2>

          <div className="about-early-beat">
            <div className="about-early-beat-label">Origin · 1996–2001</div>
            <div className="about-early-copy">
              <p className="about-desc">
                I started in 1996, while still a teenager, helping run some of Ontario&apos;s earliest public internet cafés in Bradford, Barrie, and Newmarket. Much of the job was teaching people what the internet was, years before it became part of everyday life.
              </p>
              <p className="about-desc">
                At Seneca College in Toronto, I studied computer graphics and digital media. An internship with the SPACE.com Canada and Starry Night team led to my astronomy imagery being credited in the 2001 release of <em>Deep Space Explorer</em>. I also provided technical support at Astro-Physics, helping serious amateur and professional astronomers run precision equatorial mounts — an early version of the translator-between-complex-systems-and-real-people role I&apos;ve held ever since.
              </p>
            </div>
          </div>

          <div className="about-early-beat">
            <div className="about-early-beat-label">Enterprise Engineering · 2001–2009</div>
            <p className="about-section-intro about-early-intro">
              Alongside running my freelance shop, Digital Salamander, I spent 2004–2008 building production ColdFusion systems inside six companies. This was enterprise engineering: commerce, accessibility, compliance, global operations, reusable frameworks, and early rich internet applications.
            </p>
            <div className="about-enterprise-grid">
              {[
                { company: "Tripp Lite", role: "ColdFusion Developer · Chicago", detail: "Upgraded and maintained a production ColdFusion commerce site." },
                { company: "Follett Software", role: "Enterprise Developer · McHenry, IL", detail: "Built a Section 508-accessible CMS and SOX-compliant rights-management tooling for education technology." },
                { company: "Marshall & Swift/Boeckh", role: "Web Developer · New Berlin, WI", detail: "Redeveloped corporate web properties and interfaces for insurance software." },
                { company: "Kohler", role: "Application Developer · Wisconsin", detail: "Standardized an internal application framework used across global manufacturing operations and trained other developers on it." },
                { company: "ODA", role: "Senior Developer · San Francisco", detail: "Built more than 30 custom CMS modules and helped launch over a dozen client sites in a senior agency role." },
                { company: "BroadChoice", role: "RIA Engineer · San Mateo", detail: "Built across ColdFusion, Flex/AIR, and the early mobile web." },
              ].map(item => (
                <div className="about-enterprise-card" key={item.company}>
                  <div className="about-enterprise-company">{item.company}</div>
                  <div className="about-enterprise-role">{item.role}</div>
                  <p>{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="about-desc about-early-close">
              By the time I became visible in the Bay Area ColdFusion and Adobe communities — and long before Developer Relations was a common job title — I had already spent most of a decade shipping and maintaining production software where accessibility, compliance, and operational reliability mattered.
            </p>
          </div>
        </div>
      </section>

      {/* ── TikTok widget ── */}
      <section className="about-tiktok-section section-body">
        <div className="content-wrap">
          <div className="about-tiktok-label">★ TikTok Channel — @pitterpatterdiving</div>
          <TikTokEmbed />
        </div>
      </section>

      {/* ── Section 2: Mia Kingtide ── */}
      <section className="about-mia section-body section-alt" id="mia-kingtide">
        <div className="content-wrap">
          <div className="about-section-eyebrow">Books &amp; IP</div>
          <h2 className="about-section-title">Mia Kingtide Ocean Adventures</h2>
          <p className="about-section-intro">
            An original conservation IP built from zero. Four novels, a coloring book,
            Ocean Explorer activity books and four audiobooks on Spotify — reviewed by scientists at MBARI, Hopkins Marine Station, and Moss
            Landing Marine Labs, sailed aboard the restored Western Flyer to the Sea of Cortez, and
            featured in Monterey County NOW.
          </p>

          <div className="about-mia-grid">
            <div className="about-mia-text">
              <p className="about-desc">
                Mia Kingtide is a 12-year-old who lives on the Monterey Peninsula, dives, sails, and fights
                to protect the ocean. The novels follow her from Monterey Bay to the Sea of Cortez and back —
                tackling overfishing, habitat destruction, and climate change through adventure-first
                storytelling with a deliberately hopeful frame. Written for middle-grade readers who are
                already paying attention to the world.
              </p>
              <p className="about-desc">
                Scientists at <strong>MBARI</strong>, <strong>Hopkins Marine Station</strong>, and{" "}
                <strong>Moss Landing Marine Labs</strong> reviewed the books for scientific accuracy.
                Physical copies sailed aboard the <strong>Western Flyer</strong> — John Steinbeck and
                Ed Ricketts&apos; legendary vessel — on its restored voyage back to the Sea of Cortez.
                Featured in <strong>Monterey County NOW</strong>.
              </p>

              <div className="about-mia-stats">
                <div className="about-mini-stat"><strong>4</strong> novels</div>
                <div className="about-mini-stat"><strong>3</strong> Ocean Explorer books (Lab coming Nov 21)</div>
                <div className="about-mini-stat"><strong>1</strong> ocean coloring book</div>
                <div className="about-mini-stat"><strong>4</strong> audiobooks on Spotify</div>
                <div className="about-mini-stat"><strong>1,300+</strong> copies sold</div>
              </div>

              <div className="about-mia-links">
                <a href="https://miakingtide.com/books/" target="_blank" rel="noopener noreferrer" className="about-pill-primary">
                  Buy the Books ↗
                </a>
                <a href="https://www.amazon.com/stores/Luke-Kilpatrick/author/B0DNBNF2ZK" target="_blank" rel="noopener noreferrer" className="about-pill">
                  Amazon →
                </a>
                <a href="https://www.montereycountynow.com/entertainment/literature/first-time-author-crafts-a-series-of-environmental-adventures-for-young-readers/article_74462bff-0388-481b-8ebb-9613d75aa11b.html" target="_blank" rel="noopener noreferrer" className="about-pill">
                  Monterey County NOW →
                </a>
              </div>
            </div>

            <div className="about-mia-video">
              <div className="about-video-wrap">
                <iframe
                  src="https://www.youtube.com/embed/GoIaxXyRIlo?rel=0&modestbranding=1"
                  title="Mia Kingtide: The Octopus' Gift — Chapter 1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                />
              </div>
              <div className="about-video-label">The Octopus&apos; Gift — Read Aloud Chapter 1</div>
              <a href="https://www.youtube.com/@LukeKilpatrick" target="_blank" rel="noopener noreferrer" className="about-pill" style={{ marginTop: 12, display: "inline-block" }}>
                Full YouTube Channel →
              </a>
            </div>
          </div>

          {/* ── Novels: image-only cover gallery ── */}
          <div className="about-section-eyebrow" style={{ marginTop: 42 }}>The Four Novels</div>
          <div className="about-mia-covers about-mia-covers--art-only">
            {[
              { title: "The Octopus' Gift", img: "https://miakingtide.com/media/books/the-octopus-gift.jpg", link: "https://miakingtide.com/books/the-octopus-gift/" },
              { title: "Guardian of the Coast", img: "https://miakingtide.com/media/books/guardian-of-the-coast.jpg", link: "https://miakingtide.com/books/guardian-of-the-coast/" },
              { title: "Journey to the Sea of Cortez", img: "https://miakingtide.com/media/books/journey-to-the-sea-of-cortez.jpg", link: "https://miakingtide.com/books/journey-to-the-sea-of-cortez/" },
              { title: "The Vanishing Sanctuary", img: "https://miakingtide.com/media/books/the-vanishing-sanctuary.jpg", link: "https://miakingtide.com/books/the-vanishing-sanctuary/" },
            ].map((book) => (
              <a key={book.title} href={book.link} target="_blank" rel="noopener noreferrer" aria-label={`Explore ${book.title} on Mia Kingtide`} className="about-book-cover-link about-book-cover-link--art-only">
                <Image src={book.img} alt={`Cover of ${book.title}`} width={420} height={630} unoptimized className="about-book-cover about-book-cover--art-only" />
              </a>
            ))}
          </div>

          {/* ── Coloring book and Ocean Explorer series: image-only gallery ── */}
          <div className="about-section-eyebrow" style={{ marginTop: 48 }}>Coloring &amp; Ocean Explorer Books</div>
          <div className="about-mia-covers about-mia-covers--art-only">
            {[
              { title: "Ocean Adventure Coloring Book", img: "https://miakingtide.com/media/books/ocean-adventure-coloring-book.jpg", link: "https://miakingtide.com/books/activity/ocean-adventure-coloring-book/" },
              { title: "Ocean Explorer Activities", img: "https://miakingtide.com/media/books/ocean-explorer-activities.jpg", link: "https://miakingtide.com/books/activity/ocean-explorer-activities/" },
              { title: "Ocean Explorer Field Log", img: "https://miakingtide.com/media/books/ocean-explorer-field-log.jpg", link: "https://miakingtide.com/books/activity/ocean-explorer-field-log/" },
              { title: "Ocean Explorer Lab", img: "https://miakingtide.com/media/covers/ocean-explorer-lab.jpg", link: "https://miakingtide.com/books/activity/ocean-explorer-lab/" },
            ].map((book) => (
              <a key={book.title} href={book.link} target="_blank" rel="noopener noreferrer" aria-label={`Explore ${book.title} on Mia Kingtide`} className="about-book-cover-link about-book-cover-link--art-only">
                <Image src={book.img} alt={`Cover of ${book.title}`} width={420} height={630} unoptimized className="about-book-cover about-book-cover--art-only" />
              </a>
            ))}
          </div>

          {/* ── Audiobooks ── */}
          <div className="about-mia-audio-strip">
            <div className="about-mia-audio-label">Also on</div>
            {[
              { platform: "Spotify", desc: "All 4 audiobooks", link: "https://open.spotify.com/show/7rFEzmP52SHH2Jo781GEvq", icon: "♪" },
              { platform: "ElevenReader", desc: "AI narration", link: "https://elevenreader.io/authors/FS38IhgzssBAtrwUD4Ob", icon: "◈" },
              { platform: "Amazon Author Page", desc: "All formats", link: "https://www.amazon.com/stores/Luke-Kilpatrick/author/B0DNBNF2ZK", icon: "▶" },
            ].map(a => (
              <a key={a.platform} href={a.link} target="_blank" rel="noopener noreferrer" className="about-audio-chip">
                <span className="about-audio-chip-icon">{a.icon}</span>
                <span className="about-audio-chip-body">
                  <span className="about-audio-chip-platform">{a.platform}</span>
                  <span className="about-audio-chip-desc">{a.desc}</span>
                </span>
              </a>
            ))}
          </div>

          <div className="about-science-bar">
            <div className="about-science-label">Scientifically reviewed by</div>
            <div className="about-science-chips">
              <span className="about-science-chip">MBARI</span>
              <span className="about-science-chip">Hopkins Marine Station</span>
              <span className="about-science-chip">Moss Landing Marine Labs</span>
              <span className="about-science-chip">Western Flyer Foundation</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Pitter Patter Ecosystem ── */}
      <section className="about-ppd section-body" id="pitter-patter">
        <div className="content-wrap">
          <div className="about-section-eyebrow">Pitter Patter Diving</div>
          <h2 className="about-section-title">Pitter Patter Diving Ecosystem</h2>
          <p className="about-section-intro">
            A full media, tourism, and commerce platform built around the thing I care about most.
            Same discipline as building a developer ecosystem: find content-market fit, build the audience,
            convert across channels. Validated in the wild with real revenue and real community.
          </p>

          {/* ── Photo mosaic ── */}
          <div className="about-photo-mosaic">
            <a href="https://pitterpatterdiving.artstorefronts.com/" target="_blank" rel="noopener noreferrer" className="about-photo-tile about-photo-tile--tall">
              <Image src="/photos/about-diver-reef.jpg" alt="Diver on coral reef" fill style={{ objectFit: "cover" }} />
              <div className="about-photo-caption">Coral reef, Indo-Pacific</div>
            </a>
            <div className="about-photo-col">
              <a href="https://pitterpatterdiving.artstorefronts.com/" target="_blank" rel="noopener noreferrer" className="about-photo-tile">
                <Image src="/photos/about-clownfish.jpg" alt="Clownfish pair in anemone" fill style={{ objectFit: "cover" }} />
                <div className="about-photo-caption">Clownfish pair</div>
              </a>
              <a href="https://pitterpatterdiving.artstorefronts.com/" target="_blank" rel="noopener noreferrer" className="about-photo-tile">
                <Image src="/photos/about-whale.jpg" alt="Humpback whale breaching" fill style={{ objectFit: "cover" }} />
                <div className="about-photo-caption">Humpback, Monterey Bay</div>
              </a>
            </div>
            <a href="https://pitterpatterdiving.artstorefronts.com/" target="_blank" rel="noopener noreferrer" className="about-photo-tile about-photo-tile--tall">
              <Image src="/photos/about-underwater-1.jpg" alt="Hermit crab macro, Monterey" fill style={{ objectFit: "cover" }} />
              <div className="about-photo-caption">Hermit crab, Monterey Bay</div>
            </a>
          </div>
          <div className="about-photo-credit">Underwater photography by Luke Kilpatrick &mdash; <a href="https://pitterpatterdiving.artstorefronts.com/" target="_blank" rel="noopener noreferrer">prints available</a></div>

          <div className="about-ppd-grid">
            <a href="https://pitterpatterdiving.com/" target="_blank" rel="noopener noreferrer" className="about-ppd-card">
              <div className="about-ppd-icon">✍</div>
              <div className="about-ppd-label">Dive Blog &amp; Content</div>
              <div className="about-ppd-desc">pitterpatterdiving.com — technical articles, ocean stories, AI build tutorials, and Monterey Bay guides.</div>
              <div className="about-ppd-link">pitterpatterdiving.com →</div>
            </a>
            <a href="https://www.tiktok.com/@pitterpatterdiving" target="_blank" rel="noopener noreferrer" className="about-ppd-card">
              <div className="about-ppd-icon">♪</div>
              <div className="about-ppd-label">TikTok — 10K Followers</div>
              <div className="about-ppd-desc">10K followers in a single summer from zero. Proof of rapid audience growth through consistency and content-market fit.</div>
              <div className="about-ppd-link">@pitterpatterdiving →</div>
            </a>
            <a href="https://www.boatsetter.com/boats/vxbfqbx" target="_blank" rel="noopener noreferrer" className="about-ppd-card">
              <div className="about-ppd-icon">⛵</div>
              <div className="about-ppd-label">Boat Rental</div>
              <div className="about-ppd-desc">Charter and dive tour operator on Monterey Bay. Pitter Patter — a Shamrock 260 express cruiser — listed on Boatsetter for half-day and full-day trips.</div>
              <div className="about-ppd-link">Boatsetter listing →</div>
            </a>
            <a href="https://www.airbnb.com/rooms/2685574" target="_blank" rel="noopener noreferrer" className="about-ppd-card">
              <div className="about-ppd-icon">🏠</div>
              <div className="about-ppd-label">Ocean View Airbnb</div>
              <div className="about-ppd-desc">5-star guest suite on the Monterey Peninsula — ocean views, hot tub, king bed. Active since 2020. Consistently top-rated.</div>
              <div className="about-ppd-link">Airbnb listing →</div>
            </a>
            <a href="https://pitterpatterdiving.artstorefronts.com/" target="_blank" rel="noopener noreferrer" className="about-ppd-card">
              <div className="about-ppd-icon">📷</div>
              <div className="about-ppd-label">Underwater Photography</div>
              <div className="about-ppd-desc">Fine art prints from Monterey Bay — nudibranchs, sea otters, kelp forests, and the creatures of the California coast.</div>
              <div className="about-ppd-link">Art store →</div>
            </a>
            <a href="https://pitterpatterdiving.com/i-built-an-ai-agent-that-monitors-my-boats-while-i-sleep-and-you-can-use-it-too/" target="_blank" rel="noopener noreferrer" className="about-ppd-card">
              <div className="about-ppd-icon">🤖</div>
              <div className="about-ppd-label">AI Boat Monitoring Agent</div>
              <div className="about-ppd-desc">Python + Victron VRM API. Queries live telemetry overnight and sends a daily status report. Open-source. See Work page for technical depth.</div>
              <div className="about-ppd-link">Read the build →</div>
            </a>
          </div>
        </div>
      </section>

      <section className="about-public-service section-body section-alt" id="public-service">
        <div className="content-wrap">
          <div className="about-section-eyebrow">Leadership &amp; Governance</div>
          <h2 className="about-section-title">Public Service</h2>
          <div className="about-service-card">
            <div>
              <div className="about-service-title">{publicService.title}</div>
              <p>{publicService.description}</p>
            </div>
            <a href={publicService.link} target="_blank" rel="noopener noreferrer" className="about-pill">
              Political site →
            </a>
          </div>
        </div>
      </section>

      {/* ── Section 4: Social Channels ── */}
      <section className="about-social section-body" id="channels">
        <div className="content-wrap">
          <div className="about-section-eyebrow">Social &amp; Channels</div>
          <h2 className="about-section-title">Social &amp; Channels</h2>
          <p className="about-section-intro">
            Where I build in public — developer content, ocean life, and audience experiments.
          </p>

          <div style={{ display: "grid", gap: 12, marginBottom: 56 }}>
            {allAccounts.map(account => (
              <SocialCard key={account.id} account={account} />
            ))}
          </div>

        </div>
      </section>

      <style>{`
        .about-early-beat + .about-early-beat {
          margin-top: 44px;
          padding-top: 40px;
          border-top: 1px solid var(--color-border);
        }
        .about-early-beat-label {
          margin-bottom: 18px;
          color: var(--color-primary);
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }
        .about-early-copy {
          max-width: 900px;
          columns: 2;
          column-gap: 48px;
        }
        .about-early-copy .about-desc { break-inside: avoid; }
        .about-early-intro { max-width: 820px; margin-bottom: 28px; }
        .about-enterprise-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }
        .about-enterprise-card {
          padding: 22px;
          background: var(--color-bg-card);
          border: 1px solid var(--color-border-light);
          border-radius: 10px;
          box-shadow: var(--shadow-card);
        }
        .about-enterprise-company {
          margin-bottom: 4px;
          color: var(--heading);
          font-family: var(--font-serif), Georgia, serif;
          font-size: 18px;
        }
        .about-enterprise-role {
          margin-bottom: 12px;
          color: var(--color-primary);
          font-family: var(--font-mono), monospace;
          font-size: 9px;
          line-height: 1.5;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }
        .about-enterprise-card p {
          color: var(--text-muted);
          font-size: 13px;
          line-height: 1.65;
        }
        .about-early-close { max-width: 860px; margin-top: 28px; }
        .about-leadership-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 48px;
          align-items: start;
        }
        .about-leadership-card, .about-service-card {
          background: var(--color-bg-card);
          border: 1px solid var(--color-border-light);
          border-radius: var(--radius);
          padding: 32px;
          box-shadow: var(--shadow-card);
        }
        .about-leadership-credential, .about-service-title {
          font-family: var(--font-serif), Georgia, serif;
          font-size: 22px;
          color: var(--heading);
          margin-bottom: 14px;
        }
        .about-leadership-card p, .about-service-card p {
          color: var(--text-muted);
          font-size: 14px;
          line-height: 1.75;
          margin-bottom: 16px;
        }
        .about-leadership-areas {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .about-leadership-areas span {
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          color: var(--color-primary);
          border: 1px solid var(--color-border);
          border-radius: 4px;
          padding: 5px 9px;
        }
        .about-service-card {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 32px;
        }
        .about-service-card p { margin-bottom: 0; }
        .about-service-card .about-pill { flex-shrink: 0; }
        /* ── Photo mosaic ── */
        .about-photo-mosaic {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 8px;
          margin-bottom: 12px;
          border-radius: 12px;
          overflow: hidden;
          height: 400px;
        }
        .about-photo-col {
          display: grid;
          grid-template-rows: 1fr 1fr;
          gap: 8px;
        }
        .about-photo-tile {
          position: relative;
          overflow: hidden;
          display: block;
          background: var(--bg-card);
        }
        .about-photo-tile--tall {
          grid-row: span 1;
        }
        .about-photo-tile img {
          transition: transform 0.4s ease;
        }
        .about-photo-tile:hover img {
          transform: scale(1.04);
        }
        .about-photo-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 6px 10px;
          background: linear-gradient(transparent, rgba(0,0,0,0.55));
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          color: rgba(255,255,255,0.85);
          letter-spacing: 0.5px;
          opacity: 0;
          transition: opacity 0.2s;
        }
        .about-photo-tile:hover .about-photo-caption {
          opacity: 1;
        }
        .about-photo-credit {
          font-family: var(--font-mono), monospace;
          font-size: 11px;
          color: var(--text-dim);
          margin-bottom: 40px;
          text-align: right;
        }
        .about-photo-credit a {
          color: var(--color-primary-light);
          border-bottom: 1px solid var(--color-primary-light);
          padding-bottom: 1px;
        }
        @media (max-width: 860px) {
          .about-hero-inner {
            grid-template-columns: 1fr;
          }
          .about-hero-right { max-width: 400px; }
        }
        @media (max-width: 860px) {
          .about-photo-mosaic {
            grid-template-columns: 1fr 1fr;
            height: 280px;
          }
          .about-photo-tile--tall:last-child { display: none; }
        }

        /* ── Hero ── */
        .about-hero { background: var(--bg); }
        .about-hero-inner {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 64px;
          align-items: start;
        }
        .about-hero-right {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }
        .about-hero-portrait {
          width: 100%;
        }
        .about-portrait-img {
          width: 100%;
          height: auto;
          border-radius: 12px;
          display: block;
          object-fit: cover;
        }
        .about-eyebrow {
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 16px;
        }
        .about-title {
          font-family: var(--font-serif), Georgia, serif;
          font-size: clamp(30px, 4vw, 52px);
          font-weight: 400;
          color: var(--heading);
          letter-spacing: -0.5px;
          line-height: 1.1;
          margin-bottom: 24px;
        }
        .about-inline-link {
          color: var(--color-primary-light);
          border-bottom: 1px solid var(--color-primary-light);
          padding-bottom: 1px;
          text-decoration: none;
          transition: opacity 0.15s;
        }
        .about-inline-link:hover { opacity: 0.75; }
        .about-desc {
          font-size: 16px;
          color: var(--text-muted);
          line-height: 1.8;
          margin-bottom: 18px;
        }
        .about-stat-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-top: 32px;
          padding-top: 28px;
          border-top: 1px solid var(--border);
        }
        .about-stat-value {
          font-family: var(--font-serif), Georgia, serif;
          font-size: 22px;
          color: var(--heading);
          margin-bottom: 4px;
        }
        .about-stat-label {
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--text-dim);
        }

        /* ── Parallel callout ── */
        .about-parallel {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 0;
          align-items: stretch;
          border: 1px solid var(--border);
          border-radius: var(--radius);
          overflow: hidden;
          align-self: start;
        }
        .about-parallel-col {
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .about-parallel-col--dev {
          background: rgba(12,74,110,0.04);
        }
        .about-parallel-col--books {
          background: rgba(217,119,6,0.04);
        }
        .about-parallel-eyebrow {
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-weight: 700;
        }
        .about-parallel-col--dev .about-parallel-eyebrow { color: var(--color-primary); }
        .about-parallel-col--books .about-parallel-eyebrow { color: var(--color-accent-hover); }
        .about-parallel-items {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .about-parallel-item {
          font-size: 14px;
          color: var(--color-text-secondary);
          line-height: 1.55;
          padding-left: 14px;
          border-left: 2px solid var(--border);
        }
        .about-parallel-col--dev .about-parallel-item {
          border-left-color: rgba(12,74,110,0.3);
        }
        .about-parallel-col--books .about-parallel-item {
          border-left-color: rgba(217,119,6,0.3);
        }
        .about-parallel-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          background: var(--bg-card);
          border-left: 1px solid var(--border);
          border-right: 1px solid var(--border);
        }
        .about-parallel-equals {
          font-family: var(--font-serif), Georgia, serif;
          font-size: 28px;
          color: var(--color-primary);
          opacity: 0.4;
          font-weight: 400;
        }

        /* ── Section headers ── */
        .about-section-eyebrow {
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 12px;
        }
        .about-section-title {
          font-family: var(--font-serif), Georgia, serif;
          font-size: clamp(26px, 3.5vw, 40px);
          font-weight: 400;
          color: var(--heading);
          margin-bottom: 16px;
          letter-spacing: -0.5px;
        }
        .about-section-intro {
          font-size: 16px;
          color: var(--text-muted);
          line-height: 1.75;
          max-width: 640px;
          margin-bottom: 48px;
        }

        /* ── Mia Kingtide ── */
        .about-mia { background: var(--bg-subtle); }
        .about-mia-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          align-items: start;
          margin-bottom: 40px;
        }
        .about-mia-stats {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin: 24px 0;
        }
        .about-mini-stat {
          font-family: var(--font-mono), monospace;
          font-size: 12px;
          color: var(--text-muted);
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 6px;
          padding: 6px 12px;
        }
        .about-mini-stat strong { color: var(--heading); }
        .about-mia-links {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .about-pill-primary {
          font-family: var(--font-mono), monospace;
          font-size: 12px;
          color: #fff;
          background: var(--accent);
          border: 1px solid var(--accent);
          border-radius: 99px;
          padding: 8px 18px;
          text-decoration: none;
          transition: all 0.2s;
        }
        .about-pill-primary:hover { background: var(--accent-light); border-color: var(--accent-light); }
        .about-pill {
          font-family: var(--font-mono), monospace;
          font-size: 11px;
          color: var(--text-muted);
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 99px;
          padding: 7px 16px;
          text-decoration: none;
          transition: all 0.2s;
        }
        .about-pill:hover {
          color: var(--accent);
          border-color: var(--border-accent);
          background: var(--accent-glow);
        }
        .about-mia-video { }

        /* ── Book cover grid ── */
        .about-mia-covers {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 28px;
          margin-top: 48px;
          padding-top: 40px;
          border-top: 1px solid var(--color-border-light);
        }
        .about-mia-covers--landscape {
          grid-template-columns: repeat(2, 1fr);
        }
        .about-book-card {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .about-book-card--landscape .about-book-cover--landscape {
          width: 100%;
          height: auto;
          aspect-ratio: 340 / 220;
          object-fit: cover;
        }
        .about-tiktok-section {
          background: var(--color-bg);
          padding-top: 40px !important;
          padding-bottom: 40px !important;
        }
        .about-tiktok-label {
          font-family: var(--font-mono), monospace;
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--color-primary);
          margin-bottom: 20px;
        }
        .about-book-cover-link {
          position: relative;
          display: block;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.15);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .about-book-cover-link:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0,0,0,0.2);
        }
        .about-book-cover {
          width: 100%;
          height: auto;
          display: block;
        }
        /* Consistent large covers, without overlays, captions or cropping. */
        .about-mia-covers--art-only {
          align-items: start;
          gap: 20px;
        }
        .about-book-cover-link--art-only {
          display: flex;
          align-items: center;
          justify-content: center;
          aspect-ratio: 2 / 3;
          background: transparent;
        }
        .about-book-cover--art-only {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        .about-book-num {
          position: absolute;
          top: 10px;
          left: 10px;
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1px;
          color: #fff;
          background: rgba(12,74,110,0.85);
          padding: 3px 8px;
          border-radius: 4px;
        }
        .about-book-meta {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .about-book-title {
          font-size: 14px;
          font-weight: 700;
          color: var(--heading);
          line-height: 1.3;
        }
        .about-book-desc {
          font-size: 12px;
          color: var(--color-text-secondary);
          line-height: 1.5;
        }
        .about-book-actions {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: 4px;
        }
        .about-book-buy {
          font-family: var(--font-mono), monospace;
          font-size: 11px;
          font-weight: 600;
          color: #fff;
          background: var(--color-accent);
          border: 1px solid var(--color-accent);
          padding: 5px 12px;
          border-radius: 6px;
          text-decoration: none;
          transition: all 0.2s;
        }
        .about-book-buy:hover {
          background: var(--color-accent-hover);
          border-color: var(--color-accent-hover);
        }
        .about-book-amz {
          font-family: var(--font-mono), monospace;
          font-size: 11px;
          font-weight: 600;
          color: var(--color-primary);
          background: transparent;
          border: 1px solid rgba(12,74,110,0.25);
          padding: 5px 12px;
          border-radius: 6px;
          text-decoration: none;
          transition: all 0.2s;
        }
        .about-book-amz:hover {
          background: var(--color-primary);
          color: #fff;
          border-color: var(--color-primary);
        }

        /* ── Audio strip ── */
        .about-mia-audio-strip {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 32px;
          flex-wrap: wrap;
        }
        .about-mia-audio-label {
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--color-text-muted);
          white-space: nowrap;
        }
        .about-audio-chip {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          border-radius: 8px;
          border: 1px solid var(--color-border-light);
          background: var(--color-bg-card);
          text-decoration: none;
          color: inherit;
          transition: all 0.2s;
        }
        .about-audio-chip:hover {
          border-color: var(--color-primary);
          background: rgba(12,74,110,0.04);
          color: inherit;
        }
        .about-audio-chip-icon {
          font-size: 14px;
          color: var(--color-primary);
        }
        .about-audio-chip-body {
          display: flex;
          flex-direction: column;
          gap: 1px;
        }
        .about-audio-chip-platform {
          font-size: 13px;
          font-weight: 700;
          color: var(--heading);
        }
        .about-audio-chip-desc {
          font-size: 11px;
          color: var(--color-text-secondary);
        }

        .about-video-wrap {
          position: relative;
          padding-bottom: 56.25%;
          height: 0;
          background: #000;
          border-radius: 10px;
          overflow: hidden;
          border: 1px solid var(--border);
          box-shadow: var(--shadow-card);
        }
        .about-video-label {
          font-family: var(--font-mono), monospace;
          font-size: 11px;
          color: var(--text-dim);
          margin-top: 10px;
          margin-bottom: 8px;
        }
        .about-science-bar {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          padding: 20px 24px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
        }
        .about-science-label {
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--text-dim);
          flex-shrink: 0;
        }
        .about-science-chips { display: flex; flex-wrap: wrap; gap: 8px; }
        .about-science-chip {
          font-family: var(--font-mono), monospace;
          font-size: 11px;
          color: var(--teal);
          background: var(--teal-glow);
          border: 1px solid rgba(11,158,138,0.2);
          border-radius: 4px;
          padding: 4px 10px;
        }

        /* ── Pitter Patter Grid ── */
        .about-ppd { background: var(--bg); }
        .about-ppd-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        .about-ppd-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 28px 24px;
          text-decoration: none;
          color: inherit;
          transition: all 0.25s ease;
          box-shadow: var(--shadow-card);
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .about-ppd-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-card-hover);
          border-color: var(--border-accent);
          color: inherit;
        }
        .about-ppd-icon { font-size: 28px; margin-bottom: 4px; }
        .about-ppd-label {
          font-size: 15px;
          font-weight: 700;
          color: var(--heading);
        }
        .about-ppd-desc {
          font-size: 13px;
          color: var(--text-muted);
          line-height: 1.6;
          flex: 1;
        }
        .about-ppd-link {
          font-family: var(--font-mono), monospace;
          font-size: 11px;
          color: var(--accent);
          margin-top: 8px;
        }

        /* ── Civic ── */
        .about-civic { background: var(--bg-subtle); }
        .about-civic-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        .about-civic-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 32px;
          box-shadow: var(--shadow-card);
        }
        .about-civic-tag {
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 10px;
        }
        .about-civic-title {
          font-family: var(--font-serif), Georgia, serif;
          font-size: 22px;
          font-weight: 400;
          color: var(--heading);
          margin-bottom: 14px;
        }
        .about-civic-desc {
          font-size: 14px;
          color: var(--text-muted);
          line-height: 1.75;
          margin-bottom: 16px;
        }
        .about-civic-link {
          font-family: var(--font-mono), monospace;
          font-size: 11px;
          color: var(--accent);
          text-decoration: none;
          border-bottom: 1px solid var(--border-accent);
          padding-bottom: 1px;
        }

        /* ── Social ── */
        .about-social { background: var(--bg); }
        .about-social-card {
          display: grid;
          grid-template-columns: 56px 1fr auto;
          align-items: center;
          gap: 20px;
          padding: 20px 24px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 12px;
          text-decoration: none;
          transition: all 0.2s ease;
          color: inherit;
        }
        .about-social-card:hover {
          border-color: var(--platform-color, var(--border-accent));
          background: var(--bg-card-hover);
          transform: translateY(-2px);
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
          color: inherit;
        }
        .about-spc-icon {
          width: 48px; height: 48px;
          border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          color: #fff;
          font-size: 18px; font-weight: 700;
          flex-shrink: 0;
          font-family: var(--font-mono), monospace;
        }
        .about-spc-platform {
          font-family: var(--font-mono), monospace;
          font-size: 10px; letter-spacing: 1.5px; text-transform: uppercase;
          color: var(--text-dim); margin-bottom: 2px;
        }
        .about-spc-handle { font-size: 16px; font-weight: 600; color: var(--heading); margin-bottom: 4px; }
        .about-spc-desc { font-size: 13px; color: var(--text-muted); line-height: 1.5; }
        .about-spc-arrow {
          font-size: 20px; color: var(--text-dim);
          transition: transform 0.2s, color 0.2s; flex-shrink: 0;
        }
        .about-social-card:hover .about-spc-arrow { transform: translateX(4px); color: var(--accent); }
        .about-tiktok-label {
          font-family: var(--font-mono), monospace;
          font-size: 11px; letter-spacing: 2px; text-transform: uppercase;
          color: var(--accent); margin-bottom: 20px;
        }

        /* ── Responsive ── */
        @media (max-width: 960px) {
          .about-early-copy { columns: 1; }
          .about-enterprise-grid { grid-template-columns: repeat(2, 1fr); }
          .about-hero-inner { grid-template-columns: 1fr; gap: 48px; }
          .about-leadership-grid { grid-template-columns: 1fr; gap: 28px; }
          .about-stat-row { grid-template-columns: repeat(2, 1fr); }
          .about-mia-grid { grid-template-columns: 1fr; }
          .about-parallel { grid-template-columns: 1fr; }
          .about-parallel-divider { width: 100%; height: 40px; border-left: none; border-right: none; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
          .about-mia-covers { grid-template-columns: repeat(2, 1fr); }
          .about-mia-series { grid-template-columns: 1fr; gap: 32px; }
          .about-ppd-grid { grid-template-columns: repeat(2, 1fr); }
          .about-civic-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 600px) {
          .about-enterprise-grid { grid-template-columns: 1fr; }
          .about-hero-cards { grid-template-columns: 1fr; }
          .about-leadership-card, .about-service-card { padding: 24px; }
          .about-service-card { align-items: flex-start; flex-direction: column; }
          .about-ppd-grid { grid-template-columns: 1fr; }
          .about-stat-row { grid-template-columns: repeat(2, 1fr); }
          .about-social-card { grid-template-columns: 48px 1fr; }
          .about-spc-arrow { display: none; }
        }
      `}</style>
    </>
  );
}
