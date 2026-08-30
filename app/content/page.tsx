import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContentHub from "../components/ContentHub";

export const metadata: Metadata = {
  title: "Content — Writing, Talks & Presentations — Luke Kilpatrick",
  description: "Technical writing, conference talks, product launch videos, and developer content from a technology career spanning 1996 to today.",
  openGraph: {
    title: "Content — Writing, Talks & Presentations — Luke Kilpatrick",
    description: "Technical writing, conference talks, and developer content from a technology career spanning 1996 to today.",
    url: "https://lkilpatrick.com/content",
  },
};

export default function ContentPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 64 }}>
        <ContentHub />
      </main>
      <Footer />
    </>
  );
}
