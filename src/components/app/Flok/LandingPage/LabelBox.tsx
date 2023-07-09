import { Box, Grid, Image, Link, Text } from '@chakra-ui/react';
const LabelData = [
  {
    Image: '/kidsname-1.svg',
    Name: 'Sports',
    refPage: '/eventscategory/sports',
  },
  {
    Image: '/persons-2.svg',
    Name: 'Music',
    refPage: '/eventscategory/music',
  },
  {
    Image: '/articon.svg',
    Name: 'Art',
    refPage: '/eventscategory/art',
  },
  {
    Image: '/eduicon.svg',
    Name: 'Educational',
    refPage: '/eventscategory/educational',
  },
  {
    Image: '/birthdayicon-1.svg',
    Name: 'Birthdays',
    refPage: '/eventscategory/birthdays',
  },
  {
    Image: '/campsicon-1.svg',
    Name: 'Camps',
    refPage: '/eventscategory/camps',
  },
  {
    Image: '/wedicons-1.svg',
    Name: 'Wednesday',
    refPage: '/eventscategory/wednesday',
  },
  {
    Image: '/persons-8.svg',
    Name: 'Today',
    refPage: '/eventscategory/today',
  },
  {
    Image: '/persons-9.svg',
    Name: 'This Weekend',
    refPage: '/eventscategory/weekend',
  },
  {
    Image: '/persons-10.svg',
    Name: 'Free',
    refPage: '/eventscategory/free',
  },
];
const LabelBox = () => {
  return (
    <Box
      maxW={'1530px'}
      w="100%"
      mx="auto"
      px={{ base: '20px', md: '20px', lg: '100px', xl: '100px', xxl: '100px' }}
      cursor={'pointer'}
    >
      <Grid
        templateColumns={{
          base: 'repeat(2, 1fr)',
          sm: 'repeat(3, 1fr)',
          md: 'repeat(4, 1fr)',
          lg: 'repeat(5, 1fr)',
        }}
        w="100%"
        gap={{ base: '16px', md: '24px', xl: '12px', xxl: '24px' }}
        mx="auto"
      >
        {LabelData.map((li, index) => (
          <Box
            _hover={{ textDecoration: 'none' }}
            as={Link}
            href={li.refPage}
            key={index}
            bg="#FFFFFF"
            borderRadius={'5px'}
            maxW="270px"
            w="100%"
            py="11px"
            px={{ base: '11px', md: '12px', xl: '7px', xxl: '15px' }}
            display={'flex'}
            alignItems="center"
            gap={{
              base: '12px',
              md: '14px',
              lg: '20px',
              xl: '24px',
              xxl: '32px',
              xxxl: '64px',
            }}
          >
            <Image
              h={{ base: '20px', md: '20px', lg: '30px' }}
              w={{ base: '20px', md: '20px', lg: '30px' }}
              alt="img"
              src={li.Image}
            ></Image>
            <Text
              color="#B8B8B8"
              fontSize={{ base: '10px', md: '12px', lg: '14px', xl: '16px' }}
              fontWeight="600"
              lineHeight={'25px'}
            >
              {li.Name}
            </Text>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default LabelBox;
