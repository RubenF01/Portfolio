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
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="font-poppins lg:relative.">
        <NavBar
          classes="lg:absolute lg:inset-0 lg:z-50"
          initialsClasses="lg:text-white"
        />
        <div className="mt-8 lg:mt-0 flex flex-col lg:flex-row lg:absolute lg:inset-0 lg:w-full">
          <div className="relative lg:h-screen">
            <div className="absolute inset-0 h-full bg-contactGray flex flex-col justify-center items-center text-white lg:pb-32">
              <h1 className="text-2xl lg:text-4xl">Don't be shy, say hi!</h1>
              <h2 className="lg:text-2xl">Let's build together!</h2>
            </div>
            <img
              className="lg:h-[90%] lg:object-cover"
              src="/city.jpg"
              alt="Cloudy Santo Domingo"
            />
          </div>

          <Form classes="lg:h-screen lg:w-full lg:pt-48" />
        </div>
        <HamburgerMenu />
      </main>

      <Footer classes="mt-10 lg:absolute lg:w-full lg:bottom-0" />
    </div>
  );
};

export default Contact;
