import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import { FC } from 'react';
import DashboardMain from '../../../src/components/app/Flok/DashBoardComponet/index';
import { userRoles } from '../../../src/utils/enums';
import { UserType } from '../../../src/utils/types';

interface DashboardPageProps {}
const DashboardPage: FC<DashboardPageProps> = () => {
  return <DashboardMain />;
};

export const getServerSideProps: GetServerSideProps<
  DashboardPageProps
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

export default DashboardPage;
