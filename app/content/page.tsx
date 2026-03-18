import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WritingContent from "../components/WritingContent";

export const metadata: Metadata = {
  title: "Writing & Content — Luke Kilpatrick",
  description: "Blog posts, tutorials, and technical writing that drives developer adoption.",
};

export default function ContentPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 64 }}>
        <WritingContent />
      </main>
      <Footer />
    </>
  );
}
