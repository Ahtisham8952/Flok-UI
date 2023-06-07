import { Box, Checkbox,Text, FormControl, FormLabel, Heading, Input, ListItem, Radio, Stack, UnorderedList, RadioGroup, Button, Link, Flex } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LayoutWrapper from '../LayoutWrapper/LayoutWrapper'
import { useFormik } from 'formik';
import { VStack, FormErrorMessage } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';

import * as yup from 'yup';
import { useRouter } from 'next/router';
const validationSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  accountType: yup.string().required('Account Type is required'),
  agreeTerms: yup.boolean().oneOf([true], 'You must agree to the terms and conditions').required('You must agree to the terms and conditions'),
});
const Registration = () => {
  const router = useRouter()
  const [accountType, setAccountType] = useState('');

  const initialValues = {
    name: '',
    email: '',
    password: '',
    accountType: '',
    emailNotifications: false,
    instantNotifications: false,
  };

  const handleSubmit = (values) => {
    if (values.agreeTerms) {
      console.log(values);
      localStorage.setItem('accountType',values.accountType);
      router.push('/login');
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });
  const handleAccountTypeChange = (value) => {
    formik.setFieldValue('accountType', value);
    
  };
  const handleAgreeTermsChange = (event) => {
    formik.setFieldValue('agreeTerms', event.target.checked);
  };
  return ( 
    <LayoutWrapper>

    <Box maxW={"1560px" } w='100%' px='20px' mx='auto'>

    
    <Box py='32px'>
    <Heading
      as="h2"
      fontSize="48px"
      fontWeight="700px"
      lineHeight="58px"
      textAlign="center"
      pt="5px"
      pb="15px"
    >
      Join the Flok
    </Heading>
    <Text
      textAlign="center"
      fontWeight="300px"
      color="#626262"
      size="16px"
      pt="30px"
    >
      Complete the registration to enhance your Flok experience and unliock
      enhanced features.
    </Text>
    <Box display="flex" justifyContent="center">
      <UnorderedList>
        <ListItem>Lorem ipsum dolor sit amet</ListItem>
        <ListItem>Consectetur adipiscing elit</ListItem>
        <ListItem>Integer molestie lorem at massa</ListItem>
        <ListItem>Facilisis in pretium nisl aliquet</ListItem>
      </UnorderedList>
    </Box>
    
    <form>
        <Box>
            
    <Box maxW={ "852px" } pt="40px" display={"flex"} flexDirection={"column"} gap='20px'>
       
            
        
    <FormControl  id="name" isInvalid={formik.errors.name && formik.touched.name}>
        <FormLabel fontWeight={'700'}>NAME </FormLabel>
        
      
            <Input fontSize="14px"h={{base:'45px',xl:'60px',xxl:'60px',xxxl:'90px'}} bg="white" borderRadius="5px"
            fontWeight="400"
            type='text'
            lineHeight={"150%"}   {...formik.getFieldProps('name')} placeholder='Enter Username'  border="none" _focusVisible={{border:'none'}}/>
           <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
       
      </FormControl>
      <FormControl id="email" isInvalid={formik.errors.email && formik.touched.email} >
        <FormLabel fontWeight={'700'}>Email </FormLabel>
        
        
             <Input fontSize="14px"
            fontWeight="400"
            type='email'
            lineHeight={"150%"} h={{base:'45px',xl:'60px',xxl:'60px',xxxl:'90px'}} bg="white" borderRadius="5px" placeholder='Enter Your Email'  {...formik.getFieldProps('email')} border="none" _focusVisible={{border:'none'}}  />
         <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
       
      </FormControl>
      <FormControl  id="password" isInvalid={formik.errors.password && formik.touched.password} >
        <FormLabel fontWeight={'700'}>password </FormLabel>
       
        
            <Input fontSize="14px"
            fontWeight="400"
            type='password'
            lineHeight={"150%"} h={{base:'45px',xl:'60px',xxl:'60px',xxxl:'90px'}} bg="white" borderRadius="5px" placeholder='Enter Your Password'  {...formik.getFieldProps('password')} border="none" _focusVisible={{border:'none'}} />
          <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
        
      </FormControl>
    </Box>
    <Box width="40%" pt="5px">
      <Heading
        as="h2"
        fontSize={{base:'20px',md:'24px'}}
        fontWeight="700"
        lineHeight="58px"
        pt="5px"
        pb="15px"
        textColor="#1F1F1F"
      >
        Account type{" "}
      </Heading>
      <Stack>
      <FormControl
        id="accountType"
        isInvalid={formik.errors.accountType && formik.touched.accountType}
      >
        <FormLabel>Account Type</FormLabel>
        <RadioGroup
          value={formik.values.accountType}
          onChange={handleAccountTypeChange }
          onBlur={formik.handleBlur('accountType')}
        >
          <VStack spacing={2} alignItems="flex-start">
            <Radio value="parent">Parent</Radio>
            <Radio value="organization">Organization</Radio>
          </VStack>
        </RadioGroup>
        <FormErrorMessage>{formik.errors.accountType}</FormErrorMessage>
      </FormControl>
        
      </Stack>
    </Box>
    <Box width="40%" pt="5px">
      <Heading
        as="h2"
        fontSize={{base:'20px',md:'24px'}}
        fontWeight="700"
        lineHeight="58px"
        pt="5px"
        pb="15px"
        textColor="#1F1F1F"
      >
        Notification:
      </Heading>
      <Stack>
        <Checkbox  >
          Email
        </Checkbox>
        <Checkbox  defaultChecked>
          Instant notifications
        </Checkbox>
      </Stack>
    </Box>
    <Box width="100%" pt="5px">
      <Heading
        as="h2"
        fontSize={{base:'20px',md:'24px'}}
        fontWeight="700"
        lineHeight="58px"
        pt="5px"
        pb="15px"
        textColor="#1F1F1F"
      >
        
        Terms and Conditions:
      </Heading>
      {/* <Flex gap='5px ' flexDirection={{base:'column',md:'row'}}>
      <Stack>
        <Checkbox 
        defaultChecked >
        I agree to the Privacy & 
        </Checkbox>
        
      </Stack>
      <Link href='/terms' textDecoration={"underline"}> Terms and Conditions</Link>
      </Flex> */}
       {/* <FormControl
        isInvalid={formik.errors.agreeTerms && formik.touched.agreeTerms}
      >
        <Checkbox
          id="agreeTerms"
          isChecked={formik.values.agreeTerms}
          onChange={handleAgreeTermsChange}
        >
          I agree to the Privacy &  <Link href='/terms' textDecoration={"underline"}> Terms and Conditions</Link>
        </Checkbox>
        <FormErrorMessage>{formik.errors.agreeTerms}</FormErrorMessage>
      </FormControl> */}
        <FormControl
        isInvalid={formik.errors.agreeTerms && formik.touched.agreeTerms}
      >
        <Checkbox
          id="agreeTerms"
          isChecked={formik.values.agreeTerms}
          onChange={handleAgreeTermsChange}
        >
          I agree to the Privacy &  <Link href='/terms' textDecoration={"underline"}> Terms and Conditions</Link>
        </Checkbox>
        <FormErrorMessage>{formik.errors.agreeTerms}</FormErrorMessage>
      </FormControl>

      {formik.errors.agreeTerms && !formik.touched.agreeTerms && (
        <Box color="red" mt={2}>
          {formik.errors.agreeTerms}
        </Box>
      )}
     
    </Box>
    <Button mt='30px' type="submit" bg="#1F1F1F" colorScheme={"#1F1F1F"} 
     color="#FFFFFF"
     fontSize="14px"
     fontWeight="400"
     lineHeight={"150%"}
     p="8px 40px"
     borderRadius={"50px"}
     border="1px solid white"
     onClick={formik.handleSubmit}
     >
     Signup
     </Button>
    </Box>

    </form>
    <Text
    mt='20px'
            
            color="#1F1F1F"
            fontSize="16px"
            fontWeight="300"
            lineHeight={"150%"}
          >
            Already Have a Account?
       <Link
       color="#1F1F1F"
       href="/login"
       textDecoration={"underline"}
       mx='10px'
       fontSize="20px"
            fontWeight="600"
            lineHeight={"150%"}
       >
        Login
       </Link>
          </Text>
  </Box>
  </Box>
  </LayoutWrapper>
  )
}

export default Registration

