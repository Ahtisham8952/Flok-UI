import Organization from '../../../src/components/app/Flok/OrganizationComponent/OrganizationPageStyle1';
import { userRoles } from '../../../src/utils/enums';

const OrganizationPageStyle1 = () => {
  return <Organization />;
};

OrganizationPageStyle1.auth = {
  role: [userRoles.PROVIDER],
  redirectPath: '/login',
};
export default OrganizationPageStyle1;
