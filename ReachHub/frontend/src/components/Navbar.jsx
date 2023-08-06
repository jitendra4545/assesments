import { Box, Button, Input, Spacer } from '@chakra-ui/react'
import React, { useState } from 'react'

export const Navbar = ({data}) => {
console.log(data)
  const [inputVal, setinputVal] = useState("")
const [Data, setData] = useState(data)
  const handleChange=(e)=>{
setinputVal(e.target.value)

const filterData=Data.filter((el)=>{
  return el.alternativeTitles[0].toLowerCase()===inputValue.toLowerCase()
 })

console.log(filterData)
  }

console.log(inputVal)
  return (
    <Box  display={'flex'} alignItems={'center'} justifyContent={'center'} bg={'teal.300'} p='10px' w='100%' >
<Input value={inputVal} onChange={handleChange} placeholder='Search By Title' p='10px'  w='30%' />


    </Box>
  )
}
