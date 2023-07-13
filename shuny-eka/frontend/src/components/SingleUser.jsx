import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getSingleUser } from '../features/UserDetailsSlice'

export const SingleUser = () => {
    const {id}=useParams()
    const dispatch=useDispatch()
    const {users}=useSelector(store=>store.app)
    console.log(id)
useEffect(()=>{
  dispatch(getSingleUser(id))
},[])
console.log(users)


  return (
    <div>
        <table>
    <thead>
 <tr>
   
    <th>Name</th>
    <th>EMAIL</th>
    <th>PHONE</th>
    
 </tr>
    </thead>
    <tbody>
       
{
    users?.map((el)=>{
        return <tr>
            <td>{el.name}</td>
            <td>{el.email}</td>
            <td>{el.phone}</td>
        </tr> 
    })
}
       
        
    </tbody>
</table>
    </div>
  )
}
