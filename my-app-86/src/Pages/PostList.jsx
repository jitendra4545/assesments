import { Box, Button, Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
import axios from 'axios'
// import { PostAllLists } from '../components/PostAllLists'
import { useNavigate } from 'react-router-dom'
export const PostList = () => {
const [posts,setPosts]=useState([])
const navigate=useNavigate()

const [Loading, setLoading] = useState(false)

    const getPost=async()=>{
        setLoading(true)
        axios.get(`https://calm-cyan-crow-kit.cyclic.cloud/analytics/posts`)
        .then((res)=>{
           
            // console.log(res.data)
            setPosts(res.data)
            setLoading(false)
        }).catch(err=>console.log(err))

    }

    useEffect(()=>{
    getPost()
    
    },[])

console.log(posts)


const handleDelete=async(id)=>{
    setLoading(true)
axios.delete(`https://calm-cyan-crow-kit.cyclic.cloud/posts/${id}`)
.then((res)=>{
    console.log(res.data)
    setLoading(false)
    getPost()
}).catch(err=>console.log(err))
}


if(Loading){
  return  <Heading>Loading........</Heading>
}






  return (
    <Box>
<TableContainer>
  <Table variant='simple'>
    <Thead>
      <Tr>
        <Th>ID</Th>
        <Th>CONTENT</Th>
       
        <Th>LIKE</Th>
        <Th >UNLIKE</Th>
        <Th>VIEW</Th>
        <Th>EDIT</Th>
        <Th>DELETE</Th>
        
      </Tr>
    </Thead>
    <Tbody>
      {
        posts.map((el)=>{
        
          return  <Tr key={el._id}>
            <Td>{el._id}</Td>
            <Td>{el.content}</Td>
            
            <Td><Button>LIKE</Button></Td>
            <Td><Button>UNLIKE</Button></Td>
            <Td><Button onClick={()=>navigate(`/allposts/${el._id}`)} >VIEW</Button></Td>
            <Td><Button onClick={()=>navigate(`/posts/edit/${el._id}`)}  >EDIT</Button></Td>
            <Td><Button onClick={()=>handleDelete(el._id)}>DELETE</Button></Td>
          </Tr>
        })
      }
      
    </Tbody>
    
  </Table>
</TableContainer>
    </Box>
  )
}
