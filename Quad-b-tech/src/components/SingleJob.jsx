import { Box, Button, Heading, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Navbar } from './Navbar'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const SingleJob = () => {
  const navigate=useNavigate()
  const params = useParams()
  const { id } = params
  const [SingleData, setSingleData] = useState()
  const { isAuth, jobs } = useSelector((store) => store)
  console.log(isAuth, jobs)

  useEffect(() => {
    let single = jobs?.find((el) => el.id !== id)
    console.log(single)
    setSingleData(single)
  }, [])

  return (
    <Box>
      <Box mb='30px'>
        <Navbar />
      </Box>

      <Box  color={'white'}  bg='grey' p='20px' m='auto' w={'90%'}>
        <Heading>{SingleData?.title}</Heading>
        <Text fontSize={'20px'} >Company : {SingleData?.company?.display_name}</Text>
        <Text fontSize={'20px'} >Location : {SingleData?.location?.display_name}</Text>
        <Text>{SingleData?.description}</Text>
        <Text>contract_time
          : {SingleData?.contract_time
          }</Text>
        <Text>contract_type
          : {SingleData?.contract_type
          }</Text>

        <Text>salary_is_predicted
          :{SingleData?.salary_is_predicted
          }</Text>
          <Box mt='30px' textAlign={'center'}>
            <Button onClick={()=>navigate(`/apply`)} bg='red'  color='white'>Apply Now</Button>
          </Box>
        {/* <Text>
           <Box color={'white'}>
   <Text>Company : {SingleData?.company}</Text>
   <Text>Location: {SingleData?.location}</Text>
  </Box>
           </Text> */}
        {/* <Text>{SingleData.company?.display_name}</Text> */}
      </Box>


    </Box>
  )
}
