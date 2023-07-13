import OrganizationPage2 from '../../../src/components/app/Flok/OrganizationComponent/OrganizationPageStyle2';
import { userRoles } from '../../../src/utils/enums';

const OrganizationPageStyle2 = () => {
  return <OrganizationPage2 />;
};

OrganizationPageStyle2.auth = {
  role: [userRoles.PROVIDER],
  redirectPath: '/login',
};
export default OrganizationPageStyle2;
