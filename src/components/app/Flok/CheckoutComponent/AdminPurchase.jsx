import {
  Box,
  Button,
  Divider,
  Flex,
  Img,
  Text,
  Select,
  Link,
} from "@chakra-ui/react";
import React from "react";
import QuantitySelector from "./quantitySelector";
import FlokSlider from "../LandingPage/FlokSlider"

const AdminPurchase = () => {
  return (
    <Box>
      <Box>
        <Img src="/waterbaner.png" alt="PurchaseBanner" />
      </Box>
      <Box
        maxW="1920px"
        width="100%"
        margin="auto"
        mt="20px"
        px={{ base: "30px", md: "50px", lg: "100px" }}
      >
        <Flex
          justifyContent="space-between"
          flexDirection={{ base: "column", md: "row", lg: "row" }}
          pt="20px"
        >
          <Box>
            <Text
              fontSize={{ base: "14px", md: "16px", lg: "20px" }}
              fontWeight="700"
              lineHeight="35px"
            >
              Event title
            </Text>
            <Text
              fontSize={{ base: "14px", md: "16px", lg: "20px" }}
              fontWeight="700"
              lineHeight="35px"
            >
              Date: Time
            </Text>
            <Text
              fontSize={{ base: "14px", md: "16px", lg: "20px" }}
              fontWeight="700"
              lineHeight="35px"
            >
              Location: Lorem Ipsum
            </Text>
            <Text
              fontSize={{ base: "14px", md: "16px", lg: "20px" }}
              fontWeight="700"
              lineHeight="35px"
            >
              Price $$$
            </Text>
            <Text
              fontSize={{ base: "14px", md: "16px", lg: "20px" }}
              fontWeight="700"
              lineHeight="35px"
            >
              Capacity 23/30
            </Text>
            <Text
              fontSize={{ base: "14px", md: "16px", lg: "20px" }}
              fontWeight="700"
              lineHeight="35px"
            >
              Restrictions: Ages 7-12
            </Text>
          </Box>

          <Box textAlign={{ base: "", md: "", lg: "center" }}>
            <Text
              fontSize={{ base: "14px", md: "16px", lg: "20px" }}
              fontWeight="700"
              lineHeight="35px"
            >
              <QuantitySelector />
            </Text>
            <Text
              fontSize={{ base: "14px", md: "16px", lg: "20px" }}
              fontWeight="700"
              lineHeight="35px"
            >
              Tickets: $100 each
            </Text>
            <Text
              fontSize={{ base: "14px", md: "16px", lg: "20px" }}
              fontWeight="700"
              lineHeight="35px"
            >
              Fees: $10
            </Text>
            <Text
              fontSize={{ base: "14px", md: "16px", lg: "20px" }}
              fontWeight="700"
              lineHeight="35px"
            >
              Total: $210
            </Text>
            <Text
              fontSize={{ base: "14px", md: "16px", lg: "20px" }}
              fontWeight="700"
              lineHeight="35px"
              color="red"
            >
              Only 2 tickets left
            </Text>
            <Text
              fontSize={{ base: "14px", md: "16px", lg: "20px" }}
              fontWeight="700"
              lineHeight="35px"
            >
              <Button
                bg="black"
                color="white"
                _hover={{ bg: "black", color: "white" }}
                borderRadius="100px"
                fontSize={{ base: "14px", md: "16px", lg: "20px" }}
              >
                Buy One more ticket and get 20% off
              </Button>
            </Text>
          </Box>
        </Flex>
        <Divider
          borderBottom="2px"
          fontWeight="bold"
          pt="65px"
          color="#DAD9D9"
        />
        <Flex
          justifyContent="space-between"
          flexDirection={{ base: "column", md: "row", lg: "row" }}
          pt="20px"
        >
          <Box>
            <Text
              fontSize={{ base: "14px", md: "16px", lg: "20px" }}
              fontWeight="700"
              lineHeight="35px"
            >
              Event title
            </Text>
            <Text
              fontSize={{ base: "14px", md: "16px", lg: "20px" }}
              fontWeight="700"
              lineHeight="35px"
            >
              Date: Time
            </Text>
            <Text
              fontSize={{ base: "14px", md: "16px", lg: "20px" }}
              fontWeight="700"
              lineHeight="35px"
            >
              Location: Lorem Ipsum
            </Text>
            <Text
              fontSize={{ base: "14px", md: "16px", lg: "20px" }}
              fontWeight="700"
              lineHeight="35px"
            >
              Price $$$
            </Text>
            <Text
              fontSize={{ base: "14px", md: "16px", lg: "20px" }}
              fontWeight="700"
              lineHeight="35px"
            >
              Capacity 23/30
            </Text>
            <Text
              fontSize={{ base: "14px", md: "16px", lg: "20px" }}
              fontWeight="700"
              lineHeight="35px"
            >
              Restrictions: Ages 7-12
            </Text>
          </Box>

          <Box textAlign={{ base: "", md: "", lg: "center" }}>
            <Text
              fontSize={{ base: "14px", md: "16px", lg: "20px" }}
              fontWeight="700"
              lineHeight="35px"
            >
              <QuantitySelector />
            </Text>
            <Text
              fontSize={{ base: "14px", md: "16px", lg: "20px" }}
              fontWeight="700"
              lineHeight="35px"
            >
              Tickets: $100 each
            </Text>
            <Text
              fontSize={{ base: "14px", md: "16px", lg: "20px" }}
              fontWeight="700"
              lineHeight="35px"
            >
              Fees: $10
            </Text>
            <Text
              fontSize={{ base: "14px", md: "16px", lg: "20px" }}
              fontWeight="700"
              lineHeight="35px"
            >
              Total: $210
            </Text>
            <Text
              fontSize={{ base: "14px", md: "16px", lg: "20px" }}
              fontWeight="700"
              lineHeight="35px"
              color="red"
            >
              Only 2 tickets left
            </Text>
            <Text
              fontSize={{ base: "14px", md: "16px", lg: "20px" }}
              fontWeight="700"
              lineHeight="35px"
            >
              <Button
                bg="black"
                color="white"
                _hover={{ bg: "black", color: "white" }}
                borderRadius="100px"
                fontSize={{ base: "14px", md: "16px", lg: "20px" }}
              >
                Buy One more ticket and get 20% off
              </Button>
            </Text>
          </Box>
        </Flex>
        <Divider
          borderBottom="2px"
          fontWeight="bold"
          pt="65px"
          color="#DAD9D9"
        />

        <Flex
          justifyContent="space-between"
          flexDirection={{ base: "column", md: "row", lg: "row" }}
          pt="20px"
        >
          <Box>
            <Text
              fontSize={{ base: "14px", md: "16px", lg: "20px" }}
              fontWeight="700"
              lineHeight="35px"
            >
              Event title
            </Text>
            <Text
              fontSize={{ base: "14px", md: "16px", lg: "20px" }}
              fontWeight="700"
              lineHeight="35px"
            >
              Date: Time
            </Text>
            <Text
              fontSize={{ base: "14px", md: "16px", lg: "20px" }}
              fontWeight="700"
              lineHeight="35px"
            >
              Location: Lorem Ipsum
            </Text>
            <Text
              fontSize={{ base: "14px", md: "16px", lg: "20px" }}
              fontWeight="700"
              lineHeight="35px"
            >
              Price $$$
            </Text>
            <Text
              fontSize={{ base: "14px", md: "16px", lg: "20px" }}
              fontWeight="700"
              lineHeight="35px"
            >
              Capacity 23/30
            </Text>
            <Text
              fontSize={{ base: "14px", md: "16px", lg: "20px" }}
              fontWeight="700"
              lineHeight="35px"
            >
              Restrictions: Ages 7-12
            </Text>
          </Box>

          <Box textAlign={{ base: "", md: "", lg: "center" }}>
            <Text
              fontSize={{ base: "14px", md: "16px", lg: "20px" }}
              fontWeight="700"
              lineHeight="35px"
            >
              <QuantitySelector />
            </Text>
            <Text
              fontSize={{ base: "14px", md: "16px", lg: "20px" }}
              fontWeight="700"
              lineHeight="35px"
            >
              Tickets: $100 each
            </Text>
            <Text
              fontSize={{ base: "14px", md: "16px", lg: "20px" }}
              fontWeight="700"
              lineHeight="35px"
            >
              Fees: $10
            </Text>
            <Text
              fontSize={{ base: "14px", md: "16px", lg: "20px" }}
              fontWeight="700"
              lineHeight="35px"
            >
              Total: $210
            </Text>
            <Text
              fontSize={{ base: "14px", md: "16px", lg: "20px" }}
              fontWeight="700"
              lineHeight="35px"
              color="red"
            >
              Only 2 tickets left
            </Text>
            <Text
              fontSize={{ base: "14px", md: "16px", lg: "20px" }}
              fontWeight="700"
              lineHeight="35px"
            >
              <Button
                bg="black"
                color="white"
                _hover={{ bg: "black", color: "white" }}
                borderRadius="100px"
                fontSize={{ base: "14px", md: "16px", lg: "20px" }}
              >
                Buy One more ticket and get 20% off
              </Button>
            </Text>
          </Box>
        </Flex>
        <Divider
          borderBottom="2px"
          fontWeight="bold"
          pt="65px"
          color="#DAD9D9"
        />
          <Box mt='50px'>
      <Text
            mb='30px'
            color="#191919"
            fontSize="32px"
            fontWeight="600"
            lineHeight={"150%"}
          >
       More Events In This Area
          </Text>
          <FlokSlider/>
      </Box>
      </Box>
    
     
      <Flex
        justifyContent="center"
        gap="22px"
        align="center"
        pt={{ base: "50px", lg: "135px" }}
        _focusVisible="none"
        flexDirection={{ base: "column", lg: "row" }}
      >
        <Box>
          <Select placeholder="Other events from same Organizer">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </Box>
        <Box>
          <Img src="luscones.svg" alt="plus" />
        </Box>
      </Flex>
      <Box textAlign="center" pt="60px">
        <Button
        as={Link}
          bg="black"
          color="white"
          _hover={{ bg: "black", color: "white" }}
          borderRadius="100px"
          width="200px"
          fontSize={{ base: "14px", md: "16px", lg: "20px" }}
          href="/checkoutguest"
        >
          Buy Now
        </Button>
        <Text
          maxW="1440px"
          margin="auto"
          fontSize={{ base: "16px", lg: "24px" }}
          fontWeight="400"
          color="#9B9B9B"
          mt="45px"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incid ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </Box>
    </Box>
  );
};
export default AdminPurchase;
