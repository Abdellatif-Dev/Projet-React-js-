import { SlLike } from "react-icons/sl";
export function List(props){
    var like=(code)=>{
        console.log(code);
        props.pluslike(code) 
    }
    return <>
    <table>
        <thead>
            <tr>
                <td>Code</td>
                <td>Depart</td>
                <td>Arrivee</td>
                <td>Niveau</td>
                <td>Likes</td>
            </tr>
        </thead>
        <tbody>
            {props.tab.map((v,i)=><tr key={i}>
                <td>{v.code}</td>
                <td>{v.depart}</td>
                <td>{v.arrivee}</td>
                <td>{v.niveau}</td>
                <td><SlLike onClick={()=>like(v.code)}/> ({v.likes})</td>
            </tr>)}
        </tbody>
    </table>
    </>
}