import { useEffect, useState } from "react";
import { useParams } from "react-router";
export default function DetailsJoueur({joueurss}) {
  const { id } = useParams();
  let joueur = joueurss.find(x => x.id = id)
  return (
    joueur && (
      <div>
        <p className="card-text">Nom:{joueur.userId}</p>
        <p className="card-text">Prenom:{joueur.id}</p>
        <p className="card-text">Nom:{joueur.title}</p>
        <p className="card-text">Nom:{joueur.body}</p>
      </div>
    )
  );
}