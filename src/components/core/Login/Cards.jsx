import {
  Box,
  Flex,
  FormControl,
  Grid,
  GridItem,
  Image,
  Img,
  Input,
  InputGroup,
  InputLeftElement,
  Radio,
  RadioGroup,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

export const Cards = () => {
  return (
    <Box
      bgColor="#E0E0E0"
      px={{base:'15px',md:'20px',lg:'30px',xl:'40px'}}
      py={{base:'30px',md:'30px',lg:'30px',xl:'40px'}}
      width={{ base: "100%", md: "100%", lg: "40%" }}
      borderRadius="20px"
      height="70%"
    >
      <FormControl>
        <InputGroup bgColor="white" p={{base:'10px',lg:'23px'}} borderRadius="35">
          <Image alt="img" src="user.svg"/>
          <Input _focusVisible={{border:'none'}} type="Text" placeholder="Name" border="none" />
        </InputGroup>
        <InputGroup mt="20px" bgColor="white" p={{base:'10px',lg:'23px'}} borderRadius="35">
          <Image alt="img" src="calendar.svg" />
          <Input _focusVisible={{border:'none'}} type="Text" placeholder="Date" border="none" />
        </InputGroup>
      </FormControl>
      <Box>
        <Text
          fontWeight="700"
          fontSize="20px"
          fontStyle="bold"
          textColor="#67717D"
          pt="10px"
          mb="20px"
        >
          Gender?
        </Text>

        <Flex justifyContent={"space-between"} flexDirection={{base:'column',md:'row'}} gap="20px">
          <Box>
            <Stack>
              
              <RadioGroup name="form-name" display={"flex"} flexDirection={{base:'row',md:'column'}} gap="30px" >
      <Radio _checked={{border:"4px solid black"}} value="1" defaultChecked>
      Male
        </Radio>
        <Radio _checked={{border:"4px solid black"}} w="max-content" value="2">
          Female
        </Radio>
        <Radio _checked={{border:"4px solid black"}} w="max-content" value="3">
          other
        </Radio>
</RadioGroup>
              
            </Stack>
          </Box>
        
          <Box>
            <Image h={{base:'30px',md:'40px',lg:'60px'}} w={{base:'30px',md:'40px',lg:'60px'}} mx='auto' src="uploadpic.svg" alt="uploadpic" alignItem="center" />
            <Text textAlign={"center"} color="#67717D" fontSize="14px" fontWeight="300px">
              Add a Photo
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
