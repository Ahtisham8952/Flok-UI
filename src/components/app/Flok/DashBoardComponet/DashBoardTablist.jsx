import { Flex, Image, Tab, TabList, Tabs, Text, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
const tabItems = [
    { label: 'Dashboard', image: '/dashfirst.svg', activeImage: '/dahsboardpic-1.svg' },
    { label: 'Analytics', image: '/analytric-1.svg', activeImage: '/analytric-2.svg' },
    { label: 'Events', image: '/eventimg-1.svg', activeImage: '/eventimg-1.svg' },
    { label: 'Message', image: '/messgeimg-1.svg', activeImage: '/messgeimg-1.svg' },
    { label: 'Calender', image: '/calendarimg-1.svg', activeImage: '/calendarimg-1.svg' },
    { label: 'Email', image: '/emailpic.svg', activeImage: '/emailpic.svg' },
    { label: 'Settings', image: '/seetingpic.svg', activeImage: '/seetingpic.svg' },
    { label: 'Logout', image: '/lohoutpic.svg', activeImage: '/lohoutpic.svg' }
  ];
const DashBoardTablist = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
  const [activeTab, setActiveTab] = useState(0);
  const [activeSubTab, setActiveSubTab] = useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  const handleSubTabChange = (index) => {
    setActiveSubTab(index);
  };
  return (
   
    <TabList borderLeft={"none"} w="100%" justifyContent={"flex-start"}  >
      {tabItems.map((item, index) => (
        <Tab  color="#757575" justifyContent={{base:'center',xxl:'flex-start'}} key={index} textAlign={"left"} mb='40px' borderRadius={"4px"} _selected={{borderBottom:'none' ,bg:"#E6E6E6",color:'#1F1F1F'}} maxW={"341px"} w='100%'  py='14px' px={{base:'10px',xxl:'23px'}}>
          <Flex align="center" gap="24px" flexDirection={{base:'column',xxl:'row'}} >
            <Image alt="img" as="img" src={activeTab === index ? item.activeImage : item.image}  />
            <Text
      
     
      fontSize="14px"
      fontWeight="600"
      lineHeight={"150%"}
    >
 {item.label}
    </Text>
           
          </Flex>
        </Tab>
      ))}
    </TabList>
  
  )
}

export default DashBoardTablist