import { Box } from '@chakra-ui/react'
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
const RevenueData=[
    {
ID:'#123456',
event:'Justice League : Black Adam',
Customer:'Daniel Alveson',
pcs:'1 pcs',


    },
    {
        ID:'#234567',
        event:'Black Panther : Wakanda Forever',
        Customer:'Kevin Jonson',
        pcs:'3 pcs',
        
        
            },
            {
                ID:'#234567',
                event:'Avatar : The Way of Water',
                Customer:'Daniel Alveson',
                pcs:'1 pcs',
                
                
                    },
                    {
                        ID:'#234567',
                        event:'KKN di Desa Penari : Uncut Version',
                        Customer:'Daniel Alveson',
                        pcs:'1 pcs',
                        
                        
                            },
                            {
                                ID:'#234567',
                                event:'Puss in Boots : The Last Wish',
                                Customer:'Daniel Alveson',
                                pcs:'1 pcs',
                                
                                
                                    },
]
const SalesRevenueTable = () => {
    return (
        <Box w="100%" >
            <TableContainer >
                <Table size={'sm'}>

                    <Thead borderTop={" 1px solid #E7E7E7"} borderBottom={" 1px solid #E7E7E7"}>
                        <Tr color="red" py="11px"  h="51px">
                            <Th
                           borderBottom={" 1px solid #E7E7E7"}
                           borderColor={"#E7E7E7"}
                            color="#BABABA"
                            fontSize="12px"
                            fontWeight="500"
                            lineHeight={"16px"}
                             >ORDER ID</Th>
                            <Th
                            borderBottom={" 1px solid #E7E7E7"}
                            borderColor={"#E7E7E7"}
                              color="#BABABA"
                              fontSize="12px"
                              fontWeight="500"
                              lineHeight={"16px"}>EVENTS</Th>
                            <Th
                            borderBottom={" 1px solid #E7E7E7"}
                            borderColor={"#E7E7E7"}
                              color="#BABABA"
                              fontSize="12px"
                              fontWeight="500"
                              lineHeight={"16px"} >CUSTOMER  NAME</Th>
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
                    {RevenueData.map((li,index) => (
                        <Tr key={index}>
                            <Td
                             color="#BABABA"
                             fontSize="12px"
                             fontWeight="500"
                             lineHeight={"16px"}>{li.ID}</Td>
                            <Td>{li.event}</Td>
                            <Td
                             color="#BABABA"
                             fontSize="12px"
                             fontWeight="500"
                             lineHeight={"16px"}>{li.Customer}</Td>
                              <Td
                             color="#BABABA"
                             fontSize="12px"
                             fontWeight="500"
                             lineHeight={"16px"}>{li.pcs}</Td>
                        </Tr>
                    ))}
                       
                    </Tbody>
                   
                </Table>
            </TableContainer>

        </Box>
    )
}

export default SalesRevenueTable