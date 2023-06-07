import { Box, Button, Flex, Image, Input, Text } from '@chakra-ui/react';
import React from 'react';
import FlokSlider from "./FlokSlider"
const LocationTabContent = () => {
  
  return (
   <Box>
   
    <Box mb="50px" maxW={"1530px"}  px='20px' mx="auto"  >
    <Box mb="30px" bg='#FFFFFF' pr='12px' w={"290px"} border='1px solid #D5D5D5'  borderRadius={"10px"}  justifyContent={"space-between"} display={"flex"}>
            <Input  w='63%' placeholder='Geneva' bg="none" border={"none"} _focusVisible={{border:'none'}} />
          
            <Flex gap='10px ' alignItems={"center"} >
              
              <Image alt="img"src='/saerchbaricon.svg'></Image>
              <Box bg="rgba(166, 166, 166, 0.28)" w='1px' h='22px' >

              </Box>
           
              <Image h='12px' w='12px' alt="img"src='/mappinseacrh.svg'></Image>
             
              
            </Flex>
            </Box>
        <Image    alt="img"src="/mapimages.png"></Image>
    </Box>
    <Box mb='50px'>

   
   
    <FlokSlider/>
    </Box>
    
    <Box display={"flex"} justifyContent={"center"} mb='100px' >
    <Button bg="#D5D5D5" colorScheme={"#D5D5D5"} 
     color="#878787"
     fontSize="16px"
     fontWeight="500"
     lineHeight={"150%"}
     p="8px 56px"
     borderRadius={"50px"}
     
     >
       Show more
     </Button>

    </Box>

   </Box>
  );
};

export default LocationTabContent;