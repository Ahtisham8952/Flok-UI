import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';


import FlokSlider from "../LandingPage/FlokSlider"

import LabelBox from '../LandingPage/LabelBox';
import InstructionSteps from '../LandingPage/InstructionSteps';
import LayoutWrapper from '../../../core/LayoutWrapper/LayoutWrapper';

const GenevaSearch = () => {
  
  return (
    <>
   <LayoutWrapper>

   
    <Box pt={{base:'30px',md:'40px',lg:'60px',xl:'100px'}} maxW={"1750px"} w='100%' mx='auto' px='20px' >
      
      <Box mb='40px'>
      <LabelBox/>
      </Box>
      

    </Box>
    <Box pt={{base:'20px',md:'20px',xxxl:'40px'}} maxW={"1750px"} w='100%' mx='auto' px='20px'>
    <Text 
  
            textAlign={"center"}
            color="#1F1F1F"
            fontSize="32px"
            fontWeight="700"
            lineHeight={"16px"}
          >
      Geneva Events
          </Text>
          <Box my='50px'>
          <FlokSlider/>
          </Box>
          <Box my='50px'>
          <FlokSlider/>
          </Box>
          <Box my='50px'>
          <FlokSlider/>
          </Box>
          <Box my='50px'>
          <FlokSlider/>
          </Box>
          <Box my='50px'>
          <FlokSlider/>
          </Box>
          <Box display={"flex"} justifyContent={"center"} mb='100px' >
    <Button _hover={{bg:'#1F1F1F',color:'white'}}  bg="#D5D5D5" colorScheme={"#D5D5D5"} 
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
   
    <Box>
        <InstructionSteps/>
      </Box>
      </LayoutWrapper>
       
       

    </>
  );
};

export default GenevaSearch;



