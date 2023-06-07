import { Box, Button, Flex, Image, Text,Link } from '@chakra-ui/react'
import React from 'react'

const TemplateSliderCard = ({image,Name,TrxID,rediectPage}) => {
  return (
    <Box href={rediectPage}  mx={{base:'25px',md:'20px'}} as={Link}  textDecoration={"none"} >

   
   <Box bg="#FFFFFF"  >
   <Box mb="20px">
   <Image alt="img"w="100%" src={image}></Image>
   </Box>
  <Box p='20px'>
    <Flex justifyContent={"space-between"}>
    <Text
            mb='20px'
            color="#1F1F1F"
            fontSize="24px"
            fontWeight="700"
            lineHeight={"34px"}
          >
     Template 
          </Text>
          <Text
            mb='20px'
            color="#1F1F1F"
            fontSize="24px"
            fontWeight="700"
            lineHeight={"34px"}
          >
     {Name}
          </Text>
    </Flex>
    <Flex justifyContent={"center"} mt='30px'>
    <Button   bg="#1F1F1F" colorScheme={"#1F1F1F"} 
     color="#FFFFFF"
     fontSize="14px"
     fontWeight="400"
     lineHeight={"150%"}
     p="8px 40px"
     borderRadius={"50px"}
     border="1px solid white"
    
     >
     View
     </Button>
    </Flex>
  
          
  </Box>
    

   </Box>
   </Box>
  )
}

export default TemplateSliderCard