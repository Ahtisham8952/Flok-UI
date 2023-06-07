import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import AdminPurchase from "./AdminPurchase";

export function CheckoutModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      
      <Button type="submit" bg="#1F1F1F" colorScheme={"#1F1F1F"} 
     color="#FFFFFF"
     fontSize="14px"
     fontWeight="400"
     lineHeight={"150%"}
     p="8px 40px"
     onClick={onOpen}
     borderRadius={"50px"}
     border="1px solid white"
     
     >
   Buy Now
     </Button>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
        size="Full"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AdminPurchase />
            
          </ModalBody>
          
        </ModalContent>
      </Modal>
    </>
  );
}
