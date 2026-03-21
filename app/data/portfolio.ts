export const personalInfo = {
  name: "Luke Kilpatrick",
  title: "Developer Experience & Product Marketing",
  tagline:
    "15+ years building developer programs, documentation, and communities at Atlassian, Nutanix, Hazelcast, LinearB, and Harness.",
  intro:
    "I build the content, docs, and onboarding experiences that turn complex infrastructure products into tools developers actually want to use. I also write code, author books, and ship things.",
  location: "SF Bay Area, CA",
  availability: "Available Now",
  availableForWork: true, // Toggle this to false to hide the "Available Now" badge sitewide
  linkedin: "https://www.linkedin.com/in/lukekilpatrick/",
  github: "https://github.com/lkilpatrick",
  youtube: "https://www.youtube.com/@LukeKilpatrick",
};

export const stats = [
  { value: "15+", label: "Years in DevRel", link: "/about" },
  { value: "50+", label: "Speaking Events", link: "/content" },
  { value: "10K", label: "TikTok in One Summer", link: "https://www.tiktok.com/@pitterpatterdiving" },
  { value: "1,300+", label: "Books Published", link: "https://www.amazon.com/stores/Luke-Kilpatrick/author/B0DNBNF2ZK" },
];

export const capabilities = [
  {
    id: 1,
    icon: "terminal",
    title: "Developer Experience",
    description:
      "Developer portals, onboarding systems, API documentation, and technical content that turn complex platforms into tools people actually adopt. Built from zero at Nutanix, LinearB, and Hazelcast.",
    value: "Faster time-to-first-value. Less support burden. Higher ecosystem retention.",
  },
  {
    id: 2,
    icon: "megaphone",
    title: "Product Marketing",
    description:
      "Launch strategy, positioning, competitive messaging, and release communications for developer-facing products. Comfort with technical depth and market narrative simultaneously.",
    value: "Clear positioning that converts. Launches that land. Messaging that sticks.",
  },
  {
    id: 3,
    icon: "people",
    title: "Developer Relations",
    description:
      "Community programs, ecosystem events, conference speaking, and developer advocacy at scale. Ran Codegeist at Atlassian. Built Nutanix Dev Live Twitch channel. Spoke at DevRelCon and beyond.",
    value: "Ecosystems that grow themselves. Communities with real signal.",
  },
  {
    id: 4,
    icon: "sparkle",
    title: "Applied AI Systems",
    description:
      "Generative AI workflows for content production, launch automation, and developer tooling. Built real operational AI systems including a Victron boat monitoring agent and automated reporting pipelines. Uses AI as a daily multiplier, not a talking point.",
    value: "Faster execution. Higher output quality. Systems that run while you sleep.",
  },
];

export const selectedSystems = [
  {
    id: 1,
    tag: "AI + Automation",
    tagColor: "teal" as const,
    title: "Boat Daily Check",
    subtitle: "Victron Monitoring + Automated Reporting",
    description:
      "Python agent that queries the Victron VRM API on a cron schedule, processes live boat power and battery telemetry, and sends a formatted daily email report. Reverse-engineered an undocumented API, published the reference docs, and open-sourced the project.",
    highlights: ["Python agent", "Victron VRM API", "Cron automation", "Open source"],
    link: "https://pitterpatterdiving.com/i-built-an-ai-agent-that-monitors-my-boats-while-i-sleep-and-you-can-use-it-too/",
    proof: "Applied AI + automation. A real system solving a real problem.",
    screenshot: "/screenshots/content-ai-agent-boats.jpg",
  },
  {
    id: 2,
    tag: "Developer Platform",
    tagColor: "blue" as const,
    title: "gitStream Documentation Platform",
    subtitle: "LinearB — Developer Docs from Zero",
    description:
      "Built the complete documentation site for gitStream, LinearB's workflow automation product. Quickstart guides, automation library, integration docs, plugin development, interactive playground, and full API reference. Structured for zero-touch developer onboarding.",
    highlights: ["MkDocs", "API reference", "Self-serve onboarding", "Automation library"],
    link: "https://docs.gitstream.cm/",
    proof: "Developer docs done right. No sales call required.",
    screenshot: "/screenshots/gitstream-docs.jpg",
  },
  {
    id: 3,
    tag: "Race Management",
    tagColor: "teal" as const,
    title: "MPYC RaceDay / RaceSheet",
    subtitle: "Real-Time Sailing Race Management Platform",
    description:
      "Role-based web platform for real-time race management at the Monterey Peninsula Yacht Club. Handles scoring, weather, live coordination, and race day operations across multiple roles simultaneously. Mobile-first, live data, built for a real community.",
    highlights: ["Role-based design", "Live data", "Mobile + web", "Race scoring"],
    link: null,
    proof: "Real product. Real users. Real-time systems thinking.",
    screenshot: null,
  },
  {
    id: 4,
    tag: "Flutter App",
    tagColor: "purple" as const,
    title: "Tech Challenge Kenya Admin Dashboard",
    subtitle: "Flutter Web + Supabase + Firebase",
    description:
      "Production Flutter web admin dashboard serving thousands of students, schools, teams, and judges across Kenya's national STEM competition program. 15 production-ready modules covering auth, RBAC, audit logs, surveys, communications, scoring, and reporting.",
    highlights: ["Flutter Web", "Supabase", "Riverpod", "RBAC + audit logs", "15 modules"],
    link: null,
    proof: "Senior builder capability. Production-grade. Real scale.",
    screenshot: null,
  },
  {
    id: 5,
    tag: "IP + Brand System",
    tagColor: "orange" as const,
    title: "Mia Kingtide Ocean Adventures",
    subtitle: "Books, Games, Audiobooks, and Ocean Education",
    description:
      "Built an original IP from zero across books, interactive games, audiobooks, YouTube, and a commerce ecosystem. 4 books published, 1,300+ copies sold, audiobooks on Spotify and INaudio, OceanMatch browser game, and a TikTok/YouTube audience built around ocean storytelling.",
    highlights: ["4 published books", "Browser game", "Audiobooks", "Audience building"],
    link: "https://miakingtide.com/",
    proof: "Content systems. Brand building. Creative execution at scale.",
    screenshot: "/screenshots/builder-mia-kingtide.jpg",
  },
  {
    id: 6,
    tag: "Browser Game",
    tagColor: "orange" as const,
    title: "OceanMatch",
    subtitle: "Interactive Ocean Education Game",
    description:
      "Browser-based matching game built around the Mia Kingtide ocean conservation universe. Accessible interactive experience connecting characters, ocean species, and educational content for young readers. Part of a broader cross-format IP strategy.",
    highlights: ["Browser game", "Ocean education", "Interactive", "IP extension"],
    link: "https://miakingtide.com/",
    proof: "Product thinking. Accessible design. Content meets interactivity.",
    screenshot: null,
  },
  {
    id: 7,
    tag: "Media Platform",
    tagColor: "green" as const,
    title: "Pitter Patter Diving",
    subtitle: "Ocean Media Brand + Tourism + Commerce",
    description:
      "Full media and commerce brand built around ocean adventures on the Monterey Peninsula. Blog, YouTube, TikTok (10K followers in one summer), dive tourism business, and an AI agent monitoring the boats. Proof of audience-first brand building from zero.",
    highlights: ["10K TikTok", "Blog + YouTube", "Tourism brand", "Commerce"],
    link: "https://pitterpatterdiving.com/",
    proof: "Audience building from scratch. Content-market fit in the wild.",
    screenshot: "/screenshots/builder-pitterpatter-blog.jpg",
  },
];

export const contentPreviews = [
  {
    id: 1,
    type: "Article",
    org: "Personal",
    title: "I Built an AI Agent That Monitors My Boats While I Sleep",
    link: "https://pitterpatterdiving.com/i-built-an-ai-agent-that-monitors-my-boats-while-i-sleep-and-you-can-use-it-too/",
    description: "Python + Victron VRM API + cron. A real working AI agent with open-source code and published API docs.",
  },
  {
    id: 2,
    type: "Article",
    org: "DuploCloud",
    title: "10 Prompts Every Engineer Doing DevOps Should Know",
    link: "https://duplocloud.com/blog/10-prompts-every-engineer-doing-devops-should-know/",
    description: "Practical AI prompt engineering for DevOps: SOC 2 automation, drift detection, incident response.",
  },
  {
    id: 3,
    type: "Talk",
    org: "DevRelCon",
    title: "Building Developer Programs from Zero",
    link: "https://www.youtube.com/watch?v=TgO3yM1qSHw",
    description: "Conference talk on launching nutanix.dev and growing an infrastructure developer ecosystem.",
  },
  {
    id: 4,
    type: "Book",
    org: "Developer Marketing Essential Guide",
    title: "The Developer Marketing Essential Guide",
    link: "https://a.co/d/eIgJG8o",
    description: "Two authored chapters in the definitive guide to developer marketing.",
  },
  {
    id: 5,
    type: "Article",
    org: "LinearB",
    title: "What is Continuous Merge?",
    link: "https://linearb.io/blog/what-is-continuous-merge/",
    description: "Concept introduction for a new engineering workflow category, explaining a novel approach to branch management.",
  },
  {
    id: 6,
    type: "Video",
    org: "Harness",
    title: "Build Intelligence Launch Video",
    link: "https://www.youtube.com/watch?v=hoxZr4dRjSo",
    description: "Product launch video for Harness CI Build Intelligence. Scripted, produced, shipped.",
  },
];

export const onboardingDocs = {
  highlights: [
    {
      label: "Developer Portal — Built From Scratch",
      title: "Nutanix.dev — Developer Portal",
      link: "https://www.nutanix.dev/",
      org: "NUTANIX",
      description:
        "Conceived, launched, and grew the Nutanix developer portal from zero. Built the complete developer onboarding experience for an enterprise infrastructure platform: API reference, hands-on labs, code samples, technical blog, and a live Twitch developer streaming channel for interactive technical content. The portal continues to serve as Nutanix's primary developer resource today, with 49+ open-source repos on GitHub, self-paced labs, and a growing developer community.",
      extraLink: {
        text: "live Twitch developer streaming channel",
        href: "https://www.twitch.tv/nutanixdevlive",
      },
    },
    {
      label: "Documentation Site — Built From Scratch",
      title: "gitStream Documentation Portal",
      link: "https://docs.gitstream.cm/",
      org: "LINEARB",
      description:
        "Built the complete developer documentation site for gitStream, LinearB's workflow automation product. Includes quickstart guides, automation library with copy-paste examples, integration docs, plugin development guides, interactive playground, and full API reference. MkDocs-based, structured for self-serve developer onboarding with zero sales contact required.",
    },
  ],
  cards: [
    {
      org: "HARNESS",
      title: "Harness CI Release Notes",
      link: "https://developer.harness.io/release-notes/continuous-integration/#version-141",
      description:
        "Wrote and maintained release notes for Harness Continuous Integration — precise technical communication for a developer audience tracking breaking changes, new features, and migration guides.",
      tag: "Docs",
      tagColor: "blue" as const,
    },
  ],
};

export const technicalContent = [
  {
    id: 3,
    org: "DUPLOCLOUD",
    title: "Is Your PaaS Passé?",
    link: "https://duplocloud.com/blog/is-your-paas-passe/",
    description:
      "Competitive positioning piece contrasting PaaS limitations with infrastructure automation — strategic content that drives developer consideration for a DevOps platform.",
    tag: "Blog",
    tagColor: "blue" as const,
  },
  {
    id: 4,
    org: "LINEARB",
    title: "How to Survive the PR Overload from Hacktoberfest",
    link: "https://linearb.io/blog/how-to-survive-the-pr-overload-from-hacktoberfest/",
    description:
      "Developer-focused content tied to community events — tactical advice for engineering teams managing open-source contribution spikes.",
    tag: "Blog",
    tagColor: "blue" as const,
  },
  {
    id: 2,
    org: "DUPLOCLOUD",
    title: "10 Prompts Every Engineer Doing DevOps Should Know",
    link: "https://duplocloud.com/blog/10-prompts-every-engineer-doing-devops-should-know/",
    description:
      "Practical AI prompt engineering for DevOps practitioners — SOC 2 automation, drift detection, cost attribution, and incident response. Published on both DuploCloud blog and Medium.",
    tag: "Blog",
    tagColor: "blue" as const,
  },
  {
    id: 5,
    org: "LINEARB",
    title: "What is Continuous Merge?",
    link: "https://linearb.io/blog/what-is-continuous-merge/",
    description:
      "Concept introduction for a new engineering workflow category — explaining a novel approach to branch management for engineering teams.",
    tag: "Blog",
    tagColor: "blue" as const,
  },
  {
    id: 1,
    org: "PERSONAL — TECHNICAL BUILD",
    title: "I Built an AI Agent That Monitors My Boats While I Sleep",
    link: "https://pitterpatterdiving.com/i-built-an-ai-agent-that-monitors-my-boats-while-i-sleep-and-you-can-use-it-too/",
    description:
      "Full technical tutorial: Python agent querying the Victron VRM API, cron-scheduled email reports, open-source on GitHub. Reverse-engineered an under-documented API and published the reference docs myself. Demonstrates the kind of hands-on, build-first content I create.",
    tag: "Code + Tutorial",
    tagColor: "green" as const,
  },
];

export type EmbedType = "youtube" | "vimeo" | "link";

export const videos = [
  {
    id: 1,
    org: "THE TECH INTERACTIVE",
    title: "Interact Conference Keynote",
    link: "https://www.youtube.com/watch?v=26xiaX6SxEQ",
    description: "Presented globally in Fall 2022 — developer community strategy and ecosystem growth.",
    embedType: "youtube" as EmbedType,
    embedId: "26xiaX6SxEQ",
  },
  {
    id: 2,
    org: "HAZELCAST",
    title: "Developer Program Presentation",
    link: "https://youtu.be/rkpZpmwnjew?t=326",
    description: "Building and scaling a developer program from zero for a distributed computing platform.",
    embedType: "youtube" as EmbedType,
    embedId: "rkpZpmwnjew",
  },
  {
    id: 3,
    org: "HARNESS",
    title: "Build Intelligence Launch Video",
    link: "https://www.youtube.com/watch?v=hoxZr4dRjSo",
    description: "Product launch video for Harness CI's Build Intelligence feature — scripted, produced, shipped.",
    embedType: "youtube" as EmbedType,
    embedId: "hoxZr4dRjSo",
  },
  {
    id: 4,
    org: "HARNESS",
    title: "Azure DevOps to Harness Migration",
    link: "https://www.youtube.com/watch?v=zsmYoojBQig",
    description: "Technical walkthrough: step-by-step repository migration tutorial for CI/CD platform adoption.",
    embedType: "youtube" as EmbedType,
    embedId: "zsmYoojBQig",
  },
  {
    id: 5,
    org: "NUTANIX — DEVRELCON",
    title: "DevRelCon: Building Developer Programs",
    link: "https://www.youtube.com/watch?v=TgO3yM1qSHw",
    description: "Conference talk on launching developer.nutanix.com and growing an infrastructure developer ecosystem.",
    embedType: "youtube" as EmbedType,
    embedId: "TgO3yM1qSHw",
  },
  {
    id: 6,
    org: "NUTANIX — DEVRELCON",
    title: "DevRelCon: Developer Marketing",
    link: "https://www.youtube.com/watch?v=OF8bDgoLOkw",
    description: "Strategies for marketing to developers authentically — what works, what backfires, and why trust is everything.",
    embedType: "youtube" as EmbedType,
    embedId: "OF8bDgoLOkw",
  },
  {
    id: 7,
    org: "SENCHA",
    title: "Sencha Product Video — 246K Views",
    link: "https://vimeo.com/55486684",
    description: "Wrote, filmed, and edited. One of the highest-performing developer product videos of its era.",
    embedType: "vimeo" as EmbedType,
    embedId: "55486684",
  },
  {
    id: 8,
    org: "ATLASSIAN",
    title: "SaaS Insider Podcast",
    link: "https://saasinsider.libsyn.com/037-interview-with-luke-kilpatrick-from-atlassian",
    description: "Interview on Atlassian's developer ecosystem strategy and marketplace growth.",
    embedType: "link" as EmbedType,
    embedId: "",
  },
];

export const socialAccounts = [
  {
    id: 1,
    platform: "YouTube",
    handle: "@LukeKilpatrick",
    url: "https://www.youtube.com/@LukeKilpatrick",
    description: "Developer content, product launches, and conference talks. Sencha product video hit 246K views.",
    embedType: "youtube-channel" as const,
    channelId: "UCLukeKilpatrick",
  },
  {
    id: 2,
    platform: "TikTok",
    handle: "@pitterpatterdiving",
    url: "https://www.tiktok.com/@pitterpatterdiving",
    description: "Ocean content channel — 10K followers in a single summer. Proof of concept for rapid audience growth.",
    embedType: "tiktok" as const,
  },
  {
    id: 3,
    platform: "Instagram",
    handle: "@lukekilpat",
    url: "https://www.instagram.com/lukekilpat/",
    description: "Monterey Peninsula life — ocean, diving, and the builder mindset behind the work.",
    embedType: "instagram" as const,
  },
  {
    id: 4,
    platform: "LinkedIn",
    handle: "lukekilpatrick",
    url: "https://www.linkedin.com/in/lukekilpatrick/",
    description: "15+ years of DevRel and developer marketing experience. Full work history, recommendations, and publications.",
    embedType: "linkedin" as const,
  },
];

export const localVideos = [
  {
    id: 1,
    org: "ATLASSIAN",
    title: "Atlassian Arcade",
    file: "/AtlassianArcade.mp4",
    description: "Atlassian developer community event — arcade activation and developer engagement.",
  },
  {
    id: 2,
    org: "ATLASSIAN",
    title: "Bad Ass Developer Activation",
    file: "/BadAss.mp4",
    description: "Developer community activation and engagement event.",
  },
  {
    id: 3,
    org: "ATLASSIAN",
    title: "Connect Week Final",
    file: "/Connect Week Final 2.mp4",
    description: "Atlassian Connect Week — developer program event highlight reel.",
  },
  {
    id: 4,
    org: "ATLASSIAN",
    title: "ShipIt 30 Lights",
    file: "/ShipIt30Lights.mp4",
    description: "ShipIt hackathon event — Atlassian's internal developer hackathon program.",
  },
  {
    id: 5,
    org: "ATLASSIAN",
    title: "XpandIT",
    file: "/XpandIT-SmallRender.mp4",
    description: "XpandIT developer event production.",
  },
  {
    id: 6,
    org: "ATLASSIAN",
    title: "Categories",
    file: "/categories.mp4",
    description: "Atlassian Marketplace categories video production.",
  },
];

export const personalVideos = [
  {
    id: 1,
    org: "ATLASSIAN — JSCONF",
    title: "Node Rockets at JSConf",
    link: "https://youtu.be/UlA_GWx6by0",
    description: "Atlassian-sponsored developer activation at JSConf — teams built and launched Arduino/Raspberry Pi rockets. Shot, edited, and produced.",
    embedType: "youtube" as EmbedType,
    embedId: "UlA_GWx6by0",
  },
  {
    id: 2,
    org: "VMWARE — VIDEO PRODUCTION",
    title: "One Day in Redmond",
    link: "https://youtu.be/xU8mDqd1yeM",
    description: "~30 hours of production using Adobe Fireworks, Photoshop, Premiere, and Camtasia. Demonstrates early video production chops.",
    embedType: "youtube" as EmbedType,
    embedId: "xU8mDqd1yeM",
  },
  {
    id: 3,
    org: "VMWARE — VIDEO PRODUCTION",
    title: "How To Make Money Playing COD",
    link: "https://youtu.be/V-YKTjgdbYQ",
    description: "Captured with a Black Magic Intensity HDMI card, edited in Adobe Premiere with custom overlays and audio production.",
    embedType: "youtube" as EmbedType,
    embedId: "V-YKTjgdbYQ",
  },
  {
    id: 4,
    org: "THREE DAY RULE — EVENT VIDEO",
    title: "Santa Catalina Summer Kick Off",
    link: "https://youtu.be/skkSP-txJlY",
    description: "Event recap video for a 23-person group trip to Santa Catalina — diving, zip-lining, and ocean adventures.",
    embedType: "youtube" as EmbedType,
    embedId: "skkSP-txJlY",
  },
  {
    id: 5,
    org: "PERSONAL — OCEAN / DIVING",
    title: "First Voyage of the Origami",
    link: "https://youtu.be/IwSkghqdPe8",
    description: "First dive from Point Lobos using the Porte-Bote folding boat. Whalers Cove, Monterey Peninsula.",
    embedType: "youtube" as EmbedType,
    embedId: "IwSkghqdPe8",
  },
  {
    id: 6,
    org: "PERSONAL — OCEAN / DIVING",
    title: "Diving the YO-257 and San Pedro off Waikiki",
    link: "https://youtu.be/ZYmSKGCGwso",
    description: "First deep dive to two reefs off the coast of Oahu. Shot on GoPro Hero 3+ Black, mask-mounted — first-person perspective.",
    embedType: "youtube" as EmbedType,
    embedId: "ZYmSKGCGwso",
  },
];

export const strategicWork = [
  {
    id: 1,
    org: "DEVELOPER MARKETING ESSENTIAL GUIDE — AUTHOR",
    title: "The Developer Marketing Essential Guide",
    link: "https://a.co/d/eIgJG8o",
    description:
      "Authored two chapters in the definitive guide to developer marketing. Covers developer program strategy, community building, and measuring developer marketing ROI.",
    tag: "Book",
    tagColor: "orange" as const,
  },
  {
    id: 2,
    org: "ATLASSIAN",
    title: "Codegeist Hackathon Program",
    link: "https://www.atlassian.com/blog/add-ons/announcing-codegeist-2015-winners",
    description:
      "Ran Atlassian's global developer hackathon — Codegeist. Managed App Week developer marketing campaigns that drove measurable ROI in marketplace growth and ecosystem adoption.",
    tag: "Program",
    tagColor: "blue" as const,
  },
  {
    id: 3,
    org: "NUTANIX",
    title: "Built & Launched developer.nutanix.com → nutanix.dev",
    link: "https://www.nutanix.dev/2018/08/16/welcome-to-developer-nutanix-com/",
    description:
      "Created Nutanix's entire developer ecosystem from scratch — portal, docs, API reference, labs, Twitch streaming channel, GitHub org (49+ repos), community strategy, and conference speaking program. The platform I built continues to serve developers today.",
    tag: "Platform",
    tagColor: "blue" as const,
  },
];

export const builderWork = [
  {
    id: 1,
    org: "PERSONAL PROJECT — PYTHON / API",
    title: "Monterey Bay Morning Report System",
    link: null,
    description:
      "Modular email system using OpenClaw Python skills, cron orchestration, Victron VRM API, marine species database (89 species with iNaturalist integration), and GPX waypoint processing from Simrad hardware. Published to ClawHub.",
    tag: "Shipped",
    tagColor: "green" as const,
  },
  {
    id: 2,
    org: "AUTHOR — 4 BOOKS PUBLISHED",
    title: "Mia Kingtide: Ocean Adventures Series",
    link: "https://www.amazon.com/author/lkilpatrick",
    description:
      "Co-authored middle-grade ocean conservation book series. 1,000+ copies sold, 40-80 copies/month. Audiobook versions on Spotify and INaudio. Demonstrates content creation, production, and audience building from zero.",
    tag: "Books",
    tagColor: "orange" as const,
  },
  {
    id: 3,
    org: "AUDIENCE BUILDING",
    title: "TikTok — 10K Followers in 3 Months",
    link: "https://www.tiktok.com/@pitterpatterdiving",
    description:
      "Built a 10K-follower ocean content channel from zero in a single summer. Demonstrates understanding of content-market fit, algorithmic distribution, and rapid audience growth mechanics.",
    tag: "Growth",
    tagColor: "orange" as const,
  },
  {
    id: 4,
    org: "DEVELOPER CULTURE",
    title: "Developer Swag Design Shop",
    link: "https://www.redbubble.com/people/lkilpatrick/shop",
    description:
      "Custom developer-culture merchandise designs — because great DevRel includes swag that engineers actually want to wear.",
    tag: "Swag",
    tagColor: "blue" as const,
  },
];
