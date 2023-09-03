import React from 'react'
import { Routes,Route } from 'react-router-dom'
import { ContactPage } from '../components/ContactPage'
import { ChartsandMaps } from '../components/ChartsandMaps'
import { AddContact } from '../components/AddContact'

export const AllRoutes = () => {
  return (
   <Routes>
    <Route path="/" element={<ContactPage/>} />
    <Route path='/chart' element={<ChartsandMaps/>} />
    <Route path="/add" element={<AddContact/>} />
   </Routes>
  )
}
