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
  title: "Luke Kilpatrick — Developer Experience, Product Marketing & Applied AI",
  description:
    "I help companies turn complex platforms into products developers understand, adopt, and want to use. 15+ years at Atlassian, Nutanix, Hazelcast, LinearB, and Harness.",
  openGraph: {
    title: "Luke Kilpatrick — Developer Experience, Product Marketing & Applied AI",
    description:
      "I help companies turn complex platforms into products developers understand, adopt, and want to use. 15+ years at Atlassian, Nutanix, Hazelcast, LinearB, and Harness.",
    url: "https://lkilpatrick.com",
    siteName: "Luke Kilpatrick",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@lkilpatrick",
    creator: "@lkilpatrick",
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
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
