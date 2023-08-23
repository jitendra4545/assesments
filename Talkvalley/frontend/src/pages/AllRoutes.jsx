import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from '../components/Login'
import { HomePage } from '../components/HomePage'
import { PrivateRoute } from './PrivateRoute'

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={
                <PrivateRoute>
                    <HomePage />
                </PrivateRoute>
            } />
            <Route path='/login' element={<Login />} />
        </Routes>
    )
}
