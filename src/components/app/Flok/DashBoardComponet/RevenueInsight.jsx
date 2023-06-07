import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import RevenueInsightTabs from './RevenueInsightTabs'

const RevenueInsight = () => {
  return (
    <Box border='1px solid #E7E7E7 ' borderRadius={"10px"} py='10px' px="32px" mt='25px'>
<Box >
<Text
            
            color="#191919"
            fontSize="24px"
            fontWeight="700"
            lineHeight={"150%"}
            mb='10px'
          >
     Revenue Insights
          </Text>
          <Text
            mb='40px'
            color="#757575"
            fontSize="16px"
            fontWeight="500"
            lineHeight={"150%"}
          >
     Provides the latest sales information!
          </Text>

</Box>
<Box>
    <RevenueInsightTabs/>
</Box>
    </Box>
  )
}

export default RevenueInsight