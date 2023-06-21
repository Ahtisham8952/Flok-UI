import { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  ListItem,
  Radio,
  RadioGroup,
  Stack,
  Text,
  UnorderedList,
  VStack,
  Link,
} from '@chakra-ui/react';
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper"
import { useRouter } from 'next/router';
import ApiCaller from '../../../ApiCaller';



const FormComponent = () => {
  const { callApi } = ApiCaller();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userType, setUserType] = useState('');

  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();
  const validateForm = () => {

    const errors = {};

    if (!email) {
      errors.email = 'Email is required';
    }
    if (name.length <= 2) {
      errors.name = 'Name length should be greater than 2';
    }
    if (!name) {
      errors.name = 'Name is required';
    }

    if (!password) {
      errors.password = 'Password is required';
    }
    if (password.length < 8) {
      errors.password = 'Password must be greater than 8 characters';
    }

    if (!confirmPassword) {
      errors.confirmPassword = 'Confirm Password is required';
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    if (!userType) {
      errors.userType = 'User Type is required';
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if (!isValid) {
      return;
    }


    setSubmitting(true);

    const mutation = await callApi(`
      mutation RegisterUser {
        registerUser(
          registerUserInput: {
            email: "${email}",
            name: "${name}",
            password: "${password}",
            confirmPassword: "${confirmPassword}",
            userType: ${userType === 'PARENT' ? 'PARENT' : userType === 'ADMIN' ? 'ADMIN' : 'PROVIDER'}
          }
        ) {
          email
          name
        }
      }
    `);

    console.log(mutation);

    setSubmitting(false);
    router.push('/login');
  };

  return (
    <>
      <LayoutWrapper>
        <Box maxW={"1560px"} w='100%' px='20px' mx='auto'>
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



            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="stretch">
                <FormControl isInvalid={errors.name}>
                  <FormLabel fontWeight={'700'} htmlFor="name">Name</FormLabel>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    fontSize="14px" h={{ base: '45px', xl: '60px', xxl: '60px', xxxl: '90px' }} bg="white" borderRadius="5px"
                    fontWeight="400"

                    lineHeight={"150%"}
                  />
                  <FormErrorMessage>{errors.name}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.email}>
                  <FormLabel fontWeight={'700'} htmlFor="email">Email</FormLabel>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fontSize="14px" h={{ base: '45px', xl: '60px', xxl: '60px', xxxl: '90px' }} bg="white" borderRadius="5px"
                    fontWeight="400"

                    lineHeight={"150%"}
                  />
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                </FormControl>



                <FormControl isInvalid={errors.password}>
                  <FormLabel fontWeight={'700'} htmlFor="password">Password</FormLabel>
                  <Input
                    fontSize="14px" h={{ base: '45px', xl: '60px', xxl: '60px', xxxl: '90px' }} bg="white" borderRadius="5px"
                    fontWeight="400"

                    lineHeight={"150%"}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.confirmPassword}>
                  <FormLabel fontWeight={'700'} htmlFor="confirmPassword">Confirm Password</FormLabel>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    fontSize="14px" h={{ base: '45px', xl: '60px', xxl: '60px', xxxl: '90px' }} bg="white" borderRadius="5px"
                    fontWeight="400"

                    lineHeight={"150%"}
                    autoComplete="new-password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <FormErrorMessage>{errors.confirmPassword}</FormErrorMessage>
                </FormControl>
                <Box width="40%" pt="5px">
                  <Heading
                    as="h2"
                    fontSize={{ base: '20px', md: '24px' }}
                    fontWeight="700"
                    lineHeight="58px"
                    pt="5px"
                    pb="15px"
                    textColor="#1F1F1F"
                  >
                    Account type{" "}
                  </Heading>
                  <FormControl isInvalid={errors.userType}>

                    <RadioGroup
                      id="userType"
                      name="userType"
                      value={userType}
                      onChange={(value) => setUserType(value)}
                    >
                      <VStack spacing={2} alignItems={"left"} >
                        <Radio value="PARENT">Parent</Radio>
                        {/* <Radio value="ADMIN">Admin</Radio> */}
                        <Radio value="PROVIDER">Event provider / Organaization</Radio>
                      </VStack>
                    </RadioGroup>
                    <FormErrorMessage>{errors.userType}</FormErrorMessage>
                  </FormControl>

                </Box>
                <Box width="40%" pt="5px">
                  <Heading
                    as="h2"
                    fontSize={{ base: '20px', md: '24px' }}
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
                    <Checkbox defaultChecked>
                      Instant notifications
                    </Checkbox>
                  </Stack>
                </Box>
                <Box width="100%" pt="5px">
                  <Heading
                    as="h2"
                    fontSize={{ base: '20px', md: '24px' }}
                    fontWeight="700"
                    lineHeight="58px"
                    pt="5px"
                    pb="15px"
                    textColor="#1F1F1F"
                  >

                    Terms and Conditions:
                  </Heading>

                  <FormControl

                  >
                    <Checkbox
                      defaultChecked
                    >
                      I agree to the Privacy &  <Link href='/terms' textDecoration={"underline"}> Terms and Conditions</Link>
                    </Checkbox>

                  </FormControl>



                </Box>



                <Button alignItems={'center'} mt='30px' bg="#1F1F1F" colorScheme={"#1F1F1F"}
                  color="#FFFFFF"
                  fontSize="14px"
                  maxW={"200px"}
                  fontWeight="400"
                  lineHeight={"150%"}
                  p="8px 40px"
                  borderRadius={"50px"}
                  border="1px solid white"
                  type="submit" isLoading={submitting} loadingText="Submitting"
                >
                  Signup
                </Button>
              </VStack>
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
    </>
  );
};

export default FormComponent;
