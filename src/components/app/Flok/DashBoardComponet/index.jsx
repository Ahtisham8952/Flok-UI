
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
  IconButton,
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
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useRef, useState } from "react";
import DashboardTabContent from './DashboardTabContent';
import AnalyticsTabContent from './AnalyticsTabContent';
import OrderListTabContent from './OrderListTabContent';
import CustomerListTabContent from './CustomerListTabContent';
import ReviewCustomerTabContent from './ReviewCustomerTabContent';
import EventsTabContent from './EventsTabContent';
import BasicSettingsTabContent from './Settings/BasicSettingsTabContent';
import SettingsAccount from './Settings/SettingsAccount';
import SettingsNotification from './Settings/SettingsNotification';


function SidebarItem({ title, subItems, onSelect,IMG }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = () => {
    setIsOpen(!isOpen);
    onSelect(title);
  };

  return (
    <VStack align="start" spacing={2} pl={4}>
      <Box>
    
      <Box cursor={"pointer"} onClick={handleItemClick} color="#757575" justifyContent="center"  textAlign={"left"}  borderRadius={"4px"}  maxW={"341px"} w='100%'  py='14px' px={{base:'10px',xxl:'23px'}}>
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
          
          <Collapse in={isOpen} animateOpacity>
            <VStack textAlign={"start"}  >
              {subItems.map((subItem) => (
                <Text fontSize="16px"
                fontWeight="600"
                cursor={"pointer"}
                color="#757575"
                lineHeight={"16px"} py="18px" pl="30px" key={subItem} onClick={() => onSelect(subItem)}>
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
    <Box  w={{base:'0px',lg:'20%'}} borderRight={"1px solid #E7E7E7"} position={"relative"}>
      <Box w='100%' display={{ base: "none", lg: "block" }}>

      
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
      <Box >
        <Box   bg="#FFFFFF" >
          <VStack align="start" spacing="40px" alignItems={"center"}>
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
      
      <Box 
      mt="100px"
      position={"relative"}
        backgroundImage="url('/callshelp.png')"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat" px="10px"  h='247px' maxW={"250px"} mx='auto' borderRadius={"10px"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Image alt="img" src='/questionmark.svg' position={"absolute"} top='-56px'></Image>
        <Box>
        <Text
            
            color="white"
            fontSize="20px"
            fontWeight="700"
            lineHeight={"16px"}
            textAlign={"center"}
            mb="8px"
          >
      Help Center
          </Text>
          <Text
            
            color="white"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"16px"}
            textAlign={"center"}
          >
      Having difficulty in Ticketing.
Please contact us for further inquiries
          </Text>
          <Flex justifyContent={"center"}>
          <Button  bg="#FFFFFF" colorScheme={"#FFFFFF"} 
     color="black"
     fontSize="12px"
     fontWeight="400"
     lineHeight={"150%"}
     p="8px 56px"
     borderRadius={"10px"}
     mt="20px"
     
     >
         Go To Help Center
     </Button>
          </Flex>
         
        </Box>
      

      </Box>
      </Box>

      <Box display={{ base: "block", lg: "none" }}>
        
         <IconButton
        onClick={onOpen}
        position={"absolute"} 
        top='0px'
        aria-label="Open Sidebar"
        icon={<HamburgerIcon />}
        variant="ghost"
        
        py='20px'
      />
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />

            <DrawerBody>
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
      <Box >
        <Box   bg="#FFFFFF" >
          <VStack align="start" spacing="40px" alignItems={"center"}>
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
      <Box 
      mt="100px"
      position={"relative"}
        backgroundImage="url('/callshelp.png')"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat" px="10px"  h='247px' maxW={"250px"} mx='auto' borderRadius={"10px"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Image alt="img" src='/questionmark.svg' position={"absolute"} top='-56px'></Image>
        <Box>
        <Text
            
            color="white"
            fontSize="20px"
            fontWeight="700"
            lineHeight={"16px"}
            textAlign={"center"}
            mb="8px"
          >
      Help Center
          </Text>
          <Text
            
            color="white"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"16px"}
            textAlign={"center"}
          >
      Having difficulty in Ticketing.
Please contact us for further inquiries
          </Text>
          <Flex justifyContent={"center"}>
          <Button  bg="#FFFFFF" colorScheme={"#FFFFFF"} 
     color="black"
     fontSize="12px"
     fontWeight="400"
     lineHeight={"150%"}
     p="8px 56px"
     borderRadius={"10px"}
     mt="20px"
     
     >
       Go To Help Center
     </Button>
          </Flex>
         
        </Box>
      

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
              <DashboardTabContent/>
          </Box>
        );
      case "Analytics":
        return (
          <Box id="Analytics">
            <AnalyticsTabContent/>
          </Box>
        );
      case "Order List":
        return (
          <Box id="Order List">
             <OrderListTabContent/>
          </Box>
        );
      case "Customer List":
        return (
          <Box id="Customer List">
             <CustomerListTabContent/>
          </Box>
        );
      case "Review Customer":
        return (
          <Box id="Review Customer">
           <ReviewCustomerTabContent/>
          </Box>
        );
      case "Events":
        return (
          <Box id="Events">
            <EventsTabContent/>
          </Box>
        );

        // HERE...............................................................................................
        case "Settings":
        return (
          <Box id="Settings">
           Settings
          </Box>
        );
        case "Basic Settings":
        return (
          <Box id="Basic Settings">
            <BasicSettingsTabContent/>
          </Box>
        );
        case "Setting Account":
          return (
            <Box id="Setting Account">
              <SettingsAccount/>
            </Box>
          );
          
          case "Setting Notification":
            return (
              <Box id="SSetting Notification">
                <SettingsNotification/>
              </Box>
            );
      default:
        return null;
    }
  };

  return (
    <Box w='100%' p={4} >
      {getContent()}
    </Box>
  );
}

function DashboardMain() {
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

export default DashboardMain;
