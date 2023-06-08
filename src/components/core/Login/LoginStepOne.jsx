import { Box, Flex,Link, Heading, Text, Grid, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import React, { useState } from "react";

import LayoutWrapper from "../LayoutWrapper/LayoutWrapper"

import * as Yup from 'yup';

import { useHistory } from 'react-router-dom';
import { useFormik } from "formik";
import { useRouter } from "next/router";


const LoginPage = ({nextPage}) => {
  const router = useRouter()

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
     
      console.log(values);
     
      const accountType = localStorage.getItem('accountType');
      console.log(accountType)
      if (accountType === 'parent') {
        router.push('/parentlogin');
      } else if (accountType === 'organization') {
        router.push('/organizationlogin');
      }
    },
  });
  return (
    <LayoutWrapper>
<Box maxW={"1760px"} w='100%' px='20px' mx={"auto"} >


    
    <Box  py={{base:'40px',md:'85px'}}>
      <Heading
        as="h2"
        fontSize="48px"
        fontWeight="700px"
        lineHeight="58px"
        textAlign="center"
       
      >
        Login
      </Heading>

      <Text
      pt={{base:'20px',md:'89px'}}
      textAlign={{base:'center',md:'flex-start'}}
      maxW={"1470px"}
        fontWeight="700px"
        fontSize={{base:'18px',md:'24px',lg:'26px',xl:'32px'}}
        lineHeight={{base:'28px',md:'34px',lg:'36px',xl:'40px'}}
       
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incid ut labore et dolore magna aliqua.
      </Text>

      <Text
        textAlign={{base:'center',md:'flex-start'}}
        fontWeight="300px"
        fontSize={{base:'18px',md:'20px',lg:'22px',xl:'24px'}}
        lineHeight={{base:'18px',md:'30px',lg:'32px',xl:'34px'}}
        pt="25px"
        pb="15px"
        
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incid ut labore et dolore magna aliqua.
      </Text>

      <Box>
        <form onSubmit={formik.handleSubmit}>
          <Flex display={"flex" } gap={{base:'30px',md:'75px'}} maxW={"1450px"} w='100%' mt='75px' flexDirection={{base:'column',md:'row'}}>
        
      <FormControl>
        <FormLabel htmlFor="email">Email</FormLabel>
        
        <Box h={{base:'45px',xl:'60px',xxl:'60px',xxxl:'90px'}} bg="white" borderRadius="5px">
        <Input fontSize="14px"
            fontWeight="300"
            id="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            lineHeight={"150%"} h='100%' placeholder='Enter you Username' border="none" _focusVisible={{border:'none'}}  />
        </Box>
        {formik.touched.email && formik.errors.email && <Box color="red">{formik.errors.email}</Box>}
      </FormControl>
     
       <FormControl>
        <FormLabel htmlFor="password">Password</FormLabel>
       
          <Box h={{base:'45px',xl:'60px',xxl:'60px',xxxl:'90px'}} bg="white" borderRadius="5px">
        <Input fontSize="14px"
            fontWeight="300"
            lineHeight={"150%"}  id="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password} h='100%' _focusVisible={{border:'none'}}  placeholder='Enter your Password'   />
        </Box>
        {formik.touched.password && formik.errors.password && <Box color="red">{formik.errors.password}</Box>}
      </FormControl>
          </Flex>
          <Flex pt="50px " gap="30px" alignItems={"center"}>
      <Button type="submit" bg="#1F1F1F" colorScheme={"#1F1F1F"} 
     color="#FFFFFF"
     fontSize="14px"
     fontWeight="400"
     lineHeight={"150%"}
     p="8px 40px"
     borderRadius={"50px"}
     border="1px solid white"
    //  onClick={nextPage}
     >
     Login
     </Button>
    
      </Flex>
       
        </form>
      </Box>

      <Box pt="40px">
        <Flex gap="20px">
          <Text fontSize="16px" color="#717171">
            Lost Password ?
          </Text>
          <Text fontSize="16px" color="#717171" fontWeight="bold">
            Reset your password
          </Text>
        </Flex>
      </Box>
      
      <Box mt='20px'>
      <Text
              href="/signup"
            color="#1F1F1F"
            fontSize="18px"
            fontWeight="400"
            lineHeight={"150%"}
          >
       Not Registered yet? 
       <Link mx='10px' fontSize={{base:'14px',lg:'20px'}}
        href="/signup"
       textDecoration={"underline"}
            fontWeight="600">
       Create an account
       </Link>
          </Text>
         
     
      </Box>
      
    </Box>
    </Box>
    </LayoutWrapper>
  );
};
export default LoginPage;