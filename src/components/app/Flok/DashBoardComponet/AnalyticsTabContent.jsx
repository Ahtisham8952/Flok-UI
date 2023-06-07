import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import DashBoardHeader from './DashBoardHeader'
import WeekMenu from './WeekMenu'
import AnalyticCard from './AnalyticCard'
import MoviesTable from './MoviesTable'
import SevendayAnalytic from './SevendayAnalytic'
import ReveiwSection from './ReviewsComponent/Index'

const AnalyticsTabContent = () => {
  return (
  <Box >
    <Box >
    <DashBoardHeader/>
    </Box>
    <Box p="28px">

   
    <Flex justifyContent={"space-between"} mb='64px'>
        <Box>
        <Text
            
            color="#191919"
            fontSize="24px"
            fontWeight="700"
            lineHeight={"150%"}
            mb='10px'
          >
      Analystics
          </Text>
          <Text
            mb='40px'
            color="#757575"
            fontSize="16px"
            fontWeight="500"
            lineHeight={"150%"}
          >
     Summary of the order list that you have
          </Text>
        </Box>
        <Box>
            <WeekMenu/>
        </Box>

    </Flex>
    <Flex justifyContent={"space-between"} gap="100px" flexDirection={{base:'column',lg:'row'}}>
        <Box w={{base:'100%',lg:'30%'}}>
        <Text
            mb='33px'
            color="#191919"
            fontSize="20px"
            fontWeight="600"
            lineHeight={"150%"}
          >
      Popular Movies
          </Text>
            <AnalyticCard/>
            <Box mt="30px">
            <SevendayAnalytic/>
            </Box>
           
        </Box>
        <Box w={{base:'100%',lg:'70%'}}>
            <Flex justifyContent={"space-between"} mb="33px">
            <Text
           
            color="#191919"
            fontSize="20px"
            fontWeight="600"
            lineHeight={"150%"}
          >
      Other Movies
          </Text>
          <Text
           
           color="#191919"
           fontSize="14px"
           fontWeight="600"
           lineHeight={"150%"}
         >
    See  All
         </Text>
         

            </Flex>
            <MoviesTable/>

        </Box>
    </Flex>
    <Box>
      <ReveiwSection/>
    </Box>
    </Box>
   

  </Box>
  )
}

export default AnalyticsTabContent