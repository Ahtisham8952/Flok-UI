import AdminEventForm from '../../../src/components/app/Flok/EventPage/AdminEventForm';
import { userRoles } from '../../../src/utils/enums';

const AdminEventPage = () => {
  return <AdminEventForm />;
};

AdminEventPage.auth = {
  role: [userRoles.ADMIN],
  redirectPath: '/login',
};
export default AdminEventPage;
