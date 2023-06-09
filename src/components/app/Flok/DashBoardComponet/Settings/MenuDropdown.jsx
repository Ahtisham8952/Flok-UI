import { Box, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import Select from 'react-select';
const countryOptions = [
    { value: 'US', label: 'United States' },
    { value: 'CA', label: 'Canada' },
    { value: 'GB', label: 'United Kingdom' },
    // Add more countries as needed
  ];
const CountryDropdown = ({LabelName}) => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
    
  };

  return (
    <Box>

<Text
            
            color="#191919"
            fontSize="14px"
            fontWeight="600"
            lineHeight={"150%"}
            mb='16px'
          >
      {LabelName}
          </Text>
    <Select
    
      options={countryOptions}
      value={selectedCountry}
      onChange={handleCountryChange}
    />
    </Box>
  );
};

export default CountryDropdown;
