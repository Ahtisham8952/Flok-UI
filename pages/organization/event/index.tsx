import React from 'react';
import EventMain from '../../../src/components/app/Flok/EventPage';
import { userRoles } from '../../../src/utils/enums';

const Home = () => {
  return <EventMain />;
};

Home.auth = {
  role: [userRoles.PROVIDER],
  redirectPath: '/login',
};
export default Home;
