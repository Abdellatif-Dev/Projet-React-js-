import { useState } from 'react';
import { etudiants } from './data.js';
 export function Entete(props){
const titre='gestion des etudiant';
return <>
<p>{titre}</p>
</>
 }




 export function GestionEtudiant(){
    const [nom,setnom]=useState("")
    const [prenom,setprenom]=useState("")
    const [mod,setmod]=useState(etudiants)

    const Ajouter=()=>{
        const x={nom:nom,prenom:prenom,specialité:"inconnu",note:0}
        const tab=[...etudiants,x]
        setmod(tab)
    }

return <> nom etudiant <input type='text' onChange={(e)=>setnom(e.target.value)}/> <br/>
 prenom etudiant <input type='text' onChange={(a)=>setprenom(a.target.value)}/> <br/>
 <button onClick={Ajouter} >Ajouter</button>
 <table>
 <tr>
    <td>nom</td>
    <td>prenom</td>
    <td>note</td>
    <td>spescialite</td>
    <td>action</td>
 </tr>
 {mod.map((y,i)=><tr key={i}>
    <td>{y.nom}</td>
    <td>{y.prenom}</td>
    <td>{y.note}</td>
    <td>{y.spescialite}</td>
    <td>action</td>
 </tr>)}
 </table>
</>
 }






