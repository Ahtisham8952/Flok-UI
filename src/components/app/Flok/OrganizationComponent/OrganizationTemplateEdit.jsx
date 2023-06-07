import {
    Box,
    Button,
    Divider,
    FormControl,
    Image,
    Img,
    Input,
    InputGroup,
    Text,
  } from "@chakra-ui/react";
  import React from "react";
 
  
  export const OrganizationTemplateEdit = () => {
    return (
      <Box px="10px" py="5px">
        <Box maxW="1844px" margin="auto">
          <Box
            border="1px"
            borderWidth="5px"
            borderColor="#2E2E2E"
            height="457px"
            borderRadius="10px"
            display="flex"
            justifyContent="center"
            alignSelf="center"
            alignItems="center"
          >
            <Text
              fontSize="32px"
              fontWeight="700px"
              lineHeight="42px"
              textColor="#2E2E2E"
            >
              Add Cover Photo
            </Text>
          </Box>
        </Box>
  
        <Divider
          mt="40px"
          orientation="horizontal"
          borderWidth="1px"
          color="#DAD9D9"
        />
        <Box maxW="1480px" margin="auto" p="20px">
          <Box
            display="flex"
            flexDirection={{ base: "column", md: "column", lg: "row", xl: "row" }}
          >
            <Box width={{ base: "100%", md: "100%", lg: "40%" }}>
              <Text
                fontSize={{ base: "20", md: "20", lg: "24" }}
                fontWeight="700"
                pb="10"
                pt="10"
                textColor="#1F1F1F"
              >
                Organization Name
              </Text>
              <Box bgColor="#E0E0E0" p="40px" borderRadius="20px" height="70%">
                <FormControl>
                  <InputGroup bgColor="white" p="4" borderRadius="35">
                    <Input
                      type="Text"
                      placeholder="Add Title Name"
                      border="none"
                    />
                  </InputGroup>
                  <InputGroup mt="20px" bgColor="white" p="4" borderRadius="35">
                    <Input type="Text" placeholder="Add Slogan" border="none" />
                  </InputGroup>
                </FormControl>
              </Box>
            </Box>
          </Box>
          <Box mt="40px">
          <Button  bg="#1F1F1F" colorScheme={"#1F1F1F"} 
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
          <Divider
            mt="40px"
            orientation="horizontal"
            borderWidth="1px"
            color="#DAD9D9"
          />
          <Text
            fontSize={{ base: "20px", md: "20px", lg: "24px" }}
            fontWeight="700"
            pb="10"
            pt="10"
            textColor="#1F1F1F"
          >
            Add Organization details
          </Text>
          <Box
            display="flex"
            flexDirection={{ base: "column", md: "column", lg: "row" }}
            justifyContent="center"
            columnGap={{ lg: "70px", xl: "70px" }}
            gap={{ base: "10px", md: "10px" }}
          >
            <Box
              bgColor="#E0E0E0"
              p="40px"
              borderRadius="20px"
              width="45%"
              height="50%"
            >
              <FormControl>
                <InputGroup bgColor="white" p="4" borderRadius="35">
                  <Input type="Text" placeholder="Name" border="none" />
                </InputGroup>
                <InputGroup mt="20px" bgColor="white" p="4" borderRadius="35">
                  <Input type="Text" placeholder="Description" border="none" />
                </InputGroup>
                <InputGroup
                  mt="20px"
                  bgColor="white"
                  p="4"
                  borderRadius="35"
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
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
  
            <Box
              bgColor="#E0E0E0"
              p="40px"
              borderRadius="20px"
              width="45%"
              height="50%"
            >
              <FormControl>
                <InputGroup bgColor="white" p="4" borderRadius="35">
                  <Input type="Text" placeholder="Name" border="none" />
                </InputGroup>
                <InputGroup mt="20px" bgColor="white" p="4" borderRadius="35">
                  <Input type="Text" placeholder="Date" border="none" />
                </InputGroup>
                <InputGroup
                  mt="20px"
                  bgColor="white"
                  p="4"
                  borderRadius="35"
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
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
          </Box>
          <Box
            display="flex"
            flexDirection={{ base: "column", md: "column", lg: "row" }}
            justifyContent="center"
            columnGap={{ lg: "70px", xl: "70px" }}
            gap={{ base: "10px", md: "10px" }}
            mt={{ base: "20px", md: "20px", lg: "50px" }}
          >
            <Box
              bgColor="#E0E0E0"
              p="40px"
              borderRadius="20px"
              width="45%"
              height="50%"
            >
              <FormControl>
                <InputGroup bgColor="white" p="4" borderRadius="35">
                  <Image src="user.svg"/>
                  <Input type="Text" placeholder="Name" border="none" />
                </InputGroup>
                <InputGroup mt="20px" bgColor="white" p="4" borderRadius="35">
                  <Image src="calendar.svg" />
                  <Input type="Text" placeholder="Date" border="none" />
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
  
            <Box
              bgColor="#E0E0E0"
              p="40px"
              borderRadius="20px"
              width="45%"
              height="50%"
            >
              <FormControl>
                <InputGroup bgColor="white" p="4" borderRadius="35">
                  <Image src="user.svg"/>
                  <Input type="Text" placeholder="Name" border="none" />
                </InputGroup>
                <InputGroup mt="20px" bgColor="white" p="4" borderRadius="35">
                  <Image src="calendar.svg" />
                  <Input type="Text" placeholder="Date" border="none" />
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
          </Box>
          <Divider
            mt="40px"
            orientation="horizontal"
            borderWidth="1px"
            color="#DAD9D9"
          />
          <Box
            display="flex"
            flexDirection="row"
            alignContent="center"
            alignItems="center"
            justifyContent="space-between"
            mt="20px"
          >
            <Text
              fontSize={{ base: "20", md: "20", lg: "24" }}
              fontWeight="700px"
              pb="10px"
              pt="10px"
              textColor="#1F1F1F"
            >
              Active Orders
            </Text>
            <Button  bg="#1F1F1F" colorScheme={"#1F1F1F"} 
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
          </Box>
        </Box>
      </Box>
    );
  };
  