import { Box, Heading, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const SingleUser = () => {
  const {id}=useParams()
console.log(id)
const [SingleUser, setSingleUser] = useState([])

const SingleData=async()=>{
     axios.get(`https://calm-cyan-crow-kit.cyclic.cloud/users/${id}`)
     .then((res)=>{
      setSingleUser(res.data)

     }).catch((err)=>{
        console.log(err)
     })
}

useEffect(()=>{
SingleData()
},[])


console.log(SingleUser)

    return (
    <Box>
     {
        SingleUser?.map((el)=>{
             return  <Box bg={'orange'}  width={'60%'} padding={"30px"} borderRadius={'20px'}  margin={'auto'}  mt={'50px'} >
            <Heading>Name :- {el.name}</Heading>
            <Text>Email :- {el.email}</Text>
        {el.bio? <Text>Bio :- {el.bio}</Text>:""}
            <Text>Created At :- {el.createdAt}</Text>

              </Box>
        })
     }
    </Box>
  )
}
