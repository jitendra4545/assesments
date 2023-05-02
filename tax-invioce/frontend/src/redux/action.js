import { GET_CUSTOMER_FAILURE, GET_CUSTOMER_PENDING, GET_CUSTOMER_SUCCESS } from "./actionTypes"

export const getCustomerSuccess=(payload)=>{
    return {
        type:GET_CUSTOMER_SUCCESS,payload
    }
}

export const getCustomerPending=()=>{
    return {
        type:GET_CUSTOMER_PENDING
    }
}

export const getCustomerFailure=()=>{
    return {
        type:GET_CUSTOMER_FAILURE
    }
}