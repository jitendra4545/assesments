import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../components/HomePage'
import { AddUser } from '../components/AddUser'
import { SingleUser } from '../components/SingleUser'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route  path="/" element={<HomePage/>}/>
        <Route  path="/adduser" element={<AddUser/>}/>
        <Route  path="/singleuser/:id" element={<SingleUser/>}/>
        <Route  path="/edit/:id" element={<AddUser/>}/>
    </Routes>
  )
}
