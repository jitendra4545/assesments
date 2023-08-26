import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import axios from 'axios'
export const AddPost = () => {
    const [content, setContent] = useState("")

    const handlePost=async()=>{
        const payload={
            content,
            likes:0

        }
        axios.post(``)
    }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={'white'}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Add Your Post</Heading>
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
              <FormLabel>Post</FormLabel>
              <Input value={content} onChange={(e)=>setContent(e.target.value)} placeholder='Write Your Content'  type="text" />
            </FormControl>
            <Stack spacing={10}>
              
              <Button
               onClick={handlePost}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Add Post
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}
