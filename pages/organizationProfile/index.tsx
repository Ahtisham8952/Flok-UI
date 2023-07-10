import { OrganizationProfile } from '../../src/components/app/Flok/OrganizationComponent/OrganizationProfile';
import { userRoles } from '../../src/utils/enums';

const OrganizationProfilePage = () => {
  return <OrganizationProfile />;
};

OrganizationProfilePage.auth = {
  role: [userRoles.PROVIDER],
  redirectPath: '/login',
};
export default OrganizationProfilePage;
