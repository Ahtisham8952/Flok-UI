import { Box, Text, Flex, Heading, Image } from "@chakra-ui/react";

const cardData = [
  {
    image: "post3.png",
    title: "Organization Staff",
    content:
      "Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    image: "post3.png",
    title: "Organization Staff",
    content:
      "Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    image: "post3.png",
    title: "Organization Staff",
    content:
      "Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    image: "post3.png",
    title: "Organization Staff",
    content:
      "Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

function OrganizationCardStyle3() {
  return (
    <Box maxW="80%" margin="0 auto">
      {cardData.map((card, index) => (
        <Flex
          key={index}
          direction={{
            base: "column",
            md: index % 2 === 0 ? "row" : "row-reverse",
          }}
          align="center"
          my="60px"
          justifyContent="space-between"
        >
          <Box flex={1}>
            <Image src={card.image} alt={`Image ${index}`} />
          </Box>
          <Box flex={1} p={4}>
            <Heading
              fontSize={{
                base: "26px",
                sm: "28px",
                md: "28px",
                lg: "32px",
              }}
              lineHeight={{ base: "40px", md: "42px", lg: "46px" }}
              fontWeight="600"
              textAlign={{ base: "center", md: "left", lg: "left" }}
              py={{ base: "20px" }}
            >
              {card.title}
            </Heading>
            <Text
              fontSize={{base:"15px",md:"16px"}}
              lineHeight={{ base: "40px", md: "26px", lg: "46px" }}
              textAlign={{ base: "center", md: "left", lg: "left" }}
              maxW={"604px"}
            >
              {card.content}
            </Text>
          </Box>
        </Flex>
      ))}
    </Box>
  );
}

export default OrganizationCardStyle3;
