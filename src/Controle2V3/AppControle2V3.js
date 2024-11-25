import { useState } from "react";
import ListClient from "./ListClient";
// import ListCommandes from "./ListCommandes";
import { Clients } from "./data";

export default function AppControle2V3() { 
    const [commandesclient, setCommandesClient] = useState(Clients[0].Commandes); 
    const [visible, setVisible] = useState(false); 

    const chercherCommandes = (client) => { 
        setCommandesClient(client.Commandes); 
        setVisible(true); 
    };

    return (
        <>
            <ListClient 
                items={Clients} 
                cacherCommandes={() => setVisible(false)} 
                selectedClient={chercherCommandes} 
            />
{/*             {visible && <ListCommandes listcommandes={commandesclient} />}
 */}        </>
    );
}

