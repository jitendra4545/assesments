import { Box } from '@chakra-ui/react'
import React from 'react'
import { ProductCard } from './ProductCard'

const Data =
    [
        {
            img: "https://ntwist.com/wp-content/uploads/2023/01/iStock-1339284457-2048x1365.jpg",
            header: "Mine-To-Mill-To-Mine Optimization",
            desc: "NTWIST’s newest product unlocks up to $250/oz in previously inaccessible value in open pit gold mines by connecting siloed data sources like block models, fleet management systems, stockpile surveys, and plant instruments. This allows your company to better track material flow, and feed properties, identify plan/production discrepancies, and correct resource models and production plans."
        },
        {
            img: "https://ntwist.com/wp-content/uploads/2021/12/iStock-1284372575.jpg",
            header: "Sustainability",
            desc: "Environmental stewardship is a priority for NTWIST. We help our customers to minimize their sustainability  impact on the planet. Emissions or environmental targets are used alongside productivity targets to define success for our customers.",
            desc2: "With the increasing relevance of carbon accounting and emissions tracking, NTWIST offers a suite of tools to increase visibility into environmental performance and help processing plants track, manage, optimize, and report key metrics."
        },
        {
            img: "https://ntwist.com/wp-content/uploads/2021/12/iStock-1322302283.jpg",
            header: "Mineral Processing",
            desc: "NTWIST offers a number of solutions for mills, concentrators, and leach plants. Our solutions help operations to reduce the effect of feed variability, avoid downtime and increase peak throughput while decreasing energy and reagent consumption."
        },
        {
            img: "https://ntwist.com/wp-content/uploads/2022/03/2021-02-oil-and-gas-digital-hero-e1648984580884.png",
            header: "Oil & Gas",
            desc: "Oil and Gas plants require a high level of control and robustness in their operation due to the high risks to people and environment.",
            desc: "NTWIST helps Oil & Gas customers to analyze historical data, identify opportunities for process control improvements, and reduce variability in any part of the process, thus providing enhanced reliability and safety."
        }
    ]

export const HomePageBody = () => {
    return (
        <Box bg='white' m={'40px 0px'} >
            <Box w={{ base: "98%", md: "95%", lg: "90%" }} margin={'auto'} >
           <Box display={'grid'} gap={'10'}>
           {
            Data.map((el,i)=>{
                return <ProductCard {...el} i={i} />
            })
           }
           </Box>
           
            </Box>

        </Box>
    )
}
