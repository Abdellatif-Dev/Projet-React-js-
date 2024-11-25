import { Route, Routes } from "react-router-dom";
import Recetteslist from "./RexetteList";
import { useState } from "react";
import { recettes } from "./data";
import Detailrecette from "./DetailRecette";

export default function AppControl2024() {
    const [rece, setrece] = useState(recettes)
    const Recher = (r) => {
        let R=r.toUpperCase()
        let newR = recettes.filter(x => x.title.toUpperCase().includes(R))
        setrece(newR)
        console.log(r.toUpperCase());
        
    }
    const pluslike = (x, l) => {
        let like = l + 1
        let newy = recettes.map((y) => y.id == x ? { ...y, likeCount: like } : y)
        setrece(newy)
        
    }
    return <>
        <Routes>
            <Route path="/" element={<Recetteslist tab={rece} rechercher={Recher} />} />
            <Route path="/Recipe/:id" element={<Detailrecette tab={rece} like={pluslike} />} />
        </Routes>
    </>
}