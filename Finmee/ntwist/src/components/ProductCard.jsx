import { Box, Button, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

export const ProductCard = (el) => {
    console.log(el)
    return (

        <Box>
            {
                el.i % 2 == 0 ?
                    <Box>
                        <Box display={'grid'} gridTemplateColumns={{ base: "repeat(1,1fr)", md: "repeat(1,1fr)", lg: "repeat(2,1fr)" }} gap='12'>
                            <Box w='100%' display={'flex'} justifyContent={'center'} alignItems={'center'} >
                                <Box>

                                    <Text color={'#FF3A2D'} fontWeight={'bold'} fontFamily={'sans-serif'} fontSize={'43px'}>{el.header}</Text>
                                    <Text textAlign={'justify'} m={'15px 0px'} fontSize={'16px'}>{el.desc}</Text>

                                    <Text textAlign={'justify'} m={'15px 0px'} fontSize={'16px'}>{el.desc2}</Text>
                                    <Button borderRadius={'3px'} color={'white'} bg={'#FF3A2D'} _hover={{ bg: "#FF3A2D" }}>Read More</Button>

                                </Box>
                            </Box>

                            <Box w='100%' >

                                <Image src={el.img} />
                            </Box>



                        </Box>

                    </Box>
                    :
                    <Box>

                        <Box display={'grid'} gridTemplateColumns={{ base: "repeat(1,1fr)", md: "repeat(1,1fr)", lg: "repeat(2,1fr)" }} gap='8'>


                            <Box w='100%' >

                                <Image src={el.img} />
                            </Box>

                            <Box w='100%' display={'flex'} justifyContent={'center'} alignItems={'center'} >
                                <Box>

                                    <Text color={'#FF3A2D'} fontWeight={'bold'} fontFamily={'sans-serif'} fontSize={'43px'}>{el.header}</Text>
                                    <Text textAlign={'justify'} m={'15px 0px'} fontSize={'16px'}>{el.desc}</Text>

                                    <Text textAlign={'justify'} m={'15px 0px'} fontSize={'16px'}>{el.desc2}</Text>
                                    <Button borderRadius={'3px'} color={'white'} bg={'#FF3A2D'} _hover={{ bg: "#FF3A2D" }}>Read More</Button>

                                </Box>
                            </Box>

                        </Box>


                    </Box>
            }
        </Box>




    )
}
