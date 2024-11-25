import RechercheChambre from "./RechercheChambreP2";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
export default function ConsultationChambre(props){
    var Supprimer=(code)=>{
        props.sup(code)
    }
    var rechareche=(x)=>{
        props.rech(x)
    }
    return <>
    <RechercheChambre rech={rechareche}/>
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
        {props.chambre.map((c,i)=>
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