import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineTwitter } from 'react-icons/ai'
import { BiLogoLinkedinSquare } from 'react-icons/bi'
export const Footer = () => {
    return (
        <Box padding={'50px 0px'} bg="#081521">
            <Box textAlign={'center'} display={'flex'} justifyContent={'center'} alignItems={'center'} >

                <Box >
                    <Box margin={'auto'} w='170px'  >
                        <Image w='100%' src='https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png' />
                    </Box>
                    <Box m='15px 0px' fontSize={'18px'} color={'white'} display={'flex'} gap='8'>
                        <Box>Home</Box>
                        <Box>About Us</Box>
                        <Box>Contact Us</Box>
                        <Box>Privacy Policy</Box>
                        <Box>Sitemap</Box>
                    </Box>
                    <Text color={'#6F7F92'} m='20px 0px' fontSize={'16px'}>9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada</Text>
                    <Box color={'white'} fontSize={'20px'} display={'flex'} gap='4' justifyContent={'center'} m='20px 0px'>
                        <AiOutlineTwitter />
                        <BiLogoLinkedinSquare />
                    </Box>
                    <Text color={'#6F7F92'} m='20px 0px' fontSize={'16px'}>© 2022. Ntwist Inc.</Text>
                </Box>
            </Box>

        </Box>
    )
}
