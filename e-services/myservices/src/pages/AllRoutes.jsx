import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './HomePage'
import { AddServicePage } from './AddServicePage'
import { Admin } from './Admin'
import { Login } from '../components/Login'
import { Signup } from '../components/Signup'
import { CheckStatus } from '../components/CheckStatus'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}  />
        <Route path="/addservice" element={<AddServicePage/>} />
        <Route path='/admin' element={<Admin/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
<Route path='/checkstatus' element={<CheckStatus/>} />
    </Routes>
  )
}
