export function RecherchOrdinateur(props){
    var selectedE=(e)=>{
        props.selectedElement(e)
    }
    return (<div> <h3 style={{textDecoration: "underline", fontWeight: 'bold'}} >Ordinateur trouvés:</h3>
        <select multiple onChange={(e)=>selectedE(e.target.value)}>
        {props.elements.map((e,i)=>{
        return <option key={i} value={e.Numero}>{e.Intitulé} </option>})}
        </select>
        </div>)
       
}