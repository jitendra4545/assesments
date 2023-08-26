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
import { useToast } from '@chakra-ui/react'
// import { PostAllLists } from '../components/PostAllLists'
import { useNavigate } from 'react-router-dom'
export const UserList = () => {
const [Users,setUsers]=useState([])
const navigate=useNavigate()
const [loading, setloading] = useState(false)
const toast = useToast()

    const getUser=async()=>{
        setloading(true)
        axios.get(`https://calm-cyan-crow-kit.cyclic.cloud/analytics/users`)
        .then((res)=>{
           setloading(false)
            // console.log(res.data)
            setUsers(res.data)
          
        }).catch(err=>console.log(err))

    }

    useEffect(()=>{
    getUser()
    
    },[])

console.log(Users)
if(loading){
    return <Heading>Loading................</Heading>
}

const handleDelete=async(id)=>{
    setloading(true)
axios.delete(`https://calm-cyan-crow-kit.cyclic.cloud/users/${id}`)
.then((res)=>{
    setloading(false)
    console.log(res.data)
    
    getUser()
    toast({
      title: ' Deleted.',
      description: "User Deleted Successfully",
      status: 'success',
      duration: 4000,
      isClosable: true,
      position:'top'
    })
}).catch(err=>console.log(err))
}


const handleEdit=()=>{

}




  return (
    <Box>

<Heading m='40px'>All Users</Heading>
<TableContainer>
  <Table variant='simple'>
    <Thead>
      <Tr>
        <Th>ID</Th>
        <Th>EMAIL</Th>
        
        <Th>NAME</Th>
        {/* <Th >UNLIKE</Th> */}
        <Th>VIEW</Th>
        <Th>EDIT</Th>
        <Th>DELETE</Th>
        
      </Tr>
    </Thead>
    <Tbody>
      {
        Users.map((el)=>{
        
          return  <Tr key={el._id}>
            <Td>{el._id}</Td>
            <Td>{el.email}</Td>
            <Td>{el.name}</Td>
            {/* <Td><Button>UNLIKE</Button></Td> */}
            <Td><Button onClick={()=>navigate(`/allusers/${el._id}`)} >VIEW</Button></Td>
            <Td><Button onClick={()=>navigate(`/users/edit/${el._id}`)}  >EDIT</Button></Td>
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
