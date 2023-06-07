import { Box, Button, Flex, Image, Img, Link, Text } from "@chakra-ui/react";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

import SliderCard from "./SliderCard";
const FlokEventsData=[
  {
    image:'/childplay-1.png',
    Title:'Event title',
    Date:'Time',
    Location:' Lambda',
    Price:' $$$',
    Description:'Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid..',

  },
  {
    image:'/childplay-1.png',
    Title:'Event title',
    Date:'Time',
    Location:' Lambda',
    Price:' $$$',
    Description:'Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid..',

  },
  {
    image:'/childplay-1.png',
    Title:'Event title',
    Date:'Time',
    Location:' Lambda',
    Price:' $$$',
    Description:'Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid..',

  },
  {
    image:'/childplay-1.png',
    Title:'Event title',
    Date:'Time',
    Location:' Lambda',
    Price:' $$$',
    Description:'Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid..',

  },
  {
    image:'/childplay-1.png',
    Title:'Event title',
    Date:'Time',
    Location:' Lambda',
    Price:' $$$',
    Description:'Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid..',

  },
]

export default class SimpleSlider extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
      }
      next() {
        this.slider.slickNext();
      }
      previous() {
        this.slider.slickPrev();
      }
      render() {
        const settings = {
          dots: false,
          infinite: true,
          arrows: false,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
          responsive: [
            {
                breakpoint: 1400,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 4,
                  infinite: true,
                  dots: true
                }
              },
            {
                breakpoint: 1300,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 1100,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        };
    return (
        
      <Box position={"relative"}>
        
        <Box
          position={"absolute"}
          display={"flex"}
          justifyContent={"space-between"}
          zIndex={"99"}
          top="50%"
        >
          <Button
            justifyContent={"left"}
            px="0px"
            bg="transparent"
            colorScheme={"transparent"}
            onClick={this.previous}
          >
            <Image alt="img" h={{base:'20px',md:'30px'}} src="/dullleft.svg"></Image>
          </Button>
        </Box>
        <Box
          position={"absolute"}
          display={"flex"}
          justifyContent={"space-between"}
          right="0px"
          top="50%"
          zIndex={"99"}
        >
          <Button
            justifyContent={"right"}
            px="0px"
            onClick={this.next}
            bg="transparent"
            colorScheme={"transparent"}
          >
            <Image alt="img" h={{base:'20px',md:'30px'}} src="/dullarows.svg"></Image>
          </Button>
        </Box>
       <Box   
          w="100%"
          mx="auto"
          px={{ base: "20px", md: "40px", lg: "80px" }} >

      
        <Slider ref={c => (this.slider = c)} {...settings}   >
            
          <Box px={{base:'10px',xl:'15px',xxl:'25px'}} >
         <SliderCard image="/childplay-1.png" Name="Perry Unknown" TrxID="0x791274c1252EdF95C..."/>
          </Box>
          {FlokEventsData.map((li,index) => (
  <Box key={index} p="10px" mx="10px" as={Link} href='/event' textDecoration={"none"} >

   
  <Box bg="#FFFFFF"  >
  <Box mb="20px">
  <Image alt="img"w="100%" src={li.image}></Image>
  </Box>
 <Box p='20px'>
 <Text
           mb='20px'
           color="#1F1F1F"
           fontSize="24px"
           fontWeight="700"
           lineHeight={"34px"}
         >
     {li.Title}
         </Text>
         <Flex alignItems={"center"} gap='5px' mb='6px'>
         <Text
         
           color="#878787"
           fontSize="18px"
           fontWeight="300"
           lineHeight={"25px"}
         >
    Date: 
         </Text>
         <Text
         
         color="#878787"
         fontSize="18px"
         fontWeight="300"
         lineHeight={"25px"}
       >
   {li.Date}
       </Text>
         
         </Flex>
         <Flex alignItems={"center"} gap='5px' mb='6px'>
         <Text
         
           color="#878787"
           fontSize="18px"
           fontWeight="300"
           lineHeight={"25px"}
         >
   Location: 
         </Text>
         <Text
         
         color="#878787"
         fontSize="18px"
         fontWeight="300"
         lineHeight={"25px"}
       >
    {li.Location}
       </Text>
         
         </Flex>
         <Flex alignItems={"center"} gap='5px' mb='15px'>
         <Text
         
           color="#878787"
           fontSize="18px"
           fontWeight="300"
           lineHeight={"25px"}
         >
   Price :
         </Text>
         <Text
         
         color="#878787"
         fontSize="18px"
         fontWeight="300"
         lineHeight={"25px"}
       >
   {li.Price}
       </Text>
         
         </Flex>
         <Text
         
         color="#878787"
         fontSize="18px"
         fontWeight="300"
         lineHeight={"25px"}
       >
 {li.Description}
       </Text>
 </Box>
   

  </Box>
  </Box>
))}
          {/* <Box px={{base:'10px',xl:'15px',xxl:'25px'}} >
          <SliderCard image="/childplay-1.png" Name="Perry Unknown" TrxID="0x791274c1252EdF95C..."/>
          </Box>
          <Box  px={{base:'10px',xl:'15px',xxl:'25px'}}>
          <SliderCard image="/childplay-1.png" Name="Perry Unknown" TrxID="0x791274c1252EdF95C..."/>
          </Box>
          <Box   px={{base:'10px',xl:'15px',xxl:'25px'}}>
          <SliderCard image="/childplay-1.png" Name="Perry Unknown" TrxID="0x791274c1252EdF95C..."/>
          </Box>
          <Box px={{base:'10px',xl:'15px',xxl:'25px'}}  >
          <SliderCard image="/childplay-1.png" Name="Perry Unknown" TrxID="0x791274c1252EdF95C..."/>
          </Box>
          <Box px={{base:'10px',xl:'15px',xxl:'25px'}} >
          <SliderCard image="/childplay-1.png" Name="Perry Unknown" TrxID="0x791274c1252EdF95C..."/>
          </Box> */}
          
         
          
        </Slider>
        </Box>
        
        
      </Box>
    );
  }
}