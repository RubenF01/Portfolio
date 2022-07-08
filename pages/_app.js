import "../styles/globals.css";
import MenuContext from "../context/MenuContext";
import { useState } from "react";
import HamburgerMenu from "../components/HamburgerMenu";

function MyApp({ Component, pageProps }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <MenuContext.Provider
      value={{
        menuOpen,
        setMenuOpen,
        toggleMenu,
      }}
    >
      <Component {...pageProps} />
      <HamburgerMenu />
    </MenuContext.Provider>
  );
}

export default MyApp;
