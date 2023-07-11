import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import InformationBox from './InformationBox';
import SliderCard from '../LandingPage/SliderCard';
import FlokSlider from '../LandingPage/FlokSlider';
const ParentsData = [
  {
    Image: '/girlyimage.png',
    Name: ' User Name',
    Role: 'Role',
    Ticket: 'Ticket Purchase',
    Title: ' Event Title',
    Titletwo: 'Event Title',
  },
  {
    Image: '/girlyimage.png',
    Name: 'User Name',
    Role: 'Role',
    Ticket: 'Ticket Purchase',
    Title: ' Event Title',
    Titletwo: 'Event Title',
  },
  {
    Image: '/girlyimage.png',
    Name: 'User Name',
    Role: 'Role',
    Ticket: 'Ticket Purchase',
    Title: ' Event Title',
    Titletwo: 'Event Title',
  },
];
const OrganizationData = [
  {
    Image: '/girlyimage.png',
    Name: ' User Name',
    Role: 'Role',
    Ticket: 'Ticket Purchase',
    Title: ' Event Title',
    Titletwo: 'Event Title',
  },
  {
    Image: '/girlyimage.png',
    Name: 'User Name',
    Role: 'Role',
    Ticket: 'Ticket Purchase',
    Title: ' Event Title',
    Titletwo: 'Event Title',
  },
  {
    Image: '/girlyimage.png',
    Name: 'User Name',
    Role: 'Role',
    Ticket: 'Ticket Purchase',
    Title: ' Event Title',
    Titletwo: 'Event Title',
  },
];
const AdminData = [
  {
    Image: '/girlyimage.png',
    Name: ' User Name',
    Role: 'Role',
    Ticket: 'Ticket Purchase',
    Title: ' Event Title',
    Titletwo: 'Event Title',
  },
  {
    Image: '/girlyimage.png',
    Name: 'User Name',
    Role: 'Role',
    Ticket: 'Ticket Purchase',
    Title: ' Event Title',
    Titletwo: 'Event Title',
  },
];
const AdminDashboardMain = () => {
  return (
    <>
      <Box maxW={'1760px'} w="100%" px="20px" mx="auto">
        <Box mb="120px">
          <Image src="/mainbannner.png"></Image>
        </Box>
        <Box mb="34px">
          <Text
            color={'#1F1F1F'}
            fontSize="24px"
            fontWeight="700"
            lineHeight={'30px'}
          >
            Parents
          </Text>
          <InformationBox DashboardData={ParentsData} />
        </Box>
        <Box mb="34px">
          <Text
            color={'#1F1F1F'}
            fontSize="24px"
            fontWeight="700"
            lineHeight={'30px'}
          >
            Organizations
          </Text>
          <InformationBox DashboardData={OrganizationData} />
        </Box>
        <Box mb="34px">
          <Text
            color={'#1F1F1F'}
            fontSize="24px"
            fontWeight="700"
            lineHeight={'30px'}
          >
            Admin
          </Text>
          <InformationBox DashboardData={AdminData} />
        </Box>
        <Box>
          <Text
            color={'#1F1F1F'}
            fontSize="24px"
            fontWeight="700"
            lineHeight={'30px'}
          >
            Flagged events that haven’t expired and are publicly visible
          </Text>

          <Box>
            <Flex
              justifyContent={'center'}
              gap="50px"
              flexDirection={{ base: 'column', md: 'row' }}
            >
              <Box w={{ base: '100%', md: '30%' }}>
                <SliderCard image="/childplay-1.png" />
              </Box>
              <Box w={{ base: '100%', md: '30%' }}>
                <SliderCard image="/childplay-1.png" />
              </Box>
            </Flex>
          </Box>
        </Box>
        <Box>
          <Text
            color={'#1F1F1F'}
            fontSize="24px"
            fontWeight="700"
            lineHeight={'30px'}
          >
            Upcoming events
          </Text>
          <Box>
            <FlokSlider />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AdminDashboardMain;
