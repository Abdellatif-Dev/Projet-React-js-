import { useState } from "react"


export default function Gestionvoiture(props){
    const [id,setId]=useState()
    const [marque,setMarque]=useState()
    const [type,setType]=useState()
    const [prix,setPrix]=useState()
    const [img,setImg]=useState()
    const Ajouter=()=>{
        let newV={id:id,marque:marque,typeCarburant:type,prixLocation:prix,image:img}
        props.ajout(newV)
    }
    return <>
    
    
    <h1>Gestion des voiture</h1> <br/>
     <input placeholder="ID" onChange={(e)=>setId(e.target.value)} /> <br/>
     <input placeholder="Marque" onChange={(e)=>setMarque(e.target.value)} /> <br/>
     <input placeholder="type" onChange={(e)=>setType(e.target.value)} /><br/>
     <input placeholder="prix" onChange={(e)=>setPrix(e.target.value)} /><br/>
     <input placeholder="image" onChange={(e)=>setImg(e.target.value)} /> <br/>
     <button type="submit" className="btn btn-primary" onClick={()=>Ajouter()}>Ajouter</button>    </>
}