import { Link, Route, Routes } from "react-router-dom";
import ConsultationChambre from "./ConsultationChambreP2";
import GestionChambre from "./GestionChambreP2";
import { chambres } from "./data"
import { useEffect, useState } from "react";

export default function AppGestionHotelP2() {
    const [lestchambre,setchamber]=useState(chambres)
    const [lestchambre1,setchamber1]=useState(lestchambre)
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
    var Supprimer=(code)=>{
        let x=lestchambre.filter(x=>x.code!==code)
        setchamber(x)    
    }
    useEffect(()=>{
        setchamber1(lestchambre)  
      },[lestchambre])
    var rechareche=(x)=>{
        let c=x.etage && x.desc ?  lestchambre1.filter(y=>y.etage===x.etage && y.description.includes(x.desc)):
        (x.etage || x.desc ? lestchambre1.filter(y=>y.etage===x.etage || y.description.includes(x.desc)):lestchambre);
        setchamber1(c)
    }
    var ajouter=(x)=>{
        let newlist=[...lestchambre,x]
        setchamber(newlist)
    }
    var Modifier=(x)=>{
        setchamber(lestchambre.map(y=>y.code===x.code? x:y))
    }
    return (
        <>
            <div style={divStyle}>
                <Link to="/" style={linkStyle}>Consultation des Chambre</Link>
                <Link to="/GestionChambre" style={linkStyle}>Gestion des Chambre</Link>
            </div>
            <Routes>
                <Route path="/" element={<ConsultationChambre chambre={lestchambre1} sup={Supprimer} rech={rechareche} />} />
                <Route path="/GestionChambre" element={<GestionChambre chambre={lestchambre} sup={Supprimer} ajouter={ajouter} modify={Modifier} />} />
                <Route path="/GestionChambre/:C" element={<GestionChambre chambre={lestchambre} sup={Supprimer} ajouter={ajouter} modify={Modifier} />} />
            </Routes>
        </>
    );
}






