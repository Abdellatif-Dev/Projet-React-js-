import { chambres } from "./data";

const initialState = {
   taches: chambres,
   taches1: chambres
};
export const Controle2V11 = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,taches: [...state.taches,action.payload]
            };
        case 'SUP':
            return {
                ...state,taches:[...state.taches.filter(x=>x.code!==action.payload)]
            }
        case 'MOD':
            return {
                ...state,taches:[...state.taches.map(x=>x.code===action.payload.code ? action.payload:x)]
            }
        case 'RECH':
            return {
                ...state,
                    taches: state.taches.filter(x => 
                    (action.payload.desc ? x.description && x.description.includes(action.payload.desc) : true) &&
                    (action.payload.etage ? x.etage === action.payload.etage : true)
                    )
                };
            
            
                 
        default:
            return state;
    }
};
