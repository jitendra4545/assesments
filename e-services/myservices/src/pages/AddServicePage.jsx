import { Box, FormLabel, Input, FormControl, Select, Button, Heading, Text, useDisclosure, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogCloseButton, AlertDialogBody, AlertDialogFooter, Toast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios' 
import { useToast } from '@chakra-ui/react'
export const AddServicePage = () => {
    const navigate = useNavigate()
    const toast = useToast()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
    const [first_name, setfullName] = useState("")
    const [father_name, setfatherName] = useState("")
    const [product, setproduct] = useState("")
    const [issue_details, setProblem] = useState("")
    const [address, setaddress] = useState("")
    const [pincode, setpincode] = useState("")
    const [mobile, setmobile] = useState("")
const [loading,setloading]=useState(false)

    const handleSubmit=()=>{
        
        if(first_name==""||mobile==""||address==""||product==""||pincode==""||issue_details==""){
            toast({
                title: 'Fill All The Details',
                position: 'top',
                description: "Please fill all the mandatory fiels",
                status: 'warning',
                duration: 2000,
                isClosable: true,
              })
        }else{
            const payload={
                first_name,
                father_name,
                mobile,
                address,
                product,
                pincode,
                issue_details
               }
               setloading(true)
        
               axios.post(`https://fair-gray-angelfish-sari.cyclic.app/service/newservice`,payload)
               .then((res)=>{
                onOpen()
                console.log(res)
                
        setloading(false)
               }).catch((err)=>{
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
        }
       
        const handleHome=()=>{
            navigate('/')
        }
        const handleStatus=()=>{
            navigate('/checkstatus')
        }



    return (
        <Box w='90%' margin={'auto'}>
            <Box p="10px" m={"0px 0px"} textAlign={'center'}>
                {/* <Box mr={'30px'}>
                    <Button bg={'blue'} _hover={{bg:"blue.500"}} onClick={()=>navigate("/")} color={'white'}  >Go Back </Button>
                </Box> */}

                <Text color={'white'} fontWeight={'bold'} fontSize={'20px'}>Fill All The Details</Text>


            </Box>

            <Box textAlign={"center"} borderRadius={"20px"} bg={'#32CD32'} margin={'auto'} w={{ base: "90%", md: "", lg: "40%" }} p={{ base: "20px", md: "", lg: "50px" }}>
                <FormControl isRequired>
                    <FormLabel color={'white'}>Mobile</FormLabel>
                    <Input
                        onChange={(e) => setmobile(+e.target.value)}
                        placeholder='Enter Your Mobile No'
                        type='number'
                    />

                </FormControl>
                <FormControl isRequired>
                    <FormLabel color={'white'}>Full Name</FormLabel>
                    <Input onChange={(e) => setfullName(e.target.value)} type='text' placeholder='Enter Full Name' />
                </FormControl>
                <FormControl >
                    <FormLabel color={'white'}>Father's Name</FormLabel>
                    <Input onChange={(e)=>setfatherName(e.target.value)} type='text' placeholder='Enter Father Name' />
                </FormControl>
                <FormControl isRequired>


                    <FormLabel color={'white'}>Product List</FormLabel>
                    <Select onChange={(e)=>setproduct(e.target.value)}>
                        <option value="">Select your product</option>
                        <option value="AC">Air Conditioner (AC)</option>

                        <option value="TV">Televison (TV)</option>
                        <option value="Refrigerator">Refrigerator</option>
                        <option value="Fridge">Fridge</option>
                        <option value="other">Other Product</option>
                    </Select>
                </FormControl>
                <FormControl isRequired>
                    <FormLabel color={'white'}>Problem / Issue Details</FormLabel>
                    <Input onChange={(e)=>setProblem(e.target.value)} type='text' placeholder='Enter Your Product Defect ' />
                </FormControl>
                {/* <FormControl isRequired>
                    <FormLabel>Product Brand / Company</FormLabel>
                    <Input placeholder='enter your product brsnd name' />
                </FormControl> */}
                <FormControl isRequired>
                    <FormLabel color={'white'}>Address</FormLabel>
                    <Input onChange={(e)=>setaddress(e.target.value)} type='text' placeholder='Enter Your Full Address' />
                </FormControl>
                <FormControl mb={'10px'} isRequired>
                    <FormLabel color={'white'}>Pincode</FormLabel>
                    <Input onChange={(e)=>setpincode(+e.target.value)} type='number' placeholder='Enter Pincode' />
                </FormControl>


                {loading? <Button
    isLoading
    loadingText='Submitting'
    colorScheme='blue'
    variant='outline'
  >
    Submit
  </Button>:<Button bg={'#FF1493'}  color={'white'} margin={'auto'} alignItems={'center'} onClick={handleSubmit} >Submit</Button>}



            </Box>


            <AlertDialog 
            
        motionPreset='slideInBottom'
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
        
      >
        <AlertDialogOverlay  />

        <AlertDialogContent >
          <AlertDialogHeader color={'#FF1493'} textAlign={'center'}>Congratulations  🥱</AlertDialogHeader>
         
          <AlertDialogBody textAlign={'center'} fontSize={'18px'} color={'green'} >
            You are successfully make your service request our executive get in touch with you very soon ...
            
            You can know your status through your mobile number . <span style={{fontWeight:'bold',color:'red'}}>Thank You Visit Again ! </span> 

          </AlertDialogBody>
          <AlertDialogFooter display={'flex'} justifyContent={'center'} >
<Button ref={cancelRef} bg="red" color={'white'} onClick={handleHome}>
Close
            </Button>            
            <Button ml={3} color={'white'} onClick={handleStatus} bg='green'>
              Check Status
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

        </Box>
    )
}
