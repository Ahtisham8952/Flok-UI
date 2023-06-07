import { Box, Button, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import FlokSlider from "./FlokSlider"
const ChartTabContent = () => {
  // Component logic here
  return (
   <Box>
    <Box mb='50px'>

   
    <Flex justifyContent={"center"} alignItems={"center"} mb='50px'>
    <Text
        lineHeight={"42px"}
        fontSize={"32px"}
        fontWeight={"600"}
    
        color="#1F1F1F"
        >
          Popular

        </Text>

       
    </Flex>
    <FlokSlider/>
    </Box>
    <Box mb='50px'>

   
    <Flex justifyContent={"center"} alignItems={"center"} mb='50px'>
    <Text
        lineHeight={"42px"}
        fontSize={"32px"}
        fontWeight={"600"}
    
        color="#1F1F1F"
        >
         Outdoor

        </Text>

       
    </Flex>
    <FlokSlider/>
    </Box>
    <Box mb='50px'>

   
    <Flex justifyContent={"center"} alignItems={"center"} mb='50px'>
    <Text
        lineHeight={"42px"}
        fontSize={"32px"}
        fontWeight={"600"}
    
        color="#1F1F1F"
        >
        Indoor

        </Text>

       
    </Flex>
    <FlokSlider/>
    </Box>
    <Box mb='50px'>

   
    <Flex justifyContent={"center"} alignItems={"center"} mb='50px'>
    <Text
        lineHeight={"42px"}
        fontSize={"32px"}
        fontWeight={"600"}
    
        color="#1F1F1F"
        >
        This Weekend

        </Text>

       
    </Flex>
    <FlokSlider/>
    </Box>
    <Box mb='50px'>

   
    <Flex justifyContent={"center"} alignItems={"center"} mb='50px'>
    <Text
        lineHeight={"42px"}
        fontSize={"32px"}
        fontWeight={"600"}
    
        color="#1F1F1F"
        >
        Free

        </Text>

       
    </Flex>
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

export default ChartTabContent;