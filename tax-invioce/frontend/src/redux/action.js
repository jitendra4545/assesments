import { DELETE_CUSTOMER_SUCCESS, DELETE_SUPPLIER_SUCCESS, GET_CUSTOMER_FAILURE, GET_CUSTOMER_PENDING, GET_CUSTOMER_SUCCESS, GET_SUPPLIER_SUCCESS, POST_CUSTOMER_FAILURE, POST_CUSTOMER_PENDING, POST_CUSTOMER_SUCCESS, POST_SUPPLIER_SUCCESS } from "./actionTypes"
import axios from 'axios'

// here all the customer page request implement


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

// here all the supplier page request implement

const getSupplierSuccess=(payload)=>{
    return {
        type:GET_SUPPLIER_SUCCESS,payload
    }
}

const postSupplierSuccess=()=>{
    return {
        type:POST_SUPPLIER_SUCCESS
    }
}

const deleteSupplierSuccess=(payload)=>{
    return {
        type:DELETE_SUPPLIER_SUCCESS,payload
    }
}


export const getSupplier=()=>(dispatch)=>{
    
    axios.get(`http://localhost:8000/invoice/supplier`)
    .then((res)=>{
        console.log(res.data)
    dispatch(getSupplierSuccess(res.data))
    }).catch((err)=>{
        console.log(err)
    })
}


export const addSupplier=(GSTIN,PartyName,PhoneNo,Address)=>(dispatch )=>{
    const payload={
        GSTIN,
        PartyName,
        PhoneNo,
        Address
    }      
   
  return  axios.post(`http://localhost:8000/invoice/supplier/add`,payload)
    .then((res)=>{
        console.log(res.data)
        dispatch(postSupplierSuccess())
    }).catch((err)=>{
console.group(err)

    })

} 


export const deleteSupplier=(id)=>(dispatch)=>{

    return axios.delete(`http://localhost:8000/invoice/supplier/delete/${id}`)
     .then((res)=>{
         dispatch(deleteSupplierSuccess(res.data))
     }).catch(err=>console.log(err))
 
 
 }
