import React from 'react'
import { useState } from 'react'

export default function InfoProd() {
    const [Prd, setProd] = useState()
    const [affich, setAffich] = useState(false)
    const [Ref, setRef] = useState()
    const [nom, setNom] = useState()
    const [Cat, setCat] = useState('Petit dejeuner')
    const [desc, setDesc] = useState()
    const [Prix, setPrix] = useState()
    const [img, setImg] = useState()
    const chargerImg = (e) => {

        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImg(reader.result)
            }
            reader.readAsDataURL(file)
        }
    }
    const valider = () => {
        let newProduit = { referance: Ref, nom: nom, categorie: Cat, description: desc, prix: Prix, image: img }
        setProd(newProduit)
        setAffich(true)

    }




    return (
        <div>
            <div className='row'>
                <div className='col 8'>
                    <label for="" className="form-label">reference</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setRef(e.target.value)}
                    />
                    <label for="" className="form-label">nom</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setNom(e.target.value)}
                    />
                    <label for="" className
                        ="form-label">categorie</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setCat(e.target.value)}
                    />
                    <label for="" className="form-label">description</label>

                    <textarea className="form-control" onChange={(e) => setDesc(e.target.value)} rows="3"></textarea>


                    <label for="" className="form-label">prix</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setPrix(e.target.value)}
                    />
                    <label for="" className="form-label">image</label>
                    <input
                        type='file' accept='img/*'
                        className="form-control"
                        onChange={chargerImg}
                    />


                    <button onClick={valider}>valider</button>
                </div>
                <div className='col 4'>
                    {affich && (
                        <ul>
                            <li>referance :{Prd.referance}</li>
                            <li>nom :{Prd.nom}</li>
                            <li>prix :{Prd.prix}</li>
                            <li>categorie :{Prd.categorie}</li>
                            <li><img src={Prd.image} width={'200 px'} height={'140 px'} /></li>
                        </ul>
                    )}
                </div>
            </div>
        </div>
    )
}
