import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import { ParentProfile } from '../../../src/components/app/Flok/UserProfile/ParentProfile';
import { userRoles } from '../../../src/utils/enums';
import { UserType } from '../../../src/utils/types';

interface ParentProfilePageProps {}
const ParentProfilePage = () => {
  return <ParentProfile />;
};

export const getServerSideProps: GetServerSideProps<
  ParentProfilePageProps
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
  } else if (parsedUserData.userType !== userRoles.PROVIDER) {
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
export default ParentProfilePage;
