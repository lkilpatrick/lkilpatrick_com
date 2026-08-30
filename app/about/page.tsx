import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutPage from "../components/AboutPage";

export const metadata: Metadata = {
  title: "About Luke Kilpatrick — Technology Leadership, Applied AI & Builder Life",
  description: "Technology executive, hands-on AI builder, and developer experience leader building technology since 1996, plus the ocean, books, and life behind the work.",
  openGraph: {
    title: "About Luke Kilpatrick — Technology Leadership & Applied AI",
    description: "Technology executive and hands-on builder working across developer platforms, applied AI, and technology adoption since 1996.",
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
