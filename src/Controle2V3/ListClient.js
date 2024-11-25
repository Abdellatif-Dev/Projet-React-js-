import { Component } from 'react';

export default class ListClient extends Component { 
    constructor(props) { 
        super(props); 
        this.state = { client: props.items[0] }; 
    }

    chercherClient(e) { 
        const selectedClient = this.props.items.find(l => l.Numero === parseInt(e, 10));
        this.props.cacherCommandes(false); 
        if (selectedClient) {
            this.setState({ client: selectedClient });
        }
    }

    render() { 
        return (
            <> 
                <div>
                    <label>Choisir un Client</label>
                    <select onChange={(e) => this.chercherClient(e.target.value)}> 
                        {this.props.items.map((l, i) => (
                            <option key={i} value={l.Numero}>{l.Numero}</option>
                        ))}
                    </select>
                </div> 
                <div>
                    <p>Numero: {this.state.client.Numero}</p> 
                    <p>NomComplet: {this.state.client.NomComplet}</p> 
                    <p>Nombre de commandes: {this.state.client.Commandes.length}</p> 
                    <p>
                        <button onClick={() => this.props.selectedClient(this.state.client)}>
                            Voir commandes
                        </button>
                    </p>
                </div>
            </>
        ); 
    }
}
