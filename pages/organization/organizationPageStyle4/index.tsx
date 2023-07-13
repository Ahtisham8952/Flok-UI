import React from 'react';
import OrganizationPageStyle4 from '../../../src/components/app/Flok/OrganizationComponent/OrganizationPageStyle4';
import { userRoles } from '../../../src/utils/enums';

const OrganizationPageFour = () => {
  return <OrganizationPageStyle4 />;
};

OrganizationPageFour.auth = {
  role: [userRoles.PROVIDER],
  redirectPath: '/login',
};
export default OrganizationPageFour;
