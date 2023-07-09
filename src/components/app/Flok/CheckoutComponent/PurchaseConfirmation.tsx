import {
  Box,
  Button,
  Divider,
  Flex,
  Img,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
const PurchaseConfirmationModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {/* <Button >Open Modal</Button> */}
      <Button
        onClick={onOpen}
        bg="black"
        color="white"
        _hover={{ bg: 'black', color: 'white' }}
        fontSize={{ base: '14px', md: '16px', lg: '20px' }}
        w="100%"
        mt="50px"
        mb="500px"
      >
        Pay Now
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW={'900px'} w="100%">
          <ModalHeader>PURCHASE CONFIRMATION</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Box>
                <Img src="./waterplay.png" alt="PurchaseBanner" />
              </Box>
              <Box mt={{ base: '30px', lg: '94px' }}>
                <Text
                  fontSize={{ base: '14px', md: '16px', lg: '20px' }}
                  fontWeight="700"
                  textAlign="center"
                  lineHeight="25px"
                >
                  Confirmation Number: 1231243132sdaf
                </Text>
                <Text
                  fontSize={{ base: '14px', md: '16px', lg: '20px' }}
                  fontWeight="700"
                  textAlign="center"
                  lineHeight="27px"
                >
                  Purchased on: Date / Time
                </Text>
                <Box>
                  <Divider
                    borderBottom="3px solid"
                    fontWeight="bold"
                    pt="65px"
                    color="#DAD9D9"
                  />
                  <Flex
                    justifyContent="space-between"
                    flexDirection={{ base: 'column', md: 'row', lg: 'row' }}
                    alignItems="center"
                    pt="40px"
                  >
                    <Box textAlign="center">
                      <Text
                        fontSize={{ base: '14px', md: '16px', lg: '20px' }}
                        fontWeight="700"
                        lineHeight="35px"
                      >
                        Event title
                      </Text>
                      <Text
                        fontSize={{ base: '14px', md: '16px', lg: '20px' }}
                        fontWeight="700"
                        lineHeight="35px"
                      >
                        2 Tickets $210
                      </Text>
                      <Text
                        fontSize={{ base: '14px', md: '16px', lg: '20px' }}
                        fontWeight="700"
                        lineHeight="35px"
                      >
                        12 Dec 2022, 3 pm.
                      </Text>
                    </Box>

                    <Box
                      textAlign={{ base: 'center', md: 'left', lg: 'center' }}
                    >
                      <Button
                        bg="black"
                        colorScheme="black"
                        color="white"
                        p={{
                          base: '10px 20px',
                          md: '10px 20px',
                          lg: '30px 40px',
                        }}
                        borderRadius="40px"
                      >
                        Add to Calendar
                      </Button>
                    </Box>
                  </Flex>
                  <Divider
                    borderBottom="3px solid"
                    fontWeight="bold"
                    pt="65px"
                    color="#DAD9D9"
                  />
                  <Flex
                    justifyContent="space-between"
                    flexDirection={{ base: 'column', md: 'row', lg: 'row' }}
                    pt="40px"
                    alignItems="center"
                  >
                    <Box textAlign="center">
                      <Text
                        fontSize={{ base: '14px', md: '16px', lg: '20px' }}
                        fontWeight="700"
                        lineHeight="35px"
                      >
                        Event title
                      </Text>
                      <Text
                        fontSize={{ base: '14px', md: '16px', lg: '20px' }}
                        fontWeight="700"
                        lineHeight="35px"
                      >
                        2 Tickets $210
                      </Text>
                      <Text
                        fontSize={{ base: '14px', md: '16px', lg: '20px' }}
                        fontWeight="700"
                        lineHeight="35px"
                      >
                        12 Dec 2022, 3 pm.
                      </Text>
                    </Box>

                    <Box textAlign={{ base: 'left', md: 'left', lg: 'center' }}>
                      <Button
                        bg="black"
                        colorScheme="black"
                        color="white"
                        p={{
                          base: '10px 20px',
                          md: '10px 20px',
                          lg: '30px 40px',
                        }}
                        borderRadius="40px"
                      >
                        Add to Calendar
                      </Button>
                    </Box>
                  </Flex>
                  <Divider
                    borderBottom="3px solid"
                    fontWeight="bold"
                    pt="65px"
                    color="#DAD9D9"
                    mb="100px"
                  />
                  <Box
                    maxW={{ base: '', md: '', lg: '1424px' }}
                    width="100%"
                    margin="auto"
                    mt="48px"
                    mb="35px"
                  >
                    <Text
                      align="center"
                      fontSize={{ base: '14px', md: '16px', lg: '20px' }}
                      fontWeight="400"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incid ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Text>
                  </Box>
                </Box>
              </Box>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PurchaseConfirmationModal;
