import { Box, Button, Input, Select, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Navbar } from './Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { JobSearch } from '../redux/action'
import { useNavigate } from 'react-router-dom'

export const HomePage = () => {

    const [Value,setValue]=useState("")
    const dispatch = useDispatch()
    const navigate=useNavigate()
    const handleSearch=()=>{
dispatch(JobSearch({Value}))
    }

    const ViewDetails=(id)=>{
 navigate(`/single/${id}`)
    }


    // console.log(Value)
    const {isAuth,jobs}=useSelector((store)=>store)
    console.log(isAuth,jobs)
  return (
    <Box>
        <Box>
            <Navbar/>
        </Box>
        <Box display={'flex'} justifyContent={'center'}  mt={'30px'} >
            <Box textAlign={'center'} display={'flex'}>
       <Select onChange={(e)=>setValue(e.target.value)} >
        <option value="">Choose Any  Language</option>
        <option value="javascript">Javascript</option>
        <option value="java">Java</option>
        <option value="python">Python</option>
        <option value="php">PHP</option>
        <option value="C++">C++</option>
        
       </Select>
       <Button onClick={handleSearch} bg='blue' color={'white'}>Search</Button>
            </Box>
        </Box>
        
      
<Box mt='30px' display={'grid'} gap='3' >
       {
        jobs?.map((el)=>{
          return <Box p='10px' bg={'grey'}  w='50%' m='auto'>
              <Text fontWeight={'bold'} fontSize={'xl'} color={'cyan'}>{el.title}</Text>
<Box color={'white'}>
   <Text>Company : {el.company.display_name}</Text>
   <Text>Location: {el.location.display_name}</Text>
  </Box>
  <Box mt={'10px'} textAlign={'center'}>
  <Button onClick={()=>ViewDetails(el.id)} bg={'blue.200'} >
    View Details
  </Button>
    </Box>
  
          </Box>
        })
       }
</Box>


        </Box>
  )
}
