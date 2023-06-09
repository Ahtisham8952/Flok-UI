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
    event: 'Events Name',
    Customer: 'Daniel Alveson',
    pcs: '1 pcs',
  },
  {
    ID: '#234567',
    event: 'Events Name',
    Customer: 'Kevin Jonson',
    pcs: '3 pcs',
  },
  {
    ID: '#234567',
    event: 'Events Name',
    Customer: 'Daniel Alveson',
    pcs: '1 pcs',
  },
  {
    ID: '#234567',
    event: 'Events Name',
    Customer: 'Daniel Alveson',
    pcs: '1 pcs',
  },
  {
    ID: '#234567',
    event: 'Events Name',
    Customer: 'Daniel Alveson',
    pcs: '1 pcs',
  },
];
const SalesRevenueTable = () => {
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
                SOLD TICKET
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {RevenueData.map((li, index) => (
              <Tr key={index}>
                <Td
                  color="#BABABA"
                  fontSize="12px"
                  fontWeight="500"
                  lineHeight={'16px'}
                >
                  {li.ID}
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
                  {li.pcs}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default SalesRevenueTable;
