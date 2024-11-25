import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Rechercher} from './createslice'

export default function Cher() {
    const [text,setText]=useState('')
    const dispatch=useDispatch()
    const type =useSelector(s=>s.tablo.type)
    const fruit =useSelector(s=>s.tablo.table)
    console.log(type);
    
  return (
    <div>
        <input onChange={(e)=>setText(e.target.value)} /><br/>
        <button onClick={()=>dispatch(Rechercher(text))} >Chercher</button>
        <p>le type : {type}</p>
        <ul>
            {fruit.map((x,i)=><li key={i}>
                {x.nom}
            </li>)}
        </ul>

    </div>
  )
}
