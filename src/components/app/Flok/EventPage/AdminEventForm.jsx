import React from "react";
import EventPageForm from "./EventPageForm";
import { Box, Image, Button } from "@chakra-ui/react";
const AdminEventForm = () => {
  return (
    <Box>
      <Box
        maxW={{ base: "100%", lg: "1720px" }}
        width="100%"
        px={{ base: "20px", md: "40px", lg: "50px" }}
        mx="auto"
      >
        <Box>
          <Image src="/banner.png" alt="banner" />
        </Box>
      </Box>
      <Box
        maxW="995px"
        width="100%"
        margin="0 auto"
        mt={{ base: "40px", md: "50px", lg: "100px" }}
        textAlign="center"
      >
        <Button
          size="md"
          height="64px"
          maxW={{ base: "400px", md: "500px", lg: "850px" }}
          width="100%"
          borderRadius="100px"
          border="2px"
          borderColor="#FF564A"
          bg="#FF564A"
          textColor="white"
          mb="20px"
          colorScheme="#FF564A"
          fontSize={{ base: "12px", md: "15px", lg: "17px" }}
        >
          Admin: Lock/Unlock Organization (Maybe a Switch)
        </Button>
        <Button
          size="md"
          height="64px"
          maxW={{ base: "400px", md: "500px", lg: "850px" }}
          width="100%"
          borderRadius="100px"
          border="2px"
          borderColor="#FF564A"
          bg="#FF564A"
          textColor="white"
          mb="20px"
          colorScheme="#FF564A"
          fontSize={{ base: "12px", md: "15px", lg: "17px" }}
        >
          Admin: Lock/Unlock Event (maybe a switch)
        </Button>
        <Button
          size="md"
          height="64px"
          maxW={{ base: "400px", md: "500px", lg: "850px" }}
          width="100%"
          borderRadius="100px"
          border="2px"
          borderColor="#FF564A"
          bg="#FF564A"
          textColor="white"
          mb="20px"
          colorScheme="#FF564A"
          fontSize={{ base: "12px", md: "15px", lg: "17px" }}
        >
          Admin: Hide / Show (maybe a switch)
        </Button>
        <Button
          size="md"
          height="64px"
          maxW={{ base: "400px", md: "500px", lg: "850px" }}
          width="100%"
          borderRadius="100px"
          border="2px"
          borderColor="#FF564A"
          bg="#FF564A"
          textColor="white"
          mb="20px"
          colorScheme="#FF564A"
          fontSize={{ base: "12px", md: "15px", lg: "17px" }}
        >
          Admin: Clear flags
        </Button>

        <Box mt="66px">
          <Button
            size="md"
            height="64px"
            maxW={{ base: "400px", md: "500px", lg: "850px" }}
            width="100%"
            borderRadius="100px"
            border="2px"
            borderColor="Black"
            bg="Black"
            textColor="white"
            mb="20px"
            colorScheme="Black"
            fontSize={{ base: "12px", md: "15px", lg: "17px" }}
          >
            Archive
          </Button>
          <Button
            size="md"
            height="64px"
            maxW={{ base: "400px", md: "500px", lg: "850px" }}
            width="100%"
            borderRadius="100px"
            border="2px"
            borderColor="Black"
            bg="Black"
            textColor="white"
            mb="20px"
          colorScheme="Black"
            fontSize={{ base: "12px", md: "15px", lg: "17px" }}
          >
            Cancel
          </Button>
        </Box>
      </Box>
      <EventPageForm />
    </Box>
  );
};
export default AdminEventForm;
