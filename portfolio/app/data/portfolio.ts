export const personalInfo = {
  name: "Luke Kilpatrick",
  title: "Developer Relations & Developer Marketing",
  tagline:
    "15+ years building developer programs, documentation, and communities at Atlassian, Nutanix, Hazelcast, LinearB, and Harness.",
  intro:
    "I build the content, docs, and onboarding experiences that turn complex infrastructure products into tools developers actually want to use. I also write code, author books, and ship things.",
  location: "Sand City, CA — Monterey Peninsula",
  availability: "Available Now",
  email: "luke@pitterpatterdiving.com",
  linkedin: "https://www.linkedin.com/in/lukekilpatrick/",
  github: "https://github.com/lkilpatrick",
  youtube: "https://www.youtube.com/@LukeKilpatrick",
};

export const stats = [
  { value: "15+", label: "Years in DevRel" },
  { value: "246K", label: "Video Views (Sencha)" },
  { value: "10K", label: "TikTok in 3 Months" },
  { value: "1,000+", label: "Books Sold" },
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
        href: "https://www.nutanix.dev/2020/11/02/nutanix-dev-is-now-live-on-twitch/",
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
      link: "https://developer.harness.io/release-notes/continuous-integration",
      description:
        "Wrote and maintained release notes for Harness Continuous Integration — precise technical communication for a developer audience tracking breaking changes, new features, and migration guides.",
      tag: "Docs",
      tagColor: "blue" as const,
    },
  ],
};

export const technicalContent = [
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
    id: 5,
    org: "LINEARB",
    title: "What is Continuous Merge?",
    link: "https://linearb.io/blog/what-is-continuous-merge/",
    description:
      "Concept introduction for a new engineering workflow category — explaining a novel approach to branch management for engineering teams.",
    tag: "Blog",
    tagColor: "blue" as const,
  },
];

export const videos = [
  {
    id: 1,
    org: "THE TECH INTERACTIVE",
    title: "Interact Conference Keynote",
    link: "https://www.youtube.com/watch?v=26xiaX6SxEQ",
    description: "Presented globally in Fall 2022 — developer community strategy and ecosystem growth.",
  },
  {
    id: 2,
    org: "HAZELCAST",
    title: "Developer Program Presentation",
    link: "https://youtu.be/rkpZpmwnjew?t=326",
    description: "Building and scaling a developer program from zero for a distributed computing platform.",
  },
  {
    id: 3,
    org: "HARNESS",
    title: "Build Intelligence Launch Video",
    link: "https://www.youtube.com/watch?v=hoxZr4dRjSo",
    description: "Product launch video for Harness CI's Build Intelligence feature — scripted, produced, shipped.",
  },
  {
    id: 4,
    org: "HARNESS",
    title: "Azure DevOps to Harness Migration",
    link: "https://www.youtube.com/watch?v=zsmYoojBQig",
    description: "Technical walkthrough: step-by-step repository migration tutorial for CI/CD platform adoption.",
  },
  {
    id: 5,
    org: "NUTANIX — DEVRELCON",
    title: "DevRelCon: Building Developer Programs",
    link: "https://www.youtube.com/watch?v=TgO3yM1qSHw",
    description: "Conference talk on launching developer.nutanix.com and growing an infrastructure developer ecosystem.",
  },
  {
    id: 6,
    org: "NUTANIX — DEVRELCON",
    title: "DevRelCon: Developer Marketing",
    link: "https://www.youtube.com/watch?v=OF8bDgoLOkw",
    description: "Strategies for marketing to developers authentically — what works, what backfires, and why trust is everything.",
  },
  {
    id: 7,
    org: "SENCHA",
    title: "Sencha Product Video — 246K Views",
    link: "https://vimeo.com/55486684",
    description: "Wrote, filmed, and edited. One of the highest-performing developer product videos of its era.",
  },
  {
    id: 8,
    org: "ATLASSIAN",
    title: "SaaS Insider Podcast",
    link: "https://saasinsider.libsyn.com/037-interview-with-luke-kilpatrick-from-atlassian",
    description: "Interview on Atlassian's developer ecosystem strategy and marketplace growth.",
  },
];

export const strategicWork = [
  {
    id: 1,
    org: "SLASHDATA — PUBLISHED AUTHOR",
    title: "The Developer Marketing Essential Guide",
    link: "https://a.co/d/eIgJG8o",
    description:
      "Authored two chapters in the definitive guide to developer marketing, published by SlashData. Covers developer program strategy, community building, and measuring developer marketing ROI.",
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
