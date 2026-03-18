import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CapabilityPillars from "../components/CapabilityPillars";
import CredibilityBar from "../components/CredibilityBar";
import WhenToBringMeIn from "../components/WhenToBringMeIn";
import StrategicImpact from "../components/Skills";

export const metadata: Metadata = {
  title: "Strategic Impact — Luke Kilpatrick",
  description: "Programs, platforms, and developer ecosystems built to scale.",
};

export default function ImpactPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 64 }}>
        <CapabilityPillars />
        <CredibilityBar />
        <StrategicImpact />
        <WhenToBringMeIn />
      </main>
      <Footer />
    </>
  );
}
