import { Button, Flex, Icon, Input } from "@chakra-ui/react";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function QuantitySelector() {
  const [value, setValue] = useState(1);

  const decrementValue = () => {
    if (value > 1) {
      setValue(value - 1);
    }
  };

  const incrementValue = () => {
    setValue(value + 1);
  };

  

  return (
    <Flex
      alignItems={{ base: "left", md: "center", lg: "center" }}
      justify={{ base: "left", md: "left", lg: "center" }}
    >
      <Input type="number" value={value} readOnly width="50px" />
      <Button
        bg="black"
        color="white"
        onClick={incrementValue}
        _hover={{ bg: "none" }}
        borderRadius="xl"
        borderTopRightRadius="0"
        borderBottomRightRadius="0"
      >
        <Flex alignItems="center">
          <Icon as={FiChevronLeft} boxSize={6} color="White" />
        </Flex>
      </Button>

      <Button
        bg="black"
        color="white"
        onClick={incrementValue}
        _hover={{ bg: "none" }}
        borderRadius="xl"
        borderTopLeftRadius="0"
        borderBottomLeftRadius="0"
        _active={{ bg: "black", color: "white" }}
      >
        <Flex alignItems="center">
          <Icon as={FiChevronRight} boxSize={6} color="White" />
        </Flex>
      </Button>
    </Flex>
  );
}

export default QuantitySelector;
