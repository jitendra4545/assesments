import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {

  return (
    <Box bg={'blue'} position={'sticky'} top='0' zIndex={'1000'} >
        <Box color={'white'}  display={'flex'} p='10px' justifyContent={'space-evenly'}>
            <Box>
            <Link to='/'>
            <Heading>Home </Heading>
            </Link>
                </Box>
                <Box>
                    <Link to='/login'>
                    <Heading>Login</Heading>
                    </Link>
           
                </Box>
        </Box>
    </Box>
  )
}
