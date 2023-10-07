import React, { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar'
import { Box, Button, Flex, Heading, Image } from '@chakra-ui/react'
import { HomePageBody } from '../components/HomePageBody'
import { Footer } from '../components/Footer'
import { IoIosArrowUp } from 'react-icons/io'

export const HomePage = () => {

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    const scrollToTop = window.setInterval(() => {
      const position = window.pageYOffset;
      if (position > 0) {
        window.scrollTo(0, position - 20);
      } else {
        clearInterval(scrollToTop);
      }
    }, 10);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <Box  >
 {/* <Image w='100%' h='100vh' objectFit={'cover'} src='https://ntwist.com/wp-content/uploads/2023/01/home-image-bg-v6.png' /> */}
      <Box
       
        h='100vh'
        w='100vw'
        backgroundRepeat="no-repeat"
          backgroundSize="cover"
        backgroundImage="url(https://ntwist.com/wp-content/uploads/2023/01/home-image-bg-v6.png)"
      >
       
      <Navbar/>
        <Button
          onClick={scrollToTop}
          display={isVisible ? "" : "none"}
          position={'fixed'}
          bottom={"50px"}
          right={"30px"}
          width={'50px'}
          height={"50px"}
          bg={'#003358'}
          borderRadius={'50%'}
          color={'white'}
          _hover={{ bg: "#003358" }}
          cursor={'pointer'}
          border={'none'}
          outline={'none'}
        ><IoIosArrowUp /></Button>
           
           <Box>
            <Box>
              <Image rc='https://ntwist.com/wp-content/plugins/gtranslate/flags/svg/en.svg' />
            </Box>
           </Box>




        <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <Box p='50px ' gap='6' display={'flex'} justifyContent={'space-evenly'} >
            <Box display={'flex'} alignItems={'center'}>
              <Box >
                <Heading fontSize={'42px'} color={'white'}>Data-powered solutions for Industrial Excellence</Heading>
                <Button bg={'#0693e3'} _hover={{ bg: "#0693e3" }} color={'white'} mt='20px'>Read More</Button>
              </Box>
            </Box>
            <Box w='80%' display={'flex'} alignItems={'center'}>
              <Box>
                <Image src='https://ntwist.com/wp-content/uploads/2023/01/home-image-icons-v6.png' />
              </Box>
            </Box>

          </Box>
        </Box>
       
      </Box>
      <HomePageBody />
      <Footer />
    </Box>



  )
}
