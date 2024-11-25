import { useEffect, useState } from "react";
import { Header } from "./Header";
import Titre from "./Titre";
import { categories, articles } from './data'

export default function Controle1V2() {
    const [pc, setpc] = useState(articles)
    const [tpc, settpc] = useState([])
    const changerPc = (e) => {
        let x = articles.filter(x => x.Categorie == e)
        setpc(x)
    }

    const ajouter = (e) => {
        settpc([...tpc, e])
    }
    const supprimer = (s) => {
        let x = tpc.filter((y, i) => i != s)
        settpc(x)
    }

    return <>
        <Header />f
        <Titre text={"Recharche par catégorie"} />
        <select onChange={(e) => changerPc(e.target.value)} >
            {categories.map((c, i) => <option key={i}>{c}</option>)}
        </select>
        <table>
            <tr>
                <td>Code</td>
                <td>Designation</td>
                <td>Prix</td>
                <td>action</td>
            </tr>
            {pc.map((y, i) => <tr key={i}>
                <td>{y.Code}</td>
                <td>{y.Designation}</td>
                <td>{y.Prix}</td>

                <td>
                    <button onClick={(e) => ajouter(y)} > Ajouter au panier</button>
                </td>
            </tr>)}
        </table>
        {tpc.length > 0 && (
            <>
                <table>
                    <tr>
                        <th>Code</th>
                        <th>Designation</th>
                        <th>Prix</th>
                        <th>Action</th>
                    </tr>
                    {tpc.map((item, i) => (
                        <tr key={i}>
                            <td>{item.Code}</td>
                            <td>{item.Designation}</td>
                            <td>{item.Prix}</td>
                            <td>
                                <button onClick={() => supprimer(i)}>Supprimer</button>
                            </td>
                        </tr>
                    ))}
                </table>
                <p>Total Prix: {tpc.reduce((t, s) => t += s.Prix, 0)}</p>
            </>
        )}

    </>


}
