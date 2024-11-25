import { useState } from "react"
import { useDispatch } from "react-redux"

export function FormTache() {
    const [text,settex]=useState('')
    const dispatch=useDispatch()
    var Ajouter=()=>{
        dispatch(
            {
                type:'ADD',
                payload:text
            }
        )
        settex('')
    }
    return <>
    <input type="text" onChange={(e)=>settex(e.target.value)} value={text} />
    <button onClick={Ajouter}>Ajouter</button>
    </>
    
}