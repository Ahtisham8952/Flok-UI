import { Box, Button, Flex, Grid, Image, Text } from '@chakra-ui/react'
import React from 'react'
import DashBoardHeader from './DashBoardHeader'

const EventsTabContent = () => {
  return (
    <Box>
        <DashBoardHeader/>
        <Box p='30px'>
            <Flex gap='50px' flexDirection={{base:'column',md:'row'}}>
                <Box w={{base:'100%',md:'30%'}}>
                    <Box>
                        <Flex justifyContent={"space-between"}  mb='21px'>
                        <Text
            
            color="#191919"
            fontSize="14px"
            fontWeight="600"
            lineHeight={"150%"}
          >
       Popular Events
          </Text>
          <Text
            
            color="#191919"
            fontSize="14px"
            fontWeight="600"
            lineHeight={"150%"}
          >
       See All
          </Text>
                        </Flex>
                        <Image alt="img" w='100%' src='/playvoly.png'></Image>
                        <Box mt="20px">
                            <Flex justifyContent={"space-between"} mb='20px'>
                            <Text
            
            color="#191919"
            fontSize="14px"
            fontWeight="600"
            lineHeight={"150%"}
          >
       Date
          </Text>
          <Text
            
            color="#191919"
            fontSize="14px"
            fontWeight="600"
            lineHeight={"150%"}
          >
       10-09-2023
          </Text>
                            </Flex>
                            <Flex justifyContent={"space-between"} mb='20px'>
                            <Text
            
            color="#191919"
            fontSize="14px"
            fontWeight="600"
            lineHeight={"150%"}
          >
       Number Tickets Sold
          </Text>
          <Text
            
            color="#191919"
            fontSize="14px"
            fontWeight="600"
            lineHeight={"150%"}
          >
    10
          </Text>
                            </Flex>
                            <Flex justifyContent={"space-between"} mb='20px'>
                            <Text
            
            color="#191919"
            fontSize="14px"
            fontWeight="600"
            lineHeight={"150%"}
          >
      Event Location
          </Text>
          <Text
            
            color="#191919"
            fontSize="14px"
            fontWeight="600"
            lineHeight={"150%"}
          >
  Lorem Ipsum is simply dummy.
          </Text>
                            </Flex>
                            <Text
            
            color="#BABABA"
            fontSize="14px"
            fontWeight="600"
            lineHeight={"150%"}
          >
      This time, the people of Wakanda will fight to protect their country from interference by world powers after the death of King TChalla. View Detail
          </Text>
          <Button mt="33px" bg="#1F1F1F" colorScheme={"#1F1F1F"} 
     color="#FFFFFF"
     fontSize="14px"
     fontWeight="400"
     lineHeight={"150%"}
    w='100%'
     borderRadius={"10px"}
     
     >
       See Detail
     </Button>

                        </Box>
                    </Box>

              </Box>
              <Box w={{base:'100%',md:'70%'}}>
              <Flex justifyContent={"space-between"} mb='21px'>
                        <Text
            
            color="#191919"
            fontSize="14px"
            fontWeight="600"
            lineHeight={"150%"}
          >
       Upcoming Events
          </Text>
          <Text
            
            color="#191919"
            fontSize="14px"
            fontWeight="600"
            lineHeight={"150%"}
          >
       See All
          </Text>
             </Flex>
             <Grid  templateColumns={{ base: "repeat(1, 1fr)",sm:"repeat(2, 1fr)", md: "repeat(2, 1fr)",lg:'repeat(2, 1fr)' }}  w="100%" gap="24px">
                <Box >
                    <Image alt="img" src='/clibed-1.png'></Image>
                    <Box mt='20px'>
                    <Text
            
            color="#191919"
            fontSize="20px"
            fontWeight="700"
            lineHeight={"150%"}
          >
       Event Title
          </Text>
          <Text
            
            color="#898989"
            fontSize="14px"
            fontWeight="500"
            lineHeight={"150%"}
          >
       Lorem Ipsum is simply dummy
          </Text>
                    </Box>

                </Box>
                <Box >
                    <Image alt="img" src='/clibed-2.png'></Image>
                    <Box mt='20px'>
                    <Text
            
            color="#191919"
            fontSize="20px"
            fontWeight="700"
            lineHeight={"150%"}
          >
       Event Title
          </Text>
          <Text
            
            color="#898989"
            fontSize="14px"
            fontWeight="500"
            lineHeight={"150%"}
          >
       Lorem Ipsum is simply dummy
          </Text>
                    </Box>

                </Box>
                <Box >
                    <Image alt="img" src='/clibed-3.png'></Image>
                    <Box mt='20px'>
                    <Text
            
            color="#191919"
            fontSize="20px"
            fontWeight="700"
            lineHeight={"150%"}
          >
       Event Title
          </Text>
          <Text
            
            color="#898989"
            fontSize="14px"
            fontWeight="500"
            lineHeight={"150%"}
          >
       Lorem Ipsum is simply dummy
          </Text>
                    </Box>

                </Box>
                <Box >
                    <Image alt="img" src='/clibed-4.png'></Image>
                    <Box mt='20px'>
                    <Text
            
            color="#191919"
            fontSize="20px"
            fontWeight="700"
            lineHeight={"150%"}
          >
       Event Title
          </Text>
          <Text
            
            color="#898989"
            fontSize="14px"
            fontWeight="500"
            lineHeight={"150%"}
          >
       Lorem Ipsum is simply dummy
          </Text>
                    </Box>

                </Box>
             </Grid>

              </Box>
            </Flex>

        </Box>
    </Box>
  )
}

export default EventsTabContent