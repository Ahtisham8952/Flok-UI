import { Box, Text,Image,Flex, Input, Button } from '@chakra-ui/react'
import React from 'react'

const Footers = () => {
  return (
   <Box bg="#F3F3F3" pt='47px' borderTop={"5px solid #DAD9D9 "}>
    <Box maxW={"1740px"} mx="auto" px="20px" py="20px" >
<Flex justifyContent={"space-between"} gap={{base:'20px',md:'100px'}} flexDirection={{base:'column',md:'row'}} mb="32px">
    <Box w={{base:'100%',md:'50%'}}>
    <Text
            mb="20px"
            color="#1F1F1F"
            fontSize={{base:'20px',md:'24px',lg:'28px',xl:"32px"}}
            fontWeight="700"
            lineHeight={"52px"}
            textAlign={{base:'center',sm:'left'}}
          >
      Enjoy 15% off your first order
          </Text>
          <Text
          textAlign={{base:'center',md:'left'}}
            mb="20px"
            color="#8F8F8F"
            fontSize="14px"
            fontWeight="300"
            lineHeight={"28px"}
            maxW="580px"
          >
     Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </Text>
          <Box maxW={"413px"} w="100%" py={{base:'5px',md:'11px'}} pl='14px' pr={{base:'7px',md:'14px'}} bg="#FFFFFF" borderRadius={"2px"} display="flex" justifyContent={"space-between"}>
            <Input border="none" _focusVisible={{border:'none'}} px="0px" placeholder='your@address.com'/>
            <Button bg="#1F1F1F" colorScheme={"#1F1F1F"} 
     color="#FFFFFF"
     fontSize="10px"
     fontWeight="400"
     lineHeight={"150%"}
     py="8px"
     px={{base:'20px',md:'36px',lg:'56px'}}
     borderRadius={"3px"}
     
     >
     Submit
     </Button>

          </Box>

    </Box>
    <Box w={{base:'100%',md:'50%'}} >
    <Text
            mb="20px"
            color="#000000"
            fontSize="16px"
            fontWeight="700"
            lineHeight={"20px"}
            textAlign={{base:'center',md:'left'}}
          >
      CALL US
          </Text>
          <Flex alignItems={"center"} gap={{base:'10px',md:'26px'}} flexDirection={{base:'column',md:'row'}} mb='20px'>
          <Text
           
            color="#8F8F8F"
            fontSize="14px"
            fontWeight="300"
            lineHeight={"28px"}
          >
    +44 330 022 5700
          </Text>
          <Text
         
            color="#8F8F8F"
            fontSize="14px"
            fontWeight="300"
            lineHeight={"28px"}
          >
   Amet minim mollit non deserunt
          </Text>
          </Flex>
          <Text
            mb="20px"
            color="#000000"
            fontSize="16px"
            fontWeight="700"
            lineHeight={"20px"}
            textAlign={{base:'center',md:'left'}}
          >
      Location & Language
          </Text>
          <Flex alignItems={"center"} gap='10px' justifyContent={{base:'center',md:'left'}}>
            <Image alt="img" src="/ukflags.svg"></Image>
          <Text
          
            color="#8F8F8F"
            fontSize="14px"
            fontWeight="300"
            lineHeight={"28px"}
          >
   English
          </Text>

          </Flex>
         
    </Box>
</Flex>
<Box w="89px" bg="#8F8F8F" h="1px" mb="26px" mx={{base:'auto',md:'0px'}}>

</Box>
<Flex justifyContent={"space-between"} flexDirection={{base:'column',sm:'row'}} alignItems="center">
    <Flex alignItems={"center"} gap="13px">
        <Image alt="img"src="/facebookicon.svg"></Image>
        <Image alt="img"src="/instaicon.svg"></Image>
        <Image alt="img"src="/youtubeicon.svg"></Image>
        <Image alt="img"src="/twittericon.svg"></Image>
    </Flex>
    <Box bg="#1F1F1F" borderRadius={"29px"} px={{base:'14px',md:'16px'}} py={{base:'11px',md:'23px'}} mt={{base:'20px',sm:'0px'}}> 
    <Flex gap="13px" alignItems={"center"}>
        <Box bg="#14FF00" h="10px" w="10px" borderRadius={"50%"}></Box>
        <Image h={{base:'16px',md:'24px'}} w={{base:'16px',md:'24px'}} alt="img"src="/chaticons.svg"></Image>
        <Text
            
            color="#FFFFFF"
            fontSize={{base:'12px',md:'14px'}}
            fontWeight="700"
            lineHeight={"25px"}
          >
      Chat to an expert
          </Text>
    </Flex>

    </Box>

</Flex>
    </Box>

   </Box>
  )
}

export default Footers