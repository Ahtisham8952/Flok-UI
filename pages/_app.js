// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'


import "@fontsource/rajdhani"






import { mynewtheme } from '../src/theme'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


import { useState } from 'react'

const queryClient = new QueryClient()
function Flok({ Component, pageProps }) {

  return (
    <ChakraProvider resetCSS theme={mynewtheme}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />


      </QueryClientProvider>
    </ChakraProvider>


  )
}

export default Flok