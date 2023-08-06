import React, { useEffect, useState, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Box, Button, Heading, Image, Text } from '@chakra-ui/react'



export const SingleCountry = () => {
  const [data, setData] = useState({})
  const [count, setcount] = useState(0)
  const { id } = useParams()
  console.log(id)


  const getSingleData = useCallback(async () => {
    const options = {
      method: 'GET',
      url: `https://anime-db.p.rapidapi.com/anime/by-id/${id}`,
      headers: {
        'X-RapidAPI-Key': '66e4b9df67msh4d4ecfa7bee1f95p1fa388jsn07a3055e3f44',
        'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);

      setData(response.data)
    } catch (error) {
      console.error(error);
    }
  }, [count])

  useEffect(() => {
     getSingleData()
  }, [count])

  console.log(data)


  return (

    <Box w='90%' p='40px 0px' m={'auto'}>

      {
        data &&
        <Box display={'grid'} gridTemplateColumns={{base:"repeat(1,1fr)",md:"",lg:"repeat(2,1fr)"}} gap={8}>
        <Box>
         
          <Image borderRadius={'22px'} w='100%' src={data.image} />

        </Box>
        <Box textAlign={'center'} mt='20px' >
        <Heading borderRadius={'20px'} mb='30px' bg={'blue'} border={'5px solid #FF007F'} color={'white'} p='10px' textAlign={'center'}>{data?.title}</Heading>
  <Box  display={'grid'} gap={4}>        
<Text fontWeight={'bold'} color={'white'} fontSize={'25px'}>Ranking :- {data.ranking}</Text>
<Text  fontWeight={'bold'} color={'white'} fontSize={'25px'}>Episods :- {data.episodes}</Text>
<Text  fontWeight={'bold'} color={'white'} fontSize={'25px'}>Status :- {data.status}</Text>
<Text  fontWeight={'bold'} color={'white'} fontSize={'25px'}>Type :- {data.type}</Text>
</Box>
<Box m='30px 0px' justifyContent={'center'} display={'flex'} gap={'4'}>
{
  data.genres?.map((el)=>{
   return <Button _hover={{color:'cyan'}} bg={'#FF007F'} color={'white'}>{el}</Button>
  })
}
</Box>
<Text color={'white'} textAlign={'justify'} fontSize={'20px'}><span style={{fontSize:"30px"}}>Synopsis :-</span> {data.synopsis} </Text> 
        </Box>
      </Box>
      }
     
     
    </Box>
  )
}
