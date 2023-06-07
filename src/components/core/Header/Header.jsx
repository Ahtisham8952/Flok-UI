import { TriangleDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Link,
  Image,
  Button,
  Container,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Input,
} from "@chakra-ui/react";

import React from "react";

import MobileMenu from "./MobileMenu";

import LanguageDropdown from "./LanguageDropdown";
import SearchBarFilter from "./SearchBarFilter";

const Header = () => {
  return (
    <>
      <Box py={{base:'6px',md:'35px'}} bg="#1F1F1F" position={"relative"} >
        <Container maxW={"1675px"} px="20px">
          <Flex justifyContent="space-between" alignItems="center" gap="20px">
            <Flex>
             
              <Link
                href="/"
                maxW={{ sm: "128px", base: "100px" }}
                ml={{ sm: "16px", base: "15px" }}
                textDecoration="none !important"
                position="relative"
                mt={{ base: "6px", md: "2px" }}
              >
                <Image
                h={{base:'20px',md:'28px'}}
                w={{base:'50px',md:'103px'}}
                  src="/logoflok.svg"
                  alt="logo"
                />
                
              </Link>
              
            </Flex>
            <Box display={{ lg: "flex", base: "none" }}>
            <SearchBarFilter/>
            </Box>
           
           

            
            <Flex alignItems={"center"} display={{ lg: "flex", base: "none" }}>

           
            <Flex  w="100%" justifyContent={"space-between" } mr="43px" gap='65px'>
              <Box   pb="4px"
              minWidth={"3px"}
            >
              <Link href="#" 
               color="white"
               _hover={{textDecoration:'none'}}
               fontSize="16px"
               fontWeight="600"
               lineHeight={"24px"}> 
                About
              </Link>

              </Box>
             <Box  pb="4px"
              color="#9A99AD"
             
              fontSize="16px"
              fontWeight="400"
              lineHeight={"24px"}
           >

             
              <Link href="#" 
              _hover={{textDecoration:'none'}}
             > 
            Help
              </Link>
              </Box>
              <Box  pb="4px"
              color="#9A99AD"
             
              fontSize="16px"
              fontWeight="400"
              lineHeight={"24px"}
           >

             
              <Link href="\login" 
              _hover={{textDecoration:'none'}}
             > 
            Login
              </Link>
              </Box>
             
            </Flex>
         
            </Flex>
            <Box display={{ lg: "flex", base: "none" }}>
            <LanguageDropdown/>

            </Box>
           
            <Box display={{ lg: "none", base: "block" }}>
                <MobileMenu />
              </Box>
             
          
          
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default Header;
