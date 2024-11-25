import { useState } from "react"

export default function Rechercher(props){
    const [text,setText]=useState('');
    const chercher=()=>{
        props.cher(text)
        setText('')
    }
    return <>
    <input onChange={(e)=>setText(e.target.value)} value={text}/>
    <button onClick={chercher}>chercher</button>
    </>
}