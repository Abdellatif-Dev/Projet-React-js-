import { useSelector } from "react-redux"

export default function ListTache(){
    const list=useSelector(s=>s.taches)
    return <>
    <ul>
    {list.map((l,i)=><li key={i}> 
    {l.desc}
    </li>)}
    </ul>
    </>
}