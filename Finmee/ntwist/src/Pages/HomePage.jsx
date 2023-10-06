import React from 'react'
import { Navbar } from '../components/Navbar'
import { Box, Button, Flex, Heading, Image } from '@chakra-ui/react'

export const HomePage = () => {
  return (
    <Box>
      <Box h='100vh' w='100%'
        backgroundImage={"https://ntwist.com/wp-content/uploads/2023/01/home-image-bg-v6.png"}
      >
        <Navbar />
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <Box p='50px ' gap='6' display={'flex'} justifyContent={'space-evenly'} >
            <Box  display={'flex'} alignItems={'center'}>
              <Box >
                <Heading fontSize={'4xl'} color={'white'}>Data-powered solutions for Industrial Excellence</Heading>
                <Button bg={'#0693e3'} _hover={{bg:"#0693e3"}}  color={'white'} mt='20px'>Read More</Button>
              </Box>
            </Box>
            <Box w='80%' display={'flex'} alignItems={'center'}>
              <Box>
                <Image src='https://ntwist.com/wp-content/uploads/2023/01/home-image-icons-v6.png' />
              </Box>
            </Box>

          </Box>
        </Box>
      </Box>
    </Box>



  )
}
