import Head from "next/head";
import Hero from "../components/Hero";
import ProjectsSection from "../components/ProjectsSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ruben Frias</title>
        <meta name="description" content="Created by Rubén Frías" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="font-poppins relative">
        <Hero />
        <ProjectsSection />
        <Footer />
      </main>
    </div>
  );
}
