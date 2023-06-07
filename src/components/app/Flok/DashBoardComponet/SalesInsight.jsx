import { Box,Flex,Text,Image, } from '@chakra-ui/react'
import React from 'react'
import SalesRevenueTable from './SalesRevenueTable'
const salesInsight=[
    {
        Img:'/profiletypeimg.svg',
        Label:'Customer',
        Price:'2.485',
        imgGrade:'/valueincrease.svg',
        Percentage:'24.5%',
        percolor:'#59CC3D',

    },
    {
        Img:'/profiletypeimg.svg',
        Label:'Revenue',
        Price:'2.485',
        imgGrade:'/valueincrease.svg',
        Percentage:'24.5%',
        percolor:'#59CC3D',

    },
    {
        Img:'/profiletypeimg.svg',
        Label:'Balance',
        Price:'2.485',
        imgGrade:'/valueincrease.svg',
        Percentage:'24.5%',
        percolor:'#59CC3D',

    },
]
const SalesInsight = () => {
  return (
    <Box border='1px solid #E7E7E7 ' borderRadius={"10px"} py='10px' px="32px">
    <Text

color="#191919"
fontSize="24px"
fontWeight="700"
lineHeight={"150%"}
mb='10px'
>
Sales Revenue
</Text>
<Text
mb='40px'
color="#757575"
fontSize="16px"
fontWeight="500"
lineHeight={"150%"}
>
We are here to help manage your ticket!
</Text>
{/* sales Revenue Deals */}
<Flex justifyContent={"space-between"} mb='40px' flexWrap={"wrap"}>
{salesInsight.map((li,index) => (
    <Flex key={index} alignItems={"center"} gap="16px" flexDirection={{base:'column',lg:'row'}}>
    <Box bg='#E6E6E6' borderRadius={"10px"} p={{base:'8px',lg:'17px'}}>
        <Image  alt="img" src={li.Img}></Image>

    </Box>
    <Box>
    <Text

color="#757575"
fontSize={{base:'12px',md:'14px',lg:'16px'}}
fontWeight="500"
lineHeight={"150%"}
>
{li.Label}
</Text>
<Text

color="#191919"
fontSize={{base:'16px',md:'18px',lg:'24px'}}
fontWeight="700"
lineHeight={"150%"}

>
{li.Price}
</Text>

    </Box>
    <Flex alignItems={"center"} gap="6px">
    <Image  alt="img" src={li.imgGrade}></Image>
    <Text

color={li.percolor}
fontSize="12px"
fontWeight="600"
lineHeight={"150%"}
>
{li.Percentage}
</Text>
</Flex>

</Flex>
))}



</Flex>
<Box>
<SalesRevenueTable/>
</Box>


    </Box>
  )
}

export default SalesInsight