import MenuContext from "../context/menuContext";
import { useContext } from "react";
import IconXMark from "./icons/IconXMark";

const HamburgerMenu = () => {
  const value = useContext(MenuContext);
  let { menuOpen, toggleMenu } = value;

  return (
    <div className={menuOpen ? "fixed bg-slate-900 inset-0" : "hidden"}>
      <div className="max-w-xs mx-auto flex justify-between pt-8 pb-16">
        <a className="font-hurricane text-4xl font-bold text-white" href="/">
          RF
        </a>
        <div className="text-2xl w-5 fill-white">
          <IconXMark onClick={() => toggleMenu()} />
        </div>
      </div>
      <nav className="flex flex-col max-w-xs mx-auto text-4xl space-y-8 text-white">
        <a href="#">About</a>
        <a href="#">Projects</a>
        <a href="/contact">Contact</a>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
