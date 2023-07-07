import { Box } from '@chakra-ui/react';
import DashBoardHeader from './DashBoardHeader';
import ReviewTabs from './ReviewsComponent/ReviewTabs';
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
];
const ReviewCustomerTabContent = () => {
  return (
    <Box>
      <DashBoardHeader />
      <Box p="30px">
        <ReviewTabs AnalyticPageReview={ReviewTableData} />
      </Box>
    </Box>
  );
};

export default ReviewCustomerTabContent;
