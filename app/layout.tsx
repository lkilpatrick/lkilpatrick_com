import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lkilpatrick.com"),
  title: "Luke Kilpatrick | Technology Executive, AI Builder & Developer Experience Leader",
  description:
    "Technology executive and hands-on builder with 20+ years across developer platforms, developer experience, applied AI, product strategy, and technology adoption.",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "Luke Kilpatrick | Technology Executive, AI Builder & Developer Experience Leader",
    description:
      "Technology executive and hands-on builder with 20+ years across developer platforms, developer experience, applied AI, product strategy, and technology adoption.",
    url: "https://lkilpatrick.com",
    siteName: "Luke Kilpatrick",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luke Kilpatrick | Technology Executive & AI Builder",
    description: "Technology executive and hands-on builder with 20+ years across developer platforms, applied AI, product strategy, and adoption.",
    site: "@lkilpatrick",
    creator: "@lkilpatrick",
  },
};

const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Luke Kilpatrick",
  url: "https://lkilpatrick.com",
  jobTitle: "Technology Executive and Applied AI Builder",
  description: "Technology executive and hands-on builder focused on developer platforms, applied AI, product strategy, and technology adoption.",
  sameAs: [
    "https://www.linkedin.com/in/lukekilpatrick/",
    "https://github.com/lkilpatrick",
    "https://www.youtube.com/@LukeKilpatrick",
  ],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "University of Waterloo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${dmSans.variable} ${dmSerif.variable} ${jetbrainsMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personStructuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
