import { click } from "@testing-library/user-event/dist/click";
import { useState } from "react";
import { Recherche } from "../contrôle 2 - devowfs202_v2/Recherche";

const fruits = [
  { name: 'Pomme', price: 2.5, place: 'France' },
  { name: 'Banane', price: 1.2, place: 'Ecuador' },
  { name: 'Orange', price: 2.0, place: 'Spain' },
  { name: 'Fraise', price: 3.5, place: 'Belgium' },
  { name: 'Raisin', price: 2.8, place: 'Italy' },
  { name: 'Mangue', price: 4.0, place: 'India' },
  { name: 'Ananas', price: 3.0, place: 'Costa Rica' },
  { name: 'Kiwi', price: 2.3, place: 'New Zealand' },
  { name: 'Cerise', price: 3.8, place: 'Turkey' },
  { name: 'Pastèque', price: 1.5, place: 'Morocco' },
  { name: 'Papaye', price: 2.9, place: 'Brazil' },
  { name: 'Pêche', price: 2.7, place: 'Greece' },
  { name: 'Abricot', price: 2.4, place: 'Turkey' },
  { name: 'Grenade', price: 3.1, place: 'India' },
  { name: 'Litchi', price: 4.5, place: 'China' }
];

export default function Exercice8(){
  const [rech,setRech]=useState([])
  const [recht,setRecht]=useState([])
  const [inp,setinp]=useState('')
  const rech1=(e)=>{
    const searchTerm = e.toLowerCase();
    if(e===""){
      setRech([])
    }else{
      let newfruits=fruits.filter(x=>x.name.toLowerCase().includes(searchTerm))
        setRech(newfruits)
    }
    setinp(e)
  }
  const click =(e)=>{
    setinp(e)
    setRech([])
  }
  const Recherch=()=>{
    console.log(inp);
    
    const searchTerm = inp.toLowerCase();
    if(inp===""){
      setRecht('')
    }else{
      let newfruits=fruits.filter(x=>x.name.toLowerCase().includes(searchTerm))
        setRecht(newfruits)
        setRech([])
    }

  }
  return<>
  <label>Rechareche :</label>
  <div>
  <input type="text" onChange={(e)=>rech1(e.target.value)} value={inp} />
  <button onClick={Recherch}>Rechareche</button>
  <ul style={{ listStyleType: 'none' }}>
    {rech.map((f,i)=><li key={i} onClick={()=>click(f.name)}>{f.name}</li>)}
  </ul>
  </div>
  {recht && (
    <div
    className="table-responsive"
  >
    <table
      className="table table-primary"
    >
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Place</th>
        </tr>
      </thead>
      <tbody>
      {recht.map((t,i)=><tr key={i}>
        <td>{t.name}</td>
        <td>{t.price}</td>
        <td>{t.place}</td>
      </tr>)}
      </tbody>
    </table>
  </div>
  )}
  
  
  </>
}