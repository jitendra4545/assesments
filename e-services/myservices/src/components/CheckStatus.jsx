import { Box, Button, FormLabel, Heading, Input } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useToast } from '@chakra-ui/react'
import { Search2Icon, SpinnerIcon } from '@chakra-ui/icons'
export const CheckStatus = () => {
  const toast = useToast()
  const [inputValue, setInputValue] = useState('');
  const [loading, setloading] = useState(false)
  const [Service, setService] = useState([])
  const [filterdService,setfilteredService]=useState({})
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
console.log(inputValue)

  const getData = () => {
    setloading(true)
    axios.get(`https://fair-gray-angelfish-sari.cyclic.app/service/getall`)
      .then((res) => {
        
        setService(res.data)
        
        setloading(false)
      }).catch((err) => {
        console.log(err)
        setloading(false)
        toast({
          title: 'Something Went Wrong',
          position: 'top',
          description: "Sorry, Please Try After Sometime",
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
      })
  }

  useEffect(() => {
    getData()
  }, [])

  
  const handleSearch = () => {
    
    console.log(Service)

    const filterData=Service.filter((el)=>{
     return el.mobile==inputValue
    })
setfilteredService(filterData)
  

    
  }

  console.log("ghhhhhhhhhhhhh",filterdService)


  return (
    <Box mt={'20%'}>
      <FormLabel color={'#FF1493'}  fontWeight={'bold'} fontSize={'2xl'} textAlign={'center'}>Check Your Service Status</FormLabel>
      <Box w="70%"  gap={'6'} borderRadius={'20px'} bg={'white'} p={'20px'} margin={'auto'} display={'flex'}>

        <Box m='auto'>

          <Input
            type="number"
            onChange={(e)=>setInputValue(+e.target.value)}
            
            placeholder='Enter your Mobile No'
          />
        </Box>

        <Box w='32%' m='auto'>
          <Button color={'white'} bg={'blue'} onClick={handleSearch}> <Search2Icon/></Button>
        </Box>

      </Box>

<Box>
  hi
  <Box textAlign={'center'}>
  {filterdService.length>0&&filterdService?.map((el,i)=>{
      return  <Heading>{el.first_name}</Heading>
     })}
  </Box>
    
</Box>


    </Box>
  )
}
