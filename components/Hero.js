import NavBar from "./NavBar";
import Dividersm from "../public/Dividersm.svg";
import Dividermd from "../public/Dividermd.svg";
import Dividerlg from "../public/Dividerlg.svg";
import { motion } from "framer-motion";
import { useMedia } from "react-use";
import Link from "next/dist/client/link";

const Hero = () => {
  const isSmall = useMedia("(max-width: 767px)", false);
  const isMid = useMedia("(min-width: 768px)", false);
  const isWide = useMedia("(max-width: 1024px)", false);
  const isLarge = useMedia("(min-width: 1025px)", false);

  const dividerSelector = () => {
    if (isSmall) return <Dividersm />;
    if (isMid && isWide) return <Dividermd />;
    if (isLarge) return <Dividerlg />;
  };

  const hola = () => console.log("hola");
  return (
    <div>
      <NavBar />
      <div className="pt-32 flex flex-col items-center text-slate-900">
        <div className="flex space-x-2">
          <h1 className="text-xl pb-5">Hey there, I'm Ruben Frias</h1>
          <h1 className="animate-wiggle text-xl">👋🏾</h1>
        </div>
        <h2 className="text-center font-bold text-3xl md:text-4xl lg:text-6xl md:px-10 max-w-xs md:max-w-3xl lg:max-w-4xl mx-auto pb-10 md:leading-relaxed">
          I'm a Front-End Engineer with a passion for building experiences
        </h2>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.1 }}
          type="button"
          className="bg-slate-800 rounded-3xl py-2 px-4 text-lg mb-32 text-white shadow-2xl"
        >
          <Link href="/contact">
            <a>Connect with me</a>
          </Link>
        </motion.button>
        {dividerSelector()}
      </div>
    </div>
  );
};

export default Hero;
