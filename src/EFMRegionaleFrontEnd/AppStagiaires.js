import React from 'react'
import { stagiaires } from './data'
import { useState } from 'react'
import AjouterStagiaires from './AjouterStagiaires'
import AficherStagiaires from './AficherStagiaires'

export default function AppStagiaires() {
    const [Stagiaire,setStagiaires]=useState(stagiaires)
    const [edite,setEditer]=useState('')
    const AjouterStagiaire=(s)=>{
        // cheq si le stagiaire existe deja
        let Stagiairerepeter=Stagiaire.find(x=>x.id===s.id)
        // modifer le stagiaire
        if(Stagiairerepeter){
            setStagiaires(Stagiaire.map(x=>x.id===s.id?s:x
            ))}
            else{
        // ajouter new satagiaire
        setStagiaires([...Stagiaire,s])}
    }
    const  supprimer=(x)=>{
        setStagiaires(Stagiaire.filter((s)=>s.id!==x))
    }
    const moyenneDeClass = Stagiaire.reduce((total, stagiaire) => total + parseFloat(stagiaire.moyenne), 0) / Stagiaire.length;

    console.log(moyenneDeClass);
    const editer=(e)=>{
        setEditer(e)
        
    }
    
    return (
    <div>
        <AficherStagiaires table={Stagiaire} supprimer={supprimer} editer={editer}/>
        <AjouterStagiaires table={Stagiaire} AjouterStagiaire={AjouterStagiaire} edite={edite}/>
        <ul>
            <li>La Moyenne générale le plus Elévée : {Math.max(...Stagiaire.map(x=>x.moyenne))}</li>
            <li>La Moyenne générale le moins Elévée : {Math.min(...Stagiaire.map(x=>x.moyenne))}</li>
            <li>Le Moyenne da la classe : {moyenneDeClass.toFixed(2)}</li>
        </ul>
    </div>
  )
}
