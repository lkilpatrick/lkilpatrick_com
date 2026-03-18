import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Presentations from "../components/Projects";

export const metadata: Metadata = {
  title: "Video & Presentations — Luke Kilpatrick",
  description: "Conference talks, product launches, and developer program presentations.",
};

export default function VideoPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 64 }}>
        <Presentations />
      </main>
      <Footer />
    </>
  );
}
