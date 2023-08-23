import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'


export const PrivateRoute = ({children}) => {
    const [state, setstate] = useState(localStorage.getItem("token"))
  console.log(state)
    if(state==null){
return <Navigate to='/login'  />
    }
    return children
}
