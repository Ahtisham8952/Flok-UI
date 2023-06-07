import { Box, Heading, Text, Flex, Image } from "@chakra-ui/react";
import React from "react";
const Data = [
  {
    Image: "/postround.png",
    Title: "Organization Staff",
    Description:
      "Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    Image: "/postround.png",
    Title: "Organization Details",
    Description:
      "Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    Image: "/postround.png",
    Title: "Organization Mission",
    Description:
      "Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    Image: "/postround.png",
    Title: "Organization About",
    Description:
      "Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];
const OrganizationCardStyle4 = () => {
  return (
    <Box>
      <Box >
      <Box width="80%" margin="0 auto">
        {Data.map((li, index) => (
          <Flex
            key={index}
            direction={{
              base: "column",
              sm: "column",
              md: "row",
              lg: "row",
            }}
            justify="space-between"
            align="center"
            mb={{ base: "40px", lg: "80px" }}
          >
           
            <Box width={{ base: "100%", sm: "100%", md: "45%", lg: "50%" }}>
            
                  <Heading
                    fontSize={{
                      base: "26px",
                      sm: "28px",
                      md: "22px",
                      lg: "32px",
                    }}
                    lineHeight={{ base: "30px", md: "px", lg: "36px" }}
                    fontWeight="600"
                    textAlign={{ base: "center", md: "left", lg: "left" }}
                    pb={{ base: "20px" }}
                  >
                    {li.Title}
                  </Heading>
                  <Text
                    lineHeight={{ base: "24px", md: "24px", lg: "40px" }}
                    textAlign={{ base: "center", md: "left", lg: "left" }}
                    fontSize={{base:"16px",sm:"16px",md:"14px",lg:"20px"}}
                    maxW={"604px"}
                  >
                    {li.Description}
                  </Text>
                
            </Box>
            <Box  width={{ base: "100%", sm: "100%", md: "50%", lg: "45%" }}>
              <Image
               w='100%'
                src={li.Image}
                alt="Caffe Latte"
              />
            </Box>
          </Flex>
        ))}
      </Box>
    </Box>
    </Box>
  );
};

export default OrganizationCardStyle4;
