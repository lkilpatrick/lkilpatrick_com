import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ImpactHub from "../components/ImpactHub";

export const metadata: Metadata = {
  title: "Impact — Developer Programs, Ecosystems & Proof Points — Luke Kilpatrick",
  description: "Four types of developer programs built across 15 years. Real data, linked proof, no filler.",
  openGraph: {
    title: "Impact — Luke Kilpatrick",
    description: "Four types of developer programs. Real data, real links, real proof.",
    url: "https://lkilpatrick.com/impact",
  },
};

export default function ImpactPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 64 }}>
        <ImpactHub />
      </main>
      <Footer />
    </>
  );
}
