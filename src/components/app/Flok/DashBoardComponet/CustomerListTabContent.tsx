import { Box, Button, Flex, Text } from '@chakra-ui/react';
import CustomerListTable from './CustomerListTable';
import DashBoardHeader from './DashBoardHeader';

const CustomerListTabContent = () => {
  return (
    <Box>
      <DashBoardHeader />
      <Box p="30px">
        <Flex
          justifyContent={'space-between'}
          mb="50px"
          flexDirection={{ base: 'column', md: 'row' }}
        >
          <Box>
            <Text
              color="#191919"
              fontSize="20px"
              fontWeight="600"
              lineHeight={'150%'}
              textTransform={'uppercase'}
            >
              Customer List
            </Text>
            <Text
              color="#191919"
              fontSize="14px"
              fontWeight="500"
              lineHeight={'150%'}
              textTransform={'uppercase'}
            >
              You have 2,481 customers
            </Text>
          </Box>
          <Box>
            <Flex>
              <Button
                bg="#1F1F1F"
                colorScheme={'#1F1F1F'}
                color="#FFFFFF"
                fontSize="14px"
                fontWeight="400"
                lineHeight={'150%'}
                p="8px 56px"
                borderRadius={'4px'}
                mr="10px"
              >
                Edit
              </Button>
              <Button
                bg="#FF5347"
                colorScheme={'#FF5347'}
                color="#FFFFFF"
                fontSize="14px"
                fontWeight="400"
                lineHeight={'150%'}
                p="8px 56px"
                borderRadius={'4px'}
                mr="10px"
              >
                Delete
              </Button>
            </Flex>
          </Box>
        </Flex>
        <CustomerListTable />
      </Box>
    </Box>
  );
};

export default CustomerListTabContent;
