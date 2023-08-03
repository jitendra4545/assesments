import React, { useEffect, useState,useCallback } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Box, Image } from '@chakra-ui/react'
export const SingleCountry = () => {
    const [data,setData]=useState({})
    const [count, setcount] = useState(0)
    const {id}=useParams()
    console.log(id)
   
   
    const getSingleData=useCallback(async()=>{
        const options = {
            method: 'GET',
            url: `https://anime-db.p.rapidapi.com/anime/by-id/${id}`,
            headers: {
              'X-RapidAPI-Key': '66e4b9df67msh4d4ecfa7bee1f95p1fa388jsn07a3055e3f44',
              'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
            }
          };
          
          try {
              const response = await axios.request(options);
              
                setData(response.data)
          } catch (error) {
              console.error(error);
          }
    },[count])

useEffect(()=>{
// getSingleData()
},[count])

console.log(data)


  return (

    <Box>
        <Box>
          <Image />
        </Box>
    </Box>
  )
}
