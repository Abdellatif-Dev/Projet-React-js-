import React, { useState } from 'react'

export default function AjouterVoiture(props) {
    const [id,setId]=useState('')
    const [marque,setMarque]=useState('')
    const [type,setType]=useState('')
    const [prix,setPrix]=useState('')
    const [img,setImg]=useState('')
    const ajouter=()=>{
        let voiture={id:id,Marque:marque,TypeCarburant:type,PrixLocation:prix,image:img}
        props.AjouterV(voiture)
        setId('')
        setMarque('')
        setType('')
        setPrix('')
        setImg('')
    }
  return (
    <div>
        <h1>Ajouter une voiture</h1>
            <input type="text" className="form-control" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} />
            <input type="text" className="form-control" placeholder="Marque" value={marque} onChange={(e) => setMarque(e.target.value)} />
            <input type="text" className="form-control" placeholder="Type Carburant" value={type} onChange={(e) => setType(e.target.value)} />
            <input type="text" className="form-control" placeholder="Prix Location" value={prix} onChange={(e) => setPrix(e.target.value)} />
            <input type="text" className="form-control" placeholder="Image" value={img} onChange={(e) => setImg(e.target.value)} />
            <button onClick={ajouter}> Ajouter</button>
    </div>
  )
}
