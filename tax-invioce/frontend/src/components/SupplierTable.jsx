import React from 'react'
import {RiDeleteBin6Line} from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { deleteCustomer, deleteSupplier, getCustomer, getSupplier } from '../redux/action'
export const SupplierTable = (props) => {
const dispatch=useDispatch()
  const handleDelete=async()=>{
     dispatch(deleteSupplier(props._id))
     .then(()=>{
      dispatch(getSupplier())
     })
  }

  return (

   <tr key={props._id} >
      <td class='px-3 py-3 text-lg '>{props.PartyName}</td>
      <td class='px-3 py-3 text-lg '>{props.PhoneNo}</td>
      <td class='px-3 py-3 text-lg '>{props.createdAt}</td>
      <td class='px-3 py-3 text-lg '>{props.updatedAt}</td>
      <td class='px-3 py-3  text-lg hover:bg-slate-300 '>
        <div class='flex  ' onClick={handleDelete} >
        <div class='mt-1' ><RiDeleteBin6Line color='red'  /></div>  <p class='text-red-500 ml-1  '>Delete</p>
        </div>
      
      </td>
   </tr>
  )
}
