import { useState } from "react"

export function Recherche(props){
    const [rech,setrech]=useState()
    var recherche=()=>{
        props.recher(rech)
    }
    return <>
    <select onChange={(e)=>setrech(e.target.value)}>
        <option>select un ville</option>
        {props.tab.map((v,i)=><option key={i}>{v}</option>)}
    </select>
    <button onClick={recherche} >Recherche</button>
    </>
}