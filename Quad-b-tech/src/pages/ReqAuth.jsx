import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export const ReqAuth = ({children}) => {
    const {isAuth}=useSelector((store)=>store)
    console.log(isAuth)

    if(!isAuth){
return        <Navigate to='/login' />
    }

    return children

}

