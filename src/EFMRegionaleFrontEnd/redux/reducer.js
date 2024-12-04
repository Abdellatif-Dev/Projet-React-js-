import { ADD, DIV, MULT, SOUS } from "./action"

const instailstate={
    num1:0,
    num2:0,
    resultut:0,
    nboperation:'A',
    operation:"+",
}
export const reducer=(state=instailstate,action)=>{
        switch(action.type){
            case ADD:
                return {...state,resultut:parseFloat(action.payload.value1)+parseFloat(action.payload.value2) ,
                    nboperation:'A',num1:action.payload.value1,num2:action.payload.value2,operation:"+"}
            case SOUS:
                return {...state,resultut:parseFloat(action.payload.value1)-parseFloat(action.payload.value2) ,
                    nboperation:'B',num1:action.payload.value1,num2:action.payload.value2 ,operation:'-'}
            case MULT:
                return {...state,resultut:parseFloat(action.payload.value1)*parseFloat(action.payload.value2) ,
                    nboperation:'C',num1:action.payload.value1,num2:action.payload.value2 ,operation:'*'}
            case DIV:
                return {...state,resultut:parseFloat(action.payload.value1)/parseFloat(action.payload.value2)  ,
                    nboperation:'D',num1:action.payload.value1,num2:action.payload.value2 ,operation:'/'}
            default:
                return state
                
        }
    }