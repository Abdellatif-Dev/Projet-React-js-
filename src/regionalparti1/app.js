import { Link, Route, Routes } from "react-router-dom";
import { voitures } from "./data";
import ListVoiture from "./listVoitur";
import Gestionvoiture from "./gestionVoiutur";
import { useState } from "react";


export default function AppVoiture(){
    
    const [tab,setTab]=useState(voitures)

    const ajou=(u)=>{
         setTab([...tab,u])
    }
    return <>
    <Link to='/'>Gestion des voiture</Link>
    <Link to='/ListVoiture'>List des voiture</Link>
    <Routes>
        <Route path="/" element={<Gestionvoiture ajout={ajou} text="list des voiture"/>}/>
        <Route path="/ListVoiture" element={< ListVoiture text="list des Gestion voiture"   ajout={tab}/>}/>
    </Routes>
    </>
}