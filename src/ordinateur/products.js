import { Link, useParams } from "react-router-dom";
import {produits} from './data.js'
export function Produits(props){
    
return  <>
{props.prod.map(x=><div> 
    <p>{x.titre}</p>
   <button><Link to={`/produit/${x.id}`} >Ajouter ou pano 

 </Link></button> 
</div>)}
</>
}
 export function Produitx(){
    
    let {id}=useParams()
    const p =produits.find(x=>x.id==id)
return <>
<p>{p.titre}</p>
<p>{p.prix}</p>
<p>{p.catégorie}</p>
 </>

}