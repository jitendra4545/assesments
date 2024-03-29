import { Box, Button, Heading, Image, Spacer, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { ArrowForwardIcon, ViewIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'
// https://media.istockphoto.com/id/1205540308/vector/appliance-repair-service-people-cartoon-scene-set.jpg?s=1024x1024&w=is&k=20&c=c7VwikWDVjkwTeFAa9nrF0SASJ86lFzIAenAzW8nhZo=
// https://img.freepik.com/free-vector/handymen-repairing-clients-home-appliance-cartoon-illustration_74855-14396.jpg?w=2000
export const HomePage = () => {


useEffect(()=>{
    
})

    const navigate = useNavigate()


    const handleaddServices = () => {
        navigate("/addservice")
    }

    const handleStatus = () => {
        navigate("/checkstatus")
    }

    return (
        <Box w="90%" m="auto" h="100vh">
         
            <Box m={{ base: "0px", md: "50px", lg: "0px 40px" }} p={"20px 0px"} textAlign={'center'} >
                <Heading color={'white'} >Hi , Welcome to Local Services </Heading>
                <br />
                <Text color={'white'} fontFamily={'monospace'} fontSize={{base:"18px",md:"20px",lg:'20px'}}>We are providing electronics product services like Refrigerator, Fridge ,TV , Air Conditioner etc ..... </Text>
            </Box>

            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} >
                <Box display={'grid'} gap={10} gridTemplateColumns={{ base: "repeat(1,1fr)", md: "repeat(1,1fr)", lg: "repeat(2,1fr)" }} >
                    <Box  >

                        <Image w={'100%'} borderRadius={'160px'} src='https://img.freepik.com/free-vector/handymen-repairing-clients-home-appliance-cartoon-illustration_74855-14396.jpg?w=2000' />
                    </Box>
                    <Box display={'flex'} justifyContent={'center'} alignItems={'center'} >
                        <Box display={{ base: "grid", md: "flex", lg: "flex" }} gap={{ base: "8", md: "20", lg: "" }}>
                            <Button onClick={handleaddServices} bg={'#32CD32'} _hover={{ bg: "#ADFF2F", color: 'black' }} color={'white'} display={'flex'} gap={3}>MAKE A SERVICE REQUEST  <ArrowForwardIcon /></Button>

                            <Button onClick={handleStatus} bg={'blue'} _hover={{ bg: "#FF1493" }} color={'white'} display={'flex'} gap={3}>CHECK YOUR SERVICE STATUS <ViewIcon /></Button>
                        </Box>



                    </Box>
                </Box>



            </Box>
        </Box>
    )
}
