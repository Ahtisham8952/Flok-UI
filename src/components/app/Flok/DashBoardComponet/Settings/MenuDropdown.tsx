import { Box, Text } from '@chakra-ui/react';
import { FC, useState } from 'react';
import Select from 'react-select';
const countryOptions = [
  { value: 'US', label: 'United States' },
  { value: 'CA', label: 'Canada' },
  { value: 'GB', label: 'United Kingdom' },
  // Add more countries as needed
];
const CountryDropdown: FC<{ labelName: string }> = ({ labelName }) => {
  const [selectedCountry, setSelectedCountry] = useState<{
    value: string;
    label: string;
  } | null>(null);

  return (
    <Box>
      <Text
        color="#191919"
        fontSize="14px"
        fontWeight="600"
        lineHeight={'150%'}
        mb="16px"
      >
        {labelName}
      </Text>
      <Select
        options={countryOptions}
        value={selectedCountry}
        onChange={(selectedOption) => {
          setSelectedCountry(selectedOption);
        }}
      />
    </Box>
  );
};

export default CountryDropdown;
