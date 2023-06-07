import { Box, Flex, Input, Select } from '@chakra-ui/react';
import React, { useState } from 'react'
import ReactDatePicker from 'react-datepicker';

const CalendarInput = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
      <Flex justify="center" mt="77px">
      <Box>
        <Input
          maxW="500px"
          width="300px"
          height="60px"
          type="date"
         
        />
      </Box>
      <Box maxW="450px" height="300px">
        <Select maxW="500px" height="60px" placeholder="PKT">
          <option value="option1">UKT</option>
          <option value="option2">MKT</option>
          <option value="option3">KKT</option>
        </Select>
      </Box>
    </Flex>
    );
  };
  export default CalendarInput