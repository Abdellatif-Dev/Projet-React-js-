
import  {DropList} from './DropList';
import  {RecherchOrdinateur} from './RecherchOrdinateur';
import  {InfoOrdinateur} from './InfoOrdinateur';
import  {FormNew} from './FormNew';
import  {marques,salles,Ordinateurs} from './data';
import { useState } from 'react';
const newOrdinateurs=Ordinateurs;
export function Appp() {
 const [CurrentPC, setCurrentPC]=useState(newOrdinateurs[0])
 const [marque,SetMarque]=useState(marques[0])
 const [salle,SetSalle]=useState(salles[0])
 const [ordinateursTrouvés, setOrdinateurs]=useState(newOrdinateurs);

  var changerMarque=(m)=>{
    SetMarque(m)
  }
  var changerSalle=(s)=>{
    SetSalle(s)
  }
  const rechercher=()=>{
  let newordinateursTrouvés=newOrdinateurs.filter(X=>X.Marque===marque).filter(X=>X.Salle===salle)
    setOrdinateurs(newordinateursTrouvés)
  }
  const changerOrdinateur=(e)=>{
 let selectedO= newOrdinateurs.find(x=>x.Numero==e)
 setCurrentPC(selectedO)
  }
  const ajouterPC=(e)=>{
    
    console.log(e.Numero+e.Intitulé);
     
    var today = new Date(),
     date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
     let pc ={Numero:e.Numero,Intitulé:e.Intitulé,Marque:marque,Salle:salle,DateAchat:date}
     console.log(pc);
     const  newOrdinateurs1=[...newOrdinateurs,pc]
     setOrdinateurs(newOrdinateurs1)
     console.log(newOrdinateurs1);
     
     
    }
    
    
  return  (<>
 <div> <div>
 <label>Marque:</label> <DropList items={marques} selectedItem={changerMarque}/>
 <label>Salle:</label><DropList items={salles} selectedItem={changerSalle}/>
 <button onClick={rechercher}>Recherche</button></div> 
 <div style={{display:'inline-block'}} >
 <RecherchOrdinateur elements={ ordinateursTrouvés } selectedElement={changerOrdinateur} />
 </div><div style={{display:'inline-block'}}>
 <FormNew submit={ajouterPC}/></div>
 <div><InfoOrdinateur Ordinateur={CurrentPC}/></div>
 </div> </>)
}


