import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import DashBoardHeader from '../DashBoardHeader'
import CustomLabelInput from "../../CheckoutComponent/CustomLabelInput"
import MenuDropdown from './MenuDropdown'
const BasicSettingsTabContent = () => {
  return (
   <Box>
    <DashBoardHeader/>
    <Box p='24px'>
        <Box mb="36px">
        <Text
            
            color="#191919"
            fontSize="24px"
            fontWeight="700"
            lineHeight={"150%"}
            mb='11px'
          >
      Welcome, Richard Hederson
          </Text>
          <Text
            
            color="#757575"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"16px"}
          >
       We are here to help manage your ticket!
          </Text>
        </Box>
        <Box mb='38px' >
            <Image h='322px' alt="img" src="/profilebanner.png" />
         <Box h={{base:'120px',md:'214px'}} w={{base:'120px',md:'214px'}} mx='auto' mt={{base:'-50px',md:'-100px'}} display={"flex"} justifyContent={"center"}>
         <Image alt="img" src="/profiledisplay.png" />
         </Box>

        </Box>
        <Flex justifyContent={"space-between"} alignItems={"flex-end"} mb='37px'>
        <Box w={{base:'85%',md:'65%'}}>
            <CustomLabelInput Label="Display Name"/>
        </Box>
        <Box cursor={"pointer"}>
            <Image src="/editimgicon.svg"></Image>
        </Box>
        </Flex>
        <Flex justifyContent={"space-between"} alignItems={"flex-end"} mb='37px'>
        <Box w={{base:'85%',md:'65%'}}>
            <CustomLabelInput Label="Email"/>
        </Box>
        <Box cursor={"pointer"}>
            <Image src="/editimgicon.svg"></Image>
        </Box>
        </Flex>
        <Flex>
            <MenuDropdown/>
        </Flex>
        

   

    </Box>

   </Box>
  )
}

export default BasicSettingsTabContent