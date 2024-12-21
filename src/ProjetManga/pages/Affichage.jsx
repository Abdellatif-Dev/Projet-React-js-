import React from "react";
import { useParams } from "react-router-dom";
import { anime } from "./data";


export default function Affichage() {
  let { N } = useParams();
  let { T } = useParams();
    let anim = anime.find((anime) => anime.titre === T );
    let selectanime=anim.season.find(a=>a.Nseason===parseInt(N))

    console.log(anim);
    console.log(selectanime);
    
  return (
    <div className="bg-neutral-900">
      <div className="container ">
        {selectanime.page.map(p=>
            <div className="flex justify-center">
            <img src={p} alt="" className=" w-auto"/>
            </div>
        )}
      </div>
    </div>
  );
}
