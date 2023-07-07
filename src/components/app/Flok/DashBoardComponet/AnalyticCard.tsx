import { Box, Flex, Image, Text } from '@chakra-ui/react';

const AnalyticCard = () => {
  return (
    <Box bg="white">
      <Box position={'relative'}>
        <Image w="100%" alt="img" src="/eventsbannerpage.png"></Image>
        <Box position={'absolute'} top="20px" w="100%">
          <Flex px="24px" justifyContent={'space-between'} w="100%">
            <Box bg="white" p="8px 12px" borderRadius={'10px'}>
              <Text
                color="#191919"
                fontSize="12px"
                fontWeight="600"
                lineHeight={'16px'}
              >
                $10,00
              </Text>
            </Box>
            <Box>
              <Image alt="img" src="/hearicons.svg"></Image>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default AnalyticCard;
