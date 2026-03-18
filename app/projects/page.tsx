import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectsCaseStudies from "../components/ProjectsCaseStudies";

export const metadata: Metadata = {
  title: "Projects & Case Studies — Luke Kilpatrick",
  description: "Deep case studies on systems I have built: developer platforms, race management, AI agents, IP ecosystems, and more.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 64 }}>
        <ProjectsCaseStudies />
      </main>
      <Footer />
    </>
  );
}
