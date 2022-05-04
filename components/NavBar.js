import { useMedia } from "react-use";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import MenuContext from "../context/menuContext";
import { useContext } from "react";
import { motion } from "framer-motion";

const NavBar = () => {
  const value = useContext(MenuContext);
  let { toggleMenu, menuOpen } = value;
  const isWide = useMedia("(min-width: 768px)", true);
  let startPointHeight = menuOpen && window.innerHeight;

  return (
    <div className="flex justify-between max-w-xs mx-auto pt-8 text-slate-900">
      {menuOpen ? (
        <motion.a
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          href="/"
          className="font-hurricane text-4xl font-bold"
        >
          RF
        </motion.a>
      ) : (
        <a href="/" className="font-hurricane text-4xl font-bold">
          RF
        </a>
      )}
      {isWide ? (
        <nav>
          <a href="/about">About</a>
          <a href="#">Projects</a>
          <a href="/contact">Contact</a>
        </nav>
      ) : (
        <div className="w-7">
          <FontAwesomeIcon onClick={() => toggleMenu()} icon={faBars} />
        </div>
      )}
    </div>
  );
};

export default NavBar;
