import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TechnicalContent from "../components/Experience";

export const metadata: Metadata = {
  title: "Technical Content — Luke Kilpatrick",
  description: "Blog posts, tutorials, and technical writing demonstrating hands-on developer experience.",
};

export default function ContentPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 64 }}>
        <TechnicalContent />
      </main>
      <Footer />
    </>
  );
}
