import { Box,Flex,Image,Text,Input } from '@chakra-ui/react'
import React from 'react'

const DashBoardHeader = () => {
  return (
    <Box px={{base:'10px',xxxl:'69px'}} py={{base:'60px',lg:'21px'}} borderBottom={"1px solid #E7E7E7"}>
    <Flex justifyContent={"space-between"} alignItems={{base:'flex-start',md:'center'}} flexDirection={{base:'column',md:'row'}} gap='10px' >
        <Box w='100%' maxW={{base:'285px',lg:'385px'}} h='66px' gap='33px' borderRadius={"10px"} border="1px solid #E7E7E7" bg="transparent" py="23px" pl='23px' pr='23px' display={"flex"} alignItems={"center"}>
            <Image alt="img" src='/searchions.svg'></Image>
            <Input py="0px" px='0px' border="none" _focusVisible={{border:'none'}} placeholder='Search or type command'></Input>

        </Box>
        <Box >
            <Flex alignItems={{base:'flex-start',md:'center'}} gap="28px" flexDirection={{base:'column',sm:'row'}}>
              <Flex  gap='28px'>
              <Box border="1px solid #E7E7E7" p={{base:'10px',xxxl:'21px'}} borderRadius={"10px"} >
                    <Image alt="img" src="/mesgnoti.svg"></Image>

                </Box>
                <Box border="1px solid #E7E7E7" p={{base:'10px',xxxl:'21px'}} borderRadius={"10px"} >
                    <Image alt="img" src="/notiiconcall.svg"></Image>

                </Box>
              </Flex>
                
                <Flex gap="12px" alignItems={"center"}>
                    <Image alt="img" src='/userimage.svg'></Image>
                    <Box>
                    <Text
    
    color="#191919"
    fontSize="16px"
    fontWeight="600"
    lineHeight={"150%"}
  >
Richard Hederson
  </Text>
  <Text
    
    color="#757575"
    fontSize="12px"
    fontWeight="500"
    lineHeight={"16px"}
  >
richardhederson@gmail.com
  </Text>
                    </Box>
                    <Image  alt="img" src='/droptipicon.svg'></Image>
                </Flex>
            </Flex>

        </Box>
        
    </Flex>
</Box>
  )
}

export default DashBoardHeader