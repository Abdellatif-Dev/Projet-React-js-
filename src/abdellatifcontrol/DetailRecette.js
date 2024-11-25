import { Link, useParams } from "react-router-dom"

export default function Detailrecette(props) {
    const { id } =useParams()
    let newd = props.tab.find(x => x.id == id)
    console.log(newd);
    const Plus = (x,l) => {
        props.like(x,l)
    }
    return <>
        <div className="card border-primary" >
            <h2 className="card-title">{newd.title}</h2>
            <img src={`../${newd.image}`} style={{ width: '100%', height: '300px' }} />
            <div className="card-body">
                <h3 className="card-title">Ingredients:</h3>
                <ul>
                    {newd.ingredients.map((x, i) => <li key={i}>{x}</li>)}
                </ul>
                <button className="btn btn-primary" onClick={() => Plus(newd.id,newd.likeCount)}>Like ({newd.likeCount})</button>
                <h4 className="card-title">{newd.instructions}</h4>
                <Link to='/'>View full Recipe</Link>
            </div>
        </div>


    </>
}