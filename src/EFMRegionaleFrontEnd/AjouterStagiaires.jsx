import React, { useEffect, useState } from 'react'

export default function AjouterStagiaires(props) {
    const [ID,setID]=useState()
    const [Matricule,setMatricule]=useState('')
    const [Nom,setNom]=useState('')
    const [Ville,setVille]=useState('')
    const [CodeP,setCodeP]=useState('')
    const [Moyenne,setMoyenne]=useState('')
    const maxid=Math.max(...props.table.map(x=>x.id))
    useEffect(() => {
        setID(maxid+1)
    },[])

    const ajouter=()=>{
        if (Matricule) {
            // Vérifier si le matricule existe déjà
            let matriculerepeter = props.table.find(x => x.matricule === Matricule);
            if (matriculerepeter) {
                alert("Matricule déjà existant");
                return; // Sortir de la fonction 
            }}
        if (parseFloat(Moyenne)>20 || parseFloat(Moyenne)<0) {
            alert('le Moyenne doit etre compris entre 0 et 20');
            return;
        }

        if( Matricule && Nom && Ville && CodeP && Moyenne ){
            const newstagiaire={id:ID,matricule: Matricule, nom: Nom, codepostal:CodeP, ville: Ville, moyenne: Moyenne}
            props.AjouterStagiaire(newstagiaire)
        }
        
    }
    useEffect(
        ()=>{
            if(props.edite){
                let stagiaire = props.table.find(x => x.id === props.edite);
                setID(stagiaire.id)
                setMatricule(stagiaire.matricule)
                setNom(stagiaire.nom)
                setVille(stagiaire.ville)
                setMoyenne(stagiaire.moyenne)
                setCodeP(stagiaire.codepostal)
            }
        },[props.edite]
    )
    const vider=()=>{
        setID(maxid+1)
        setMatricule('')
        setNom('')
        setVille('')
        setMoyenne('')
        setCodeP('')
    }
    
    return (
    <div>
        <div className="mb-3 input-group"> {/* group input pour id */}
            <label className="input-group-text">ID</label>
            <input
                type="text"
                className="form-control"
                placeholder=""
                readOnly
                value={ID}
            />
        </div>
        <div className="mb-3 input-group"> {/* group input pour Matricule */}
            <label className="input-group-text">Matricule</label>
            <input
                type="text"
                className="form-control"
                placeholder="Matricule"
                required
                onChange={(e)=>setMatricule(e.target.value)}
                value={Matricule}
            />
        </div>
        <div className="mb-3 input-group"> {/* group input pour Nom */}
            <label className="input-group-text">Nom</label>
            <input
                type="text"
                className="form-control"
                placeholder="Nom"
                required
                onChange={(e)=>setNom(e.target.value)}
                value={Nom}
            />
        </div>
        <div className="mb-3 input-group"> {/* group input pour Ville */}
            <label className="input-group-text">Ville</label>
            <input
                type="text"
                className="form-control"
                placeholder="Ville"
                required
                onChange={(e)=>setVille(e.target.value)}
                value={Ville}
            />
        </div>
        <div className="mb-3 input-group"> {/* group input pour Code Postal */}
            <label className="input-group-text">Code Postal</label>
            <input
                type="text"
                className="form-control"
                placeholder="Code Postal"
                required
                onChange={(e)=>setCodeP(e.target.value)}
                value={CodeP}
            />
        </div>
        <div className="mb-3 input-group"> {/* group input pour Moyenne */}
            <label className="input-group-text">Moyenne</label>
            <input
                type="text"
                className="form-control"
                placeholder="Moyenne"
                required
                onChange={(e)=>setMoyenne(e.target.value)}
                value={Moyenne}
            />
        </div>
        <div className="m-3">
            <button onClick={ajouter} className="btn btn-dark mx-3">Ajouter</button>
            <button  className="btn btn-dark mx-3">Filtrer ville et nom</button>
            <button onClick={vider} className="btn btn-dark mx-3">Vider</button>
            <button  className="btn btn-dark mx-3">Initialiser recherche</button>
        </div>

    </div>
  )
}
