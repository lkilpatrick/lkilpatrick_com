import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Builder from "../components/Contact";

export const metadata: Metadata = {
  title: "Builder & Maker — Luke Kilpatrick",
  description: "Personal projects, books, and side work spanning Python, AI, and open source.",
};

export default function BuilderPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 64 }}>
        <Builder />
      </main>
      <Footer />
    </>
  );
}
