import { Box, Button, Image, Text } from '@chakra-ui/react';
import React, { memo } from 'react'
import {ArrowForwardIcon} from '@chakra-ui/icons'
import { Link } from 'react-router-dom';

 const CountryList = ({_id,image,title,type,ranking}) => {




  return (
    <Box mt={'50px'} borderRadius={'30px'} p='30px 10px' boxShadow={' rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;'} textAlign={'center'} >
    <Box  >
        <Image  w='50%' m={'auto'} src={image} />
    </Box>
    <Box mt='10px' display={'grid'} textAlign={'center'} gap={'3'} >
    <Text fontFamily={"monospace"} fontWeight={"bold"} fontSize={'18px'} color={"blue"} >{title}</Text>
    <Text color={'red.400'} fontWeight={'semibold'} fontStyle={"oblique"}  >Type :- <span style={{color:'#FF007F',fontSize:'17px',fontWeight:"bold"}} >{type}</span> </Text>
    <Text color={'red.400'} fontWeight={'semibold'} fontStyle={"oblique"} >Ranking :- <span style={{color:'#FF007F',fontSize:'17px',fontWeight:"bold"}} >{ranking}</span> </Text>
    <Link to={`/country/${_id}`}><Button  _hover={{color:"#FF007F",bg:"white",border:"1px dashed #FF007F "}} display={'flex'} justifyContent={'space-evenly'} bg={'#FF007F'} color={'white'} w='40%' borderRadius={'10px'} m={'auto'}>View Details <ArrowForwardIcon/></Button></Link>
    </Box>
</Box>
  )
}
export default memo(CountryList);