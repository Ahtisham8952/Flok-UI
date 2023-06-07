import { useRouter } from 'next/router';
import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react';
import FlokSlider from '../../src/components/app/Flok/LandingPage/FlokSlider';
import CalendarInput from '../../src/components/app/Flok/Calendar/CalendarInput';
import LayoutWrapper from "../../src/components/core/LayoutWrapper/LayoutWrapper"
const EventsByCategory = () => {
  const router = useRouter();
  const { category } = router.query;

  const eventsData = {
    sports: {
      banner: {
        heading: 'Sports Events',
        image: '/corrun.png',
      },
      
    },
    music: {
      banner: {
        heading: 'Music events',
        image: '/musicmain.png',
      },
      
    },
    art: {
      banner: {
        heading: ' Art Events',
        image: '/art.svg',
      },
      
    },
    educational: {
      banner: {
        heading: 'Educational Events',
        image: '/educational.svg',
      },
      
    },
    birthdays: {
      banner: {
        heading: ' Birthday Events',
        image: '/birthdayevents.svg',
      },
      
    },
    wednesday: {
      banner: {
        heading: ' Wednesday Events',
        image: '/wednesdayevents.svg',
      },
      
    },
    today: {
      banner: {
        heading: ' Today Events',
        image: '/todayevents.svg',
      },
      
    },
    weekend: {
      banner: {
        heading: 'The Weekend Events',
        image: '/wednesdayevents.svg',
      },
      
    },
    free: {
      banner: {
        heading: 'Free Events',
        image: '/freeevents.svg',
      },
      
    },
    camps: {
      banner: {
        heading: ' Camps Events',
        image: '/campsevents.svg',
      },
      
    },
  };

  const renderEventSlider = () => {
    const categoryData = eventsData[category];

    if (!categoryData) {
      return (
        <Box>
          {/* <Text>No events found for this category.</Text> */}
        </Box>
      );
    }

    const { banner, events } = categoryData;

    return (
      <>
        <Box bg='#1F1F1F' w='100%'  >

      
<Box maxW={"1453px"} w="100%" px='20px' mx='auto'>



      <Flex  alignItems={"center"} flexDirection={{base:'column',md:'row'}}>
          <Box w={{base:'100%',md:'50%'}} mb={{base:'20px',md:'0px'}}>
          <Heading
          color="#FFFFFF"
          fontSize={{base:'36px',md:'40px',lg:'48px',xl:'64px'}}
          fontWeight="600"
          textAlign={{base:'center',md:'left'}}
          lineHeight={"150%"}>{banner.heading}</Heading>
          <Text
      
      color="#A0A0A0"
      fontSize="20px"
      fontWeight="400"
      textAlign={{base:'center',md:'left'}}
      lineHeight={"150%"}
    >
 Discover the best Chess events in your area and online
    </Text>
          </Box>
      <Box w={{base:'100%',md:'50%'}}>
      <Image src={banner.image} alt={banner.heading}  />
      </Box>
    
      </Flex>
   
 
  </Box>
 
  </Box>
       <Box color="black" maxW={"1560px"} w="100%" px='20px' mx='auto'>
        <CalendarInput/>
        <Box mt="65px">
        <FlokSlider/>
        </Box>
        <Box mt="65px">
        <FlokSlider/>
        </Box>
        <Box mt="65px">
        <FlokSlider/>
        </Box>
        <Box mt="65px">
        <FlokSlider/>
        </Box>
        <Box mt="65px">
        <FlokSlider/>
        </Box>

        
        
       </Box>
      </>
    );
  };

  return (
   <LayoutWrapper>
<Flex direction="column" align="center" borderTop={"1px solid #4D4D4D"}>
    {renderEventSlider()}
  </Flex>
   </LayoutWrapper>
    
  );
};

export default EventsByCategory;
