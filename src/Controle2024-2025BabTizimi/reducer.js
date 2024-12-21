import { useDispatch } from "react-redux";

// Initial state object
const initialState = {
    parcInformatique: [
        {
            id: 1,
            nom: "Ordinateur portable",
            description: "HP Pavilion",
            categorie: "Portable",
            quantiteStock: 0,
            prixUnitaire: 800,
        },
    ],
};
const CHANGE_QUANTITY='CHANGE_QUANTITY'
const DELETE_ITEM='DELETE_ITEM'

// Reducer function
const parcInformatiqueReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_QUANTITY:
            return {
                ...state,parcInformatique:state.parcInformatique.map(p=>
                    p.id===action.payload.id? {...p,quantiteStock:action.payload.quantite}
                    :p
                )
            };

        case DELETE_ITEM:
            return {
                ...state,
                parcInformatique:state.parcInformatique.filter(p=>
                    p.id!==action.payload.id
                )
            };

        default:
            return state;
    }
};
const dispatch=useDispatch()  

export const  changeQuantity=(id,newQuantity)=>{
    dispatch(
        {
            type:CHANGE_QUANTITY,
            payload:{id:id,newQuantity:newQuantity}
        }
    )
}
export const deleteItem=(id)=>{
    dispatch(
        {
            type:DELETE_ITEM,
            payload:id
        }
    )
}
export default parcInformatiqueReducer;
