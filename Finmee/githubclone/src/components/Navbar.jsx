import { Box, Button, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react'
import React from 'react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { BsGithub } from 'react-icons/bs'
import { BiCaretDown, BiSearch } from 'react-icons/bi'
import { FiChevronRight } from "react-icons/fi"
export const Navbar = () => {
    return (
        <Box bg='#0D1117' p='15px 20px' justifyContent={'space-between'} display={'flex'} >
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} >
                <Box display={'flex'} alignItems={'center'} >
                    <button style={{ border: '1px solid grey', padding: "3px 7px", borderRadius: "3px" }}><HamburgerIcon fontSize={'18px'} color={'#7D8590'} /></button>
                    <Box ml='15px' gap='4' display={'flex'} alignItems={'center'} color='#E6EDF3'>
                        <BsGithub fontSize={'30px'} color='#E6EDF3' />
                        <Text fontWeight={'bold'} color='#E6EDF3'>Dashboard</Text>
                    </Box>

                </Box>

            </Box>
            <Box display={'flex'} border={'1px solid red'}>
                <InputGroup h='30px' border={'1px solid grey'}>
                    <InputLeftElement h='30px' pointerEvents='none'>
                        <BiSearch fontSize={'20px'} color={'#7D8590'} />
                    </InputLeftElement>

                    <Input h='30px' type='text' placeholder='Type to search' />
                </InputGroup>
                <Box display={'flex'} alignItems={'center'} color={'#7D8590'} border={"1px solid grey"}>
                    <FiChevronRight fontSize={'20px'} />_
                </Box>
                <Text color={'#7D8590'} ml='15px' mr='15px'>|</Text>

                <Box display={'flex'} gap='2'>
                    <Box fontSize={'20px'} display={'flex'} p='0px 4px' alignItems={'center'} color={'#7D8590'} border={"1px solid grey"}>
                        +<BiCaretDown />
                    </Box>
                    <Box display={'flex'} alignItems={'center'} color={'#7D8590'} border={"1px solid grey"}>
                        +<BiCaretDown />
                    </Box>
                    <Box  display={'flex'} alignItems={'center'} color={'#7D8590'} border={"1px solid grey"}>
                        +<BiCaretDown />
                    </Box>
                    <Box display={'flex'} alignItems={'center'} color={'#7D8590'} border={"1px solid grey"}>
                        +<BiCaretDown />
                    </Box>
                </Box>

            </Box>

        </Box>
    )
}
