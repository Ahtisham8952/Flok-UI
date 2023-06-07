import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const CalendarSlider = () => {
  return (
    <Box>
        <Flex justifyContent={"space-between"} px="20px" mb='40px'>
            <Image alt="img" src='/calendarleft.svg'></Image>
            <Text
            
            color="#191919"
            fontSize="18px"
            fontWeight="600"
            lineHeight={"150%"}
          >
       January 2023
          </Text>
          <Image alt="img" src='/calendarright.svg'></Image>
        </Flex>
        <Flex justifyContent={"space-between"} alignItems={"center"} mb='12px'>
        <Text
            
            color="#BABABA"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"16px"}
          >
       Sun
          </Text>
          <Text
            
            color="#BABABA"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"16px"}
          >
      Mon
          </Text>
          <Text
            
            color="#BABABA"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"16px"}
          >
      Tue
          </Text>
          <Text
            
            color="#BABABA"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"16px"}
          >
      Wed
          </Text>
          <Text
            
            color="#BABABA"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"16px"}
          >
      Thu
          </Text>
          <Text
            
            color="#BABABA"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"16px"}
          >
      Fri
          </Text>
          <Text
            
            color="#BABABA"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"16px"}
          >
      Sat
          </Text>
          <Text
            
            color="#BABABA"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"16px"}
          >
      Sun
          </Text>
        </Flex>
        <Flex justifyContent={"space-between"} alignItems={"center"} mb='42px'>
        <Text
            
            color="#191919"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"16px"}
          >
       01
          </Text>
          <Text
            
            color="#191919"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"16px"}
          >
       02
          </Text>
          <Text
            
            color="#191919"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"16px"}
          >
       03
          </Text>
          <Text
            
            color="#191919"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"16px"}
          >
       04
          </Text>
          <Text
            
            color="#191919"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"16px"}
          >
       05
          </Text>
          <Text
            
            color="#191919"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"16px"}
          >
       06
          </Text>
          <Text
            
            color="#191919"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"16px"}
          >
       07
          </Text>
        </Flex>
        
    </Box>
  )
}

export default CalendarSlider