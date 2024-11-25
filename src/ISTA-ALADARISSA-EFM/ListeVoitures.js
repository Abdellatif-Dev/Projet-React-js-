import Voiture from './Voiture'
export default function ListeVoitures(props) {
    const supprimer=(s)=>{
        props.supprimer(s)
    }
    return (
    <>
        <h1>Liste des voitures:</h1>
        <table className="table table-striped table-hover table-borderless table-primary align-middle">
                <thead className="table-light">
                    <tr>
                        <th>#</th>
                        <th>Marque</th>
                        <th>TypeCarburant</th>
                        <th>PrixLocation</th>
                        <th>image</th>
                        <th>operation</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    
                    {props.table.map((v,i)=><Voiture key={i} data={v} supprimer={supprimer}/>)}
                    
                </tbody>
                <tfoot>
                </tfoot>
            </table>
    </>
  )
}
