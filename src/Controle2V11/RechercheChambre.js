import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function RechercheChambre(){
    const [etag,setetage]=useState()
    const [desc,setdesc]=useState()
    const dispatch=useDispatch()
    var rechrche=()=>{
        let rech={etage:etag,desc:desc}
        dispatch(
            {
                type:'RECH',
                payload:rech
            }
        )
        setetage('')
        setdesc('')
    }
    return <div  className="container-fluid p-5 bg-primary ">
    <div className="row">
    <div className="col-5">
        <input placeholder="etage" onChange={(e)=>setetage(e.target.value)} value={etag} className="form-control"/>
    </div>
    <div className="col-5">
        <input placeholder="Description" onChange={(e)=>setdesc(e.target.value)} value={desc} className="form-control"/> 
    </div>
    <div className="col-2">
        <button onClick={rechrche} className="btn btn-light">Recherche</button></div>    
    </div></div>
}