import { GetServerSideProps } from 'next';
import { OrganizationProfile } from '../../../src/components/app/Flok/OrganizationComponent/OrganizationProfile';
import { userRoles } from '../../../src/utils/enums';
import { parseCookies } from 'nookies';
import { UserType } from '../../../src/utils/types';

interface OrganizationProfilePageProps {}
const OrganizationProfilePage = () => {
  return <OrganizationProfile />;
};

export const getServerSideProps: GetServerSideProps<
  OrganizationProfilePageProps
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
export default OrganizationProfilePage;
