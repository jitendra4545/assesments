import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Textarea,
  useDisclosure,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,

} from '@chakra-ui/react'
import { useState } from 'react'
import React from 'react'
import { Navbar } from './Navbar'

export const ApplyPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()

  const [Fullname, setFullname] = useState("")
  const [Email, setEmail] = useState("")
  const [Cover, setCover] = useState("")
  const [DATA, setData] = useState([])
  const handleApply = () => {

    if (Fullname == "" || Email == "" || Cover == "") {
      alert('please fill all the fields')
    } else {
      setData({ Fullname, Email, Cover })
      onOpen()
    }


  }

  console.log("Data", DATA)



  return (
    <Box>
      <Box>
        <Navbar />
      </Box>

      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Apply Now
            </Heading>
           
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>Upload CV</FormLabel>
                    <Input type="file" />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Upload Cover Letter</FormLabel>
                    <Input type="file" />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Full Name</FormLabel>
                <Input onChange={(e) => setFullname(e.target.value)} type="email" />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Email</FormLabel>
                <InputGroup>
                  <Input onChange={(e) => setEmail(e.target.value)} />

                </InputGroup>
              </FormControl>

              <FormControl id="password" isRequired>
                <FormLabel>Cover Letter</FormLabel>
                <Textarea onChange={(e) => setCover(e.target.value)} placeholder='Here is a sample placeholder' />
              </FormControl>

              <Stack spacing={10} pt={2}>
                <Button
                  onClick={handleApply}
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  SUBMIT
                </Button>
              </Stack>
              <Stack pt={6}>

              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Congratulation ! You Successfully applied the job
            </AlertDialogHeader>

            <AlertDialogBody>
              <Text> Full Name : {DATA.Fullname}</Text>
              <Text>  Email : {DATA.Email}</Text>
              <Text>
                Cover Letter : {DATA.Cover}
              </Text>
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Close
              </Button>

            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>



    </Box>
  )
}
