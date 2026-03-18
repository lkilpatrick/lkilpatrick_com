import ThemeToggle from "./components/Navbar";
import Hero from "./components/Hero";
import OnboardingDocs from "./components/About";
import TechnicalContent from "./components/Experience";
import Presentations from "./components/Projects";
import StrategicImpact from "./components/Skills";
import Builder from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <ThemeToggle />
      <Hero />
      <main>
        <OnboardingDocs />
        <TechnicalContent />
        <Presentations />
        <StrategicImpact />
        <Builder />
      </main>
      <Footer />
    </>
  );
}
