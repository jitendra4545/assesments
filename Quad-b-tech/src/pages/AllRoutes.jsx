import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../components/HomePage'
import Login from '../components/Login'

import { SingleJob } from '../components/SingleJob'
import { ApplyPage } from '../components/ApplyPage'
// import { AllDetailsPage } from '../components/AllDetailsPage'
import Signup from '../components/Signup'
import { ReqAuth } from './ReqAuth'

export const AllRoutes = () => {
  return <Routes>
    <Route path='/' element={

      <HomePage />
    } />
    <Route path='/login' element={<Login />} />
    <Route path='/signup' element={<Signup />} />
    <Route path='/single/:id' element={
      <ReqAuth>
        <SingleJob />
      </ReqAuth>


    } />
    <Route path='/apply' element={
      <ReqAuth>
        <ApplyPage />
      </ReqAuth>


    } />

  </Routes>
}
