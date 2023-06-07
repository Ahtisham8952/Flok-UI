// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'


import "@fontsource/rajdhani"

import LayoutWrapper from '../src/components/core/LayoutWrapper/LayoutWrapper'




import { mynewtheme } from '../src/theme'
import LandingPage from '../src/components/app/Flok/LandingPage/Index'
import EventMain from '../src/components/app/Flok/EventPage'

function Flok({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={mynewtheme}>
     
       
     

     
        <Component {...pageProps} />
       
     
    </ChakraProvider>
    
  
  )
}

export default Flok