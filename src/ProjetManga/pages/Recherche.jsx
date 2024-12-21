import React, { useState } from "react";
//import './rechStyle.css'
import { CiSearch } from "react-icons/ci";

export default function Recherche() {
  const [Icon, setIcon] = useState();
  const [text, settext] = useState();
  const affiche = () => {
    if (Icon) {
      if (text) {
        setIcon(true);
      } else {
        setIcon(false);
      }
    } else {
      setIcon(true);
    }
  };

  return (
    <>
      <div className="ml-3 flex items-center justify-center ">
        <button
          onMouseEnter={affiche}
          className="flex items-center justify-center hover:rounded-l-lg w-5 h-5 transition-all duration-1000 hover:bg-purple-700 hover:shadow-md hover:shadow-purple-900"
        >
          <CiSearch className="text-white " />
        </button>

        {Icon && (
          <input
            type="text"
            onChange={(e) => settext(e.target.value)}
            className="rounded-r-lg focus:outline-none pl-1 bg-gray-900 text-gray-100 h-5"
          />
        )}
      </div>
    </>
  );
}
