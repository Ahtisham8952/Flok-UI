import { Box, Flex, Image, Text } from '@chakra-ui/react';
import OrderListTable from './OrderListTable';
import { salesInsight } from '../../../../utils/constants';

const OrderListTabContent = () => {
  return (
    <Box mt="40px" px="30px">
      <Text
        color="#191919"
        fontSize="20px"
        fontWeight="600"
        lineHeight={'150%'}
        textTransform={'uppercase'}
        mb="30px"
      >
        Order List
      </Text>

      <Flex justifyContent={'space-between'} mb="40px" flexWrap={'wrap'}>
        {salesInsight.map((li, index) => (
          <Flex
            key={index}
            alignItems={'center'}
            gap="16px"
            flexDirection={{ base: 'column', lg: 'row' }}
          >
            <Box
              bg="#E6E6E6"
              borderRadius={'10px'}
              p={{ base: '8px', lg: '17px' }}
            >
              <Image alt="img" src={li.Img}></Image>
            </Box>
            <Box>
              <Text
                color="#757575"
                fontSize={{ base: '12px', md: '14px', lg: '16px' }}
                fontWeight="500"
                lineHeight={'150%'}
              >
                {li.Label}
              </Text>
              <Text
                color="#191919"
                fontSize={{ base: '16px', md: '18px', lg: '24px' }}
                fontWeight="700"
                lineHeight={'150%'}
              >
                {li.Price}
              </Text>
            </Box>
            <Flex alignItems={'center'} gap="6px">
              <Image alt="img" src={li.imgGrade}></Image>
              <Text
                color={li.percolor}
                fontSize="12px"
                fontWeight="600"
                lineHeight={'150%'}
              >
                {li.Percentage}
              </Text>
            </Flex>
          </Flex>
        ))}
      </Flex>
      <OrderListTable />
    </Box>
  );
};

export default OrderListTabContent;
