import React from 'react'

export default function AficherStagiaires(props) {
  return (
    <div>
        <div
            className="table-responsive"
        >
            <table
                className="table table-primary"
            >
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Matricule</th>
                        <th scope="col">Nom</th>
                        <th scope="col">Ville</th>
                        <th scope="col">Code Postal</th>
                        <th scope="col">Moyenne</th>
                        <th scope="col">Supprimer  </th>
                        <th scope="col">Editer</th>
                    </tr>
                </thead>
                <tbody>
                    {props.table.map((stagiaire, index) => (
                        <tr key={index}>
                            <td>{stagiaire.id}</td>
                            <td>{stagiaire.matricule}</td>
                            <td>{stagiaire.nom}</td>
                            <td>{stagiaire.ville}</td>
                            <td>{stagiaire.codepostal}</td>
                            <td>{stagiaire.moyenne}</td>
                            <td>
                            <button onClick={()=>props.supprimer(stagiaire.id)} className="btn btn-dark mx-3">Supprimer</button>
                            </td>
                            <td>
                            <button onClick={()=>props.editer(stagiaire.id)} className="btn btn-dark mx-3">Editer</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        
    </div>
  )
}
