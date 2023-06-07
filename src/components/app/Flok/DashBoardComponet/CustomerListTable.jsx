import { Box, Checkbox, Flex, Image, Text } from '@chakra-ui/react'
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
const ReviewData = [
    {
        Custid: '#123456',
        CustomerName: 'Anna Mulana',
        Date: '03 Jan 2023',
        MovieName: 'Daniel Alveson',
        Location: 'Jakarta, ID',
        SoldTicket:'1 pcs'
    },
    {
        Custid: '#123456',
        CustomerName: 'Anna Mulana',
        Date: '03 Jan 2023',
        MovieName: 'Daniel Alveson',
        Location: 'Jakarta, ID',
        SoldTicket:'1 pcs'
    },
    {
        Custid: '#123456',
        CustomerName: 'Anna Mulana',
        Date: '03 Jan 2023',
        MovieName: 'Daniel Alveson',
        Location: 'Jakarta, ID',
        SoldTicket:'1 pcs'
    },
    {
        Custid: '#123456',
        CustomerName: 'Anna Mulana',
        Date: '03 Jan 2023',
        MovieName: 'Daniel Alveson',
        Location: 'Jakarta, ID',
        SoldTicket:'1 pcs'
    },
    {
        Custid: '#123456',
        CustomerName: 'Anna Mulana',
        Date: '03 Jan 2023',
        MovieName: 'Daniel Alveson',
        Location: 'Jakarta, ID',
        SoldTicket:'1 pcs'
    },
    {
        Custid: '#123456',
        CustomerName: 'Anna Mulana',
        Date: '03 Jan 2023',
        MovieName: 'Daniel Alveson',
        Location: 'Jakarta, ID',
        SoldTicket:'1 pcs'
    },
    {
        Custid: '#123456',
        CustomerName: 'Anna Mulana',
        Date: '03 Jan 2023',
        MovieName: 'Daniel Alveson',
        Location: 'Jakarta, ID',
        SoldTicket:'1 pcs'
    },
    {
        Custid: '#123456',
        CustomerName: 'Anna Mulana',
        Date: '03 Jan 2023',
        MovieName: 'Daniel Alveson',
        Location: 'Jakarta, ID',
        SoldTicket:'1 pcs'
    },
    {
        Custid: '#123456',
        CustomerName: 'Anna Mulana',
        Date: '03 Jan 2023',
        MovieName: 'Daniel Alveson',
        Location: 'Jakarta, ID',
        SoldTicket:'1 pcs'
    },
    {
        Custid: '#123456',
        CustomerName: 'Anna Mulana',
        Date: '03 Jan 2023',
        MovieName: 'Daniel Alveson',
        Location: 'Jakarta, ID',
        SoldTicket:'1 pcs'
    },
    {
        Custid: '#123456',
        CustomerName: 'Anna Mulana',
        Date: '03 Jan 2023',
        MovieName: 'Daniel Alveson',
        Location: 'Jakarta, ID',
        SoldTicket:'1 pcs'
    },
    
  
]

const CustomerListTable = () => {
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
                            >
                                <Checkbox size='lg'></Checkbox>
                            </Th>
                            <Th
                                borderBottom={" 1px solid #E7E7E7"}
                                borderColor={"#E7E7E7"}
                                color="#BABABA"
                                fontSize="12px"
                                fontWeight="500"
                                lineHeight={"16px"}
                            >CUST.ID</Th>
                            <Th
                                borderBottom={" 1px solid #E7E7E7"}
                                borderColor={"#E7E7E7"}
                                color="#BABABA"
                                fontSize="12px"
                                fontWeight="500"
                                lineHeight={"16px"}>DATE JOIN</Th>
                            <Th
                                borderBottom={" 1px solid #E7E7E7"}
                                borderColor={"#E7E7E7"}
                                color="#BABABA"
                                fontSize="12px"
                                fontWeight="500"
                                lineHeight={"16px"} >CUSTOMER NAME</Th>
                            <Th
                                borderBottom={" 1px solid #E7E7E7"}
                                borderColor={"#E7E7E7"}
                                color="#BABABA"
                                fontSize="12px"
                                fontWeight="500"
                                lineHeight={"16px"}>LOCATION</Th>

                            <Th
                                borderBottom={" 1px solid #E7E7E7"}
                                borderColor={"#E7E7E7"}
                                color="#BABABA"
                                fontSize="12px"
                                fontWeight="500"
                                lineHeight={"16px"}>SOLD TICKET</Th>
                        </Tr>

                    </Thead>
                    <Tbody>
                        {ReviewData.map((li,index) => (
                            <Tr key={index} h='100%' borderBottom={"30px solid white"}>
                                <Td w='2%'>
                                    <Checkbox size='lg'></Checkbox>
                                </Td>
                                <Td
                                    color="black"
                                    fontSize="12px"
                                    fontWeight="500"
                                    lineHeight={"16px"}>

                                    {li.Custid}
                                </Td>
                                <Td color='#BABABA'>
                                    {li.Date}
                                </Td>
                                <Td
                                >
                                    {li.MovieName}
                                </Td>
                                <Td
                                >
                                   
                                      <Box   >
                                      <Text
                                          wordBreak={"break-word"}
                                          color="#BABABA"
                                          fontSize="14px"
                                          fontWeight="500"
                                          lineHeight={"150%"}
                                      >
                                          {li.Location}
                                      </Text>
                                      </Box>
                                       

                                   

                                </Td>
                                <Td
                                >
                                    {li.SoldTicket}

                                </Td>
                            </Tr>
                        ))}

                    </Tbody>

                </Table>
            </TableContainer>

        </Box>
    )
}

export default CustomerListTable