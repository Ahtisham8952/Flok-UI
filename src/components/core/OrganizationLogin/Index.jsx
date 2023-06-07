import React, { useState } from 'react'
import { OrganizationloginStepOne } from './OrganizationloginStepOne'
import { OrganizationloginStepTwo } from './OrganizationloginStepTwo'
import { Box } from '@chakra-ui/react'
import LayoutWrapper from '../LayoutWrapper/LayoutWrapper'
import { OrganizationProfile } from '../../app/Flok/OrganizationComponent/OrganizationProfile'

const OrganizationLogin = () => {
    const [step, setStep] = useState('one');

    const changeStep = (value) => {
      setStep(value);
      console.log(value);
    };
  
   
    
  return (
    

   
   <Box>
    
   {step === "one" && (
    <Box   >
        <LayoutWrapper>

       
        <OrganizationloginStepOne nextStep={() => changeStep("two")} />
        </LayoutWrapper>
    </Box>
   )}
    {step === "two" && (
    <Box >
        <LayoutWrapper>

        
        <OrganizationloginStepTwo seeProfile={() => changeStep("three")} />
        </LayoutWrapper>
    </Box>
    )}
    {step === "three" && (
    <Box >
        <OrganizationProfile  />
    </Box>
    )}

   </Box>
   
  )
}

export default OrganizationLogin