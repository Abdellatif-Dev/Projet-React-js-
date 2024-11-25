import { Link, Route, Routes } from "react-router-dom";
import ConsultationChambre from "./ConsultationChambre";
import GestionChambre from "./GestionChambre";

export default function AppGestionHotel() {
    const divStyle = {
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'center',
        padding: '10px'
    };
    
    const linkStyle = {
        textDecoration: 'none',
        color: 'white',
        margin: '0 10px'
    };

    return (
        <>
            <div style={divStyle}>
                <Link to="/" style={linkStyle}>Consultation des Chambre</Link>
                <Link to="/GestionChambre" style={linkStyle}>Gestion des Chambre</Link>
            </div>
            <Routes>
                <Route path="/" element={<ConsultationChambre />} />
                <Route path="/GestionChambre" element={<GestionChambre />} />
                <Route path="/GestionChambre/:C" element={<GestionChambre />} />
            </Routes>
        </>
    );
}






