import {
  Box,
  Checkbox,
  Divider,
  Flex,
  FormControl,
  Image,
  Input,
  InputGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import LayoutWrapper from "../../../core/LayoutWrapper/LayoutWrapper";
import FlokSlider from "../LandingPage/FlokSlider"

export const ParentProfile = () => {
  return (
    <LayoutWrapper>


      <Box py='30px' maxW={"1760px"} px='20px' mx="auto">
        <Flex justifyContent={"center"} alignItems={"center"}>
          <Text

            color="#191919"
            fontSize={{ base: '40px', md: '45px', xl: '55px', xxxl: '64px' }}
            fontWeight="600"
            lineHeight={"150%"}
          >
            User Profile
          </Text>
        </Flex>
        <Flex
          alignItems={{ base: "flex-start", lg: "center" }}
          gap="4%"
          pt="40"
          flexDirection={{ base: "column", lg: "row" }}
        >
          <Flex>
            <Text fontSize={{ base: '18px', md: '20px', xl: '24px' }} fontWeight="700" lineHeight="34px">
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
              Parent details
            </Text>
            <Box bgColor="#E0E0E0" p="40px" borderRadius="20px" height="80%">
              <FormControl>
                <InputGroup bgColor="white" p="4" borderRadius="35">
                  <Image alt="img" src="user.svg" />
                  <Input _focusVisible={{ border: 'none' }} type="Text" placeholder="Name" border="none" />
                </InputGroup>
                <InputGroup mt="20px" bgColor="white" p="4" borderRadius="35">
                  <Image alt="img" src="calendar.svg" />
                  <Input _focusVisible={{ border: 'none' }} type="Text" placeholder="Date" border="none" />
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
                <Checkbox size="md" borderColor={"black"}>
                  Primary contact
                </Checkbox>
                <Checkbox size="md" borderColor={"black"}>
                  Primary contact
                </Checkbox>
                <Checkbox size="md" defaultChecked borderColor={"black"}>
                  Parent or guardian{" "}
                </Checkbox>
                <Checkbox size="md" defaultChecked borderColor={"black"}>
                  Parent or guardian{" "}
                </Checkbox>
                <Checkbox size="md" borderColor={"black"} >
                  Email notifications{" "}
                </Checkbox>
                <Checkbox size="md" borderColor={"black"}>
                  Instant notifications{" "}
                </Checkbox>
                <Checkbox size="md" borderColor={"black"} >
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


            <Flex justifyContent={"flex-start"} alignItems={"flex-start"} mb='50px'>
              <Text
                lineHeight={"42px"}
                fontSize={"32px"}
                fontWeight={"600"}

                color="#1F1F1F"
              >
                Waiting lists

              </Text>


            </Flex>
            <FlokSlider />
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
                Active Orders
              </Text>


            </Flex>
            <FlokSlider />
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
                Orders History
              </Text>


            </Flex>
            <FlokSlider />
          </Box>

        </Box>
      </Box>
    </LayoutWrapper>
  );
};
