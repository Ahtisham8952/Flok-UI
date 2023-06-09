import {
    Box,
    Button,
    Collapse,
    Flex,
    Image,
    Text,
    VStack,
    useDisclosure,
    Link,
  } from "@chakra-ui/react";
  import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Input,
  } from "@chakra-ui/react";
  import { ChevronDownIcon } from "@chakra-ui/icons";
  import { useRef, useState } from "react";

  
  function SidebarItem({ title, subItems, onSelect,IMG }) {
    const [isOpen, setIsOpen] = useState(false);
  
    const handleItemClick = () => {
      setIsOpen(!isOpen);
      onSelect(title);
    };
  
    return (
      <VStack align="start" spacing={2} pl={4}>
        <Box>
      
        <Box onClick={handleItemClick} color="#757575" justifyContent={{base:'center',xxl:'flex-start'}}  textAlign={"left"}  borderRadius={"4px"} _selected={{borderBottom:'none' ,bg:"#E6E6E6",color:'#1F1F1F'}} maxW={"341px"} w='100%'  py='14px' px={{base:'10px',xxl:'23px'}}>
            <Flex align="center" gap="24px" flexDirection={{base:'column',xxl:'row'}} >
              <Image alt="img" as="img" src={IMG}  />
              <Text
        
       
        fontSize="14px"
        fontWeight="600"
        lineHeight={"150%"}
      >
   {title}
      </Text>
             
            </Flex>
          </Box>
        </Box>
        
        {subItems && (
          <>
            <Flex
              align="center"
              cursor="pointer"
              onClick={handleItemClick}
            >
                {/* <ChevronDownIcon transform={isOpen ? "rotate(180deg)" : "none"} /> */}
            </Flex>
            <Collapse in={isOpen} animateOpacity>
              <VStack align="start"  >
                {subItems.map((subItem) => (
                  <Text py="18px" px="71px" key={subItem} onClick={() => onSelect(subItem)}>
                    {subItem}
                  </Text>
                ))}
              </VStack>
            </Collapse>
          </>
        )}
      </VStack>
    );
  }
  
  function Sidebar({ onSelectTab }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();
    return (
      <Box w='20%' borderRight={"1px solid #E7E7E7"}>
        <Flex justifyContent={"center"} alignItems={"center"}>
          <Link
            mb='80px'
            pt='42px'
            href="/"
            maxW={{ sm: "128px", base: "100px" }}
            ml={{ sm: "16px", base: "15px" }}
            textDecoration="none !important"
            position="relative"
            mt={{ base: "6px", md: "2px" }}
          >
            <Image
            
              h={{ base: '20px', md: '28px' }}
              w={{ base: '50px', md: '103px' }}
              src="/logoflok.svg"
              alt="logo"
            />

          </Link>
        </Flex>
        <Box display={{ base: "none", lg: "block" }} >
          <Box   bg="#FFFFFF" >
            <VStack align="start" spacing="40px">
              <SidebarItem title="Dashboard" IMG="/dashfirst.svg" onSelect={onSelectTab} />
              <SidebarItem
                title="Analytics"
                IMG="/analytric-1.svg"
                subItems={["Order List", "Customer List","Review Customer"]}
                onSelect={onSelectTab}
              />
              <SidebarItem title="Events" IMG="/eventimg-1.svg" onSelect={onSelectTab} />
              <SidebarItem title="Message"  IMG="/messgeimg-1.svg" onSelect={onSelectTab} />
              <SidebarItem title="Calender"  IMG="/calendarimg-1.svg" onSelect={onSelectTab} />
              <SidebarItem title="Email"  IMG="/emailpic.svg" onSelect={onSelectTab} />
              <SidebarItem title="Settings"  IMG="/seetingpic.svg" onSelect={onSelectTab} 
               subItems={["Basic Settings", "Setting Account","Setting Notification"]}
              />
              <SidebarItem title="Logout"  IMG="/lohoutpic.svg" onSelect={onSelectTab} />
            </VStack>
          </Box>
        </Box>
        <Box display={{ base: "block", lg: "none" }}>
          <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
            Open
          </Button>
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
  
              <DrawerBody>
                <Box w={200} bg="#f1f1f1" p={4}>
                  <VStack align="start" spacing="40px">
                    <SidebarItem title="Home" onSelect={onSelectTab} />
                    <SidebarItem
                      title="News"
                      subItems={["News 1", "News 2"]}
                      onSelect={onSelectTab}
                    />
                    <SidebarItem title="Contact" onSelect={onSelectTab} />
                    <SidebarItem title="About" onSelect={onSelectTab} />
                  </VStack>
                </Box>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
      </Box>
    );
  }
  
  function Content({ selectedTab }) {
    const getContent = () => {
      switch (selectedTab) {
        case "Dashboard":
          return (
            <Box id="Dashboard" >
              <Text fontSize="2xl" fontWeight="bold">
                Home
              </Text>
              <Text>Welcome to the home page!</Text>
            </Box>
          );
        case "Analytics":
          return (
            <Box id="Analytics">
              <Text fontSize="2xl" fontWeight="bold">
                News
              </Text>
              <Text>News content goes here.</Text>
            </Box>
          );
        case "Order List":
          return (
            <Box id="Order List">
              <Text fontSize="2xl" fontWeight="bold">
                News 1
              </Text>
              <Text>News 1 content goes here.</Text>
            </Box>
          );
        case "Customer List":
          return (
            <Box id="Customer List">
              <Text fontSize="2xl" fontWeight="bold">
                News 2
              </Text>
              <Text>News 2 content goes here.</Text>
            </Box>
          );
        case "Review Customer":
          return (
            <Box id="Review Customer">
              <Text fontSize="2xl" fontWeight="bold">
                Contact
              </Text>
              <Text>Get in touch with us.</Text>
            </Box>
          );
        case "About":
          return (
            <Box id="about">
              <Text fontSize="2xl" fontWeight="bold">
                About
              </Text>
              <Text>Learn more about our company.</Text>
            </Box>
          );
        default:
          return null;
      }
    };
  
    return (
      <Box w='80%' p={4} >
        {getContent()}
      </Box>
    );
  }
  
  function DashBoardSido() {
    const [selectedTab, setSelectedTab] = useState("Dashboard");
  
    const handleTabSelect = (tab) => {
      setSelectedTab(tab);
    };
  
    return (
        
      <Flex w="100%" >
        <Sidebar onSelectTab={handleTabSelect} />
        <Content selectedTab={selectedTab} />
      </Flex>
    );
  }
  
  export default DashBoardSido;
  