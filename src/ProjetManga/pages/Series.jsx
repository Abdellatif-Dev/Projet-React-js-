import React from 'react'
import { anime } from "./data";
import { Link } from 'react-router-dom';
export default function Series() {

  return (
    <div className='bg-zinc-950 pt-20'>
      <div className="container grid xl:grid-cols-5 gap-2 lg:grid-cols-4 md:grid-cols-3 ms:grid-cols-2 ">
        {anime.map((a,i)=>(
          <div key={i} className="bg-zinc-800 rounded-md p-2 ">
            <Link to={`/series/${a.titre}`} className='no-underline'>
            <div className="h-5/6">
            <img src={a.image} alt={a.titre} className="w-full h-full"></img>
            </div>
            <div className="h-1/6 flex justify-center items-center">
            <h4 className='text-white  truncate whitespace-nowrap overflow-hidden '>{a.titre}</h4>
            </div>
            </Link>
            </div>
        ))}
      </div>
    </div>
  )
}
