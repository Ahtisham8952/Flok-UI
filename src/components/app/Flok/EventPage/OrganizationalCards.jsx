import { Box, Grid, Image, Text } from '@chakra-ui/react'
import React from 'react'



const OrganizationData=[
    {
        Image:'/girlpreview.png',
        Title:'Organization Staff',
        Text:'Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',

    },
    {
        Image:'/girlpreview.png',
        Title:'Organization Details',
        Text:'Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',

    },
    {
        Image:'/girlpreview.png',
        Title:'Organization Staff',
        Text:'Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',

    },
    {
        Image:'/girlpreview.png',
        Title:'Organization Details',
        Text:'Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',

    },
]


const OrganizationalCards = () => {
  return (
    <>
     <Box>
     <Grid  templateColumns={{ base: "repeat(1, 1fr)",sm:"repeat(2, 1fr)", md: "repeat(2, 1fr)",lg:'repeat(2, 1fr)' }}  w="100%" gap="24px">
     {OrganizationData.map((j,index) => (
        <Box key={index}>
            <Image w='100%' mb='40px' alt="img" src={j.Image} />
            <Text
            
            color="#1F1F1F"
            fontSize="32px"
            fontWeight="600"
            lineHeight={"52px"}
          >
    {j.Title}
          </Text>
          <Text
            
            color="#787878"
            fontSize="20px"
            fontWeight="400"
            lineHeight={"30px"}
          >
       {j.Text}
          </Text>
        </Box>
     ))}
     </Grid>

     </Box>
    </>
  )
}

export default OrganizationalCards