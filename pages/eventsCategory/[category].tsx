import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import CalendarInput from '../../src/components/app/Flok/Calendar/CalendarInput';
import FlokSlider from '../../src/components/app/Flok/LandingPage/FlokSlider';
import LayoutWrapper from '../../src/components/core/LayoutWrapper/LayoutWrapper';
import { eventsData } from '../../src/utils/constants';

const EventsByCategory = () => {
  const router = useRouter();
  const { category } = router.query;

  const renderEventSlider = () => {
    const categoryData = eventsData[category as string];

    if (!categoryData) {
      return <Box>{/* <Text>No events found for this category.</Text> */}</Box>;
    }

    const { banner } = categoryData;

    return (
      <>
        <Box bg="#1F1F1F" w="100%">
          <Box maxW={'1453px'} w="100%" px="20px" mx="auto">
            <Flex
              alignItems={'center'}
              flexDirection={{ base: 'column', md: 'row' }}
            >
              <Box
                w={{ base: '100%', md: '50%' }}
                mb={{ base: '20px', md: '0px' }}
              >
                <Heading
                  color="#FFFFFF"
                  fontSize={{
                    base: '36px',
                    md: '40px',
                    lg: '48px',
                    xl: '64px',
                  }}
                  fontWeight="600"
                  textAlign={{ base: 'center', md: 'left' }}
                  lineHeight={'150%'}
                >
                  {banner.heading}
                </Heading>
                <Text
                  color="#A0A0A0"
                  fontSize="20px"
                  fontWeight="400"
                  textAlign={{ base: 'center', md: 'left' }}
                  lineHeight={'150%'}
                >
                  Discover the best Chess events in your area and online
                </Text>
              </Box>
              <Box w={{ base: '100%', md: '50%' }}>
                <Image src={banner.image} alt={banner.heading} />
              </Box>
            </Flex>
          </Box>
        </Box>
        <Box color="black" maxW={'1560px'} w="100%" px="20px" mx="auto">
          <CalendarInput />
          <Box mt="65px">
            <FlokSlider />
          </Box>
          <Box mt="65px">
            <FlokSlider />
          </Box>
          <Box mt="65px">
            <FlokSlider />
          </Box>
          <Box mt="65px">
            <FlokSlider />
          </Box>
          <Box mt="65px">
            <FlokSlider />
          </Box>
        </Box>
      </>
    );
  };

  return (
    <LayoutWrapper>
      <Flex direction="column" align="center" borderTop={'1px solid #4D4D4D'}>
        {renderEventSlider()}
      </Flex>
    </LayoutWrapper>
  );
};

export default EventsByCategory;
