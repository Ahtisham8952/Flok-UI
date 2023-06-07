import {
  Box,
  Flex,
  Text,
  Textarea,
  Checkbox,
  Button,
  input,
} from "@chakra-ui/react";
import React from "react";
import { Input } from "@chakra-ui/react";
import { Upload } from "../../../core/OrganizationLogin/Upload";

const EventsFormField = [
  {
    Text: "Date",
  },
  {
    Text: "Time",
  },
  {
    Text: "Price",
  },
  {
    Text: "Age Minimum",
  },
  {
    Text: "Age Maximum",
  },
  {
    Text: "Recuring Until",
  },
  {
    Text: "Registration Deadline",
  },
];
const OptionCheckBoxes = [
  {
    Text: "Is a Recurring event",
    checked: true,
  },
  {
    Text: "Time",
  },
  {
    Text: "Price",
  },
  {
    Text: "Age Minimum",
  },
  {
    Text: "Age Maximum",
  },
  {
    Text: "Recuring Until",
  },
  {
    Text: "Registration Deadline",
  },
];
const LanguagesCheckBoxes = [
  {
    Text: "English",
    checked: true,
  },
  {
    Text: "French",
  },
  {
    Text: "Dutch",
  },
  {
    Text: "German",
  },
  {
    Text: "Other",
  },
];

const StatusCheckBoxes = [
  {
    Text: "Is a Recurring event",
    checked: true,
  },
  {
    Text: "Draft",
  },
  {
    Text: "Publish",
  },
  {
    Text: "Archive",
  },
  {
    Text: "Private Listing / Invite only",
  },
];

const EventPageForm = () => {
  return (
    <Box>
      <Box
        maxW="995px"
        backgroundColor="#E0E0E0"
        margin="auto"
        px={{ base: "30px", md: "40px", lg: "50px" }}
        py="50px"
        my={{ base: "40px", md: "60px", lg: "120px" }}
        borderRadius="20px"
        width="100%"
      >
        <Box maxW={{ base: "100%", md: "50%" }} width="100%">
          <Flex justify="space-between" align="center">
            <Box fontSize={{ base: "13px", lg: "16px" }} fontWeight="700">
              Event banner imagre:
            </Box>
            <Box fontSize={{ base: "13px", lg: "16px" }} fontWeight="700">
              Upload Image:
            </Box>
            <Box>
              <Upload/>
            </Box>
          </Flex>
          <Flex align="center" justifyContent="space-between" my="50px">
            <Text fontSize={{ base: "13px", lg: "16px" }} fontWeight="700">
              Category
            </Text>
            <Input
              size="md"
              htmlSize="20"
              width="auto"
              bg="white"
              _focusVisible="none"
            />
          </Flex>
        </Box>
        <Box>
          <Flex justify="space-between" align="center">
            <Box fontSize={{ base: "13px", lg: "16px" }} fontWeight="700">
              Description:
            </Box>
            <Box fontSize={{ base: "13px", lg: "16px" }} fontWeight="700">
              Upload Image:
            </Box>
            <Box>
             <Upload/>
            </Box>
          </Flex>
          <Box>
            <Textarea
              bg="white"
              height="183px"
              my={{ base: "10px", sm: "10px", md: "15px", lg: "50px" }}
              _focusVisible="none"
              maxW="100%"
            />
          </Box>
        </Box>

        {EventsFormField.map((li, index) => (
          <Box key={index} maxW={{ base: "100%", md: "50%" }} width="100%">
            <Flex align="center" justifyContent="space-between" my="50px">
              <Text fontSize={{ base: "13px", lg: "16px" }} fontWeight="700">
                {li.Text}
              </Text>
              <Input
                size="md"
                htmlSize="20"
                width="auto"
                bg="white"
                _focusVisible="none"
              />
            </Flex>
          </Box>
        ))}
        <Box>
          <Text
            fontSize={{ base: "18px", lg: "24px" }}
            fontWeight="bold"
            mb="20px"
          >
            Option:
          </Text>

          {OptionCheckBoxes.map((li, index) => (
            <Box key={index}>
              <Checkbox defaultChecked={index === 0} mt="20px">
                <Text>{li.Text}</Text>
              </Checkbox>
            </Box>
          ))}
        </Box>
        <Box>
          <Text
            fontSize={{ base: "18px", lg: "24px" }}
            fontWeight="bold"
            mb="20px"
            mt="50px"
          >
            Languages Supported
          </Text>

          {LanguagesCheckBoxes.map((li, index) => (
            <Box key={index}>
              <Checkbox defaultChecked={index === 0} mt="20px">
                <Text>{li.Text}</Text>
              </Checkbox>
            </Box>
          ))}
        </Box>
        <Box>
          <Text
            fontSize={{ base: "18px", lg: "24px" }}
            fontWeight="bold"
            mb="20px"
            mt="50px"
          >
            Status:
          </Text>

          {StatusCheckBoxes.map((li, index) => (
            <Box key={index}>
              <Checkbox defaultChecked={index === 0} mt="20px">
                <Text>{li.Text}</Text>
              </Checkbox>
            </Box>
          ))}
        </Box>
        <Box>
          
          <Button display={"block"} wordBreak='break-all' w='100%'  bg="#1F1F1F" colorScheme={"#1F1F1F"} 
     color="#FFFFFF"
     fontSize={{base:'8px',lg:'14px'}}
     fontWeight="400"
     lineHeight={"150%"}
     p="8px 40px"
     borderRadius={"50px"}
     border="1px solid white"
     
     >
      <Text>
      Save Organization details (You will be able to edit these later)
      </Text>
   
     </Button>
        </Box>
        <Box mt='20px'>
         
          <Button w='100%'   bg="#1F1F1F" colorScheme={"#1F1F1F"} 
     color="#FFFFFF"
     fontSize={{base:'11px',lg:'14px'}}
     fontWeight="400"
     lineHeight={"150%"}
     p="8px 40px"
     borderRadius={"50px"}
     border="1px solid white"
     
     >
   Save and duplicate for another language
     </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default EventPageForm;
