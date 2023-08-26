import React, { useState, useEffect } from 'react'
import {
  Box, Button, Heading, TabList, Tabs, Tab, useMediaQuery,
  useDisclosure,
  Drawer,
  DrawerCloseButton,
  DrawerBody,
  DrawerContent, DrawerOverlay,
  DrawerHeader,
  Grid,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
// Link


} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

function Navbar() {
  const [isSmall] = useMediaQuery('(min-width: 780px)')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isscroll, setisscroll] = useState(false);
  const btnRef = React.useRef()

  function isScrolling() {
    if (window.scrollY > 80) {
      setisscroll(true);
    } else {
      setisscroll(false);
    }
  }
//   useEffect(() => {
//     window.addEventListener("scroll", isScrolling);
//     return () => {
//       window.removeEventListener("scroll");
//     };
//   }, []);

//   const handleOpen=()=>{
//     window.open(`https://drive.google.com/file/d/1iNwUQuC_PVgLBdaPtoDm5-mXL5VRd2Kf/view?usp=sharing`)
//   }

  return (

    <Box bg={'pink'}  zIndex='1000' position='sticky' top='0px' padding={{ base: '15px 30px', md: '15px 40px', lg: '10px 90px' }} boxShadow='rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, skyblue 0px 4px 6px -2px;' justifyContent='space-between' display='flex'>

      <Box >
        <Link  to="/"><Heading fontStyle='italic' color={isscroll ? 'white' : "blue"}>Home</Heading> </Link>
      </Box>
      {
        isSmall ?
          //height='10vh' boxShadow=' rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;'
          <Box  >
            <Tabs color={'blue'} variant='solid-rounded'>
              <TabList gap='3' >

                <Link to='/register'  ><Tab color={isscroll ? 'white' : "#02054B"} >Add New User</Tab></Link>
                <Link to='/postanalytic' ><Tab color={isscroll ? 'white' : "#02054B"} >Post Analytic</Tab></Link>
                <Link to='/allusers' ><Tab color={isscroll ? 'white' : "#02054B"} >Users</Tab></Link>
                <Link to='/useranalytic' ><Tab color={isscroll ? 'white' : "#02054B"} >User Analytic</Tab></Link>
                <Link to='/addpost' ><Tab color={isscroll ? 'white' : "#02054B"} >Add New Post</Tab></Link>
               
              </TabList>
            </Tabs>
          </Box>

          :

          <Box  >
            <Menu >
              <MenuButton
                px={4}
                py={2}
                transition='all 0.2s'
                borderRadius='md'
                borderWidth='1px'
                background={isscroll ? 'white' : "blue"}
                _hover={{ bg: 'gray.400' }}
                _expanded={{ bg: 'blue.400' }}
                _focus={{ boxShadow: 'outline' }}
              >
                <HamburgerIcon />
              </MenuButton>
              <MenuList fontSize='20px' fontWeight={'bold'} backgroundColor={'blue'}>
                <Link  to='/register' ><MenuItem _focus={{ background: 'blue', color: "white" }}  >Add New User</MenuItem></Link>
                <Link to='/postanalytic'> <MenuItem _focus={{ background: 'blue', color: "white" }}>Post Annalytic</MenuItem></Link>
                <Link to='/allusers'> <MenuItem _focus={{ background: 'blue', color: "white" }}>Users</MenuItem></Link>
                <Link to='/useranalytic' > <MenuItem _focus={{ background: 'blue', color: "white" }}>Users Analytic</MenuItem></Link>
                <Link to='/addpost'> <MenuItem _focus={{ background: 'blue', color: "white" }}>Add New Post</MenuItem></Link>
                
              </MenuList>
            </Menu>

          </Box>
      }


    </Box>
  )
}

export default Navbar


