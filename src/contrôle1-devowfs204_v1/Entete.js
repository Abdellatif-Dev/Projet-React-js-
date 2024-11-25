import { useState } from "react"

export function Entete(props){
    return <h1>{props.titre}</h1>
}
export function Question(props){
    const [rep,setrep]=useState("")
    const [style,setstyle]=useState("")
    const reponse=(r)=>{
        if(rep){
            return;
        }
        if(r===props.Qst.réponseCorrect){
             setrep('la réponse cliquée est correcte')
             setstyle({color:'green'})
        }else{
             setrep('la réponse est incorrecte')
             setstyle({color:'red'})
        }
console.log(r);

    }
    return <>
    <h3>{props.Qst.enoncé}</h3>
    {props.Qst.options.map((r,i)=> <button key={i} onClick={()=>reponse(r)}>{r} </button>)}
   {  rep && (
    <h4 style={style}> {rep}</h4>
   )}
    </>
}