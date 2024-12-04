import React from 'react'
import { useSelector } from 'react-redux'

export default function Coutput() {
    const output = useSelector(state => state.resultut)
    const NUM1 = useSelector(state => state.num1)
    const NUM2 = useSelector(state => state.num2)
    const NBOperation = useSelector(state => state.nboperation)
    const Operation = useSelector(state => state.operation)
  return (
    <div>
        <h3>Resititution de l'operation du store est comme suit</h3>
          {NUM1} {Operation} {NUM2} = {output}
        <p>Le nb operation : {NBOperation}</p>
    </div>
  )
}
