import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WorkPage from "../components/WorkPage";

export const metadata: Metadata = {
  title: "Work — Projects, Case Studies & Developer Portals — Luke Kilpatrick",
  description: "Production systems, developer platforms, and documentation sites built from zero. Tech Challenge Kenya, MPYC RaceDay, gitStream docs, Nutanix.dev, and more.",
  openGraph: {
    title: "Work — Luke Kilpatrick",
    description: "Production systems, developer platforms, and documentation sites built from zero.",
    url: "https://lkilpatrick.com/work",
  },
};

export default function Work() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 64 }}>
        <WorkPage />
      </main>
      <Footer />
    </>
  );
}
