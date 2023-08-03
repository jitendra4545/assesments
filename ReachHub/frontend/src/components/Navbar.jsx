import { Box, Button, Input, Spacer } from '@chakra-ui/react'
import React from 'react'

export const Navbar = () => {
  return (
    <Box  display={'flex'} alignItems={'center'} justifyContent={'center'} bg={'cyan'} p='10px' w='100%' >
<Input p='10px' border={'2px solid red'} w='30%' />

<Button ml={'20px'} >Search</Button>
    </Box>
  )
}
