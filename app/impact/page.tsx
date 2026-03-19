import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CapabilityPillars from "../components/CapabilityPillars";
import CredibilityBar from "../components/CredibilityBar";
import WhenToBringMeIn from "../components/WhenToBringMeIn";
import StrategicImpact from "../components/Skills";

export const metadata: Metadata = {
  title: "Impact — Developer Ecosystems, Programs & Proof Points — Luke Kilpatrick",
  description: "Four capabilities, six proof points, and the scenarios where I make the biggest difference. Developer portals, global hackathons, and programs built from zero.",
  openGraph: {
    title: "Impact — Luke Kilpatrick",
    description: "Developer ecosystems, programs, and proof points — 15+ years of measurable work.",
    url: "https://lkilpatrick.com/impact",
  },
};

export default function ImpactPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 64 }}>
        <CapabilityPillars />
        <CredibilityBar />
        <WhenToBringMeIn />
        <StrategicImpact />
      </main>
      <Footer />
    </>
  );
}
