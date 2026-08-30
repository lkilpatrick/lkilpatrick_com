import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutPage from "../components/AboutPage";

export const metadata: Metadata = {
  title: "About Luke Kilpatrick — Technology Leadership, Applied AI & Builder Life",
  description: "Technology executive, hands-on AI builder, and developer experience leader with 20+ years of experience, plus the ocean, books, and life behind the work.",
  openGraph: {
    title: "About Luke Kilpatrick — Technology Leadership & Applied AI",
    description: "Technology executive and hands-on builder with 20+ years across developer platforms, applied AI, and technology adoption.",
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
