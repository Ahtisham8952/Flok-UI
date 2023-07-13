import { ParentProfile } from '../../../src/components/app/Flok/UserProfile/ParentProfile';
import { userRoles } from '../../../src/utils/enums';

const ParentProfilePage = () => {
  return <ParentProfile />;
};

ParentProfilePage.auth = {
  role: [userRoles.PARENT],
  redirectPath: '/login',
};
export default ParentProfilePage;
