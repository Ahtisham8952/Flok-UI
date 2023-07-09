import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  Image,
  Input,
  InputGroup,
  Text,
} from '@chakra-ui/react';
import React, { ChangeEvent } from 'react';
import { useState } from 'react';

export const OrganizationTemplateEdit = () => {
  const [coverPhoto, setCoverPhoto] = useState('');
  const [title, setTitle] = useState('');
  const [slogan, setSlogan] = useState('');
  const [details, setDetails] = useState([
    { title: '', description: '', photo: '' },
    { title: '', description: '', photo: '' },
    { title: '', description: '', photo: '' },
    { title: '', description: '', photo: '' },
  ]);
  const handleDetailsChange = (index: number, field: string, value: string) => {
    const updatedDetails = [...details];
    updatedDetails[index] = {
      ...updatedDetails[index],
      [field]: value,
    };
    setDetails(updatedDetails);
  };
  const handleCoverPhotoChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCoverPhoto(event.target.value);
  };

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleSloganChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSlogan(event.target.value);
  };

  const handleCreatePage = () => {
    console.log({
      coverPhoto,
      title,
      slogan,
      details,
    });
  };
  return (
    <Box px="10px" py="5px">
      <Box maxW="1844px" margin="auto">
        <Box
          position={'relative'}
          border="1px"
          borderWidth="5px"
          borderColor="#2E2E2E"
          height="457px"
          borderRadius="10px"
          display="flex"
          justifyContent="center"
          alignSelf="center"
          alignItems="center"
        >
          <Text
            fontSize="32px"
            fontWeight="700px"
            lineHeight="42px"
            textColor="#2E2E2E"
          >
            Add Cover Photo
          </Text>
          <Input
            position={'absolute'}
            height="457px"
            w="100%"
            opacity={'0.1'}
            type="file"
            value={coverPhoto}
            onChange={handleCoverPhotoChange}
          />
        </Box>
      </Box>

      <Divider
        mt="40px"
        orientation="horizontal"
        borderWidth="1px"
        color="#DAD9D9"
      />
      <Box maxW="1480px" margin="auto" p="20px">
        <Box
          display="flex"
          flexDirection={{ base: 'column', md: 'column', lg: 'row', xl: 'row' }}
        >
          <Box width={{ base: '100%', md: '100%', lg: '40%' }}>
            <Text
              fontSize={{ base: '20', md: '20', lg: '24' }}
              fontWeight="700"
              pb="10"
              pt="10"
              textColor="#1F1F1F"
            >
              Organization Name
            </Text>
            <Box bgColor="#E0E0E0" p="40px" borderRadius="20px" height="70%">
              <FormControl>
                <InputGroup bgColor="white" p="4" borderRadius="35">
                  <Input
                    type="Text"
                    placeholder="Add Title Name"
                    border="none"
                    value={title}
                    onChange={handleTitleChange}
                  />
                </InputGroup>
                <InputGroup mt="20px" bgColor="white" p="4" borderRadius="35">
                  <Input
                    value={slogan}
                    onChange={handleSloganChange}
                    type="Text"
                    placeholder="Add Slogan"
                    border="none"
                  />
                </InputGroup>
              </FormControl>
            </Box>
          </Box>
        </Box>
        <Box mt="40px">
          <Button
            bg="#1F1F1F"
            colorScheme={'#1F1F1F'}
            color="#FFFFFF"
            fontSize="14px"
            fontWeight="400"
            lineHeight={'150%'}
            p="8px 40px"
            borderRadius={'50px'}
            border="1px solid white"
          >
            Update
          </Button>
        </Box>
        <Divider
          mt="40px"
          orientation="horizontal"
          borderWidth="1px"
          color="#DAD9D9"
        />
        <Text
          fontSize={{ base: '20px', md: '20px', lg: '24px' }}
          fontWeight="700"
          pb="10"
          pt="10"
          textColor="#1F1F1F"
        >
          Add Organization details
        </Text>
        <Box
          display="flex"
          flexWrap={'wrap'}
          justifyContent="center"
          gap={{ base: '10px', md: '10px' }}
        >
          {details.map((detail, index) => (
            <Box
              key={index}
              bgColor="#E0E0E0"
              p="40px"
              borderRadius="20px"
              width={{ base: '100%', md: '48%', lg: '48%' }}
              mb="20px"
              height="50%"
            >
              <FormControl>
                <InputGroup bgColor="white" p="4" borderRadius="35">
                  <Input
                    value={detail.title}
                    onChange={(event) =>
                      handleDetailsChange(index, 'title', event.target.value)
                    }
                    type="Text"
                    placeholder="Name"
                    border="none"
                  />
                </InputGroup>
                <InputGroup mt="20px" bgColor="white" p="4" borderRadius="35">
                  <Input
                    value={detail.description}
                    onChange={(event) =>
                      handleDetailsChange(
                        index,
                        'description',
                        event.target.value
                      )
                    }
                    type="Text"
                    placeholder="Description"
                    border="none"
                  />
                </InputGroup>
                <InputGroup
                  mt="20px"
                  bgColor="white"
                  p="4"
                  borderRadius="35"
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  position={'relative'}
                >
                  <Image
                    src="uploadpic.svg"
                    alt="uploadpic"
                    height="20"
                    width="20"
                  />
                  <Text color="#67717D" fontSize="14px" fontWeight="300">
                    Add a Photo
                  </Text>
                  <Input
                    position={'absolute'}
                    h="100%"
                    opacity={'0.1'}
                    type="file"
                    value={detail.photo}
                    onChange={(event) =>
                      handleDetailsChange(index, 'photo', event.target.value)
                    }
                  />
                </InputGroup>
              </FormControl>
            </Box>
          ))}
        </Box>
        <Flex justifyContent="center">
          <Button
            bg="#1F1F1F"
            colorScheme={'#1F1F1F'}
            color="#FFFFFF"
            fontSize="14px"
            fontWeight="400"
            lineHeight={'150%'}
            p="8px 40px"
            borderRadius={'50px'}
            border="1px solid white"
            onClick={handleCreatePage}
          >
            Create Page
          </Button>
        </Flex>

        <Divider
          mt="40px"
          orientation="horizontal"
          borderWidth="1px"
          color="#DAD9D9"
        />
        <Box
          display="flex"
          flexDirection="row"
          alignContent="center"
          alignItems="center"
          justifyContent="space-between"
          mt="20px"
        >
          <Text
            fontSize={{ base: '20', md: '20', lg: '24' }}
            fontWeight="700px"
            pb="10px"
            pt="10px"
            textColor="#1F1F1F"
          >
            Active Orders
          </Text>
          <Button
            bg="#1F1F1F"
            colorScheme={'#1F1F1F'}
            color="#FFFFFF"
            fontSize="14px"
            fontWeight="400"
            lineHeight={'150%'}
            p="8px 40px"
            borderRadius={'50px'}
            border="1px solid white"
          >
            Create Event
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
