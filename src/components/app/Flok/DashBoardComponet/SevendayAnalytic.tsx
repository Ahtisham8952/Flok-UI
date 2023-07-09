import { Box, Button, Flex, Text } from '@chakra-ui/react';
const LastData = [
  {
    Name: 'Duration',
    Value: '3h 10m',
  },
  {
    Name: 'Number of views',
    Value: '50.7k',
  },
  {
    Name: 'Rating',
    Value: '5.0',
    revimg: '',
  },
];
const SevendayAnalytic = () => {
  return (
    <Box>
      <Text
        mb="20px"
        color="#757575"
        fontSize="12px"
        fontWeight="500"
        lineHeight={'16px'}
      >
        Analytics from the last 7 days :
      </Text>
      {LastData.map((li, index) => (
        <Flex
          key={index}
          justifyContent={'space-between'}
          alignItems={'center'}
          mb="20px"
        >
          <Text
            color="#191919"
            fontSize="14px"
            fontWeight="600"
            lineHeight={'150%'}
          >
            {li.Name}
          </Text>
          <Flex>
            <Text
              color="#191919"
              fontSize="14px"
              fontWeight="600"
              lineHeight={'150%'}
            >
              {li.Value}
            </Text>
          </Flex>
        </Flex>
      ))}
      <Button
        bg="#1F1F1F"
        colorScheme={'#1F1F1F'}
        color="#FFFFFF"
        fontSize="14px"
        fontWeight="400"
        lineHeight={'150%'}
        w="100%"
        borderRadius={'10px'}
      >
        See Detail
      </Button>
    </Box>
  );
};

export default SevendayAnalytic;
