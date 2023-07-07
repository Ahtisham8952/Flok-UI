import { Box, Flex, Input, Select } from '@chakra-ui/react';
import { useState } from 'react';

const CalendarInput = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <Flex justify="center">
      <Box>
        <Input
          maxW="500px"
          width={{ base: '225px', md: '300px' }}
          type="date"
        />
      </Box>
      <Box maxW="450px">
        <Select maxW="500px" placeholder="PKT">
          <option value="option1">UKT</option>
          <option value="option2">MKT</option>
          <option value="option3">KKT</option>
        </Select>
      </Box>
    </Flex>
  );
};
export default CalendarInput;
