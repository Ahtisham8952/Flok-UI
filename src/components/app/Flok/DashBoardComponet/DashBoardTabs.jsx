import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel,Link } from '@chakra-ui/react'
import DashboardTabContent from './DashboardTabContent'
import AnalyticsTabContent from './AnalyticsTabContent'

const DashBoardTabs = () => {
  return (
    <Box>
<Tabs display={"flex"}>
    <Box w="20%" px={{base:'20px',xl:'10px',xxl:'56px'}} borderRight={"1px solid #E7E7E7"}>
       <Flex justifyContent={"center"} alignItems={"center"}>
       <Link
       mb='80px'
       pt='42px'
                href="/"
                maxW={{ sm: "128px", base: "100px" }}
                ml={{ sm: "16px", base: "15px" }}
                textDecoration="none !important"
                position="relative"
                mt={{ base: "6px", md: "2px" }}
              >
                <Image
                
                h={{base:'20px',md:'28px'}}
                w={{base:'50px',md:'103px'}}
                  src="/logoflok.svg"
                  alt="logo"
                />
                
              </Link>
       </Flex>
    <TabList flexDirection={"column"} borderBottom={"none"}  >
    <Tab textAlign={"left"} mb='40px' borderRadius={"4px"} _selected={{borderBottom:'none' ,bg:"#E6E6E6"}} maxW={"341px"} w='100%'  py='14px' px='23px' >
        <Flex alignItems={"center"} gap="24px">
            <Image  alt="img" src="/dahsboardpic-1.svg"></Image>
            <Text
            
            color="#1F1F1F"
            fontSize="14px"
            fontWeight="600"
            lineHeight={"150%"}
          >
      Dashboard
          </Text>
        </Flex>
    </Tab>
    <Tab textAlign={"left"} mb='40px' borderRadius={"4px"} _selected={{borderBottom:'none' ,bg:"#E6E6E6"}} maxW={"341px"} w='100%'  py='14px' px='23px' >
        <Flex alignItems={"center"} gap="24px">
            <Image alt="img" src="/dahsboardpic-1.svg"></Image>
            <Text
            
            color="#1F1F1F"
            fontSize="14px"
            fontWeight="600"
            lineHeight={"150%"}
          >
     Analytics
          </Text>
        </Flex>
    </Tab>
    <Tab textAlign={"left"} mb='40px' borderRadius={"4px"} _selected={{borderBottom:'none' ,bg:"#E6E6E6"}} maxW={"341px"} w='100%'  py='14px' px='23px' >
        <Flex alignItems={"center"} gap="24px">
            <Image  alt="img" src="/dahsboardpic-1.svg"></Image>
            <Text
            
            color="#1F1F1F"
            fontSize="14px"
            fontWeight="600"
            lineHeight={"150%"}
          >
     Events
          </Text>
        </Flex>
    </Tab>
  </TabList>

    </Box>

<Box w='80%'>
<TabPanels p='0px'>
    <TabPanel p='0px'>
      <DashboardTabContent/>
    </TabPanel>
    <TabPanel p='0px'>
        <AnalyticsTabContent/>
     
    </TabPanel>
    <TabPanel>
      <p>three!</p>
    </TabPanel>
  </TabPanels>
</Box>
  
</Tabs>


    </Box>
  )
}

export default DashBoardTabs