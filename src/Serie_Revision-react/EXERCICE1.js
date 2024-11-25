import { useEffect, useState } from "react"
const trains=[
    {id:'t1',nom:'Buraq',villes: [
                                    { nomV: 'fes', ordreP: 10 },
                                    { nomV: 'meknes', ordreP: 20 },
                                    { nomV: 'rabat', ordreP: 30 },
                                    { nomV: 'casablanca', ordreP: 40 },
                                 ]},
    {id:'t2',nom:'Gazel', villes:[
                                    { nomV: 'tanger', ordreP: 10 },
                                    { nomV: 'kenitra', ordreP: 20 },
                                    { nomV: 'rabat', ordreP: 30 },
                                    { nomV: 'casablanca', ordreP: 40 },
                                  ]},
    {id:'t3',nom:'Eagle-Wins', villes:[
                                    { nomV: 'marrakech', ordreP: 10 },
                                    { nomV: 'benguerir', ordreP: 20 },
                                    { nomV: 'settat', ordreP: 30 },
                                    { nomV: 'casablanca', ordreP: 40 },
                                  ]},
    {id:'t4',nom:'Fennec', villes:[
                                    { nomV: 'oujda', ordreP: 10 },
                                    { nomV: 'taourirt', ordreP: 20 },
                                    { nomV: 'fes', ordreP: 30 },
                                    { nomV: 'meknes', ordreP: 40 },
                                  ]}]

export default   function Exercice1() { 
  const [trainss,setTrains]=useState(trains)
  const [train,setTrain]=useState(trainss[0])
  const [id,setId]=useState('')
  const [nouvelle,setNouvelle]=useState('')
  const rechercher=()=>{
    let newTrain=trainss.find(x=>x.id===id)
    setTrain(newTrain)
  }
  const Ajouter=()=>{
    let x=train.villes.length
    let newligne={nomV:nouvelle,ordreP:`${x+1}0`}
    let y=trains.find(w=>w.id===train.id)
    let w=[...y.villes,newligne]
    const updatedTrains = trainss.map(t => 
      t.id === train.id 
        ? {...t,villes:[...t.villes,newligne]}
        : t
    );
    setTrains(updatedTrains)
    setTrain(updatedTrains.find(x=>x.id===train.id))    
  }
  const supprimer=(n)=>{
    console.log(n);
    const newTrains=trainss.map(t => 
      t.id === train.id 
        ? {...t,villes:t.villes.filter(y=>y.ordreP!==n)}
        : t
    );
    console.log(newTrains);
    setTrains(newTrains)
    setTrain(newTrains.find(x=>x.id===train.id))    
    
  }
  return <>
  <h3>Gestion des trajets de trains</h3>
  <table>
    <thead></thead>
    <tbody>
    <tr>
      <td>Id Train</td>
      <td><input onChange={(e)=>setId(e.target.value)} value={id}/></td>
      <td><button onClick={rechercher}>Rechercher</button></td>
    </tr>
    <tr>
      <td>Nom</td>
      <td><input value={train.nom} readOnly /></td>
      <td></td>
    </tr>
    <tr>
      <td>Ville depart</td>
      <td><input value={train.villes[0].nomV} readOnly /></td>
      <td></td>
    </tr>
    <tr>
      <td>Ville terminus</td>
      <td><input value={train.villes[train.villes.length-1].nomV} readOnly /></td>
      <td></td>
    </tr>
    <tr>
      <td>Noucelle ville de passage</td>
      <td><input onChange={(e)=>setNouvelle(e.target.value)} value={nouvelle}/></td>
      <td><button onClick={Ajouter}>Ajouter la ville</button></td>
    </tr>
    </tbody>
    <tfoot></tfoot>
  </table>
   <div
    className="table-responsive"
   >
    <table
      className="table table-striped table-hover table-borderless table-primary align-middle"
    >
      <thead className="table-light">
        <tr>
          <th>Nom de ville</th>
          <th>Ordre de passage</th>
          <th></th>
        </tr>
      </thead>
      <tbody className="table-group-divider">       
        {train.villes.map((n,i)=><tr key={i}className="table-primary">
          <td>{n.nomV}</td>
          <td>{n.ordreP}</td>
          <td><button onClick={()=>supprimer(n.ordreP)}>Supprimer</button></td>
          </tr> )}
      </tbody>
    </table>
   </div> 
  </>

}