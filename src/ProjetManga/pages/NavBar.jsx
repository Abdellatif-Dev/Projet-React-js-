import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Recherche from './Recherche'
export default function NavBar() {
  const [showNavBar, setShowNavBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY) {
        // L'utilisateur remonte
        setShowNavBar(true);
      } else {
        // L'utilisateur descend
        setShowNavBar(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  return (
    <nav className={`bg-black text-white fixed  w-full  ${ showNavBar ? "translate-y-0" : "-translate-y-full"}`}>
      <div className=" container">
      <div className=" mx-auto flex  items-center justify-between p-1">
        
        <div className="flex items-center space-x-4">
          <img src="../dragon.webp" alt="Logo" className="w-10 h-10 rounded-full" />
          <Recherche/>
        </div>
        <div className=" flex space-x-8">
          <button className="hover:rounded-md hover:shadow hover:shadow-purple-800 py-1  px-2">
          <Link to="/" className="hover:text-blue-400 transition-colors duration-300 text-white no-underline">
            Accueil
          </Link>
          </button>
          <button className="hover:rounded-md hover:shadow hover:shadow-purple-800 py-1  px-2">
          <Link to="/series" className="hover:text-blue-400 transition-colors duration-300 text-white no-underline">
            Series
          </Link>
          </button>
          <button className="hover:rounded-md hover:shadow hover:shadow-purple-800 py-1  px-2">
          <Link to="/login" className="hover:text-blue-400 transition-colors duration-300 text-white no-underline">
            Login
          </Link>
          </button>

        </div>
      </div>
      </div>
    </nav>
  );
}
