import { Box, Heading, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const SinglePost = () => {
  const {id}=useParams()
console.log(id)
const [SinglePost, setSinglePost] = useState([])
const [loading,setLoading]=useState(false)
const SingleData=async()=>{
  setLoading(true)
  axios.get(`https://calm-cyan-crow-kit.cyclic.cloud/posts/${id}`)
  .then((res)=>{
   setSinglePost(res.data)
   setLoading(false)
  }).catch((err)=>{
     console.log(err)
     setLoading(false)
  })
}
useEffect(()=>{
  SingleData()
  },[])

  return (
    <Box>
      {
        SinglePost.map((el)=>{
        return  <Box bg={'orange'}  width={'60%'} padding={"30px"} borderRadius={'20px'}  margin={'auto'}  mt={'50px'} >
            <Heading>Content :- {el.content}</Heading>
            <Text>ID :- {el._id}</Text>
        <Text>Likes :- {el.likes}</Text>
            <Text>Created At :- {el.createdAt}</Text>

              </Box>
        })
      }
    </Box>
  )
}
