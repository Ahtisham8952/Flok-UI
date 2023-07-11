import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";

const PaginationButton = () => {
  return (
    <>
      <Flex justifyContent={"center"}>
        <Box>
          <Flex>
            <Box
              bg="white"
              h={{ base: "23px", md: "56px" }}
              w={{ base: "23px", md: "56px" }}
              border="1px solid #E6E6E6"
              display="flex"
              justifyContent="center"
              alignItems={"center"}
            >
              <Image src="/arrowleft.svg"></Image>
            </Box>
            <Box
              bg="black"
              h={{ base: "23px", md: "56px" }}
              w={{ base: "23px", md: "56px" }}
              border="1px solid #E6E6E6"
              display="flex"
              justifyContent="center"
              alignItems={"center"}
              color="white"
            >
              1
            </Box>
            <Box
              bg="white"
              h={{ base: "23px", md: "56px" }}
              w={{ base: "23px", md: "56px" }}
              border="1px solid #E6E6E6"
              display="flex"
              justifyContent="center"
              alignItems={"center"}
              color="black"
            >
              2
            </Box>
            <Box
              bg="white"
              h={{ base: "23px", md: "56px" }}
              w={{ base: "23px", md: "56px" }}
              border="1px solid #E6E6E6"
              display="flex"
              justifyContent="center"
              alignItems={"center"}
              color="black"
            >
              3
            </Box>
            <Box
              bg="white"
              h={{ base: "23px", md: "56px" }}
              w={{ base: "23px", md: "56px" }}
              border="1px solid #E6E6E6"
              display="flex"
              justifyContent="center"
              alignItems={"center"}
              color="black"
            >
              ...
            </Box>
            <Box
              bg="white"
              h={{ base: "23px", md: "56px" }}
              w={{ base: "23px", md: "56px" }}
              border="1px solid #E6E6E6"
              display="flex"
              justifyContent="center"
              alignItems={"center"}
              color="black"
            >
              10
            </Box>
            <Box
              bg="white"
              h={{ base: "23px", md: "56px" }}
              w={{ base: "23px", md: "56px" }}
              border="1px solid #E6E6E6"
              display="flex"
              justifyContent="center"
              alignItems={"center"}
            >
              <Image src="/arrowright.svg"></Image>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default PaginationButton;
