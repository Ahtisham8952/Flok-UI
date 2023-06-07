import { Box,Text,Image,Flex,Grid } from '@chakra-ui/react'
import React from 'react'
const StepsData=[
    {
  Image:'/chatinstruct-1.svg',
  Title:'Create your own event',
  Description:'Want to host a local event? Create your own!',
  width:'257px',
    },
    {
      Image:'/chatinstruct-2.svg',
      Title:'Join to get notified of interests',
      Description:'Stay up to date on new events that you want your kids to be the first to go to.',
      width:'344px',
        },
        {
          Image:'/chatinstruct-3.svg',
          Title:'Simplify your organizations events',
          Description:'Let Flok handle your bookings, registrations, and payment collection.  Simplify your business so that you can focus on what you do best.',
          width:'344px',
            },
            {
              Image:'/chatinstruct-4.svg',
              Title:'We care about our children',
              Description:'We are parents too, so we care about what our children are doing.  Our mission is to protect our children while giving them a place to learn, make mistakes and grow as part of the community. ',
              width:'344px',
                },
  ]
const InstructionSteps = () => {
  return (
    <Box bg="#1F1F1F">

        
        <Box  py="34px" maxW={"1733px"} w="100%" mx="auto" px="20px">
        <Grid  templateColumns={{ base: "repeat(1, 1fr)",sm:"repeat(2, 1fr)", md: "repeat(3, 1fr)",lg:'repeat(4, 1fr)' }}  w="100%" gap="24px">
          {StepsData.map((li, index) => (
          <Box key={index}>
            <Image alt="img" mx="auto" pb="16px" src={li.Image}></Image>
            <Text
            mb="8px"
            color="#FFFFFF"
            fontSize={{base:'14px',md:'16px',lg:'20px'}}
            fontWeight="700"
            lineHeight={"30px"}
            textAlign="center"
          >
      {li.Title}
          </Text>
          <Text
            mb="8px"
            color="#FFFFFF"
            fontSize={{base:'12px',md:'14px',lg:'16px'}}
            fontWeight="300"
            lineHeight={"25px"}
            textAlign="center"
            maxW={li.width}
            mx="auto"
          >
    {li.Description}
          </Text>
          </Box>
          ))}
          

          </Grid>
         

        </Box>
        </Box>
  )
}

export default InstructionSteps