import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

const RevenueInsightTabs = () => {
  return (
   <Box>
    <Tabs>
        <Flex justifyContent={"center"}>
        <TabList bg="#E7E7E7" borderRadius={"42px"} overflow={'hidden'} flexDirection={{base:'column',md:'row'}} w="100%">
    <Tab py="10px " color="#2E2E2E" px="20px" _selected={{bg:'#1F1F1F',color:'#FFFFFF'}} borderRadius={"58px"}>Daily</Tab>
    <Tab py="10px " px="20px" color="#2E2E2E" _selected={{bg:'#1F1F1F',color:'#FFFFFF'}} borderRadius={"58px"}>Weekly</Tab>
    <Tab py="10px " px="20px" color="#2E2E2E" _selected={{bg:'#1F1F1F',color:'#FFFFFF'}} borderRadius={"58px"}>Monthly</Tab>
    <Tab py="10px " px="20px" color="#2E2E2E" _selected={{bg:'#1F1F1F',color:'#FFFFFF'}} borderRadius={"58px"}>Calendar</Tab>
  </TabList>
        </Flex>
       


  <TabPanels p='0px'>
    <TabPanel p="0px">
        <Box>
            <Flex justifyContent={"space-between"} alignItems={"center"} mt='100px' mb='35px' flexWrap={"wrap"} gap='10px'>
                <Box>
                <Text
           
            color="#757575"
            fontSize={{base:'12px',md:'14px',lg:'16px'}}
            fontWeight="500"
            lineHeight={"150%"}
          >
    Revenue
          </Text>
                <Text
            
            color="#191919"
            fontSize={{base:'16px',md:'18px',lg:'24px'}}
            fontWeight="700"
            lineHeight={"150%"}
           
          >
    $251,70
          </Text>
          
                </Box>
                <Box>
                <Text
           
            color="#757575"
            fontSize={{base:'12px',md:'14px',lg:'16px'}}
            fontWeight="500"
            lineHeight={"150%"}
          >
    Commission
          </Text>
                <Text
            
            color="#191919"
            fontSize={{base:'16px',md:'18px',lg:'24px'}}
            fontWeight="700"
            lineHeight={"150%"}
           
          >
   $137,25
          </Text>
          
                </Box>
                <Box>
                <Text
           
            color="#757575"
            fontSize={{base:'12px',md:'14px',lg:'16px'}}
            fontWeight="500"
            lineHeight={"150%"}
          >
   BALANCE
          </Text>
                <Text
            
            color="#191919"
            fontSize={{base:'16px',md:'18px',lg:'24px'}}
            fontWeight="700"
            lineHeight={"150%"}
           
          >
   $10.710,25
          </Text>
          
                </Box>
                <Box>
                <Text
           
            color="#757575"
            fontSize={{base:'12px',md:'14px',lg:'16px'}}
            fontWeight="500"
            lineHeight={"150%"}
          >
   CANCELLATION
          </Text>
                <Text
            
            color="#191919"
            fontSize={{base:'16px',md:'18px',lg:'24px'}}
            fontWeight="700"
            lineHeight={"150%"}
           
          >
   $83,50
          </Text>
          
                </Box>
               
            </Flex>
            <Box>
                <Image  alt="img" mb='33px' w="100%" src="/chartimage.png"></Image>
            </Box>
            <Flex alignItems={"center"} justifyContent={"space-between"} pt='18px' borderTop={"1px solid #E7E7E7"}>
                <Box>
                <Text
            
            color="#BABABA"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"16px"}
          >
       jan
          </Text>
                </Box>
                <Box>
                <Text
            
            color="#BABABA"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"16px"}
          >
       Feb
          </Text>
                </Box>
                <Box>
                <Text
            
            color="#BABABA"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"16px"}
          >
       Mar
          </Text>
                </Box>
                <Box>
                <Text
            
            color="#BABABA"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"16px"}
          >
       Apr
          </Text>
                </Box>
                <Box>
                <Text
            
            color="#BABABA"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"16px"}
          >
       May
          </Text>
                </Box>
                <Box>
                <Text
            
            color="#BABABA"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"16px"}
          >
       Jun
          </Text>
                </Box>
                <Box>
                <Text
            
            color="#BABABA"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"16px"}
          >
       Jul
          </Text>
                </Box>
                <Box>
                <Text
            
            color="#BABABA"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"16px"}
          >
       Sep
          </Text>
                </Box>
                <Box>
                <Text
            
            color="#BABABA"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"16px"}
          >
       Oct
          </Text>
                </Box>
                <Box>
                <Text
            
            color="#BABABA"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"16px"}
          >
       Nov
          </Text>
                </Box>
                <Box>
                <Text
            
            color="#BABABA"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"16px"}
          >
       Dec
          </Text>
                </Box>
            </Flex>
        </Box>
     
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
    <TabPanel>
      <p>three!</p>
    </TabPanel>
  </TabPanels>
</Tabs>

   </Box>
  )
}

export default RevenueInsightTabs