import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { CountryPage } from './CountryPage'
import { SingleCountry } from '../components/SingleCountry'

export const AllRoutes = () => {
    return (

        <Routes>
            <Route path="/" element={<CountryPage />} />
            <Route path="/country/:id" element={<SingleCountry />} />
            {/* <Route path="" element={} />
        <Route path="" element={} /> */}
        </Routes>

    )
}
