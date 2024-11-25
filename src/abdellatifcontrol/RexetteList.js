
import { Link } from "react-router-dom";

export default function Recetteslist(props) {
    const Reche = (e) => {
        console.log(e);

        props.rechercher(e)
    }
    return <>
        <h2>Recipe Book</h2>
        <input type="text" className="form-control" placeholder="Search for a recipe" onChange={(e) => Reche(e.target.value)} />




        <div className="row">
            {props.tab.map((r, i) => <div className="col" key={i}>
                <img src={`${r.image}`} style={{width:'100%'}}/>
              
                <h4>{r.title} ({r.likeCount})</h4>
                <p>{r.instructions}</p>
                <p><Link to={`/Recipe/${r.id}`} > View Details</Link></p>
            </div>)}
        </div>




    </>

}