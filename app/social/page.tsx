import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SocialPageSection from "../components/SocialPage";

export const metadata: Metadata = {
  title: "Social & Channels — Luke Kilpatrick",
  description: "TikTok, Instagram, YouTube, and LinkedIn — where Luke builds in public.",
};

export default function SocialPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 64 }}>
        <SocialPageSection />
      </main>
      <Footer />
    </>
  );
}
