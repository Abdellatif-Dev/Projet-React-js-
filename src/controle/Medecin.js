export function Medecin(props){
    var div1={
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '15px',
     
     
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        width: '300px'
    };
    var div2={
        display: 'flex',
        
        margin: '20px auto'
    };
    var div3={
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
      
    }
    var p1={
        
        margin: '0 '
    }
    var p2={
        width: '130px',
        color:'red',
        border: '1px solid red',
        textAlign: 'center',
        borderRadius: '15px',
        margin: ' 0 0 0 120px '
    }
    return (
            <div style={div3}>
            {props.tab.map((m,i)=><div key={i} style={div1}>
            <h3>{m.nom}</h3>
            <p>{m.specialité}</p>
            <p>{m.adresse}</p>
            <div style={div2}><p style={p1}>{m.nombreVue}</p><p style={p2}>{m.tel}</p></div>
            </div>)}
            
            </div>
             );
}