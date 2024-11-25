import { useState } from "react";
const Entry=[
    {nom: "fdgfd", prenom: "fdgzerrez"},
    {nom: "fd121", prenom: "fdgfgfd"},
    {nom: "fd45", prenom: "fdg1212"},
    {nom: "fdg789", prenom: "fdg879"},
    {nom: "fdg87897", prenom: "fdg547"},
]
export function Tableaux() {
    const [tab, setTab] = useState(); // Array of objects
    const [nom, setNom] = useState(""); // First input state
    const [prenom, setPrenom] = useState(""); // Second input state

    const ajouter = () => {
        let newEntry = { nom: nom, prenom: prenom ,note:0,filiere:incoune};
        setTab([...tab, newEntry]); // Updates the state with the new entry
        console.log(newEntry); // Logs the newly added entry
    };

    return (
        <>
            <input placeholder="Nom" onChange={(e) => setNom(e.target.value)} />
            <input placeholder="Prénom" onChange={(e) => setPrenom(e.target.value)} />
            <button onClick={ajouter}>Ajouter</button>

            <ul>
                {tab.map((item, index) => (
                    <li key={index}>
                        {item.nom} {item.prenom}
                    </li>
                ))}
            </ul>
        </>
    );
}
