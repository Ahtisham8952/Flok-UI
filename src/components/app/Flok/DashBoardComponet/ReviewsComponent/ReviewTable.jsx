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

const ReviewTable = ({ReviewData}) => {
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
                            >CUSTOMER</Th>
                            <Th
                                borderBottom={" 1px solid #E7E7E7"}
                                borderColor={"#E7E7E7"}
                                color="#BABABA"
                                fontSize="12px"
                                fontWeight="500"
                                lineHeight={"16px"}>DATE</Th>
                            <Th
                                borderBottom={" 1px solid #E7E7E7"}
                                borderColor={"#E7E7E7"}
                                color="#BABABA"
                                fontSize="12px"
                                fontWeight="500"
                                lineHeight={"16px"} >MOVIES  NAME</Th>
                            <Th
                                borderBottom={" 1px solid #E7E7E7"}
                                borderColor={"#E7E7E7"}
                                color="#BABABA"
                                fontSize="12px"
                                fontWeight="500"
                                lineHeight={"16px"}>REVIEW</Th>

                            <Th
                                borderBottom={" 1px solid #E7E7E7"}
                                borderColor={"#E7E7E7"}
                                color="#BABABA"
                                fontSize="12px"
                                fontWeight="500"
                                lineHeight={"16px"}>STARS</Th>
                        </Tr>

                    </Thead>
                    <Tbody>
                        {ReviewData.map((li,index) => (
                            <Tr key={index} h='100%'>
                                <Td w='2%'>
                                    <Checkbox size='lg'></Checkbox>
                                </Td>
                                <Td
                                    color="#BABABA"
                                    fontSize="12px"
                                    fontWeight="500"
                                    lineHeight={"16px"}>

                                    <Flex gap="12px">
                                        <Image h={{ base: '25px', md: '48px' }} w={{ base: '25px', md: '48px' }} alt="img" src={li.CustomerImg}></Image>
                                        <Box>
                                            <Text
                                                wordBreak={"break-all"}
                                                color="#191919"
                                                fontSize="14px"
                                                fontWeight="600"
                                                lineHeight={"150%"}
                                            >
                                                {li.CustomerName}
                                            </Text>
                                            <Text

                                                color="#BABABA"
                                                fontSize="12px"
                                                fontWeight="500"
                                                lineHeight={"16px"}
                                            >
                                                {li.CustomerID}
                                            </Text>
                                        </Box>
                                    </Flex>
                                </Td>
                                <Td>
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
                                          {li.Review}
                                      </Text>
                                      </Box>
                                       

                                   

                                </Td>
                                <Td
                                >
                                    <Flex gap='5px'>
                                        <Image alt="img" src='/starsrev.svg'></Image>
                                        <Image alt="img" src='/starsrev.svg'></Image>
                                        <Image alt="img" src='/starsrev.svg'></Image>
                                        <Image alt="img" src='/starsrev.svg'></Image>
                                        <Image alt="img" src='/starsrev.svg'></Image>
                                       
                                        

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

export default ReviewTable