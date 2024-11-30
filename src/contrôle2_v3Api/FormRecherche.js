import React, { useState } from 'react'

export default function FormRecherche(props) {
    const [equipe,setEquipe]=useState()
    return (
        <div>
            <h3>Chercher par équipe</h3>
          
            <div className='input-group ' >
            <input
                type="text"
                onChange={(e)=>setEquipe(e.target.value)}
                className="form-control"
            />
            <button onClick={()=>props.Searsh(equipe)} className='btn btn-outline-success'> Search </button>
            </div>
        </div>
    )
}
