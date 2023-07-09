import {
  Box,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
const RevenueData = [
  {
    ID: '#123456',
    Date: '12 Jan 2023',
    event: 'Event Name',
    Customer: 'Daniel Alveson',
    pcs: '1 pcs',
    Price: '$10,00',
  },
  {
    ID: '#123456',
    Date: '12 Jan 2023',
    event: 'Event Name',
    Customer: 'Daniel Alveson',
    pcs: '1 pcs',
    Price: '$10,00',
  },
  {
    ID: '#123456',
    Date: '12 Jan 2023',
    event: 'Event Name',
    Customer: 'Daniel Alveson',
    pcs: '1 pcs',
    Price: '$10,00',
  },
  {
    ID: '#123456',
    Date: '12 Jan 2023',
    event: 'Event Name',
    Customer: 'Daniel Alveson',
    pcs: '1 pcs',
    Price: '$10,00',
  },
  {
    ID: '#123456',
    Date: '12 Jan 2023',
    event: 'Event Name',
    Customer: 'Daniel Alveson',
    pcs: '1 pcs',
    Price: '$10,00',
  },
  {
    ID: '#123456',
    Date: '12 Jan 2023',
    event: 'Event Name',
    Customer: 'Daniel Alveson',
    pcs: '1 pcs',
    Price: '$10,00',
  },
  {
    ID: '#123456',
    Date: '12 Jan 2023',
    event: 'Event Name',
    Customer: 'Daniel Alveson',
    pcs: '1 pcs',
    Price: '$10,00',
  },
  {
    ID: '#123456',
    Date: '12 Jan 2023',
    event: 'Event Name',
    Customer: 'Daniel Alveson',
    pcs: '1 pcs',
    Price: '$10,00',
  },
  {
    ID: '#123456',
    Date: '12 Jan 2023',
    event: 'Event Name',
    Customer: 'Daniel Alveson',
    pcs: '1 pcs',
    Price: '$10,00',
  },
  {
    ID: '#123456',
    Date: '12 Jan 2023',
    event: 'Event Name',
    Customer: 'Daniel Alveson',
    pcs: '1 pcs',
    Price: '$10,00',
  },
  {
    ID: '#123456',
    Date: '12 Jan 2023',
    event: 'Event Name',
    Customer: 'Daniel Alveson',
    pcs: '1 pcs',
    Price: '$10,00',
  },
  {
    ID: '#123456',
    Date: '12 Jan 2023',
    event: 'Event Name',
    Customer: 'Daniel Alveson',
    pcs: '1 pcs',
    Price: '$10,00',
  },
  {
    ID: '#123456',
    Date: '12 Jan 2023',
    event: 'Event Name',
    Customer: 'Daniel Alveson',
    pcs: '1 pcs',
    Price: '$10,00',
  },
  {
    ID: '#123456',
    Date: '12 Jan 2023',
    event: 'Event Name',
    Customer: 'Daniel Alveson',
    pcs: '1 pcs',
    Price: '$10,00',
  },
  {
    ID: '#123456',
    Date: '12 Jan 2023',
    event: 'Event Name',
    Customer: 'Daniel Alveson',
    pcs: '1 pcs',
    Price: '$10,00',
  },
];
const OrderListTable = () => {
  return (
    <Box w="100%">
      <TableContainer>
        <Table size={'sm'}>
          <Thead
            borderTop={' 1px solid #E7E7E7'}
            borderBottom={' 1px solid #E7E7E7'}
          >
            <Tr color="red" py="11px" h="51px">
              <Th
                borderBottom={' 1px solid #E7E7E7'}
                borderColor={'#E7E7E7'}
                color="#BABABA"
                fontSize="12px"
                fontWeight="500"
                lineHeight={'16px'}
              >
                ORDER ID
              </Th>
              <Th
                borderBottom={' 1px solid #E7E7E7'}
                borderColor={'#E7E7E7'}
                color="#BABABA"
                fontSize="12px"
                fontWeight="500"
                lineHeight={'16px'}
              >
                DATE
              </Th>
              <Th
                borderBottom={' 1px solid #E7E7E7'}
                borderColor={'#E7E7E7'}
                color="#BABABA"
                fontSize="12px"
                fontWeight="500"
                lineHeight={'16px'}
              >
                EVENTS
              </Th>
              <Th
                borderBottom={' 1px solid #E7E7E7'}
                borderColor={'#E7E7E7'}
                color="#BABABA"
                fontSize="12px"
                fontWeight="500"
                lineHeight={'16px'}
              >
                CUSTOMER NAME
              </Th>
              <Th
                borderBottom={' 1px solid #E7E7E7'}
                borderColor={'#E7E7E7'}
                color="#BABABA"
                fontSize="12px"
                fontWeight="500"
                lineHeight={'16px'}
              >
                Loction
              </Th>
              <Th
                borderBottom={' 1px solid #E7E7E7'}
                borderColor={'#E7E7E7'}
                color="#BABABA"
                fontSize="12px"
                fontWeight="500"
                lineHeight={'16px'}
              >
                SOLD TICKET
              </Th>
              <Th
                borderBottom={' 1px solid #E7E7E7'}
                borderColor={'#E7E7E7'}
                color="#BABABA"
                fontSize="12px"
                fontWeight="500"
                lineHeight={'16px'}
              >
                PRICE
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {RevenueData.map((li, index) => (
              <Tr key={index} borderBottom={'30px solid white'}>
                <Td
                  color="#BABABA"
                  fontSize="12px"
                  fontWeight="500"
                  lineHeight={'16px'}
                >
                  {li.ID}
                </Td>
                <Td
                  color="#BABABA"
                  fontSize="12px"
                  fontWeight="500"
                  lineHeight={'16px'}
                >
                  {li.Date}
                </Td>
                <Td>{li.event}</Td>
                <Td
                  color="#BABABA"
                  fontSize="12px"
                  fontWeight="500"
                  lineHeight={'16px'}
                >
                  {li.Customer}
                </Td>
                <Td
                  color="#BABABA"
                  fontSize="12px"
                  fontWeight="500"
                  lineHeight={'16px'}
                >
                  {li.Customer}
                </Td>
                <Td
                  color="#BABABA"
                  fontSize="12px"
                  fontWeight="500"
                  lineHeight={'16px'}
                >
                  {li.pcs}
                </Td>
                <Td>{li.Price}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default OrderListTable;
