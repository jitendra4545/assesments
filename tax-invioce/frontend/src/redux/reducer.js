import { DELETE_CUSTOMER_FAILURE, DELETE_CUSTOMER_PENDING, DELETE_CUSTOMER_SUCCESS, DELETE_SUPPLIER_SUCCESS, GET_CUSTOMER_FAILURE, GET_CUSTOMER_PENDING, GET_CUSTOMER_SUCCESS, GET_ITEM_SUCCESS, GET_SUPPLIER_SUCCESS, POST_CUSTOMER_FAILURE, POST_CUSTOMER_PENDING, POST_CUSTOMER_SUCCESS, POST_ITEM_SUCCESS, POST_SUPPLIER_SUCCESS } from "./actionTypes"




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

    case POST_CUSTOMER_SUCCESS:{
        return {
            ...state,isLoading:false,isError:false
        }
    }
    case POST_CUSTOMER_PENDING:{
            return {
                ...state,isLoading:true,isError:false
            }
    }
    case POST_CUSTOMER_FAILURE:{
        return {
            ...state,isLoading:false,isError:true
        }
    }

    case DELETE_CUSTOMER_SUCCESS:{
        let newData=customer.map((el)=>el.id!=payload.id)
        return {
            ...state,customer:newData,isLoading:false,isError:false
        }
    }
    case GET_SUPPLIER_SUCCESS:{
        return {
            ...state,supplier:payload,isLoading:false,isError:false
        }
    }

    case POST_SUPPLIER_SUCCESS:{
        return {
            ...state,isLoading:false,isError:false
        }
    }
    case DELETE_SUPPLIER_SUCCESS:{
        let newData=supplier.map((el)=>el.id!=payload.id)
        return {
            ...state,supplier:newData,isLoading:false,isError:false
        }
    }

    case GET_ITEM_SUCCESS:{
        return {
            ...state,item:payload,isLoading:false,isError:false
        }
    }

    case POST_ITEM_SUCCESS:{
        return {
            ...state,isLoading:false,isError:false
        }
    }


    default:
        return state
   }
}