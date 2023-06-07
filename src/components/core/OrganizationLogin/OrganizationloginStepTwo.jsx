import {
    Box,
    Button,
    Checkbox,
    Heading,
    Input,
    InputGroup,
    Stack,
    Text,
    Textarea,
  } from "@chakra-ui/react";
  import React from "react";
import { Upload } from "./Upload";

 
  
  export const OrganizationloginStepTwo = ({seeProfile}) => {
    return (
      <Box p="30px">
        <Heading
          as="h2"
          fontSize={{ base: "40px", md: "40px", lg: "70px" }}
          fontWeight="700"
          lineHeight={{ base: "50px", md: "50px", lg: "74px" }}
          textAlign="center"
          pt="5px"
          pb="15px"
        >
          Welcome to Flok for oganizations{" "}
        </Heading>
        <Heading
          as="h2"
          fontSize={{ base: "40px", md: "40px", lg: "70px" }}
          fontWeight="700"
          lineHeight={{ base: "50px", md: "50px", lg: "74px" }}
          textAlign="center"
          pt="5px"
          pb="15px"
        >
          Step #2 of 2
        </Heading>
        <Box textAlign="center">
          <Text fontSize="17px" fontWeight="300" lineHeight="27px">
            Welcome to Flok for oganizations
          </Text>
          <Box maxW="556px" margin="auto">
            <Text fontSize="17px" fontWeight="300" lineHeight="27px">
              The process is simple, first tell us about your organization and
              once we verify you, you will be able to go live with your events.
              The hole process normally takes xx hours.
            </Text>
          </Box>
        </Box>
        <Box display="flex" justifyContent="center" mt="20px" flexDirection="row">
          <Box
            bgColor="#E0E0E0"
            p={{ base: "20px", md: "20px", lg: "40px" }}
            borderRadius="20px"
            width={{ base: "100%", md: "100%", lg: "60%", xl: "60%" }}
          >
            <Box display="flex" maxW="400px" justifyContent="space-between">
              <Text
                fontSize="13px"
                fontWeight="300"
                lineHeight="20px"
                textColor="#626262
  "
              >
                Organization banner imagre:{" "}
              </Text>
              <Text
                fontSize="13px"
                fontWeight="300"
                lineHeight="20px"
                textColor="#626262"
              >
                Upload Image:{" "}
              </Text>
              <Upload />
            </Box>
            <Box
              display="flex"
              maxW="400px"
              justifyContent="space-between"
              mt="30px"
            >
              <Text
                fontSize="13px"
                fontWeight="300"
                lineHeight="20px"
                textColor="#626262
  "
              >
                Your mission statement:{" "}
              </Text>
              <Text
                fontSize="13px"
                fontWeight="300"
                lineHeight="20px"
                textColor="#626262"
              >
                Upload Image:{" "}
              </Text>
              <Upload />
            </Box>
            <InputGroup
              mt="20px"
              bgColor="white"
              p={{ base: "0px", md: "0px", lg: "10px" }}
              borderRadius="10px"
              height="120px"
            >
              <Textarea resize={"none"} _focusVisible={{border:'none'}} type="Text" placeholder="Text" border="none" />{" "}
            </InputGroup>
            <Box
              display="flex"
              maxW="400px"
              justifyContent="space-between"
              mt="30px"
            >
              <Text
                fontSize="13px"
                fontWeight="300"
                lineHeight="20px"
                textColor="#626262
  "
              >
                About you:{" "}
              </Text>
              <Text
                fontSize="13px"
                fontWeight="300"
                lineHeight="20px"
                textColor="#626262"
              >
                Upload Image:{" "}
              </Text>
              <Upload />
            </Box>
            <InputGroup
              mt="20px"
              bgColor="white"
              p={{ base: "0px", md: "0px", lg: "10px" }}
              borderRadius="10px"
              height="120px"
            >
              <Textarea resize={"none"} _focusVisible={{border:'none'}} type="Text" placeholder="Text" border="none" />{" "}
            </InputGroup>
            <Box
              display="flex"
              maxW="400px"
              justifyContent="space-between"
              mt="30px"
            >
              <Text
                fontSize="13px"
                fontWeight="300"
                lineHeight="20px"
                textColor="#626262
  "
              >
                Staff details:{" "}
              </Text>
              <Text
                fontSize="13px"
                fontWeight="300"
                lineHeight="20px"
                textColor="#626262"
              >
                Upload Image:{" "}
              </Text>
              <Upload />
            </Box>
            <InputGroup
              mt="20px"
              bgColor="white"
              p={{ base: "0px", md: "0px", lg: "10px" }}
              borderRadius="10px"
              height="120px"
            >
              <Textarea resize={"none"} _focusVisible={{border:'none'}} type="Text" placeholder="Text" border="none" />{" "}
            </InputGroup>
            <Box>
              <Text
                fontWeight="700"
                fontSize="20px"
                textColor="##1F1F1F"
                pt={{ base: "5", md: "5", lg: "14" }}
              >
                Options:
              </Text>
  
              <Box mt="5">
                <Stack gap="5px">
                  <Checkbox size="md" borderColor={"black"} >
                  Show Mission statment
                  </Checkbox>
                  <Checkbox size="md" borderColor={"black"} >
                  Show About you
                  </Checkbox>
                  <Checkbox size="md"  borderColor={"black"}>
                  Show Organization details
                  </Checkbox>
                  <Checkbox size="md"  defaultChecked borderColor={"black"}>
                  Show staff deails
                  </Checkbox>
                  <Checkbox size="md" borderColor={"black"} >
                  Handicapt friendly
                  </Checkbox>
                  
                </Stack>
              </Box>
            </Box>
            <Box pt="25px">
          <Box mt='30px'  bg="#1F1F1F" colorScheme={"#1F1F1F"} 
     color="#FFFFFF"
     fontSize={{base:'11px',md:'14px'}}
     fontWeight="400"
     lineHeight={"150%"}
     p="8px 40px"
     borderRadius={"50px"}
     border="1px solid white"
     w='100%'
     onClick={seeProfile}
     
     >
   Save Oraganization details  (You will be able to edit to these later)
     </Box>
          </Box>
          </Box>
          
        </Box>
        
      </Box>
    );
  };
  