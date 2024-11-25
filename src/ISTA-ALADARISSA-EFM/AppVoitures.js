import React, { useState } from 'react'
import { voitures } from "./data"
import ListeVoitures from './ListeVoitures'
import AjouterVoiture from './ajouterVoiture'
export default function AppVoitures() {
    const [voiture, setVoiture] =useState(voitures)
    const supprimer=(s)=>{
        setVoiture(voiture.filter((v)=> v.id !== s))
    }
    const ajouter=(v)=>{
        setVoiture([...voiture,v])
    }
return (
    <>
    <AjouterVoiture AjouterV={ajouter}/>
    <ListeVoitures table={voiture} supprimer={supprimer}/>
    </>
  )
}
