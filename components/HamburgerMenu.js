import MenuContext from "../context/MenuContext";
import { useContext } from "react";
import IconXMark from "./icons/IconXMark";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const HamburgerMenu = () => {
  const value = useContext(MenuContext);
  let { menuOpen, toggleMenu } = value;
  let startPointWidth = menuOpen && window.innerWidth;

  return (
    <AnimatePresence>
      {menuOpen ? (
        <motion.div
          initial={{ x: startPointWidth }}
          animate={{ x: 0 }}
          transition={{ duration: 0.6 }}
          exit={{ x: startPointWidth }}
          className="fixed bg-slate-900 inset-0"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.6 }}
            className="max-w-xs md:max-w-2xl mx-auto flex justify-between pt-8 pb-16"
          >
            <Link href="/">
              <a className="font-hurricane text-4xl font-bold text-white">RF</a>
            </Link>
            <div className="text-2xl w-5 fill-white">
              <IconXMark onClick={toggleMenu} />
            </div>
          </motion.div>

          <nav className="flex flex-col max-w-xs md:max-w-2xl mx-auto text-4xl space-y-8 md:space-y-16 text-white">
            <motion.a
              initial={{ x: startPointWidth }}
              animate={{ x: 0 }}
              transition={{ delay: 0.6, duration: 0.2 }}
              href="/about"
            >
              About
            </motion.a>
            <motion.a
              onClick={toggleMenu}
              initial={{ x: startPointWidth }}
              animate={{ x: 0 }}
              transition={{ delay: 0.7, duration: 0.2 }}
              href="/#projects"
            >
              Projects
            </motion.a>
            <motion.a
              initial={{ x: startPointWidth }}
              animate={{ x: 0 }}
              transition={{ delay: 0.8, duration: 0.2 }}
              href="/contact"
            >
              Contact
            </motion.a>
          </nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default HamburgerMenu;
