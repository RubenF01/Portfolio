import NavBar from "./NavBar";
import Divider from "./icons/Divider";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div>
      <NavBar />
      <div className="pt-32 flex flex-col items-center text-slate-900">
        <div className="flex space-x-2">
          <h1 className="text-xl pb-5">Hey there, I'm Ruben Frias</h1>
          <h1 className="animate-wiggle text-xl">👋🏾</h1>
        </div>
        <h2 className="text-center font-bold text-3xl max-w-xs mx-auto pb-10">
          I'm a Front-End Engineer with a passion for building experiences
        </h2>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.1 }}
          type="button"
          className="bg-slate-800 rounded-3xl py-2 px-4 text-lg mb-32 text-white shadow-2xl"
        >
          <a href="/contact">Connect with me</a>
        </motion.button>
        <Divider />
      </div>
    </div>
  );
};

export default Hero;
