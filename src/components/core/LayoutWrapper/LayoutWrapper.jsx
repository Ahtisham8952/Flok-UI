import { Box } from "@chakra-ui/react";
import React from "react";
import Header from "../Header/Header";
import  Footer from "../../core/Footer/Footer"
const LayoutWrapper = ({ children }) => {
  return (
    <Box
   bg='#F3F3F3'
   minH={"100vh"}
    >
      <Header />
      {children}
      <Footer/>
    </Box>
  );
};

export default LayoutWrapper;
