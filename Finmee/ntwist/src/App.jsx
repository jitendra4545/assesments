import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { HomePage } from './Pages/HomePage'
import { HomePageBody } from './components/HomePageBody'
import { Navbar } from './components/Navbar'
import { Loader } from './components/Loader'
import { useEffect } from 'react'

function App() {

  const [Loading,setLoading]=useState(false)
 
  useEffect(()=>{
     setTimeout(()=>{
        setLoading(true)
     },3000)
  },[])
  

  console.log(Loading)


  return (
   <div>

    {
      Loading? <HomePage/>:<Loader/>
    }
  
    
   </div>
 
  )
}

export default App
