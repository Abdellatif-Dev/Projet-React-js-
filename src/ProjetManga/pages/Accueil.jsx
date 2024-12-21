import React, { useState } from "react";
import { anime } from "./data";
import { Link } from "react-router-dom";


export default function Accueil() {
  const [anim, setAnime] = useState(anime);
  console.log(anime);
 
  
  return (
    <div className="bg-slate-950">
      <div className="container grid grid-cols-3 gap-2 ">
        <div className="bg-teal-600">03</div>
        <div className="col-span-2 bg-indigo-900 ">
          <div className="grid md:grid-cols-3 gap-1 grid-cols-2 p-1">
            {anim.map((anime, index) => (
            <div key={index} className="bg-slate-900  text-white flex justify-between p-2">
              <div >
              <h5>{anime.titre}</h5>
              {anime.season.map(x=>
              <Link to={`/series/${anime.titre}/${x.Nseason}`}>{x.Nseason}</Link>
              )}
              </div>
              <div>
              <img
                src={anime.image}
                alt="Logo"
                className=" rounded-md w-28 h-auto"
              />
              </div>
            </div> 
            ))}
            
          </div>
        </div>
      </div>
    
    </div>
  );
}
