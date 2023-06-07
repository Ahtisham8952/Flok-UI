import React from 'react'
import ReviewTabs from './ReviewTabs'
import { Box } from '@chakra-ui/react'
const ReviewTableData = [
    {
        CustomerImg: '/posterbay-1.svg',
        CustomerName: 'Anna Mulana',
        CustomerID: 'Daniel Alveson',
        Date: '03 Jan 2023',
        MovieName: 'Justice League : Black Adam',
        Review: 'Very thank you, very useful and I am very happy',


    },
    {
        CustomerImg: '/posterbay-1.svg',
        CustomerName: 'Anna Mulana',
        CustomerID: 'Daniel Alveson',
        Date: '03 Jan 2023',
        MovieName: 'Justice League : Black Adam',
        Review: 'Very thank you, very useful and I am very happy',


    },
    {
        CustomerImg: '/posterbay-1.svg',
        CustomerName: 'Anna Mulana',
        CustomerID: 'Daniel Alveson',
        Date: '03 Jan 2023',
        MovieName: 'Justice League : Black Adam',
        Review: 'Very thank you, very useful and I am very happy',


    },
    {
        CustomerImg: '/posterbay-1.svg',
        CustomerName: 'Anna Mulana',
        CustomerID: 'Daniel Alveson',
        Date: '03 Jan 2023',
        MovieName: 'Justice League : Black Adam',
        Review: 'Very thank you, very useful and I am very happy',


    },
    {
        CustomerImg: '/posterbay-1.svg',
        CustomerName: 'Anna Mulana',
        CustomerID: 'Daniel Alveson',
        Date: '03 Jan 2023',
        MovieName: 'Justice League : Black Adam',
        Review: 'Very thank you, very useful and I am very happy',


    },
   


]
const ReveiwSection = () => {
  return (
    <Box>
        <ReviewTabs AnalyticPageReview={ReviewTableData}/>

    </Box>
  )
}

export default ReveiwSection