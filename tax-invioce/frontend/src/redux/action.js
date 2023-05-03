import { DELETE_CUSTOMER_SUCCESS, GET_CUSTOMER_FAILURE, GET_CUSTOMER_PENDING, GET_CUSTOMER_SUCCESS, POST_CUSTOMER_FAILURE, POST_CUSTOMER_PENDING, POST_CUSTOMER_SUCCESS } from "./actionTypes"
import axios from 'axios'
 const getCustomerSuccess=(payload)=>{
    return {
        type:GET_CUSTOMER_SUCCESS,payload
    }
}

 const getCustomerPending=()=>{
    return {
        type:GET_CUSTOMER_PENDING
    }
}

 const getCustomerFailure=()=>{
    return {
        type:GET_CUSTOMER_FAILURE
    }
}

 const postCustomerSuccess=()=>{
    return {
        type:POST_CUSTOMER_SUCCESS
    }
}

 const postCustomerPending=()=>{
    return {
        type:POST_CUSTOMER_PENDING
    }
}

 const postCustomerFailure=()=>{
    return {
        type:POST_CUSTOMER_FAILURE
    }
}

const deleteCustomerSuccess=(payload)=>{
    return {
        type:DELETE_CUSTOMER_SUCCESS,payload
    }
}




export const getCustomer=()=>(dispatch)=>{
    dispatch(getCustomerPending())
    axios.get(`http://localhost:8000/invoice/customer`)
    .then((res)=>{
        console.log(res.data)
    dispatch(getCustomerSuccess(res.data))
    }).catch((err)=>{
        console.log(err)
        dispatch(getCustomerFailure())
    })
}


export const addCustomer=(GSTIN,PartyName,PhoneNo,Address)=>(dispatch )=>{
    const payload={
        GSTIN,
        PartyName,
        PhoneNo,
        Address
    }      
    dispatch(postCustomerPending())
  return  axios.post(`http://localhost:8000/invoice/customer/add`,payload)
    .then((res)=>{
        console.log(res.data)
        dispatch(postCustomerSuccess())
    }).catch((err)=>{
console.group(err)
dispatch(postCustomerFailure())
    })

} 

export const deleteCustomer=(id)=>(dispatch)=>{

   return axios.delete(`http://localhost:8000/invoice/customer/delete/${id}`)
    .then((res)=>{
        dispatch(deleteCustomerSuccess(res.data))
    }).catch(err=>console.log(err))


}
