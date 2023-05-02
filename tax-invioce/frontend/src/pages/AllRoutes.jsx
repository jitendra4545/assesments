import React from 'react'
import { Routes,Route } from 'react-router-dom'
import { Dashboard } from '../components/Dashboard'
import { Customer } from '../components/Customer'
import { Suppliers } from '../components/Suppliers'
import { Items } from '../components/Items'
import { Sales } from '../components/Sales'
import { Purchase } from '../components/Purchase'
import { CustomerInput } from '../components/CustomerInput'

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard/>} />
      <Route path="/customer" element={<Customer/>} />
      <Route path="/customer/add" element={<CustomerInput/>} />
      <Route path="/supplier" element={<Suppliers/>} />
      <Route path="/items" element={<Items/>} />
      <Route path="/sales" element={<Sales/>} />
      <Route path="/purchase" element={<Purchase/>} />
    </Routes>
  )
}

