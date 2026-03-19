import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContentPreview from "../components/ContentPreview";
import WritingContent from "../components/WritingContent";
import VideoContent from "../components/VideoContent";

export const metadata: Metadata = {
  title: "Content — Writing, Talks & Presentations — Luke Kilpatrick",
  description: "Technical writing, conference talks, product launch videos, and developer content across 15+ years at Atlassian, Nutanix, LinearB, and Harness.",
  openGraph: {
    title: "Content — Writing, Talks & Presentations — Luke Kilpatrick",
    description: "Technical writing, conference talks, and developer content across 15+ years.",
    url: "https://lkilpatrick.com/content",
  },
};

export default function ContentPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 64 }}>
        <ContentPreview />
        <WritingContent />
        <VideoContent />
      </main>
      <Footer />
    </>
  );
}
