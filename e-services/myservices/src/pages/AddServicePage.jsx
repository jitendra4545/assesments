import { Box, FormLabel, Input, FormControl, Select, Button, Heading, Text } from '@chakra-ui/react'
import React from 'react'

export const AddServicePage = () => {
    return (
        <Box w='90%' margin={'auto'}>
            <Box m={"10px 0px"} textAlign={'center'}>
                <Text>Congratulations you are one step away </Text>
            </Box>

            <Box  textAlign={"center"} borderRadius={"20px"} bg={'orange.300'} border={"1px solid red"} margin={'auto'} w={{ base: "80%", md: "", lg: "40%" }} p={{ base: "20px", md: "", lg: "50px" }}>
                <FormControl isRequired>
                    <FormLabel>Full Name</FormLabel>
                    <Input type='text' placeholder='Enter Full Name' />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Father's Name</FormLabel>
                    <Input type='text' placeholder='Enter Fathers Name' />
                </FormControl>
                <FormControl isRequired>


                    <FormLabel></FormLabel>
                    <Select>
                        <option value="">Select your product</option>
                        <option value="AC">Air Conditioner (AC)</option>

                        <option value="TV">Televison (TV)</option>
                        <option value="Refrigerator">Refrigerator</option>
                        <option value="Fridge">Fridge</option>
                        <option value="other">Other Product</option>
                    </Select>
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Problem / Issue Details</FormLabel>
                    <Input type='text' placeholder='Enter your product defect ' />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Product Brand / Company</FormLabel>
                    <Input placeholder='enter your product brsnd name' />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Address</FormLabel>
                    <Input type='text' placeholder='Enter your full address' />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Pincode</FormLabel>
                    <Input type='number' placeholder='Enter pincode' />
                </FormControl>
                <FormControl mb={'20px'} isRequired>
                    <FormLabel>Mobile</FormLabel>
                    <Input placeholder='enter your mobile no' type='number' />

                </FormControl>
               
                    <Button bg={'#32CD32'} _hover={{ bg: "blue", color: 'white' }} color={'white'}  margin={'auto'} alignItems={'center'} >Submit</Button>
            


            </Box>
        </Box>
    )
}
