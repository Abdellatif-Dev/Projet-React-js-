import { useState } from "react";
import { List } from "./List";
import { Recherche } from "./Recherche";
import { list_circuits,endroits } from "./data";

export function CircuitSlice(){
    const [table,settab]=useState(list_circuits)
    var ville=(v)=>{
        settab(list_circuits.filter(x=>x.arrivee===v || x.depart===v))
    }
    var incrumenterlike=(code)=>{
        settab(prevlist_circuits=>
            prevlist_circuits.map(v=>{
                if (v.code === code) {
                        return { ...v, likes:v.likes+1 };
                }
            return v
            }
            )
        )
    }
    return<>
    <Recherche tab={endroits} recher={ville}/>
    <List tab={table} pluslike={incrumenterlike}/>
    </>
}