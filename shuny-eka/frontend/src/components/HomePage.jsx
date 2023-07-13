import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getUserData } from '../features/UserDetailsSlice'
import { AddUser } from './AddUser'
import { UserList } from './UserList'

export const HomePage = () => {
    const dispatch=useDispatch()
    const {users}=useSelector(store=>store.app)



console.log(users)
    useEffect(()=>{
       dispatch(getUserData())
    },[])

    

  return (
    <div>
       <Link to="/adduser"><button>ADD USER</button></Link> 
<div>
<table>
    <thead>
 <tr>
    <th>ID</th>
    <th>Name</th>
    <th>VIEW</th>
    <th>EDIT</th>
    <th>DELETE</th>
 </tr>
    </thead>
    <tbody>
       
{
    users?.map((el)=>{
        return  <UserList {...el} /> 
    })
}
       
        
    </tbody>
</table>
</div>
       
        </div>
  )
}
