import React, { useState } from "react";
import { anime } from "./data";
import { Link } from "react-router-dom";


export default function Accueil() {
  const [anim, setAnime] = useState(anime);
  console.log(anime);
 
  
  return (
    <div className="bg-slate-950">
      <div className="container grid grid-cols-9 gap-3 ">
        <div className="col-span-9 md:col-span-2 bg-teal-600">
          03
        </div>

        <div className="col-span-9 md:col-span-7 bg-indigo-900 ">
          <div className="grid md:grid-cols-2 gap-1 lg:grid-cols-3  sm:grid-cols-1 p-1">
            {anim.map((anime, index) => (
            <div key={index} className="bg-slate-900  text-white flex  justify-end  h-36">
              <div className="  pr-3 pt-2  ">
              <h6   className="truncate whitespace-nowrap overflow-hidden	sm:w-80 md:w-36 lg:w-28 xl:w-40">{anime.titre}</h6>
              {anime.season.slice(0, 3).map(x=>
              <p  dir="rtl"><Link  className="no-underline text-purple-400 hover:text-purple-800" to={`/series/${anime.titre}/${x.Nseason}`}>{x.Nseason}</Link></p>
              )}
              </div>
              <div>
                <Link to={`/series/${anime.titre}`} className='no-underline'>
              <img
                src={anime.image}
                alt="Logo"
                className=" rounded-md h-32 m-2  "
              /></Link>
              </div>
            </div> 
            ))}
            
          </div>
        </div>
      </div>
    
    </div>
  );
}
