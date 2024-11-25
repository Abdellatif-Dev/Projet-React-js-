import { useDispatch, useSelector } from "react-redux";
import RechercheChambre from "./RechercheChambre";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
export default function ConsultationChambre(){
    const chambre=useSelector(e=>e.taches)
    const dispatch=useDispatch()
    var Supprimer=(code)=>{
      dispatch({
        type:'SUP',
        payload:code
      })
    }
    return <>
    <RechercheChambre/>
    <div className="container-fluid p-5  ">
    <h3>Consultation des Chambres</h3>
    <table className="table table-bordered">
    <thead>
      <tr>
        <th>Code</th>
        <th>NombreLits</th>
        <th>Etage</th>
        <th>Surface</th>
        <th>Description</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
        {chambre.map((c,i)=>
        <tr key={i}>
            <td>{c.code}</td>
            <td>{c.nombreLits}</td>
            <td>{c.etage}</td>
            <td>{c.surface}</td>
            <td>{c.description}</td>
            <td>
                <button className="btn btn-warning mx-2" ><Link to={`/GestionChambre/${c.code}`}>Modifier</Link> </button>
                <button className="btn btn-danger mx-2" onClick={()=>Supprimer(c.code)}>Supprimer</button>
            </td>
        </tr>)}
      
    </tbody>
  </table>
  </div>
    </>
}