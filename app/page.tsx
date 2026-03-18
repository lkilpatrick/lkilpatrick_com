import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CapabilityPillars from "./components/CapabilityPillars";
import SelectedSystems from "./components/SelectedSystems";
import WhenToBringMeIn from "./components/WhenToBringMeIn";
import CredibilityBar from "./components/CredibilityBar";
import ContentPreview from "./components/ContentPreview";
import PersonalSection from "./components/PersonalSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CapabilityPillars />
      <SelectedSystems />
      <WhenToBringMeIn />
      <CredibilityBar />
      <ContentPreview />
      <PersonalSection />
      <CTASection />
      <Footer />
    </>
  );
}
