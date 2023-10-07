import React from 'react'
import {Box,Image} from '@chakra-ui/react'
import '../assets/loader.css'
export const Loader = () => {

  return (
    // <Box h='100vh' w='100vw' display={'flex'} border={'2px solid blue'} justifyContent={'center'} alignItems={'center'}>
    //     <Box border={'2px solid red'} >
    //     <Image w='50%' m='auto' src='https://ntwist.com/wp-content/uploads/2022/03/favicon.png' className="logo-spinner" />
    //         <Box className='loader'></Box>
    //     </Box>
    // </Box>

    <Box

    height={'100vh'}
    width={'100vw'}
    display={'flex'}
    justifyContent={'center'}
    alignItems={'center'}
    
  >
    <img src={"https://ntwist.com/wp-content/uploads/2022/03/favicon.png"} alt="logo" width="100vw" className="logo-spinner" />
    <div class="loader"></div>
  </Box>
  )
}
