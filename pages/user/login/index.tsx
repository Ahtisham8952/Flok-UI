import { GetServerSideProps } from 'next';
import ParentLogin from '../../../src/components/core/Login/LoginStepTwo';
import { parseCookies } from 'nookies';
import { UserType } from '../../../src/utils/types';
import { userRoles } from '../../../src/utils/enums';

const ParentLoginPage = () => {
  return <ParentLogin />;
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

export default ParentLoginPage;
