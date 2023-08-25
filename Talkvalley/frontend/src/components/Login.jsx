import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export const Login = () => {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [token, settoken] = useState(localStorage.getItem("token"))
    console.log(token)

    const navigate = useNavigate()
    const handleAdd = async () => {
        let payload = {
            name,
            email
        }
        // console.log(payload)
        axios.post(`https://fair-gray-angelfish-sari.cyclic.app/adduser`, payload)
            .then((res) => {
                console.log(res.data.token)
                navigate("/")
                localStorage.setItem("token", JSON.stringify(res.data.token))
            }).catch(err => console.log(err))
    }


    return (

        <Box>
            <Box display={'flex'}   >
                <Box borderRadius={'15px'} bg={'orange'} padding={'40px'} w={{ base: "60%", md: "55%", lg: "35%" }} m={'auto'} mt={'150px'}>
                    <FormControl isRequired>
                        <FormLabel >Name</FormLabel>
                        <Input onChange={(e) => setname(e.target.value)} type='text' placeholder='Enter Name' />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel isRequired>Email</FormLabel>
                        <Input onChange={(e) => setemail(e.target.value)} placeholder='Enter Email' type='email' />
                    </FormControl>
                    <Button onClick={handleAdd} color={'white'} bg={'blue'} _hover={{ bg: "teal", color: "yellow" }} m={'auto'} mt='20px' w={'100%'} >Submit</Button>
                </Box>


            </Box>
        </Box>
    )
}
