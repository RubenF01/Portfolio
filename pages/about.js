import Head from "next/head";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useRef, useEffect } from "react";
import Typed from "typed.js";
import Slider from "react-slick";
import ReactLogo from "../public/reactlogo.svg";
import NextjsLogo from "../public/nextjslogo.svg";
import TailwindLogo from "../public/tailwindlogo.svg";
import ExpressLogo from "../public/expresslogo.svg";
import ReduxLogo from "../public/reduxlogo.svg";
import MongodbLogo from "../public/mongodblogo.svg";
import { motion } from "framer-motion";
import { useMedia } from "react-use";

const About = () => {
  const isSmall = useMedia("(max-width: 767px)", false);
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["About who?", "About me", "About Ruben"],
      typeSpeed: 60,
      backSpeed: 60,
    };

    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);

  const settings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: isSmall ? 1 : 3,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="description" content="About" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="min-h-screen font-poppins">
        <NavBar />

        <div className="max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-7xl 2xl:max-w-[105rem] mx-auto pt-8 md:pt-16">
          <span
            className="text-2xl md:text-4xl font-bold text-slate-900"
            ref={el}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4 }}
          className="py-7 max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-7xl 2xl:max-w-[105rem] mx-auto leading-loose md:text-3xl xl:text-6xl md:leading-[3rem] xl:leading-[1.3] space-y-3 text-slate-800"
        >
          <p>
            Hi, my name (as you may already know) is Ruben Frias. I&apos;m a
            Front-End Engineer currently looking for a place to call home.
            <br />
            My passion is building user-friendly and interactive web
            applications that provide the user with a meaningful experience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4 }}
          className="max-w-xs md:max-w-4xl mx-auto"
        >
          <Slider {...settings} className="flex flex-col">
            <div className="">
              <ReactLogo
                className="fill-[#62dafc] mx-auto"
                height={200}
                width={200}
              />
            </div>
            <div>
              <NextjsLogo className="mx-auto" height={200} width={200} />
            </div>
            <div>
              <TailwindLogo className="mx-auto" height={200} width={200} />
            </div>
            <div>
              <ExpressLogo className="mx-auto" height={200} width={200} />
            </div>
            <div>
              <ReduxLogo className="mx-auto" height={200} width={200} />
            </div>
            <div>
              <MongodbLogo className="mx-auto" height={200} width={200} />
            </div>
          </Slider>
        </motion.div>

        <style>{css}</style>
      </main>
      <Footer classes="mt-14 lg:mt-20" />
    </div>
  );
};

export default About;

const css = `
  .typed-cursor {
    font-size: 25px;
  }
`;
