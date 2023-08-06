import { Box, Button, Image, Input, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Navbar } from '../components/Navbar'
import CountryList from '../components/CountryList'
import {ArrowForwardIcon} from '@chakra-ui/icons'

export const CountryPage = () => {
    const [inputVal, setinputVal] = useState("")
    const [country, setCountry] = useState()
    const [count, setCount] = useState(0)
    const [filterData, setFilterData] = useState([])
    const getData = async () => {
        const options = {
            method: 'GET',
            url: 'https://anime-db.p.rapidapi.com/anime',
            params: {
                page: '1',
                size: '10',
                search: 'Fullmetal',
                genres: 'Fantasy,Drama',
                sortBy: 'ranking',
                sortOrder: 'asc'
            },
            headers: {
                'X-RapidAPI-Key': '66e4b9df67msh4d4ecfa7bee1f95p1fa388jsn07a3055e3f44',
                'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            console.log(response.data);
            setCountry(response.data.data)
            setFilterData(response.data.data)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
         getData()
        console.log('hi')
    }, [])


    const handleSearch=(e)=>{
        const val=e.target.value
        setinputVal(val)

        const res = filterData.filter((el, i) =>
        el.alternativeTitles[1].toLowerCase().includes(val.toLowerCase())
      )
setCountry(res)
    }


    console.log(inputVal)
    return (
        <Box>
            
            <Box  display={'flex'} alignItems={'center'} justifyContent={'center'} bg={'teal.300'} p='10px' w='100%' >
<Input value={inputVal} onChange={handleSearch}  placeholder='Search By Title' p='10px'  w='30%' />


    </Box>
            <Box p='50px 0px'  w='90%' margin={'auto'} display={'grid'} gap={'5'} gridTemplateColumns={{base:"repeat(1,1fr)",md:"repeat(2,1fr)",lg:"repeat(3,1fr)"}} >

                {/* <------------- ContryList Page -----------------> */}
               {
                country?.map((el)=>{
                    return <CountryList {...el}  />
                })
               }
                


                

                {/* <------------- ContryList Page -----------------> */}
            </Box>
        </Box>
    )
}
