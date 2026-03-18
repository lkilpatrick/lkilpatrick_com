import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import OnboardingDocs from "../components/About";

export const metadata: Metadata = {
  title: "Docs & Portals — Luke Kilpatrick",
  description: "Developer portals, documentation sites, and onboarding experiences built from scratch.",
};

export default function DocsPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 64 }}>
        <OnboardingDocs />
      </main>
      <Footer />
    </>
  );
}
