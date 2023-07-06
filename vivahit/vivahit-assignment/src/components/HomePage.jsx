import React, { useEffect, useState } from 'react'
import axios from 'axios'
export const HomePage = () => {

    const [realData, setrealData] = useState({})

    const getData=async()=>{
       axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=2f91290018fb460a1018e7849957ae3e`)
       .then((res)=>{
        console.log(res.data)
        setrealData(res.data)
       }).catch(err=>console.log(err))  
    }

useEffect(()=>{
     getData()
},[])

console.log(realData)

  return (
    <div>HomePage</div>
  )
}
