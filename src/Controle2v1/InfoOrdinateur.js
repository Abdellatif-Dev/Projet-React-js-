export function InfoOrdinateur(props){
    return <>
    <span style={{textDecoration: "underline", fontWeight: 'bold'}}>Ordinateur selectioné:</span>
    <p>Numero: {props.Ordinateur.Numero}</p>
    <p>Intitulé: {props.Ordinateur.Intitulé}</p>
     <p>Date Achat: {props.Ordinateur.DateAchat}</p>
     </>
    }