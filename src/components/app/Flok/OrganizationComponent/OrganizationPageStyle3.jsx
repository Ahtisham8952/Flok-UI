import { Box, Image, Heading, Center, Card, Text, Flex } from "@chakra-ui/react";
import React from "react";
import OrganizationCardStyle3 from "./OrganizationCardStyle3";
import LayoutWrapper from "../../../core/LayoutWrapper/LayoutWrapper";
import FlokSlider from "../LandingPage/FlokSlider"
const OrganizationPageStyle3 = () => {
  return (
    <LayoutWrapper>

  
    <Box maxW="1760px" width="100%" margin="auto" px="20px" py="20px">
      <Box>
        <Image  src="/roundbanner.png" alt="banner2"/>
      </Box>
      <Box>
        <Box
          mt="64px"
          textAlign="center"
          fontSize={{ base: "28px", md: "44px", lg: "64px" }}
          lineHeight={{ base: "44px", md: "54px", lg: "74px" }}
          fontWeight="700"
        >
          Little Fish Swimming LTD
        </Box>
      </Box>
      <Box>
        <Box
          mt="20px"
          color="black"
          textAlign="center"
          fontSize={{ base: "18px", md: "20px", lg: "20px" }}
        >
          We teach your little ones to love the water and give them confidence.
        </Box>
      </Box>
      <Box my="60px">
        <OrganizationCardStyle3 />
      </Box>
      <Box my='50px' pt='40px' borderTop={"1px solid #DAD9D9"}>

   
<Flex justifyContent={"center"} alignItems={"center"} mb='50px' >
<Text
    lineHeight={"42px"}
    fontSize={{base:'20px',md:'24px',lg:'32px'}}
    fontWeight={"600"}

    color="#1F1F1F"
    >
    Events from Little Fish

    </Text>

   
</Flex>
<FlokSlider/>
</Box>
    </Box>
    </LayoutWrapper>
  );
};

export default OrganizationPageStyle3;
