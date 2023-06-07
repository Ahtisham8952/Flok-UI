import {
    Box,
    Button,
    Divider,
    Flex,
    Heading,
    Image,
    Text,
    Wrap,
    Link
  } from "@chakra-ui/react";
  import React from "react";

  import { Cards } from "../Login/Cards";
  import { Cardcontact } from "../Login/Cardcontact";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
  
  const LoginStepTwo = () => {
    return (
      <LayoutWrapper>

    
      <Box p="30px">
        <Box>
          <Heading
            as="h2"
            fontSize={{ base: "24px", md: "40px", lg: "40px" }}
            fontWeight="700"
            lineHeight="58px"
            pt="5px"
            pb="15px"
            textAlign="center"
          >
            Thanks For Joining Flok
          </Heading>
          <Text
            fontWeight="300"
            fontSize="16px"
            lineHeight="25px "
            pt="5px"
            pr="30px"
            textAlign="center"
          >
            Would you like to customise your experience?
          </Text>
        </Box>
        <Flex
          alignItems={{ base: "flex-start", lg: "center" }}
          gap="30px"
          pt="90px"
          flexDirection={{ base: "column", lg: "row" }}
        >
          <Flex>
            <Text fontSize={{base:'20px',md:'24px'}} fontWeight="700" lineHeight="34px">
              Select Interested categories
            </Text>
          </Flex>
          <Flex gap="40px" flexWrap={{ base: "wrap", md: "nowrap" }}>
            <Text
              fontSize="18px"
              fontWeight="700"
              color="#B3B8BE"
              lineHeight="26px"
            >
              Dance
            </Text>
            <Text
              fontSize="18px"
              fontWeight="700"
              color="#B3B8BE"
              lineHeight="26px"
            >
              Music
            </Text>
            <Text
              fontSize="18px"
              fontWeight="700"
              color="#B3B8BE"
              lineHeight="26px"
            >
              Language
            </Text>
            <Text
              fontSize="18px"
              fontWeight="700"
              color="#B3B8BE"
              lineHeight="26px"
            >
              Chess
            </Text>
            <Text
              fontSize="18px"
              fontWeight="700"
              color="#B3B8BE"
              lineHeight="26px"
            >
              Reading
            </Text>
            <Text
              fontSize="18px"
              fontWeight="700"
              color="#B3B8BE"
              lineHeight="26px"
            >
              Advanture
            </Text>
          </Flex>
        </Flex>
        <Box
          pt="35px"
          textAlign={{
            base: "center",
            md: "center",
            lg: "start",
            xl: "start",
            "2xl": "start",
          }}
        >
        <Button type="submit" bg="#1F1F1F" colorScheme={"#1F1F1F"} 
     color="#FFFFFF"
     fontSize="14px"
     fontWeight="400"
     lineHeight={"150%"}
     p="8px 40px"
     borderRadius={"50px"}
     border="1px solid white"
     
     >
     Save interests
     </Button>
        </Box>
        <Divider
          mt="40px"
          orientation="horizontal"
          borderWidth="1px"
          color="#DAD9D9"
        />
        <Heading
          as="h2"
          fontSize={{ base: "20px", md: "20px", lg: "24px" }}
          fontWeight="700"
          lineHeight="58px"
          pt="5px"
          pb="15px"
          textAlign="center"
          textColor="#67717D"
        >
          Add children?
        </Heading>
        <Box
          display="flex"
          flexDirection={{ base: "column", md: "column", lg: "row" }}
          gap={{ base: "3", md: "3", lg: "5" }}
          justifyContent="center"
        >
          <Cards />
          <Cards />
        </Box>
        <Box
          bg="#1F1F1F"
          display="flex"
          justifyContent="center"
          borderRadius="40px"
          p={{ base: "2", md: "2", lg: "5" }}
          width={{ base: "10%", md: "4%", lg: "5%" }}
          alignContent="center"
          mx="auto"
          mt="-21"
          position="relative"
          zIndex="5"
        >
          <Image src="plus.svg" alt="plus.svg" />
        </Box>
        <Box textAlign="center" pt="10">
        <Button type="submit" bg="#1F1F1F" colorScheme={"#1F1F1F"} 
     color="#FFFFFF"
     fontSize="14px"
     fontWeight="400"
     lineHeight={"150%"}
     p="8px 40px"
     borderRadius={"50px"}
     border="1px solid white"
     
     >
    Save Children
     </Button>
          <Divider
            mt="40px"
            orientation="horizontal"
            borderWidth="1px"
            color="#DAD9D9"
          />
        </Box>
        <Heading
          as="h2"
          fontSize={{ base: "20px", md: "20px", lg: "24px" }}
          fontWeight="700"
          lineHeight="58px"
          pt="5px"
          pb="15px"
          textAlign="center"
          textColor="#67717D"
        >
         Contacts
          </Heading>
        <Box
          display="flex"
          flexDirection={{ base: "column", md: "column", lg: "row" }}
          gap={{ base: "3", md: "3", lg: "5" }}
          justifyContent="center"
          pt="10"
        >
          <Cardcontact />
          <Cardcontact />
        </Box>
        <Box
          bg="#1F1F1F"
          display="flex"
          justifyContent="center"
          borderRadius="40"
          p={{ base: "2", md: "2", lg: "5" }}
          width={{ base: "10%", md: "4%", lg: "5%" }}
          alignContent="center"
          mx="auto"
          mt="-21"
          position="relative"
          zIndex="5"
        >
          <Image  src="plus.svg" alt="plus.svg" />
        </Box>
        <Box textAlign="center" pt="10">
        <Button as={Link} href="/userprofile" type="submit" bg="#1F1F1F" colorScheme={"#1F1F1F"} 
     color="#FFFFFF"
     fontSize="14px"
     fontWeight="400"
     lineHeight={"150%"}
     p="8px 40px"
     borderRadius={"50px"}
     border="1px solid white"
     
     >
    Save Children
     </Button>
        </Box>
      </Box>
      </LayoutWrapper>
    );
  };
  export default LoginStepTwo;
  