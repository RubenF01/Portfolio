import { useMedia } from "react-use";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import MenuContext from "../context/menuContext";
import { useContext } from "react";
import { motion } from "framer-motion";
import Link from "next/dist/client/link";

const NavBar = ({ classes, initialsClasses }) => {
  const value = useContext(MenuContext);
  let { toggleMenu, menuOpen } = value;
  const isWide = useMedia("(min-width: 768px)", false);

  return (
    <div
      className={`flex justify-between max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-7xl 2xl:max-w-[105rem] mx-auto pt-8 text-slate-900 ${classes}`}
    >
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
        <nav>
          <Link href="/">
            <a
              className={`font-hurricane text-4xl font-bold ${initialsClasses}`}
            >
              RF
            </a>
          </Link>
        </nav>
      )}
      {isWide ? (
        <nav className="space-x-7 lg:text-xl">
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/#projects">
            <a>Projects</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
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
