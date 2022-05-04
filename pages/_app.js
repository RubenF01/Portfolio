import "../styles/globals.css";
import MenuContext from "../context/menuContext";
import { useState } from "react";

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
    </MenuContext.Provider>
  );
}

export default MyApp;
