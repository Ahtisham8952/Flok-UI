import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import AdminEventForm from '../../../src/components/app/Flok/EventPage/AdminEventForm';
import { userRoles } from '../../../src/utils/enums';
import { UserType } from '../../../src/utils/types';

const AdminEventPage = () => {
  return <AdminEventForm />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = parseCookies(context);
  const parsedUserData: UserType = cookies.userData
    ? JSON.parse(cookies.userData)
    : null;
  if (!parsedUserData) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  } else if (parsedUserData.userType !== userRoles.ADMIN) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default AdminEventPage;
