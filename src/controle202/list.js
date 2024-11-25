export default function List(props){
    const changer=(f,x)=>{
        console.log(f);
        props.chan(f,x)
        
        
    }
    return <>
  
        <table
            className="table table-primary">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">nom complet </th>
                    <th scope="col">role</th>
                    <th scope="col">etat</th>
                    <th scope="col">decision</th>
                </tr>
            </thead>
            <tbody>
           {props.tabl.map((x,i)=><tr key={i}>
            <td>{x.id}</td>
            <td>{x.nom}</td>
            <td>{x.role}</td>
            <td>{x.etat}</td>
            <td><button onClick={()=>changer(x.id,x.etat)}>{(x.etat==='en cours')?'valider':((x.etat==='validé')?'bloqué':'debloqué')}</button>{x.etat==='bloqué'?x.nbDéBlocages:null}</td>
           </tr>)}
                
               
            </tbody>
        </table>
    
    </>
}