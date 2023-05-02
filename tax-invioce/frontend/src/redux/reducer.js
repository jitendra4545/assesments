import { GET_CUSTOMER_FAILURE, GET_CUSTOMER_PENDING, GET_CUSTOMER_SUCCESS } from "./actionTypes"




const initialState={
    customer:[],
    supplier:[],
    item:[],
    sales:[],
    purchase:[],
    isLoading:false,
    isError:false
}

export const reducer=(state=initialState,action)=>{
   const {type,payload}=action
console.log(payload)
   switch(type){
    case GET_CUSTOMER_SUCCESS:{
        return {
            ...state,customer:payload,isLoading:false,isError:false
        }
    }
    case GET_CUSTOMER_PENDING:{
            return {
                ...state,isLoading:true,isError:false
            }
    }
    case GET_CUSTOMER_FAILURE:{
        return {
            ...state,isLoading:false,isError:true
        }
    }
    default:
        return state
   }
}