import { Box, Grid, GridItem, Heading, IconButton, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const MyCalendar = () => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const daysOfMonth = Array.from({ length: 31 }, (_, index) => index + 1); // Assuming 31 days in the month

  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const handleDateSelect = (date) => {
    if (isDateSelectable(date)) {
      setSelectedDate(date);
      console.log("Selected date:", date);
    }
  };

  const isDateSelectable = (date) => {
    const currentDate = new Date();
    const selectedDate = new Date(currentYear, currentMonth, date);
    return selectedDate >= currentDate;
  };

  const handlePreviousMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 11 ? 0 : prevMonth + 1));
  };

  const handlePreviousYear = () => {
    setCurrentYear((prevYear) => prevYear - 1);
  };

  const handleNextYear = () => {
    setCurrentYear((prevYear) => prevYear + 1);
  };

  return (
    <Box p={4}>
      <Flex align="center" justify="space-between" mb={4}>
        <IconButton
          aria-label="Previous Month"
          icon={<ChevronLeftIcon />}
          onClick={handlePreviousMonth}
        />
        <Heading size="md" textAlign="center">
          {new Date(currentYear, currentMonth).toLocaleString("default", { month: "long", year: "numeric" })}
        </Heading>
        <IconButton
          aria-label="Next Month"
          icon={<ChevronRightIcon />}
          onClick={handleNextMonth}
        />
      </Flex>
      <Grid templateColumns="repeat(7, 1fr)" gap={2}>
        {daysOfWeek.map((day) => (
          <GridItem key={day} textAlign="center">
            <Heading size="sm">{day}</Heading>
          </GridItem>
        ))}
      </Grid>
      <Grid templateColumns="repeat(7, 1fr)" gap={2}>
        {daysOfMonth.map((day) => (
          <GridItem
            key={day}
            textAlign="center"
            cursor={isDateSelectable(day) ? "pointer" : "not-allowed"}
            bg={selectedDate === day ? "blue.500" : isDateSelectable(day) ? "transparent" : "gray.200"}
            color={selectedDate === day ? "white" : "inherit"}
            borderRadius="md"
            onClick={() => handleDateSelect(day)}
          >
            <Heading size="sm">{day}</Heading>
          </GridItem>
        ))}
      </Grid>
      <Flex align="center" justify="center" mt={4}>
        <IconButton
          aria-label="Previous Year"
          icon={<ChevronLeftIcon />}
          onClick={handlePreviousYear}
        />
        <Heading size="sm" mx={4}>
          {currentYear}
        </Heading>
        <IconButton
          aria-label="Next Year"
          icon={<ChevronRightIcon />}
          onClick={handleNextYear}
        />
      </Flex>
    </Box>
  );
};

export default MyCalendar;
