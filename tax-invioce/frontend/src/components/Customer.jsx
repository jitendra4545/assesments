import React,{useEffect, useState} from 'react'
import { CustomerTable } from './CustomerTable'

import { useDispatch, useSelector } from 'react-redux'

import { Link } from 'react-router-dom'
import { GET_CUSTOMER_FAILURE } from '../redux/actionTypes'
import { getCustomer } from '../redux/action'
export const Customer = () => {

    // const [customer, setcustomer] = useState([])
    const {customer,isLoading}=useSelector(store=>store.reducer )
    const dispatch=useDispatch()





    useEffect(()=>{
      dispatch(getCustomer())
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
                    customer.length>0? 
                    <table class="table-auto w-full m-auto text-left mt-3  ">
                    <thead class='bg-slate-200  ' >
                      <tr  >
                        <th class='px-3 py-3' >Name</th>
                        <th >Phone</th>
                        <th>Date Added</th>
                        <th >Last Transaction</th>
                        <th >Action</th>
                      </tr>
                    </thead>
                    <tbody >
                        {isLoading&& <h1>Loading...</h1>}
                        {customer.map((el)=>{
                            return <CustomerTable {...el} />
                        })} 
                    </tbody>
                  </table>
                    
                    : <div class="bg-slate-300 w-3/3 h-64 rounded-lg  mt-3" >
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
