import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import PaginationButton from "./PaginationButton";

const InformationBox = ({ DashboardData }) => {
  return (
    <>
      {DashboardData.map((info, Index) => (
        <Box key={Index} bg="#FFFFFF" py="24px" px="30px" mb="30px">
          <Box maxW={"1159px"} w="100%">
            <Flex
              gap="30px"
              flexDirection={{ base: "column", md: "row" }}
              alignItems={"center"}
            >
              <Box w="20%">
                <Image src={info.Image}></Image>
              </Box>
              <Box w="80%">
                <Flex justifyContent={"space-between"}>
                  <Text
                    color={"#1F1F1F"}
                    fontSize="20px"
                    fontWeight="300"
                    lineHeight={"25px"}
                  >
                    {info.Name}
                  </Text>
                  <Text
                    color={"#1F1F1F"}
                    fontSize="20px"
                    fontWeight="700"
                    lineHeight={"25px"}
                  >
                    Event title
                  </Text>
                </Flex>
                <Flex justifyContent={"space-between"}>
                  <Text
                    color={"#1F1F1F"}
                    fontSize="20px"
                    fontWeight="300"
                    lineHeight={"25px"}
                  >
                    {info.Role}
                  </Text>
                  <Text
                    color={"#1F1F1F"}
                    fontSize="20px"
                    fontWeight="700"
                    lineHeight={"25px"}
                  >
                    Event title
                  </Text>
                </Flex>
                <Flex justifyContent={"space-between"}>
                  <Text
                    color={"#1F1F1F"}
                    fontSize="20px"
                    fontWeight="300"
                    lineHeight={"25px"}
                  >
                    {info.Ticket}
                  </Text>
                  <Text
                    color={"#1F1F1F"}
                    fontSize="20px"
                    fontWeight="700"
                    lineHeight={"25px"}
                  >
                    Event title
                  </Text>
                </Flex>
                <Flex justifyContent={"space-between"}>
                  <Text
                    color={"#1F1F1F"}
                    fontSize="20px"
                    fontWeight="300"
                    lineHeight={"25px"}
                  >
                    {info.Title}
                  </Text>
                  <Text
                    color={"#1F1F1F"}
                    fontSize="20px"
                    fontWeight="700"
                    lineHeight={"25px"}
                  >
                    Event title
                  </Text>
                </Flex>
                <Flex justifyContent={"space-between"}>
                  <Text
                    color={"#1F1F1F"}
                    fontSize="20px"
                    fontWeight="300"
                    lineHeight={"25px"}
                  >
                    {info.Titletwo}
                  </Text>
                  <Text
                    color={"#1F1F1F"}
                    fontSize="20px"
                    fontWeight="700"
                    lineHeight={"25px"}
                  >
                    Event title
                  </Text>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Box>
      ))}
      <PaginationButton />
    </>
  );
};

export default InformationBox;
