import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WorkPage from "../components/WorkPage";

export const metadata: Metadata = {
  title: "Work — Production Systems, Applied AI & Developer Platforms — Luke Kilpatrick",
  description: "Production applications, AI and data systems, full-stack products, and developer platforms built from architecture through adoption.",
  openGraph: {
    title: "Work — Production Systems & Applied AI — Luke Kilpatrick",
    description: "Production applications, AI and data systems, full-stack products, and developer platforms built from architecture through adoption.",
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
