import React from "react";
import { anime } from "./data";
import { Link } from "react-router-dom";


export default function Accueil() {
  console.log(anime);
 
  
  return (
    <div className="bg-zinc-950 pt-20">
      <div className="container grid grid-cols-9 gap-3 ">
        <div className="col-span-9 md:col-span-2 bg-teal-600">
          03
        </div>

        <div className="col-span-9 md:col-span-7 ">
          <div className="grid md:grid-cols-2 gap-1 lg:grid-cols-3  sm:grid-cols-1 p-1">
            {anime.map((anime, index) => (
            <div key={index} className="bg-zinc-800 rounded-md= flex  justify-end  h-36 border-1 rounded-md border-fuchsia-950">
              <div className="  pr-3 pt-2  ">
              <Link to={`/series/${anime.titre}`} className='no-underline text-gray-300 hover:text-gray-500 '>
              <h6   className="truncate whitespace-nowrap overflow-hidden	sm:w-80 md:w-36 lg:w-28 xl:w-40">{anime.titre}</h6>
              </Link>
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
