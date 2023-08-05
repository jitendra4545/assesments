import { Box } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <Box p={'10px'} bg={'blue.400'}  display={'flex'} justifyContent={'space-around'}>
       <Link to='/'> <Box fontWeight={'bold'} textDecoration={'underline'} >Home </Box></Link>
        <Box fontWeight={'bold'} textDecoration={'underline'}>Admin </Box>
    </Box>
  )
}
