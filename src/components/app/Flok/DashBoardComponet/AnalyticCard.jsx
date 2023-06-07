import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const AnalyticCard = () => {
  return (
    <Box bg='white' >
        <Box position={"relative"}>
        <Image w='100%' alt="img" src="/wakandabanner.png"></Image>
        <Box position={"absolute"} top='20px' w='100%'>
<Flex px='24px' justifyContent={"space-between"} w='100%'>
    <Box bg="white"  p='8px 12px'  borderRadius={"10px"}>
    <Text
            
            color="#191919"
            fontSize="12px"
            fontWeight="600"
            lineHeight={"16px"}
          >
     $10,00
          </Text>
    </Box>
    <Box>
<Image alt="img" src="/hearicons.svg"></Image>
    </Box>
</Flex>
        </Box>
        </Box>
        
        <Box p="40px" border="1px solid #E7E7E7" borderTop={"none"} borderRadius={"10px"}>
            <Flex gap='28px'>
                <Box>
                <Text
            
            color="#1F1F1F"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"16px"}
          >
       DES
          </Text>
          <Text
            
            color="#1F1F1F"
            fontSize="24px"
            fontWeight="600"
            lineHeight={"150%"}
          >
      31 
          </Text>
                </Box>
                <Box>
                <Text
            
            color="#191919"
            fontSize="16px"
            fontWeight="600"
            lineHeight={"150%"}
            
          >
     Black Panther : Wakanda Forever
          </Text>
          <Text
          
            color="#757575"
            fontSize="16px"
            fontWeight="500"
            lineHeight={"150%"}
          >
     Beachwalk XXI Cineplex
          </Text>
                </Box>
            </Flex>

        </Box>
        


    </Box>
  )
}

export default AnalyticCard