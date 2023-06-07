import {
  Box,
  Checkbox,
  Flex,
  FormControl,
  Image,
  Input,
  InputGroup,
  Radio,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

export const Cardcontact = () => {
  return (
    <Box
      bgColor="#E0E0E0"
      p={{base:'15px',md:'20px',lg:'30px',xl:'40px'}}
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
          pt="40px"
          mb='20px'
        >
          Options
        </Text>

        <Flex>
          <Box>
            <Stack>
              <Checkbox size="md" borderColor={"black"} >
                Primary contact
              </Checkbox>
              <Checkbox size="md" borderColor={"black"} >
                Primary contact
              </Checkbox>
              <Checkbox size="md"  borderColor={"black"}>
                Parent or guardian{" "}
              </Checkbox>
              <Checkbox size="md" borderColor={"black"} >
                Parent or guardian{" "}
              </Checkbox>
              <Checkbox size="md" borderColor={"black"} >
                Email notifications{" "}
              </Checkbox>
              <Checkbox size="md" borderColor={"black"} >
                Instant notifications{" "}
              </Checkbox>
              <Checkbox size="md" borderColor={"black"} >
                Emegency contact{" "}
              </Checkbox>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
