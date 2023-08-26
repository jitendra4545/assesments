

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import axios from 'axios'
import { useToast } from '@chakra-ui/react'
import { useNavigate, useParams } from 'react-router-dom'
export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false)
const naviagte=useNavigate()
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [bio, setbio] = useState()
const [Users, setUsers] = useState({})
const [Loading, setLoading] = useState(false)
const toast=useToast()

  const {id}=useParams()

console.log(id)
const navigate=useNavigate()





  const handleAdd=async()=>{

    const payload={
        name,
        email,
        bio
    }
    setLoading(true)
    // https://calm-cyan-crow-kit.cyclic.cloud/
       axios.post(`https://calm-cyan-crow-kit.cyclic.cloud/users`,payload)
       .then((res)=>{
        console.log(res.data)
       
        setLoading(false)
        navigate("/")
        toast({
          title: ' Added.',
          description: "User Added Successfully",
          status: 'success',
          duration: 4000,
          isClosable: true,
          position:'top'
        })
       }).catch((err)=>{
    setLoading(false)
        console.log(err)
    })
    
  }


  const handleSingleUser=()=>{
    setLoading(true)
     axios.get(`https://calm-cyan-crow-kit.cyclic.cloud/users/${id}`)
     .then((res)=>{
        console.log(res.data)
setUsers(res.data)
setLoading(false)
     }).catch(err=>console.log(err))
  }

  useEffect(()=>{
    if(id){
        handleSingleUser()
    }
   
    

  },[])


useEffect(()=>{
    if(id){
        setname(Users[0]?.name)
        setbio(Users[0]?.bio)
        setemail(Users[0]?.email)
    }
       
    //  alert('hi')
},[Loading])

  
  console.log(Users,Loading)


  const handleEdit=async()=>{

    const payload={
        name,
        bio
    }


    axios.put(`https://calm-cyan-crow-kit.cyclic.cloud/users/${id}`,payload)
    .then((res)=>{
   console.log(res.data)
   navigate('/allusers')
   toast({
    title: ' Edited.',
    description: "Post Edited Successfully",
    status: 'success',
    duration: 4000,
    isClosable: true,
    position:'top'
  })
    }).catch((err)=>{
        console.log(err)
    })

  }
  



  return (

    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
        {
          id?"Update User":" Register New User"
        } 
          </Heading>
          
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel> Name</FormLabel>
                  <Input value={name} onChange={(e)=>setname(e.target.value)} type="text" />
                </FormControl>
              </Box>
              
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
           {
            id? <Input disabled value={email} onChange={(e)=>setemail(e.target.value)} type="email" />:<Input value={email} onChange={(e)=>setemail(e.target.value)} type="email" />
           }   
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel >Bio</FormLabel>
              <InputGroup>
                <Input value={bio} onChange={(e)=>setbio(e.target.value)} type={'text'} />
                <InputRightElement h={'full'}>
                  
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
                {
                    id?  <Button
                    onClick={handleEdit}
                      loadingText="Submitting"
                      size="lg"
                      bg={'blue.400'}
                      color={'white'}
                      _hover={{
                        bg: 'blue.500',
                      }}>
                      Update
                    </Button>:
                     <Button
                     onClick={handleAdd}
                       loadingText="Submitting"
                       size="lg"
                       bg={'blue.400'}
                       color={'white'}
                       _hover={{
                         bg: 'blue.500',
                       }}>
                       Register
                     </Button>
                }
              
            </Stack>
            
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}