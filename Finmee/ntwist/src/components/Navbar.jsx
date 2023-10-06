import { Box, Image, Link, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { AiFillCaretDown } from 'react-icons/ai'
const inds_opt = [
  "Sustainability", "Mineral Processing", "Mine-to-mill-to-mine optimization", "Oil & Gas"
]


export const Navbar = () => {
  const [isscroll, setisscroll] = useState(false);




  function isScrolling() {
    if (window.scrollY > 80) {
      setisscroll(true);
    } else {
      setisscroll(false);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", isScrolling);
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <Box bg={isscroll ? "white" : ""} zIndex='1000' position='sticky' top='0px' p='5px 50px'  display={'flex'} justifyContent={'space-between'}>
      <Box w='180px'  >
       {
        isscroll ? <Image w='100%' src='https://ntwist.com/wp-content/uploads/2021/12/ntwist-logo-dark.png' />:<Image w='100%' src='https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png' />
       } 
      </Box>
      <Box  display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Box gap='7' fontSize={'lg'} color={isscroll ? "#003358" : "white"} fontWeight={isscroll ? "normal":"normal"} display={'flex'}  >
          <Link><Text >Home</Text></Link>

          <Popover trigger="hover" >
            <PopoverTrigger>
              <Box display={'flex'}>
                <Link><Text  >Industries </Text></Link>
                <Text mt='5px'><AiFillCaretDown /></Text>
              </Box>


            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader></PopoverHeader>
              <PopoverBody>
         <Box display={'grid'} gap='6'>
         {
                  inds_opt.map((el) => {
                    return <Text color={'black'}>{el}</Text>
                  })
                }
         </Box>
                

              </PopoverBody>
            </PopoverContent>
          </Popover>
         

          <Link><Text >AI Software</Text></Link>
          <Link><Text >Blog</Text></Link>
          <Link><Text>Contact Us</Text></Link>

        </Box>
      </Box>
    </Box>
  )
}
