import { Box, Image, Heading, Center, Stack, Text } from "@chakra-ui/react";
import React from "react";
const Data = [
  {
    Image: "/post.png",
    Title: "Organization Staff",
    Description:
      "Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    Image: "/post.png",
    Title: "Organization Details",
    Description:
      "Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    Image: "/post.png",
    Title: "Organization Mission",
    Description:
      "Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    Image: "/post.png",
    Title: "Organization About",
    Description:
      "Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];
const OrganizationCardStyle1 = () => {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      columnGap="8"
      rowGap="8"
    >
      {Data.map((li,index) => (
        <Box key={index}>
          <Box>
            <Box spacing="30px" justify="center">
              <Box>
                <Box
                  w={{
                    base: "350px",
                    md: "320px",
                    lg: "450px",
                    xl: "480px",
                    xxl: "600px",
                  }}
                >
                  <Box>
                    <Box padding="10px">
                      <Image src={li.Image} alt="FirstPost"></Image>
                      <Box mt="6">
                        <Box
                          fontSize={{ base: "24px", md: "26px" }}
                          lineHeight="70px"
                          fontWeight="600"
                          textAlign={{ base: "center", md: "left" }}
                        >
                          {li.Title}
                        </Box>
                        <Box
                          fontSize={{ base: "18px", md: "20px" }}
                          lineHeight={{ base: "29px", md: "30px" }}
                          textAlign={{ base: "center", md: "left" }}
                        >
                          {li.Description}
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default OrganizationCardStyle1;
