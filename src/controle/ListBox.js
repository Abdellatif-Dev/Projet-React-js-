export function ListBox(props){
    return <>
    <h3>Rechacer le specialites:</h3>
    <select multiple> 
    {props.tab.map((s,i)=><option key={i}>
        {s}
         </option>)}
         </select>
    </>
}