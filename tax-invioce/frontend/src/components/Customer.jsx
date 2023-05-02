import React,{useEffect, useState} from 'react'
import { CustomerTable } from './CustomerTable'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { getCustomerFailure, getCustomerPending, getCustomerSuccess } from '../redux/action'
import { Link } from 'react-router-dom'
export const Customer = () => {

    // const [customer, setcustomer] = useState([])
    const {customer,isLoading}=useSelector(store=>store )
    const dispatch=useDispatch()

    const getCustomer=async()=>{
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
    
    useEffect(()=>{
         getCustomer()
    },[])

console.log(customer)
if(isLoading){
    return <h1>Loading........</h1>
}

    return (
        <div class='p-4' >

            <div class='flex justify-between' >
                <div><h1 class='text-4xl font-light '>Customers</h1></div>
                <div>
                   <Link to='/customer/add'> <button  className=" bg-indigo-600 px-5 py-3 text-center text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border-dotted rounded-2xl " >+ Add Customer</button></Link>
                </div>

            </div>


            <div class="bg-white p-6 mt-4 rounded-lg  ">
                <div class='flex justify-between '>
                    <div>
                        <h1 class='text-lg font-bold '>CUSTOMERS</h1>
                    </div>
                    <div  >
                        <select class='px-2 py-1 text-lg border-2 rounded-md ' name="" id="">
                            <option value="name">Name</option>
                            <option value="date">Date Added</option>
                        </select>
                    </div>
                </div>
                {
                    customer? <CustomerTable/>: <div class="bg-slate-300 w-3/3 h-64 rounded-lg  mt-3" >
                        <div class="flex flex-col items-center justify-center" >
                            <p class="text-3xl mt-16 " >You Have No Customers....</p>
                        </div>
                        <div>
                        <Link to='/customer/add'> <button  className=" bg-indigo-600 px-5 py-3 text-center text-lg font-semibold text-white shadow-sm mt-3 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border-dotted rounded-2xl " >+ Add Customer</button></Link>
                </div>
                    </div>
                }

            </div>
        </div>
    )
}
