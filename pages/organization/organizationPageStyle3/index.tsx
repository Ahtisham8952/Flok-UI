import { GetServerSideProps } from 'next';
import OrganizationPage3 from '../../../src/components/app/Flok/OrganizationComponent/OrganizationPageStyle3';
import { userRoles } from '../../../src/utils/enums';
import { parseCookies } from 'nookies';
import { UserType } from '../../../src/utils/types';

interface OrganizationPageStyle3Props {}
const OrganizationPageStyle3 = () => {
  return <OrganizationPage3 />;
};

export const getServerSideProps: GetServerSideProps<
  OrganizationPageStyle3Props
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
export default OrganizationPageStyle3;
