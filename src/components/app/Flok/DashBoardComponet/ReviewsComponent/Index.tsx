import { Box } from '@chakra-ui/react';
import ReviewTabs from './ReviewTabs';
import { ReviewTableData } from '../../../../../utils/constants';

const ReviewSection = () => {
  return <ReviewTabs AnalyticPageReview={ReviewTableData} />;
};

export default ReviewSection;
