import { useEffect, useState } from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";

const courses = [
    { id: "MarcheF", nom: "Marche femmes", categorie: "F", distance: 10000 },
    { id: "MarcheH", nom: "Marche hommes", categorie: "H", distance: 10000 },
    { id: "MarathonF", nom: "Marathon femmes", categorie: "F", distance: 42000 },
    { id: "MarathonH", nom: "Marathon hommes", categorie: "H", distance: 42000 },
    { id: "SemiMarathonF", nom: "Semi-Marathon femmes", categorie: "F", distance: 21097 },
    { id: "SemiMarathonH", nom: "Semi-Marathon hommes", categorie: "H", distance: 21097 }
  ];
  const participants = [
    { id: "1", nom: "Med", idCourse: "MarcheH" },
    { id: "2", nom: "Rajae", idCourse: "MarcheF" },
    { id: "3", nom: "Karim", idCourse: "MarathonH" },
    { id: "4", nom: "Sofia", idCourse: "MarathonF" },
    { id: "5", nom: "Ali", idCourse: "SemiMarathonH" },
    { id: "6", nom: "Sara", idCourse: "SemiMarathonF" }
  ];
export default function Exercice4(){
    const [part,setPart]=useState(participants)
    const ajouterP=(p)=>{
        console.log(p);
        setPart(p)
    }
    const suppermer=(s)=>{
        setPart(part.filter(y=>y.id!==s))
    }
    return <>
    <Routes>
        <Route path="/" element={<Course tabPart={part} sup={suppermer}/>}/>
        <Route path="/Nouveau/:ID" element={<NParticipants tab={part} newp={ajouterP} />}/>
    </Routes>
    </>
}
function NParticipants(props){
    const [nom,setNom]=useState('')
    let {ID}=useParams()
    let selecteCourse=courses.find(x=>x.id===ID)
    let max=Math.max(...props.tab.map(x=> x.id))
    const ok=()=>{
        let participant={id:max+1,nom:nom,idCourse:ID}
        console.log(participant);
        let p=[...props.tab,participant]
        props.newp(p)
        console.log(p);
        console.log(participants);
        
    }
    const cancel=()=>{
        setNom('')
    }
    
    return <>
    <button><Link to="/">{"<<"}</Link> </button>
    <table>
        <tr>
            <td>Id Participant</td>
            <td><input value={max+1}/></td>
        </tr>
        <tr>
            <td>Nom </td>
            <td><input onChange={(e)=>setNom(e.target.value)} value={nom}/></td>
        </tr>
        <tr>
            <td>Id Course</td>
            <td><input value={selecteCourse.id}/></td>
        </tr>
        <tr>
            <td><button onClick={cancel}>Cancel</button></td>
            <td><button onClick={ok}>Ok</button></td>
        </tr>
    </table>
    
    </>
}
function Course(props){
    const [Mara,setMara]= useState(courses[0])
    const plus=()=>{
        let i=courses.findIndex(x=>x.id===Mara.id)
        if(i<courses.length-1){
            setMara(courses[i+1])}
    }
    const moins=()=>{
        let i=courses.findIndex(x=>x.id===Mara.id)
        if(i>0){
            setMara(courses[i-1])}
    }
    const supp=(s)=>{
        props.sup(s)
    }
    return <>
    <h3>Compétition d'athletisme</h3>
    <table>
        <thead></thead>
        <tbody>
            <tr>
                <th>Course ID</th>
                <td><input readOnly value={Mara.id}/></td>
                <td>
                    <button onClick={()=>setMara(courses[0])} >  {"|<"}</button>
                    <button onClick={moins}>  {"<<"}</button>
                    <button onClick={plus}>  {">>"}</button>
                    <button onClick={()=>setMara(courses[courses.length-1])}>  {">|"}</button>
                </td>
            </tr>
            <tr>
                <th>Course Name</th>
                <td><input readOnly value={Mara.nom}/></td>
            </tr>
            <tr>
                <th>Categorie</th>
                <td>
                    <input type="radio" readOnly  name="CAT" checked={Mara.categorie==='H'}/>Homme
                    <input type="radio" readOnly  name="CAT" checked={Mara.categorie==='F'}/>Femme
                </td>
            </tr>
            <tr>
                <th>Distance</th>
                <td><input readOnly value={Mara.distance}/></td>
                <td><button><Link to={`/Nouveau/${Mara.id}`}>Nouveau participant</Link></button></td>
            </tr>
        </tbody>
    </table>
    <h3>Participants</h3>
    <table>
        <thead>
            <tr>
                <th>ID Participant</th>
                <th>Nom</th>
                <th>ID Course</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {props.tabPart.filter(y=>y.idCourse===Mara.id).map((p,i)=><tr key={i}>
                <td>{p.id}</td>
                <td>{p.nom}</td>
                <td>{p.idCourse}</td>
                <td><button onClick={()=>supp(p.id)}>Suppremer</button></td>
            </tr>)}
        </tbody>
    </table>

    </>
}
  