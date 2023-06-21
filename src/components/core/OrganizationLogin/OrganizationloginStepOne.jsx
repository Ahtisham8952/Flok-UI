import {
  Box,
  Button,
  Checkbox,
  FormControl,
  Heading,
  Image,
  Img,
  Input,
  InputGroup,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React, { useState } from "react";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import { useRouter } from "next/router";


export const OrganizationloginStepOne = ({nextStep}) => {
  const router = useRouter();
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [errors, setErrors] = useState({});
  const handleSubmit = async (e) => {
    e.preventDefault();
   
    const errors = {};
    if (name.trim() === '') {
      errors.name = 'Name is required';
    }
    if (email.trim() === '') {
      errors.email = 'Email is required';
    }
     else if (!isValidEmail(email)) {
      errors.email = 'Invalid email format';
    }

    if (Object.keys(errors).length === 0) {
    
      console.log('Form submitted:', { name, email });
      router.push('/organizationlogin/steptwo');
    } else {
      
      setErrors(errors);
    }
  
  };
  const isValidEmail = (email) => {
   
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };


  return (
   

    
    <Box p="30px">
      <Heading
        as="h2"
        fontSize={{ base: "40px", md: "40px", lg: "64px" }}
        fontWeight="700"
        lineHeight={{ base: "50px", md: "50px", lg: "74px" }}
        textAlign="center"
        pt="5px"
        pb="15px"
      >
        Welcome to Flok for oganizations
      </Heading>
      <Text
        textAlign="center"
        fontWeight="300"
        color="#626262"
        size="16px"
        pt="30px"
      >
        Here you can run your full booking servises and collect payments
        simplifying your life letting you focus on running your events.
        <br />
        The process is simple, first tell us about your organization and once we
        verify you, you will be able to go live with your events. The hole
        process normally takes xx hours.
      </Text>
      <Box display="flex" justifyContent="center" mt="20px">
        <UnorderedList>
          <ListItem>Lorem ipsum dolor sit amet</ListItem>
          <ListItem>Consectetur adipiscing elit</ListItem>
          <ListItem>Integer molestie lorem at massa</ListItem>
          <ListItem>Facilisis in pretium nisl aliquet</ListItem>
        </UnorderedList>
      </Box>
      <form onSubmit={handleSubmit}>

      
      <Box display="flex" justifyContent="center" mt="15px">
        <Box
          bgColor="#E0E0E0"
          p={{ base: "20px", md: "20px", lg: "40px" }}
          borderRadius="20px"
          height="80%"
          width={{ base: "100%", md: "100%", lg: "45%", xl: "45%" }}
        >
          <FormControl>
            <InputGroup
              bgColor="white"
              p={{ base: "8px", md: "8px", lg: "10px" }}
              borderRadius="35px"
            >
              <Image alt="img" src="/user.svg" pl="18px" />
              <Input value={name} id="name" onChange={(e) => setName(e.target.value)} _focusVisible={{border:'none'}} type="Text" placeholder="Name" border="none" />
            </InputGroup>
            {errors.name && 
            <Text color="red">{errors.name}</Text>
            }
            <InputGroup
              mt="20px"
              bgColor="white"
              p={{ base: "8px", md: "8px", lg: "10px" }}
              borderRadius="35"
            >
              <Image alt="img" src="/mailboxz.svg" pl="15px" />
              <Input value={email} id="email" type="email" onChange={(e) => setEmail(e.target.value)}  _focusVisible={{border:'none'}}  placeholder="Email" border="none" />
            </InputGroup>
            {errors.email && 
            <Text color="red">{errors.email}</Text>
            }
          </FormControl>
          <Text
            fontWeight="700"
            fontSize="20px"
            fontStyle="bold"
            textColor="#1F1F1F"
            pt={{ base: "15px", md: "15px", lg: "25px" }}
          >
            Options
          </Text>
          <Box mt="15px">
            <Stack gap={{ base: "2px", md: "2px", lg: "30px" }}>
              <Checkbox _focusVisible={{borderColor:'black'}} size="md"  defaultChecked borderColor={"black"}>
              Show email
              </Checkbox>
              <Checkbox size="md"  borderColor={"black"} >
              Personal name is organization name
              </Checkbox>
              <Checkbox size="md"  borderColor={"black"} >
              Registered service with locality
              </Checkbox>
              <Checkbox size="md" borderColor={"black"} >
              Email notifications
              </Checkbox>
              <Checkbox size="md" borderColor={"black"} >
              Instant notifications
              </Checkbox>
              <Checkbox size="md" borderColor={"black"} >
              Authorised for pickup
              </Checkbox>
              <Checkbox size="md" borderColor={"black"} >
              Emegency contact
              </Checkbox>
            </Stack>
          </Box>
          <Box pt="25px">
          <Button mt='30px' type="submit" bg="#1F1F1F" colorScheme={"#1F1F1F"} 
     color="#FFFFFF"
     fontSize="14px"
     fontWeight="400"
     lineHeight={"150%"}
     p="8px 40px"
     borderRadius={"50px"}
     border="1px solid white"
    
    
     >
    Save Contact Prefernces
     </Button>
          </Box>
        </Box>
      </Box>
      </form>
    </Box>
    
  );
};
