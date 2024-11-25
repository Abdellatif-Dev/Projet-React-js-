import { useState } from 'react';
export const FormNew= (props)=>{
    const [num, setNumero]=useState()
    const [Intl, setIntitule]=useState()
    const handleSubmit=(e)=>{
   let or={Numero:num, Intitulé:Intl};
   props.submit(or)
   setNumero("")
   setIntitule("")
    }
   return <form  >
    <label>Numéro:</label><input value={num} onChange={(e)=>setNumero(e.target.value)}/> <br></br>
    <label>Intitulé:</label><input value={Intl} onChange={(e)=>setIntitule(e.target.value)}/><br></br>
    <input type='button' onClick={handleSubmit} value="Nouvel ordinateur"/> </form>
   }