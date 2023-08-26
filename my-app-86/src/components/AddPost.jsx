import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Select, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
export const AddPost = () => {
  const [content, setContent] = useState("")
  const [user_id, setUserId] = useState("")
  const [Users, setUsers] = useState([])
  const [SingleUser, setSingleUser] = useState([])
  const [loading, setloading] = useState(false)
  const navigate = useNavigate()
  const { id } = useParams()
  const getUser = async () => {
    setloading(true)
    axios.get(`https://calm-cyan-crow-kit.cyclic.cloud/analytics/users`)
      .then((res) => {
        setloading(false)

        setUsers(res.data)
      }).catch(err => console.log(err))

  }
  useEffect(() => {
    getUser()
    if (id) {
      handleSinglePost()
    }
  }, [])


  const handleSinglePost = () => {
    setloading(true)
    axios.get(`https://calm-cyan-crow-kit.cyclic.cloud/posts/${id}`)
      .then((res) => {
        console.log(res.data)
        setSingleUser(res.data)
        setloading(false)
      }).catch(err => console.log(err))
  }



  const handleUpdate = async () => {
    const payload = {
      content

    }


    axios.put(`https://calm-cyan-crow-kit.cyclic.cloud/posts/${id}`, payload)
      .then((res) => {
        console.log(res.data)
        navigate('/')
      }).catch((err) => {
        console.log(err)
      })

  }


  useEffect(() => {
    if (id) {
      setUserId(SingleUser[0]?._id)
      setContent(SingleUser[0]?.content)

    }
  }, [loading, SingleUser])

  const handlePost = async () => {
    const payload = {
      content,
      likes: 0,
      user_id
    }
    setloading(true)
    axios.post(`https://calm-cyan-crow-kit.cyclic.cloud/posts`, payload)
      .then((res) => {
        console.log(res.data)
        setloading(false)
        navigate('/')
      }).catch((err => {
        console.log(err)
        setloading(false)
      }))
  }


  if (loading) {
    return <Heading>Loading.......</Heading>
  }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={'white'}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>{id ? "Edit Your Post" : "Add Your Post"}</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            <Text color={'blue.400'}></Text> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={'white'}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>

            <FormControl id="password">
              <FormLabel>User Id</FormLabel>
              {
                id ? <Select disabled value={user_id} onChange={(e) => setUserId(e.target.value)} placeholder='Select User Id'>
                  {
                    Users.map((el) => {
                      return <option value={el._id}>{el._id}</option>
                    })
                  }
                </Select>
                  :
                  <Select value={user_id} onChange={(e) => setUserId(e.target.value)} placeholder='Select User Id'>
                    {
                      Users.map((el) => {
                        return <option value={el._id}>{el._id}</option>
                      })
                    }
                  </Select>
              }
            </FormControl>
            <FormControl id="password">
              <FormLabel>Post</FormLabel>
              <Input value={content} onChange={(e) => setContent(e.target.value)} placeholder='Write Your Content' type="text" />
            </FormControl>
            <Stack spacing={10}>

              {
                id ? <Button
                  onClick={handleUpdate}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Update Post
                </Button>
                  :
                  <Button
                    onClick={handlePost}
                    bg={'blue.400'}
                    color={'white'}
                    _hover={{
                      bg: 'blue.500',
                    }}>
                    Add Post
                  </Button>
              }
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}
