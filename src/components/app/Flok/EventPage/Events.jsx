import React from "react";
import EventPageForm from "./EventPageForm";
import { Box, Image } from "@chakra-ui/react";
const UserCreateEvent = () => {
  return (
    <Box>
      <Box
        maxW={{ base: "100%", lg: "1720px" }}
        width="100%"
        px={{ base: "0px", md: "40px", lg: "50px" }}
        mx="auto"
      >
        <Box>
          <Image src="/banner.png" alt="banner" />
        </Box>
      </Box>

      <EventPageForm />
    </Box>
  );
};
export default UserCreateEvent;
