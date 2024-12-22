import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { anime } from "./data";
import { Link } from "react-router-dom";
export default function Recherche() {
  const [Icon, setIcon] = useState();
  const [text, settext] = useState();
  const [results,setresults]=useState()
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
  const Search=(e)=>{
    settext(e)
    let search=e.toLowerCase()
    if(search){
    let resultSearch=anime.filter(x=>x.titre.toLowerCase().includes(search))
    if(resultSearch){
      setresults(resultSearch)
    }
    else{
      setresults()
    }
    console.log(resultSearch);
  }else{
    setresults()
  }
    
  }
  return (
    <>
      <div className="ml-3 flex items-center justify-center    ">
        <div className="relative">
        <div className="flex">
        <button
          onMouseEnter={affiche}
          className="flex items-center justify-center hover:rounded-l-lg w-8 h-5 transition-all duration-1000 hover:bg-purple-700 hover:shadow-md hover:shadow-purple-900"
        >
          <CiSearch className="text-white " />
        </button>

        {Icon && (
          <input
            type="text"
            onChange={(e) => Search(e.target.value)}
            value={text}
            className="rounded-r-lg focus:outline-none pl-1 bg-gray-900 text-gray-100 h-5"
          />
        )}
        </div>
        {
          results && (
            <ul className="  absolute    ">
              {results.slice(0,5).map((r,i)=>(
                <div className="bg-slate-950  first:rounded-t-md last:rounded-b-md    p-1">
                <li className=" bg-slate-800  rounded-md truncate" key={i}>
                  <Link to={`/series/${r.titre}`} onClick={()=>{setresults();settext('');setIcon()}} className='no-underline text-gray-300 hover:text-gray-500 '>{r.titre}</Link></li>
                </div>
              ))}
            </ul>
          )
        }
        </div>
        
      </div>
    </>
  );
}
