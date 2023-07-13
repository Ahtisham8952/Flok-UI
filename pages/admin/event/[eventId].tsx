import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import { FC } from 'react';
import AdminEventForm from '../../../src/components/app/Flok/EventPage/AdminEventForm';
import { userRoles } from '../../../src/utils/enums';
import { UserType } from '../../../src/utils/types';

interface AdminEventPageProps {}
const AdminEventPage: FC<AdminEventPageProps> = () => {
  return <AdminEventForm />;
};

export const getServerSideProps: GetServerSideProps<
  AdminEventPageProps
> = async (context) => {
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
  } else if (parsedUserData.userType !== userRoles.PARENT) {
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
