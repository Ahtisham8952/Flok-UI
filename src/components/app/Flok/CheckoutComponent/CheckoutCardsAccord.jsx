import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, Image, Input, Radio, Text } from '@chakra-ui/react'
import React from 'react'
import CustomLabelInput from './CustomLabelInput'

const CheckoutCardsAccord = () => {
  return (
    <Accordion maxW="800px" defaultIndex={[0]}>
                <AccordionItem bg='#FFFFFF' border="1px solid rgba(0, 0, 0, 0.13)" borderRadius={"10px"}>
                  
                    <AccordionButton p='24px' justifyContent={"space-between"} w='100%'>
                      <Box display={"flex"} textAlign="left">
                        <Radio value="radio1" marginRight="1rem" defaultChecked  color="#191919"
            fontSize="20px"
            fontWeight="600"
            lineHeight={"150%"}>
                        Credit Card
                        </Radio>
                       
                      </Box>
                    <Image alt='Here' src='/visacrdicon.svg'></Image>
                    </AccordionButton>
               
                  <AccordionPanel pb={8}>
                  <CustomLabelInput Label='Name on card'/>
                    <Flex justifyContent="space-between" gap='24px'>
                    <CustomLabelInput Label='Card Number'/>
                    <CustomLabelInput Label='Expiry Date'/>
                    </Flex>
                    <Flex justifyContent="space-between" gap="24px" >
                    <CustomLabelInput Label='Card Holder'/>
                    <CustomLabelInput Label='Card CVC'/>
                    </Flex>
                  </AccordionPanel>
                </AccordionItem>
  
                <AccordionItem bg='#FFFFFF' mt='30px' border="1px solid rgba(0, 0, 0, 0.13)" borderRadius={"10px"}>
                  
                <AccordionButton p='24px' justifyContent={"space-between"} w='100%'
                color="#191919"
                fontSize="20px"
                fontWeight="600"
                lineHeight={"150%"}>
                      <Box display={"flex"} textAlign="left">
                        <Radio value="radio2" marginRight="1rem"  >
                       PayPal
                        </Radio>
                       
                      </Box>
                    <Image alt='Here' src='/iconopaypal.svg'></Image>
                    </AccordionButton>
             
                <AccordionPanel pb={8}>
                <CustomLabelInput Label='Name on card'/>
                  <Flex justifyContent="space-between" gap='24px'>
                  <CustomLabelInput Label='Card Number'/>
                  <CustomLabelInput Label='Expiry Date'/>
                  </Flex>
                  <Flex justifyContent="space-between" gap="24px" >
                  <CustomLabelInput Label='Card Holder'/>
                  <CustomLabelInput Label='Card CVC'/>
                  </Flex>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem bg='#FFFFFF' mt='30px' border="1px solid rgba(0, 0, 0, 0.13)" borderRadius={"10px"}>
                  
                  <AccordionButton p='24px' justifyContent={"space-between"} w='100%'
                  color="#191919"
                  fontSize="20px"
                  fontWeight="600"
                  lineHeight={"150%"}>
                        <Box display={"flex"} textAlign="left">
                          <Radio value="radio2" marginRight="1rem"   >
                        Visa
                          </Radio>
                         
                        </Box>
                      <Image alt='Here' src='/vispicon.svg'></Image>
                      </AccordionButton>
               
                  <AccordionPanel pb={8}>
                  <CustomLabelInput Label='Name on card'/>
                    <Flex justifyContent="space-between" gap='24px'>
                    <CustomLabelInput Label='Card Number'/>
                    <CustomLabelInput Label='Expiry Date'/>
                    </Flex>
                    <Flex justifyContent="space-between" gap="24px" >
                    <CustomLabelInput Label='Card Holder'/>
                    <CustomLabelInput Label='Card CVC'/>
                    </Flex>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
  )
}

export default CheckoutCardsAccord