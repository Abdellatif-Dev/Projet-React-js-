import { Route, Routes, Link } from "react-router-dom";
import { utilisateurs } from './data'
import Rechercher from "./Recherche";
import Header from "./Header";
import { useState } from "react";
import List from "./list";
import Ajouter from "./ajout";

export default function Appcontrol202() {
    const [tab, setTab] = useState(utilisateurs)
    const mod = (id, etat) => {
        setTab(prevUtilisateur =>
            prevUtilisateur.map(u => {
                if (u.id === id) {
                    if (etat === "en cours") {
                        return { ...u, etat: 'validé' };
                    } else if (etat === 'validé') {
                        return { ...u, etat: 'bloqué' };
                    } else {
                        return { ...u, etat: 'validé', nbDéBlocages: u.nbDéBlocages + 1 };
                    }
                }
                return u;
            }))
            
    }
    const cherche = (x) => {
        console.log(x)
        let y = x.toUpperCase()
        setTab(tab.filter(a => a.nom.toUpperCase().includes(y)))
        if (x === '') {
            setTab(utilisateurs)
        }
    }
    const ajouter=(u)=>{
        setTab([...tab,u])
    }
    return <>
        <Link to='/'>Accueil</Link>
        <Link to='/Nouvelle'>Nouvelle Utilisateur </Link>

        <Routes >
            <Route path="/" element={<><Header text='list des utilisteur' /> <Rechercher cher={cherche} /> <List tabl={tab} chan={mod} /> </>} />
            <Route path="/Nouvelle" element={<><Header text='nouvelle utilisateur' /><Ajouter tablo={tab} ajout={ajouter}/> </>} />
        </Routes>
    </>

}