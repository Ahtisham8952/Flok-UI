import { Box } from '@chakra-ui/react'
import React, { useState } from 'react'

import LoginStepOne from "./LoginStepOne"
import LayoutWrapper from '../LayoutWrapper/LayoutWrapper'
import LoginStepTwo from './LoginStepTwo'
const LoginPageMain = () => {
    const [step1,setstep1]=useState(false)
    const PageHandler=()=>{
        setstep1(!step1)
    }
  return (
   

   
   <Box>
    <Box  display={step1? 'none':'block'} >
     {/* <LoginPage nextPage={PageHandler}/> */}
<LoginStepOne nextPage={PageHandler}/>
    </Box>
    <Box display={step1? 'block':'none'}>
       <LoginStepTwo/>
    </Box>

   </Box>
  
  )
}

export default LoginPageMain