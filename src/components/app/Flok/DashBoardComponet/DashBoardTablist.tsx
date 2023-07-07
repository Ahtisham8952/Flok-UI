import { Flex, Image, Tab, TabList, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { tabItems } from '../../../../utils/constants';

const DashBoardTablist = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <TabList borderLeft={'none'} w="100%" justifyContent={'flex-start'}>
      {tabItems.map((item, index: number) => (
        <Tab
          color="#757575"
          justifyContent={{ base: 'center', xxl: 'flex-start' }}
          key={index}
          textAlign={'left'}
          mb="40px"
          borderRadius={'4px'}
          _selected={{ borderBottom: 'none', bg: '#E6E6E6', color: '#1F1F1F' }}
          maxW={'341px'}
          w="100%"
          py="14px"
          px={{ base: '10px', xxl: '23px' }}
        >
          <Flex
            align="center"
            gap="24px"
            flexDirection={{ base: 'column', xxl: 'row' }}
          >
            <Image
              alt="img"
              as="img"
              src={activeTab === index ? item.activeImage : item.image}
            />
            <Text fontSize="14px" fontWeight="600" lineHeight={'150%'}>
              {item.label}
            </Text>
          </Flex>
        </Tab>
      ))}
    </TabList>
  );
};

export default DashBoardTablist;
