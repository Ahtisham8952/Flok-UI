import DashboardMain from '../../../src/components/app/Flok/DashBoardComponet';
import { userRoles } from '../../../src/utils/enums';

const DashboardPage = () => {
  return <DashboardMain />;
};

DashboardPage.auth = {
  role: [userRoles.ADMIN],
  redirectPath: '/login',
};
export default DashboardPage;
