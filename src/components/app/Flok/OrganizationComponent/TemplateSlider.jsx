import { Box, Button, Image, Img } from "@chakra-ui/react";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";


import TemplateSliderCard from "./TemplateSliderCard";


export default class TemplateSlider extends Component {
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
       <Box maxW={"1632px"} w="100%" mx="auto" >

      
        <Slider ref={c => (this.slider = c)} {...settings}   >
            
          <Box px={{base:'0px',md:'12px'}} >
         <TemplateSliderCard image="/mockselfie.png" Name="1" TrxID="0x791274c1252EdF95C..." rediectPage="/organizationPageStyle1"/>
          </Box>
          <Box px={{base:'0px',md:'12px'}} >
          <TemplateSliderCard image="/mockselfie.png" Name="2" TrxID="0x791274c1252EdF95C..." rediectPage="/organizationPageStyle2"/>
          </Box>
          <Box px={{base:'0px',md:'12px'}} >
          <TemplateSliderCard image="/mockselfie.png" Name="3" TrxID="0x791274c1252EdF95C..." rediectPage="/organizationPageStyle3"/>
          </Box>
          <Box px={{base:'0px',md:'12px'}}  >
          <TemplateSliderCard image="/mockselfie.png" Name="4" TrxID="0x791274c1252EdF95C..." rediectPage="/organizationPageStyle4"/>
          </Box>
          <Box px={{base:'0px',md:'12px'}}  >
          <TemplateSliderCard image="/mockselfie.png" Name="1" TrxID="0x791274c1252EdF95C..." rediectPage="/organizationPageStyle1"/>
          </Box>
          <Box px={{base:'0px',md:'12px'}} >
          <TemplateSliderCard image="/mockselfie.png" Name="2" TrxID="0x791274c1252EdF95C..." rediectPage="/organizationPageStyle2"/>
          </Box>
          
         
          
        </Slider>
        </Box>
        
        
      </Box>
    );
  }
}