export default function ListVoiture(props){
    return <>
    <h1>LIste des voiture</h1> <br/>
    <div
        className="table-responsive"
    >
        <table
            className="table table-striped table-hover table-borderless table-primary align-middle"
        >
            <thead className="table-light">
               
                <tr>
                    <th>#</th>
                    <th>marque</th>
                    <th>typeCarburant</th>
                    <th>prix de location</th>
                    <th>image</th>
                    <th>operation</th>
                </tr>
            </thead>
          {props.ajout.map((x,i)=><tr key={i}>
            <td>{x.id}</td>
            <td>{x.marque}</td>
            <td>{x.typeCarburant}</td>
            <td>{x.prixLocation}</td>
            <td>{x.image}</td>
          </tr>)}
           
        </table>
    </div>
    
    </>
}