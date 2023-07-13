import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { deleteUser, getUserData } from '../features/UserDetailsSlice'
import { AddUser } from './AddUser'


export const HomePage = () => {
    const dispatch=useDispatch()
    const {users}=useSelector(store=>store.app)


    


    useEffect(()=>{
       dispatch(getUserData())
    },[])

    console.log(users)
    

    const handleDelete=(id)=>{
dispatch(deleteUser({id}))
.then(()=>{
    alert("user deleted successfully")
   dispatch(getUserData())
})
    }

      
  return (
    <div style={{backgroundColor:"pink",height:"100vh"}} >
       
<div>
<table style={{border:"1px solid",width:'100%'}}>
    <thead  >
 <tr>
    <th style={{border:"1px solid"}}>ID</th>
    <th style={{border:"1px solid"}}>Name</th>
    <th style={{border:"1px solid"}}>VIEW</th>
    <th style={{border:"1px solid"}}>EDIT</th>
    <th style={{border:"1px solid"}}>DELETE</th>
 </tr>
    </thead>
    <tbody>
       
{
 users?.map((el)=>{
        return  <tr>

        <td style={{border:"1px solid"}}>{el._id}</td>
        <td style={{border:"1px solid"}}>{el.name}</td>
       <td  style={{border:"1px solid"}}  > <Link to={`/singleuser/${el._id}`}>VIEW</Link></td>
       <td  style={{border:"1px solid"}}>  <Link to={`/edit/${el._id}`}>EDIT</Link></td>
        <td style={{border:"1px solid"}} onClick={()=>handleDelete(el._id)}>DELETE</td>
    </tr>
    })
}
       
        
    </tbody>
</table>
</div>
       
        </div>
  )
}
