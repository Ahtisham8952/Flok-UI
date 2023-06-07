import {
    Box,
    Button,
    Checkbox,
    Divider,
    Flex,
    FormControl,
    Image,
    Input,
    InputGroup,
    Stack,
    Text,
    Link,
  } from "@chakra-ui/react";
  import React from "react";
import LayoutWrapper from "../../../core/LayoutWrapper/LayoutWrapper";
  import FlokSlider from "../LandingPage/FlokSlider"
import TemplateSlider from "./TemplateSlider";
  
  export const OrganizationProfile = () => {
    return (
      <LayoutWrapper>

      
      <Box py='30px' maxW={"1760px"} px='20px' mx="auto">
        <Flex justifyContent={"center"} alignItems={"center"}>
        <Text
            
            color="#191919"
            fontSize={{base:'30px',md:'45px',xl:'55px',xxxl:'64px'}}
            fontWeight="600"
            lineHeight={"150%"}
          >
       Organization Profile
          </Text>
        </Flex>
        <Flex
          alignItems={{ base: "flex-start", lg: "center" }}
          gap="4%"
          pt="40px"
          flexDirection={{ base: "column", lg: "row" }}
        >
          <Flex>
            <Text fontSize={{base:'18px',md:'20px',xl:'24px'}} fontWeight="700" lineHeight="34px">
              Select Interested categories
            </Text>
          </Flex>
          <Flex gap="12%" flexWrap={{ base: "wrap", md: "nowrap" }}>
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
          pt="35"
          textAlign={{
            base: "center",
            md: "center",
            lg: "start",
            xl: "start",
            "2xl": "start",
          }}
        >
         
          <Divider
            mt="40px"
            orientation="horizontal"
            borderWidth="1px"
            color="#DAD9D9"
          />
        </Box>
        <Box
          display="flex"
          flexDirection={{ base: "column", md: "column", lg: "row" }}
          alignSelf="center"
          gap="10"
        >
          <Box width={{ base: "100%", md: "100%", lg: "40%" }}>
            <Text
              fontSize={{ base: "20", md: "20", lg: "24" }}
              fontWeight="700"
              pb="10"
              pt="10"
              textColor="#67717D"
            >
             Organization details
            </Text>
            <Box bgColor="#E0E0E0" p="40px" borderRadius="20px" height="80%">
              <FormControl>
                <InputGroup bgColor="white" p="4" borderRadius="35">
                  <Image alt="img" src="user.svg"/>
                  <Input _focusVisible={{border:'none'}} type="Text" placeholder="Name" border="none" />
                </InputGroup>
                <InputGroup mt="20px" bgColor="white" p="4" borderRadius="35">
                  <Image  alt="img" src="calendar.svg" />
                  <Input  _focusVisible={{border:'none'}} type="Text" placeholder="Date" border="none" />
                </InputGroup>
                <InputGroup
                  mt="20px"
                  bgColor="white"
                  p="4"
                  borderRadius="35"
                  display="flex"
                  flexDirection="column"
                >
                  <Image
                    src="uploadpic.svg"
                    alt="uploadpic"
                    alignItem="center"
                    height="20"
                    width="20"
                  />
                  <Text color="#67717D" fontSize="14px" fontWeight="300">
                    Add a Photo
                  </Text>
                </InputGroup>
              </FormControl>
            </Box>
            <Button my='44px' bg="#1F1F1F" colorScheme={"#1F1F1F"} 
     color="#FFFFFF"
     fontSize="14px"
     fontWeight="400"
     lineHeight={"150%"}
     p="8px 40px"
     borderRadius={"50px"}
     border="1px solid white"
     
     >
     Update
     </Button>
          </Box>
  
          <Box mt={{ base: "0", md: "0", lg: "55" }}>
            <Text
              fontWeight="700"
              fontSize="20px"
              fontStyle="bold"
              textColor="#67717D"
              pt={{ base: "5", md: "5", lg: "14" }}
            >
              Options
            </Text>
  
            <Box mt="5">
              <Stack gap="5">
                <Checkbox size="md" borderColor={"black"} >
                  Primary contact
                </Checkbox>
                <Checkbox size="md" borderColor={"black"} >
                  Primary contact
                </Checkbox>
                <Checkbox size="md"  defaultChecked>
                  Parent or guardian{" "}
                </Checkbox>
                <Checkbox size="md"  defaultChecked>
                  Parent or guardian{" "}
                </Checkbox> 
                <Checkbox size="md" borderColor={"black"} >
                  Email notifications{" "}
                </Checkbox>
                <Checkbox size="md" borderColor={"black"} >
                  Instant notifications{" "}
                </Checkbox>
                <Checkbox size="md"  borderColor={"black"}>
                  Emegency contact{" "}
                </Checkbox>
              </Stack>
            </Box>
          </Box>
        </Box>
        <Box
          pt="35"
          textAlign={{
            base: "center",
            md: "center",
            lg: "start",
            xl: "start",
            "2xl": "start",
          }}
        >
        
        
          <Divider
            mt="40px"
            orientation="horizontal"
            borderWidth="1px"
            color="#DAD9D9"
          />
        </Box>
        <Box mt="37px">
          
        
    <Box mb='50px'>

   
<Flex justifyContent={"space-between"} alignItems={"flex-start"} mb='50px'>
<Text
    lineHeight={"42px"}
    fontSize={"32px"}
    fontWeight={"600"}

    color="#1F1F1F"
    >
    Organization Page

    </Text>
    <Button as={Link} href="/editorganizationpage"  bg="#1F1F1F" colorScheme={"#1F1F1F"} 
     color="#FFFFFF"
     fontSize="14px"
     fontWeight="400"
     lineHeight={"150%"}
     p="8px 40px"
     borderRadius={"50px"}
     border="1px solid white"
    
     >
     Create Page
     </Button>

   
</Flex>
<TemplateSlider/>
</Box>
          
        </Box>
        <Box mt="37px">
          
          <Box mb='50px'>

   
          <Flex justifyContent={"space-between"} alignItems={"flex-start"} mb='50px'>
<Text
    lineHeight={"42px"}
    fontSize={"32px"}
    fontWeight={"600"}

    color="#1F1F1F"
    >
    Organization Page

    </Text>
    <Button as={Link} href="/createevent"  bg="#1F1F1F" colorScheme={"#1F1F1F"} 
     color="#FFFFFF"
     fontSize="14px"
     fontWeight="400"
     lineHeight={"150%"}
     p="8px 40px"
     borderRadius={"50px"}
     border="1px solid white"
    
     >
     Create Event
     </Button>

   
</Flex>
    <FlokSlider/>
    </Box>
          
        </Box>
        <Box mt="37px">
          
          <Box mb='50px'>

   
    <Flex justifyContent={"flex-start"} alignItems={"flex-start"} mb='50px'>
    <Text
        lineHeight={"42px"}
        fontSize={"32px"}
        fontWeight={"600"}
    
        color="#1F1F1F"
        >
      Event History
        </Text>

       
    </Flex>
    <FlokSlider/>
    </Box>
          
        </Box>
      </Box>
      </LayoutWrapper>
    );
  };
  