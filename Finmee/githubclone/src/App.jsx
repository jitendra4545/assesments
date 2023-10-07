import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { HomePage } from './pages/HomePage'
import { Navbar } from './components/Navbar'

function App() {
  
  return (
    <>
    <Navbar/>
     <HomePage/>
    </>
  )
}

export default App
