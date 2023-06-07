import { Box, Input, Text } from '@chakra-ui/react'
import React from 'react'

const CustomLabelInput = ({Label}) => {
  return (
   
    <Box w='100%' >
                <Text
                  fontSize={{ base: "14px", md: "16px", lg: "20px" }}
                  fontWeight="700"
                  lineHeight="35px"
                  mt="20px"
                >
                  {Label}
                </Text>
                <Input bg='#FFFFFF' placeholder="" size="lg" />
              </Box>

  
  )
}

export default CustomLabelInput