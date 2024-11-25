import {questions} from './data'
import {Question,Entete} from './Entete'
export default function Contrôle1Devowfs204V1(){
    return <>
    <Entete titre='Quiz de Mathématiques'/>
    {questions.map(x=><Question Qst={x}/>)}
    </>
}