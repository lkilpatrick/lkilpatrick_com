import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutPage from "../components/AboutPage";

export const metadata: Metadata = {
  title: "About Luke Kilpatrick — Ocean, Monterey Bay & Builder Life",
  description: "PADI Divemaster, author, sailor, and builder on the Monterey Peninsula. Mia Kingtide, Pitter Patter Diving, MPYC, and the life behind the work.",
  openGraph: {
    title: "About Luke Kilpatrick",
    description: "PADI Divemaster, author, sailor, and builder on the Monterey Peninsula.",
    url: "https://lkilpatrick.com/about",
  },
};

export default function About() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 64 }}>
        <AboutPage />
      </main>
      <Footer />
    </>
  );
}
