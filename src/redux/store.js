const instailstate={
    taches:[],
    cpt:1}
export const reducer=(state=instailstate,action)=>{
        switch(action.type){
            case 'ADD':
                return {...state,taches:[...state.taches,{id:state.cpt,desc:action.payload,term:false}],
                cpt:state.cpt+1}
            default:
                return state
                
        }
    }