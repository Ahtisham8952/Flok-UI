import { Box, Flex, Image } from '@chakra-ui/react';
import React from 'react';
import LabelBox from './LabelBox';
import HomePageTabs from './HomePageTabs';
import InstructionSteps from './InstructionSteps';
import LayoutWrapper from '../../../core/LayoutWrapper/LayoutWrapper';

const LandingPage = () => {
  
  return (
    <>
   <LayoutWrapper>

   <Box borderTop={"1px solid #2C2C2C"}>
        <Image alt='img' w='100%' src="/kidsBanner.png"/>
      </Box>
    <Box pt={{base:'30px',md:'40px',lg:'60px',xl:'100px'}} maxW={"1750px"} w='100%' mx='auto' px='20px' >
      
      <Box mb='40px'>
      <LabelBox/>
      </Box>
      

    </Box>
    <Box pt={{base:'20px',md:'20px',xxxl:'40px'}} maxW={"1750px"} w='100%' mx='auto' px='20px'>
    <HomePageTabs/>
    </Box>
   
    <Box>
        <InstructionSteps/>
      </Box>
      </LayoutWrapper>
       
       

    </>
  );
};

export default LandingPage;



