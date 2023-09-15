import { Box, Input, Select } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Navbar } from './Navbar'
import { useSelector } from 'react-redux'

export const HomePage = () => {

    const [Value,setValue]=useState("")

    // console.log(Value)
    const isAuth=useSelector((store)=>store.isAuth)
    console.log(isAuth)
  return (
    <Box>
        <Box>
            <Navbar/>
        </Box>
        <Box display={'flex'} justifyContent={'center'}  mt={'30px'} >
            <Box textAlign={'center'}>
       <Select onChange={(e)=>setValue(e.target.value)} >
        <option value="">Choose Any  Language</option>
        <option value="javascript">Javascript</option>
        <option value="java">Java</option>
        <option value="python">Python</option>
        <option value="php">PHP</option>
        
       </Select>
            </Box>
        </Box>
        
        </Box>
  )
}
