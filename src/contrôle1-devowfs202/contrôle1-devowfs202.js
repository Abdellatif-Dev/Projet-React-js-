import { useState } from "react";
import Titre from "./titre";
import {roles,utilisateurs} from "./data";

export default function Contrôle1Devowfs202(){
    const [role,setrole]=useState('')
    const [role2,setrole2]=useState('')
    const [nom,setnom]=useState('')
    const [id,setid]=useState(utilisateurs[utilisateurs.length-1].id)
    const [utilisateur,setutilisateur]=useState(utilisateurs)
    var recharche=()=>{
        let newUtilisateur=utilisateurs.filter(u=>u.role==role)
        setutilisateur(newUtilisateur)}
    var modefy=(e,i)=>{
        setutilisateur(prevUtilisateur =>
            prevUtilisateur.map(u => {
                if (u.id === i) {
                    if (e === "en cours") {
                        return { ...u, etat: 'validé' };
                    } else if (e === 'validé') {
                        return { ...u, etat: 'bloqué' };
                    } else {
                        return { ...u, etat: 'validé', nbDéBlocages: u.nbDéBlocages + 1 };
                    }
                }
                return u;
            }))}
    var Ajouter=()=>{
        let idd=id+1
        let x={id:id+1,nom:nom,role:role2,etat: "en cours", nbDéBlocages: 0 }
        setid(idd)
        setnom("")
        const newTable=[...utilisateur,x]
        setutilisateur(newTable)    
    }
    return<>
    <Titre titre={"Liste des utilisateurs"} />
    <select onChange={(e)=>setrole(e.target.value)} >
        <option >Select Role</option>       
        {roles.map((r,i)=><option key={i}>{r} </option>)}
    </select> <button onClick={recharche}>Recherche</button><br/>
    <table>
        <thead>
            <tr>
                <td>ID</td>
                <td>Nom Complet</td>
                <td>Role</td>
                <td>Etat</td>
                <td>Décision</td>
            </tr>
        </thead>
        <tbody>
            {utilisateur.map((u,i)=>{
                const buttonStyle = { color: u.etat === 'en cours' ? 'green' :  u.etat === 'validé' ?'red':'yellow' };
                
               
            return(
            <tr key={i}>
                <td>{u.id}</td>
                <td>{u.nom}</td>
                <td>{u.role}</td>
                <td>{u.etat}</td>
                <td>
                    <button style={buttonStyle} onClick={()=>modefy(u.etat,u.id)}>
                                        {u.etat === 'en cours' ? 'Validé' :u.etat === 'validé'?'Bloquer':'Débloquer'}
                    </button><br/>
                    {u.etat === 'bloqué'? `Le nombre de déblocages :${u.nbDéBlocages}`:''}
                </td>
            </tr>)
            })}
        </tbody>
    </table>
    <Titre titre={'Nouvel Utilisateur'}/>
    <input type="text" onChange={(e)=>setnom(e.target.value)}value={nom} /><br/>
    <p>Role:</p>
    <input type="radio" name="role" value="Normal" onClick={(e)=>setrole2(e.target.value)} />Normal <br/>
    <input type="radio" name="role" value="Gérant"  onClick={(e)=>setrole2(e.target.value)}/>Gérant<br/>
    <input type="radio" name="role" value="Admin"  onClick={(e)=>setrole2(e.target.value)}/>Admin<br/>
    <button onClick={Ajouter}>ajouter</button>
    </>
}