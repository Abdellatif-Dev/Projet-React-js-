import { useDispatch,useSelector } from "react-redux"
import {AjouterTache,SupprimerTache,TerminerTache} from './creteSlice'
import { useState } from "react"

export default function GestionTaches() {
    const [desc,setdesc]=useState('')
    const Tache = useSelector((s) => s.Tache.tache)
    const dispatch = useDispatch()
  return (
    <div>
      <input onChange={(e)=>setdesc(e.target.value)} />
    <button onClick={() => dispatch(AjouterTache(desc))}>Ajouter</button>
    <ul>
    {Tache.map((t,i)=><li key={i}>
      <input type="checkbox" onClick={() => dispatch(TerminerTache(t.id),console.log(Tache))} checked={t.terminer}  />
      <span>{t.desc}</span>
      <button  onClick={() => dispatch(SupprimerTache(t.id))}>Supprimer</button>
    </li>)}
      </ul>
     <p>Num terminer:{ Tache.filter((t) => t.terminer).length}</p>
    </div>
  )
}



