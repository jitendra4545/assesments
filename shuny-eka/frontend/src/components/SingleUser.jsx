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
        <table style={{border:"1px solid",width:"100%"}}>
    <thead>
 <tr>
   
    <th style={{border:"1px solid"}}>Name</th>
    <th style={{border:"1px solid"}}>EMAIL</th>
    <th style={{border:"1px solid"}}>PHONE</th>
    
 </tr>
    </thead>
    <tbody>
       
{
    users?.map((el)=>{
        return <tr>
            <td style={{border:"1px solid"}}>{el.name}</td>
            <td style={{border:"1px solid"}}>{el.email}</td>
            <td style={{border:"1px solid"}}>{el.phone}</td>
        </tr> 
    })
}
       
        
    </tbody>
</table>
    </div>
  )
}
