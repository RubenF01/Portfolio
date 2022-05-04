import Head from "next/head";
import Hero from "../components/Hero";
import ProjectsSection from "../components/ProjectsSection";
import HamburgerMenu from "../components/HamburgerMenu";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ruben Frias</title>
        <meta name="description" content="Created by Rubén Frías" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="font-poppins relative">
        <Hero />
        <ProjectsSection />
        <HamburgerMenu />
        <Footer />
      </main>
    </div>
  );
}
