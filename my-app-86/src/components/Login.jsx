

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SimpleCard() {

    const [name, setname] = useState("")
    const [email, setemail] = useState("")
   const navigate=useNavigate()

console.log(name,email)
    const handleSign=async()=>{
        const payload={
            name,
            email
        }
       axios.post(`https://calm-cyan-crow-kit.cyclic.cloud/login`,payload)
       .then((res)=>{
        console.log(res.data.token)

     navigate('/')
     localStorage.setItem("token",JSON.stringify(res.data.token))
       }).catch(err=>console.log(err.message))
    }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Text color={'blue.400'}>features</Text> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input value={email} onChange={(e)=>setemail(e.target.value)} type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Name</FormLabel>
              <Input value={name} onChange={(e)=>setname(e.target.value)} type="text" />
            </FormControl>
            <Stack spacing={10}>
              
              <Button
              onClick={handleSign}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}