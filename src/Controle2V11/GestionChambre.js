import { useState,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
export default function GestionChambre() {
    const [code, setCode] = useState("");
    const [num, setNum] = useState("");
    const [surf, setSurf] = useState("");
    const [desc, setDesc] = useState("");
    const [etage, setEtage] = useState("")
    const dispatch=useDispatch()
    let {C}=useParams()
    console.log(C);
    
    const chambre=useSelector(c=>c.taches)
    useEffect(() => {
        if (C) {
            const chambreToEdit = chambre.find(chambre => chambre.code === C);
            if (chambreToEdit) {
                setCode(chambreToEdit.code);
                setNum(chambreToEdit.nombreLits);
                setSurf(chambreToEdit.surface);
                setDesc(chambreToEdit.description);
                setEtage(chambreToEdit.etage);
                console.log(chambreToEdit.etage);
            }
        }
    }, [C, chambre]);
    const ajouter = () => {
        if(code==="" || num==='' || surf==='' ||desc==='' ||etage===''){
        alert("Veuillez remplir tous les champs.");}
        else{
            let chambre={code:code,nombreLits:num,surface:surf,etage:etage,description:desc}
            dispatch({
                type:'ADD',
                payload:chambre
            })
            reste()
            }
    };
    const Modifier = () => {
        if(code==="" || num==='' || surf==='' ||desc==='' ||etage===''){
        alert("Veuillez remplir tous les champs.");}
        else{
            let chambre={code:code,nombreLits:num,surface:surf,etage:etage,description:desc}
            dispatch({
                type:'MOD',
                payload:chambre
            })
            reste()
            }
    };
    const Supprimer=()=>{
        if(code===''){
            alert("Veuillez remplir le champ de code.");}
        else {
            dispatch({
                type:'SUP',
                payload: code
            })
            reste()
        }
    }
    var reste=()=>{
        setCode('')
        setNum('')
        setSurf('')
        setDesc('')
        setEtage("")
    }
    return (
        <div className="container-fluid p-5">
            <h2>Gestion des Chambres</h2>
            <label>Code :</label> <br/>
            <input type="text" onChange={(e) => setCode(e.target.value)} value={code} className="form-control " />
            <label>Nombre de lits :</label> <br/>
            <input type="number" onChange={(e) => setNum(e.target.value)} value={num}className="form-control " /> 
            <label>Étage :</label> <br/>
            <input type="radio" name="etage" value="1" checked={etage === "1"} onChange={(e) => setEtage(e.target.value)} /> Étage 1
            <input type="radio" name="etage" value="2" checked={etage === "2"} onChange={(e) => setEtage(e.target.value)} /> Étage 2
            <input type="radio" name="etage" value="3" checked={etage === "3"} onChange={(e) => setEtage(e.target.value)} /> Étage 3 <br/>

            <label>Surface :</label> <br/>
            <input type="text" onChange={(e) => setSurf(e.target.value)} value={surf} className="form-control "/> 

            <label>Description :</label> <br/>
            <textarea onChange={(e) => setDesc(e.target.value)} value={desc} className="form-control" ></textarea> <br/>

            <button onClick={ajouter} className="btn btn-primary mx-2">Ajouter</button>
            <button onClick={Supprimer} className="btn btn-danger mx-2">Supprimer</button>
            <button onClick={Modifier} className="btn btn-warning mx-2">Modifier</button>
            <button onClick={reste} className="btn btn-secondary mx-2">Réinitialiser</button>
        </div>
    );
}
