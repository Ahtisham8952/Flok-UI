import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Flex, Text } from '@chakra-ui/react'
import ReviewTable from './ReviewTable'


const ReviewTabs = ({AnalyticPageReview}) => {
  return (
   <Box>
<Tabs>
    <Flex justifyContent={"space-between"} alignItems={"center"} flexDirection={{base:'column',md:'row'}} gap='10px'>
    <Text
            
            color="#191919"
            fontSize="20px"
            fontWeight="600"
            lineHeight={"150%"}
          >
      Review Customer
          </Text>
    <TabList maxW={"324px"} w='100%' borderBottom={"none"} justifyContent={"space-between"} border='1px solid #E7E7E7' borderRadius={"10px"} p='12px 20px'>
    <Tab p="9px" color="#191919" bg="transparent" borderRadius={"6px"} _selected={{bg:"#1F1F1F",color:'white'}}>All Review</Tab>
    <Tab p="9px" color="#191919" bg="transparent" borderRadius={"6px"} _selected={{bg:"#1F1F1F",color:'white'}}>Published</Tab>
    <Tab p="9px" color="#191919" bg="transparent" borderRadius={"6px"} _selected={{bg:"#1F1F1F",color:'white'}}>Deleted</Tab>
  </TabList>
    </Flex>
  

  <TabPanels p="0px">
    <TabPanel p="0px">
        <ReviewTable ReviewData={AnalyticPageReview}/>
      
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

export default ReviewTabs