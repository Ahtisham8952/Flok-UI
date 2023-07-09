import { Box, Button, Flex, Image, Switch, Text } from '@chakra-ui/react';
import DashBoardHeader from '../DashBoardHeader';

const SettingsNotification = () => {
  return (
    <Box>
      <DashBoardHeader />
      <Box p="24px">
        <Box mb="36px">
          <Text
            color="#191919"
            fontSize="24px"
            fontWeight="700"
            lineHeight={'150%'}
            mb="11px"
          >
            Welcome, Richard Hederson
          </Text>
          <Text
            color="#757575"
            fontSize="12px"
            fontWeight="500"
            lineHeight={'16px'}
          >
            We are here to help manage your ticket!
          </Text>
        </Box>
        <Box mb="38px">
          <Image h="322px" alt="img" src="/profilebanner.png" />
          <Box
            h={{ base: '120px', md: '214px' }}
            w={{ base: '120px', md: '214px' }}
            mx="auto"
            mt={{ base: '-50px', md: '-100px' }}
            display={'flex'}
            justifyContent={'center'}
          >
            <Image alt="img" src="/profiledisplay.png" />
          </Box>
        </Box>

        <Box mb="50px">
          <Flex gap="30px" mb="20px">
            <Text
              color="#191919"
              fontSize="14px"
              fontWeight="600"
              lineHeight={'150%'}
            >
              Notification Event
            </Text>
            <Image src="/infosicon.svg"></Image>
          </Flex>
          <Flex justifyContent={'space-between'} w="100%" mb="26px">
            <Box>
              <Text
                color="#191919"
                fontSize="14px"
                fontWeight="600"
                lineHeight={'150%'}
              >
                New Movie Update
              </Text>
              <Text
                color="#757575"
                fontSize="12px"
                fontWeight="500"
                lineHeight={'16px'}
              >
                Provide movie updates at any time as well as a summary of news
                about the film.
              </Text>
            </Box>
            <Box>
              <Switch size="lg" />
            </Box>
          </Flex>
          <Flex justifyContent={'space-between'} w="100%" mb="26px">
            <Box>
              <Text
                color="#191919"
                fontSize="14px"
                fontWeight="600"
                lineHeight={'150%'}
              >
                Booking Movie Date
              </Text>
              <Text
                color="#757575"
                fontSize="12px"
                fontWeight="500"
                lineHeight={'16px'}
              >
                Help remind me of movies that have been booked so customers dont
                forget.
              </Text>
            </Box>
            <Box>
              <Switch size="lg" />
            </Box>
          </Flex>
        </Box>
        <Box mb="50px">
          <Flex gap="30px" mb="20px">
            <Text
              color="#191919"
              fontSize="14px"
              fontWeight="600"
              lineHeight={'150%'}
            >
              Notification Message
            </Text>
            <Image alt="img" src="/infosicon.svg"></Image>
          </Flex>
          <Flex justifyContent={'space-between'} w="100%" mb="26px">
            <Box>
              <Text
                color="#191919"
                fontSize="14px"
                fontWeight="600"
                lineHeight={'150%'}
              >
                Message
              </Text>
              <Text
                color="#757575"
                fontSize="12px"
                fontWeight="500"
                lineHeight={'16px'}
              >
                Helps provide a marker that there is a new message for the
                customer.
              </Text>
            </Box>
            <Box>
              <Switch size="lg" />
            </Box>
          </Flex>
          <Flex justifyContent={'space-between'} w="100%" mb="26px">
            <Box>
              <Text
                color="#191919"
                fontSize="14px"
                fontWeight="600"
                lineHeight={'150%'}
              >
                Email
              </Text>
              <Text
                color="#757575"
                fontSize="12px"
                fontWeight="500"
                lineHeight={'16px'}
              >
                Helps provide a marker that there is a new email for the
                customer.
              </Text>
            </Box>
            <Box>
              <Switch size="lg" />
            </Box>
          </Flex>
        </Box>
        <Box mb="50px">
          <Flex gap="30px" mb="20px">
            <Text
              color="#191919"
              fontSize="14px"
              fontWeight="600"
              lineHeight={'150%'}
            >
              Notification Payment
            </Text>
            <Image alt="img" src="/infosicon.svg"></Image>
          </Flex>
          <Flex justifyContent={'space-between'} w="100%" mb="26px">
            <Box>
              <Text
                color="#191919"
                fontSize="14px"
                fontWeight="600"
                lineHeight={'150%'}
              >
                Payment
              </Text>
              <Text
                color="#757575"
                fontSize="12px"
                fontWeight="500"
                lineHeight={'16px'}
              >
                Helps provide a marker that there is a new message for the
                customer.
              </Text>
            </Box>
            <Box>
              <Switch size="lg" />
            </Box>
          </Flex>
        </Box>

        <Button
          bg="#1F1F1F"
          colorScheme={'#1F1F1F'}
          color="#FFFFFF"
          fontSize="14px"
          fontWeight="400"
          lineHeight={'150%'}
          p="8px 56px"
          borderRadius={'10px'}
        >
          Save Changes
        </Button>
      </Box>
    </Box>
  );
};

export default SettingsNotification;
