import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Chercher } from "./createslice"

export function Recettes(){
    const [text,setText]=useState('')
    const dispatch = useDispatch()
    const select=useSelector(s=>s.Table.table)
        return (
        <>
        <input type="text" onChange={(e)=>setText(e.target.value)}/>
        <button onClick={() => dispatch(Chercher(text))}>Chercher</button>
        <div className="row">
            {select.map((x,i)=><div className="col" key={i}>
                <h1>{x.title}</h1>
                <p>{x.instructions}</p>
            </div>)}
        </div>

        </>
    )
}