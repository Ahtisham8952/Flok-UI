import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'
const RevenueData = [
    {
        eventPoster: '/posterbay-1.svg',
        eventName: 'Justice League : Black Adam',
        eventPlace: 'Daniel Alveson',
        Duration: '3h 10m',
        views:'42.3k',
        Rating:'4.8',


    },
    {
        eventPoster: '/posterbay-1.svg',
        eventName: 'Justice League : Black Adam',
        eventPlace: 'Daniel Alveson',
        Duration: '3h 10m',
        views:'42.3k',
        Rating:'4.8',


    },
    {
        eventPoster: '/posterbay-1.svg',
        eventName: 'Justice League : Black Adam',
        eventPlace: 'Daniel Alveson',
        Duration: '3h 10m',
        views:'42.3k',
        Rating:'4.8',


    },
    
  
]
const MoviesTable = () => {
    return (
        <Box>
            <TableContainer>
                <Table variant='simple'>

                    <Thead borderTop={" 1px solid #E7E7E7"} borderBottom={" 1px solid #E7E7E7"}>
                        <Tr color="red" py="11px" h="51px">
                            <Th
                                borderBottom={" 1px solid #E7E7E7"}
                                borderColor={"#E7E7E7"}
                                color="#BABABA"
                                fontSize="12px"
                                fontWeight="500"
                                lineHeight={"16px"}
                            >MOVIES</Th>
                            <Th
                                borderBottom={" 1px solid #E7E7E7"}
                                borderColor={"#E7E7E7"}
                                color="#BABABA"
                                fontSize="12px"
                                fontWeight="500"
                                lineHeight={"16px"}>DURATION</Th>
                            <Th
                                borderBottom={" 1px solid #E7E7E7"}
                                borderColor={"#E7E7E7"}
                                color="#BABABA"
                                fontSize="12px"
                                fontWeight="500"
                                lineHeight={"16px"} >VIEWS</Th>
                            <Th
                                borderBottom={" 1px solid #E7E7E7"}
                                borderColor={"#E7E7E7"}
                                color="#BABABA"
                                fontSize="12px"
                                fontWeight="500"
                                lineHeight={"16px"}>RATING</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {RevenueData.map((li,index) => (
                            <Tr key={index}>
                                <Td
                                    color="#BABABA"
                                    fontSize="12px"
                                    fontWeight="500"
                                    lineHeight={"16px"}>

                                    <Flex gap="12px">
                                        <Image h={{base:'25px',md:'48px'}} w={{base:'25px',md:'48px'}}  alt="img" src={li.eventPoster}></Image>
                                        <Box>
                                            <Text
                                                  wordBreak={"break-all"}
                                                color="#191919"
                                                fontSize="14px"
                                                fontWeight="600"
                                                lineHeight={"150%"}
                                            >
                                               {li.eventName}
                                            </Text>
                                            <Text

                                                color="#BABABA"
                                                fontSize="12px"
                                                fontWeight="500"
                                                lineHeight={"16px"}
                                            >
                                               {li.eventPlace}
                                            </Text>
                                        </Box>
                                    </Flex>
                                </Td>
                                <Td>
                                    {li.Duration}
                                </Td>
                                <Td
                                    >
                                    {li.views}
                                </Td>
                                <Td
                                    >
                                        <Flex gap='5px'>
                                            <Image alt="img" src='/starsrev.svg'></Image>
                                            <Text
            
            color="#1F1F1F"
            fontSize="14px"
            fontWeight="600"
            lineHeight={"150%"}
          >
       {li.Rating}
          </Text>

                                        </Flex>
                                    
                                </Td>
                            </Tr>
                        ))}

                    </Tbody>

                </Table>
            </TableContainer>

        </Box>
    )
}

export default MoviesTable