import { Route, Routes } from "react-router-dom";
import { Produits, Produitx } from "./products";
import { produits } from "./data";

export function Afficher(){
return <>


<Routes>
    <Route path="/" element={<Produits prod={produits} ></Produits>}/>
    <Route path="/produit/:id" element={<Produitx></Produitx>}/>
    </Routes>
</>
}