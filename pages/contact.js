import Head from "next/head";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Form from "../components/Form";
import HamburgerMenu from "../components/HamburgerMenu";

const Contact = () => {
  return (
    <div>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Contact" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="font-poppins">
        <NavBar />
        <div className="pt-8">
          <div className="relative">
            <div className="absolute inset-0 h-full bg-contactGray flex flex-col justify-center items-center text-white">
              <h1 className="text-2xl">Don't be shy, say hi!</h1>
              <h2 className="">Let's build together!</h2>
            </div>
            <img src="/city.jpg" alt="Cloudy Santo Domingo" />
          </div>
          <Form />
        </div>
        <div className="absolute mt-40">
          <Footer classes="absolute bottom-0 w-screen" />
        </div>
        <HamburgerMenu />
      </main>
    </div>
  );
};

export default Contact;
