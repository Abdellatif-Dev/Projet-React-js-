import React, { useEffect, useState } from 'react'

export default function APPApi() {
    const [utilisateur,setUtilisateur]=useState([])
    const [poste,setPoste]=useState([])
    const [posteUtilisateur,setPosteUtilisateur]=useState(0)
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUtilisateur(data))
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setPoste(data))
    },[])
    var detail=(id)=>{
        setPosteUtilisateur(id)
    }
    return (
    <div>
        <h1>Utilisateurs</h1>
        {utilisateur.map((u,i)=><div key={i}><p>{u.name} 
            <button onClick={()=>detail(u.id)}>details</button>
            {posteUtilisateur==u.id
            ?<ul>
                {poste.filter(x=>x.userId===posteUtilisateur).map(y=><li>{y.title}</li>)}
            </ul>
            :null}
            </p></div>)}
    </div>
  )
    
}
