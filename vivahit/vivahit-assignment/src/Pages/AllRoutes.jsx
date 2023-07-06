import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../components/HomePage'

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route />
            <Route />
            <Route />
            <Route />
        </Routes>
    )
}
