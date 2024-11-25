import React from 'react'

export default function Voiture(props) {
    const supprimer=(s)=>{
        props.supprimer(s)
    }
  return (
        <tr  className="table-primary">
        <td>{props.data.id}</td>
        <td>{props.data.Marque}</td>
        <td>{props.data.TypeCarburant}</td>
        <td>{props.data.PrixLocation}</td>
        <td> <img src={props.data.image} width={'100px'} /></td>
        <td> <button onClick={()=>supprimer(props.data.id)}>Supprimer</button> </td>
        </tr>
  )
}
