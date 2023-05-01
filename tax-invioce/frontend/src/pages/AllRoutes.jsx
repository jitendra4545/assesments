import React from 'react'
import { Routes,Route } from 'react-router-dom'

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/customer" element={<h1>Customer</h1>} />
    </Routes>
  )
}

