import { Box, Button, Image, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Navbar } from './Navbar'
import CountryList from './CountryList'
import {ArrowForwardIcon} from '@chakra-ui/icons'

export const CountryPage = () => {

    const [country, setCountry] = useState()
    const [count, setCount] = useState(0)

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
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
         getData()
        console.log('hi')
    }, [])


    console.log(country)
    return (
        <Box>
            <Navbar />
            
            <Box  w='90%' margin={'auto'} display={'grid'} gap={'7'} gridTemplateColumns={{base:"repeat(1,1fr)",md:"repeat(2,1fr)",lg:"repeat(3,1fr)"}} >

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
