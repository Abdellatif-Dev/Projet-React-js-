export function Lunette(props) {
    const lunetteStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        margin: '20px 0'
    };

    const cardStyle = {
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '15px',
        margin: '10px',
        textAlign: 'center',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        width: '200px'
    };

    return (
        <div style={lunetteStyle}>
            {
                props.tap.map((l, i) => (
                    <div key={i} style={cardStyle}>
                        <img src={l.titre} alt="logo" style={{ width: '100%', borderRadius: '8px' }} />
                        <h4>{l.titre}</h4>
                        <p>{l.catégorie}</p>
                        <p>{l.prix}</p>
                    </div>
                ))
            }
        </div>
    );
}