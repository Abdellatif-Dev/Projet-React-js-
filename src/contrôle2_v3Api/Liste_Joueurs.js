import React, { useState } from 'react'
import FormRecherche from './FormRecherche'
import { Link } from 'react-router-dom'

export default function Liste_Joueurs({joueurss}) {
    const [joueurs, setJoueurs] = useState(joueurss)
    const Searsh=(s)=>{
        let search=s.toLowerCase()
        console.log(search);
        
        if(s===''){
            setJoueurs(joueurss)
        }else{
             setJoueurs(    
                joueurs.filter((j) =>
                j.title.toLowerCase().includes(search)
                ))
       
         
         

        }
    }
    return (
        <div>
            <h1> Liste des joueurs </h1>
            <FormRecherche Searsh={Searsh} />
            <div className="row">
                {joueurs.map((d, i) => (
                    <div key={i} className="col-md-4 pt-3 pb-3 bg-dark">
                        <div className="card">
                            <div className="card-body ">
                                <img src="" alt="image" />
                                <p className="card-text">Nom:{d.userId}</p>
                                <p className="card-text">Prenom:{d.id}</p>
                                <p className="card-text">Nom:{d.title}</p>
                                <p className="card-text">Nom:{d.body}</p>
                                <button className="btn btn-outline-primary m-3">
                                    <Link to={`/joueurs/${d.id}`}>Detail</Link>
                                </button>
                                <button className="btn btn-success">Voter</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
