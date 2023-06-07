import { Box, Flex, Image, Input, Text } from '@chakra-ui/react'
import React from 'react'
import SalesRevenueTable from './SalesRevenueTable'
import RevenueInsight from './RevenueInsight'
import CalendarSlider from './CalendarSlider'
import DashBoardHeader from './DashBoardHeader'
import SalesInsight from './SalesInsight'
const EventsDetail=[
    {
        Image:'/vakanda.svg',
        Title:'Black Panther : Wakanda Forever',
        genre:'Action • 161 mins',


    },
    {
        Image:'/vakanda.svg',
        Title:'Black Panther : Wakanda Forever',
        genre:'Action • 161 mins',


    },
    {
        Image:'/vakanda.svg',
        Title:'Black Panther : Wakanda Forever',
        genre:'Action • 161 mins',


    },
]
const CustomerList=[
    {
        Image:'/ryan.svg',
        Name:'Ryan Renold',
        id:'cutomerID#RH070604',
    },
    {
        Image:'/ryan.svg',
        Name:'Ryan Renold',
        id:'cutomerID#RH070604',
    },
    {
        Image:'/ryan.svg',
        Name:'Ryan Renold',
        id:'cutomerID#RH070604',
    },
    {
        Image:'/ryan.svg',
        Name:'Ryan Renold',
        id:'cutomerID#RH070604',
    },
    {
        Image:'/ryan.svg',
        Name:'Ryan Renold',
        id:'cutomerID#RH070604',
    },
    {
        Image:'/ryan.svg',
        Name:'Ryan Renold',
        id:'cutomerID#RH070604',
    },
]
const DashboardTabContent = () => {
  return (
    <Box>
        {/* Profile Upper Box */}
        <DashBoardHeader/>
        <Box pl={{base:'0px',lg:'10px',xxxl:'56px'}} py={{base:'20px',lg:'53px'}}>
            <Flex w='100%' justifyContent={"space-between"} gap='38px' flexDirection={{base:'column',xl:'row'}} p={{base:'20px',lg:'0px'}}>
            <Box w={{base:'100%',xxl:'70%'}}>
                <Box mb='47px'>
                <Text
            
            color="#191919"
            fontSize="24px"
            fontWeight="700"
            lineHeight={"150%"}
            mb='10px'
          >
      Welcome, (Organization Name)
          </Text>
          <Text
            
            color="#757575"
            fontSize="16px"
            fontWeight="500"
            lineHeight={"150%"}
          >
      We are here to help manage your events!
          </Text>
                </Box>
                <SalesInsight/>
                <Box>
            <RevenueInsight/>
          </Box>
        
        </Box>
        <Box w={{base:'100%',xxl:'30%'}}>
<Box border={"1px solid #E7E7E7"} py="24px" px='22px' borderRadius={"10px"}>
    <Box>
        <CalendarSlider/>
    </Box>
    <Box>
    {EventsDetail.map((list,index) => (
        <Flex key={index} gap='20px' alignItems={"center"} pb='20px' borderBottom={" 1px solid #E7E7E7"} my="50px" flexWrap={"wrap"} >
            <Image  alt="img" src={list.Image}></Image>
<Box>
<Text
            
            color="#191919"
            fontSize="16px"
            fontWeight="500"
            lineHeight={"150%"}
          >
       {list.Title}
          </Text>
          <Text
            
            color="#BABABA"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"16px"}
          >
      {list.genre}
          </Text>
</Box>
            </Flex>
    ))}


    </Box>
    <Box>
    <Text
            
            color="#191919"
            fontSize="18px"
            fontWeight="600"
            lineHeight={"150%"}
          >
        Customer List
          </Text>
    </Box>
    {CustomerList.map((li,index) => (
        <Flex key={index} justifyContent={"space-between"} my='50px'>
<Flex gap='20px' alignItems={"center"} pb='20px'  >
 <Image alt="img" src={li.Image}></Image>
<Box>
<Text
 
 color="#191919"
 fontSize="16px"
 fontWeight="500"
 lineHeight={"150%"}
>
{li.Name}
</Text>
<Text
 
 color="#BABABA"
 fontSize="12px"
 fontWeight="500"
 lineHeight={"16px"}
>
{li.id}
</Text>
</Box>
 </Flex>
 <Flex alignItems={"center"} gap='12px'>
    <Image alt="img" src="/chatsicon.svg"></Image>
    <Image alt="img" src="/callsicon.svg"></Image>

 </Flex>
        </Flex>
 
))}

</Box>
        </Box>
            </Flex>
      
        </Box>

    </Box>
  )
}

export default DashboardTabContent