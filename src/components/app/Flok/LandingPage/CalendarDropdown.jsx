import { Box, Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverHeader, PopoverBody, Image } from "@chakra-ui/react";
import MyCalendar from "./MyCalendar";

const CalendarDropdown = () => {
  return (
    <Popover > 
      <PopoverTrigger >
        <Box p='4'>
        <Image  as="img" src="/calendarcall.svg" alt="Calendar" cursor="pointer" />
        </Box>
       
      </PopoverTrigger>
      <PopoverContent _focusVisible={{border:'none'}}>
        <PopoverArrow />
      
       
        <PopoverBody border="1px solid white" _focusVisible={{border:'none'}} >
        <MyCalendar/>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};



export default CalendarDropdown;
