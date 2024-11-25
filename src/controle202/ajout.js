import { useState } from "react";

export default function Ajouter(props){
    const [nom, setNom] = useState("");
    const [role,setrole2]= useState('')
    const ajouter=()=>{
        let id=Math.max(...props.tablo.map(u=>u.id))
        let newU={id:id+1,nom:nom,role:role,etat: "en cours", nbDéBlocages: 0 }
        props.ajout(newU)
        
    }
    return <>
    <input type="text" onChange={(e)=>setNom(e.target.value)}value={nom} /><br/>
    <p>Role:</p>
    <input type="radio" name="role" value="Normal" onClick={(e)=>setrole2(e.target.value)} />Normal <br/>
    <input type="radio" name="role" value="Gérant"  onClick={(e)=>setrole2(e.target.value)}/>Gérant<br/>
    <input type="radio" name="role" value="Admin"  onClick={(e)=>setrole2(e.target.value)}/>Admin<br/>
    <button onClick={ajouter}>ajouter</button>
    </>
}