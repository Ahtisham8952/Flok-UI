import { Box, Button, Flex, Image, Text, Textarea } from '@chakra-ui/react'
import React from 'react'
import DashBoardHeader from '../DashBoardHeader'
import CustomLabelInput from "../../CheckoutComponent/CustomLabelInput"

import CountryDropdown from './MenuDropdown'
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
            <Image alt="img" h='322px'  src="/profilebanner.png" />
         <Box h={{base:'120px',md:'214px'}} w={{base:'120px',md:'214px'}} mx='auto' mt={{base:'-50px',md:'-100px'}} display={"flex"} justifyContent={"center"}>
         <Image alt="img" src="/profiledisplay.png" />
         </Box>

        </Box>
        <Flex justifyContent={"space-between"} alignItems={"flex-end"} mb='37px'>
        <Box w={{base:'85%',md:'65%'}}>
            <CustomLabelInput Label="Display Name"/>
        </Box>
        <Box cursor={"pointer"}>
            <Image alt="img" src="/editimgicon.svg"></Image>
        </Box>
        </Flex>
        <Flex justifyContent={"space-between"} alignItems={"flex-end"} mb='37px'>
        <Box w={{base:'85%',md:'65%'}}>
            <CustomLabelInput Label="Email"/>
        </Box>
        <Box cursor={"pointer"}>
            <Image alt="img" src="/editimgicon.svg"></Image>
        </Box>
        </Flex>
        <Flex justifyContent={"space-between"} maxW={"1250px"} gap='10px' flexDirection={{base:'column',md:'row'}} mb='38px'>
            <CountryDropdown LabelName="Country"/> 
            <CountryDropdown LabelName="City"/>
            <CountryDropdown LabelName="Province"/>
        </Flex>
        <Flex justifyContent={"space-between"} alignItems={"flex-end"} mb='60px'>
        <Box w={{base:'85%',md:'65%'}}>
        <Text
            
            color="#191919"
            fontSize="14px"
            fontWeight="600"
            lineHeight={"150%"}
            mb="8px"
          >
       Bio
          </Text>
           <Textarea resize={"none"} h="206px"/>
        </Box>
        <Box cursor={"pointer"}>
            <Image alt="img" src="/editimgicon.svg"></Image>
        </Box>
        </Flex>
        <Button bg="#1F1F1F" colorScheme={"#1F1F1F"} 
     color="#FFFFFF"
     fontSize="14px"
     fontWeight="400"
     lineHeight={"150%"}
     p="8px 56px"
     borderRadius={"10px"}
     
     >
        Save Changes
     </Button>

   

    </Box>

   </Box>
  )
}

export default BasicSettingsTabContent