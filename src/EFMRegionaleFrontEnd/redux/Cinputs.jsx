import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ADDition, DIVision, MULTplication, SOUStraction } from './action'

export default function Cinputs() {
    const [valeur1,setValeur1]= useState()
    const [valeur2,setValeur2]= useState()
    const dispatch= useDispatch()
    const addition =()=>{
        let add={value1:valeur1,value2:valeur2}
        dispatch(ADDition(add))
        setValeur1('')
        setValeur2('')
    }
    const soustraction =()=>{
        let sus={value1:valeur1,value2:valeur2}
        dispatch(SOUStraction(sus))
        setValeur1('')
        setValeur2('')
    }
    const multplication =()=>{
        let mult={value1:valeur1,value2:valeur2}
        dispatch(MULTplication(mult))
        setValeur1('')
        setValeur2('')
    }
    const division =()=>{
        let div={value1:valeur1,value2:valeur2}
        dispatch(DIVision(div))
        setValeur1('')
        setValeur2('')
    }
    
    return (
    <div>
        <label>Valeur 1 :</label>
        <input type="text" value={valeur1} onChange={(e)=>setValeur1(e.target.value)} /><br/>
        <label>Valeur 2 :</label>
        <input type="text" value={valeur2} onChange={(e)=>setValeur2(e.target.value)} /><br/>
        <button onClick={addition}>+</button>
        <button onClick={soustraction}>-</button>
        <button onClick={multplication}>*</button>
        <button onClick={division}>/</button> <br/>
    </div>
  )
}
