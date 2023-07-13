import React from 'react';
import UserCreateEvent from '../../../src/components/app/Flok/EventPage/Events';
import { userRoles } from '../../../src/utils/enums';

const CreateEventPage = () => {
  return <UserCreateEvent />;
};

CreateEventPage.auth = {
  role: [userRoles.PROVIDER],
  redirectPath: '/login',
};
export default CreateEventPage;
