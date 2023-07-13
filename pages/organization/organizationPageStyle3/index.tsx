import OrganizationPage3 from '../../../src/components/app/Flok/OrganizationComponent/OrganizationPageStyle3';
import { userRoles } from '../../../src/utils/enums';

const OrganizationPageStyle3 = () => {
  return <OrganizationPage3 />;
};

OrganizationPageStyle3.auth = {
  role: [userRoles.PROVIDER],
  redirectPath: '/login',
};
export default OrganizationPageStyle3;
