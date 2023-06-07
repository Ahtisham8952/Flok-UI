import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Flex,
  Link,
  Image,
  Box,
  Input,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import React from "react";
import MenuItemList from "./MenuList";
import SearchBox from "./Search";
import LanguageDropdown from "./LanguageDropdown";
import SearchBarFilter from "./SearchBarFilter";

export const MobileMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        bg="transparent"
        color="#FFF"
        as={Button}
        p="0"
        ml="8px"
        _hover={{ bg: "transparent" }}
        _focus={{ bg: "transparent" }}
      >
        <HamburgerIcon color="#44566C" fontSize="22px" fontWeight="600" />
      </Button>
      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay bg="#1F1F1F" backdropFilter="blur(2px)" />
        <DrawerContent bg="#1F1F1F" minW={{ base: "100%", sm: "50%" }}>
          <DrawerCloseButton color="#44566C" fontSize="20px" />
          <DrawerHeader pt={"30px"} pb={"20px"}>
            <Link
              href="#"
              height={"80px"}
              width={"140px"}
              mx={"auto"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Image
                  src="/logoflok.svg"
                  alt="logo"
                />
            </Link>
          </DrawerHeader>

          <DrawerBody>
            <Flex
              flexDirection="column"
              gap="25px"
              alignItems="center"
              justifyContent="center"
            >
              <Flex flexDirection={"column"} gap="10px" alignItems={"center"}>
              <Box   pb="4px"
              minWidth={"3px"}
            borderBottom={"2px solid rgba(52, 97, 255, 1)"}>
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
              _hover={{color:'white',fontWeight:'600',borderBottom:'2px solid rgba(52, 97, 255, 1)'}}
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
              _hover={{color:'white',fontWeight:'600',borderBottom:'2px solid rgba(52, 97, 255, 1)'}}
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
            <Box mt="20px">
            <SearchBarFilter/>
            </Box>
             <LanguageDropdown/>
              
            </Flex>
           
           
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileMenu;
