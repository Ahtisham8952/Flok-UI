// import { Box } from '@chakra-ui/react'
// import React from 'react'
// import DashBoardTabs from './DashBoardTabs'

// const DashboardMain = () => {
//   return (
//     <Box >
//       <DashBoardTabs/>

//     </Box>
//   )
// }

// export default DashboardMain
import React, { useState } from 'react';
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Icon, IconButton, Image, Link, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useDisclosure, useMediaQuery } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import DashBoardTablist from './DashBoardTablist';
import DashboardTabContent from './DashboardTabContent';
import AnalyticsTabContent from './AnalyticsTabContent';

const DashboardMain = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile] = useMediaQuery("(max-width: 991px)");
  const [activeTab, setActiveTab] = useState(0);
  const [activeSubTab, setActiveSubTab] = useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

 

  

  return (
    <Box px="10px" position={"relative"}>

   
    <Flex flexDirection={{base:'column',lg:'row'}} >
      {/* Sidebar */}
      <Box
        display={isMobile ? 'none' : 'block'}
        maxW={{base:'485px',lg:'235px',xl:'335px',xxl:'335px',xxxl:'485px'}}
        w='100%'
        borderRight={"1px solid #E7E7E7"}
        height="100vh"
        px={{ base: '20px', xl: '10px', xxl: '56px' }}
        bg="white"
        
      >
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
        <Tabs w='100%' onChange={handleTabChange} defaultIndex={activeTab} orientation="vertical">

          <DashBoardTablist />
        </Tabs>

      </Box>

      {/* Hamburger Icon */}
      <IconButton
        display={isMobile ? 'block' : 'none'}
        position={"absolute"} 
        top='0px'
        aria-label="Open Sidebar"
        icon={<HamburgerIcon />}
        variant="ghost"
        onClick={onOpen}
        py='20px'
      />

      {/* Drawer Overlay */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} >
        <DrawerOverlay h='100%' w='100%'>
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
              <Tabs onChange={handleTabChange} defaultIndex={activeTab} orientation="vertical">

                <DashBoardTablist />
              </Tabs>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>

      {/* Main Content */}
      <Box flex="1" >
        <Tabs onChange={handleTabChange} defaultIndex={activeTab} orientation="horizontal">
          <TabPanels>
          
                   
                   {activeTab === 0 && 
                   <Box>
                    <DashboardTabContent/>
                   </Box>
                   
                   }
                
                
                   {activeTab === 1 && 
                   <Box>
                    <AnalyticsTabContent/>
                   </Box>
                   
                   }
                
                
                   {activeTab === 2 && <p>Sub Tab 3 Content</p>}
                
               
            
          </TabPanels>
        </Tabs>
      </Box>
    </Flex>
    </Box>
  );
};



export default DashboardMain;
;
