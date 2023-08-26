import { Box, Heading, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const PostAnalytic = () => {
  const [posts,setPosts]=useState([])
  const [Topposts,setTopPosts]=useState([])
  
  
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

const getTopLike=()=>{
  setLoading(true)
    axios.get(`https://calm-cyan-crow-kit.cyclic.cloud/analytics/posts/top-liked`)
    .then((res)=>{
       
        // console.log(res.data)
        setTopPosts(res.data)
        setLoading(false)
    }).catch(err=>console.log(err))
}


useEffect(()=>{
getPost()
getTopLike()
},[])

// console.log(posts,Topposts)

if(Loading){
  return <Heading>Loading......</Heading>
}

  return (
    <Box>
      <Heading mt={'20px'} size={'lg'}>Total Posts : - {posts.length}</Heading>
      <Box mt={'20px'}>
<Heading mb={'10px'} size={'xl'} fontWeight={'semibold'}>Top 5 Liked Posts</Heading>
      </Box>
      <Box width={"80%"} margin={'auto'} display={'grid'} gap={6} gridTemplateColumns={{base:"repeat(1,1fr)",md:"repeat(1,1fr)",lg:"repeat(2,1fr)"}}>
        {
          Topposts.map((el)=>{
            return <Box p={'10px'} bg={'green'} borderRadius={'20px'} color="white">
              <Heading>Content :-{el.content}</Heading>
              <Text>Id :- {el._id}</Text>
              <Text>UserId :- {el.user_id}</Text>
              <Text>Like :- {el.likes}</Text>
              <Text>Created At :- {el.createdAt}</Text>
              <Text>Updated At :- {el.updatedAt}</Text>
            </Box>
          })
        }
      </Box>
    </Box>
  )
}
