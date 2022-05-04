import { useMedia } from "react-use";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import MenuContext from "../context/menuContext";
import { useContext } from "react";

const NavBar = () => {
  const value = useContext(MenuContext);
  let { toggleMenu } = value;
  const isWide = useMedia("(min-width: 768px)", true);
  return (
    <div className="flex justify-between max-w-xs mx-auto pt-8 text-slate-900">
      <a href="/" className="font-hurricane text-4xl font-bold">
        RF
      </a>
      {isWide ? (
        <nav>
          <a href="#">About</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
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
