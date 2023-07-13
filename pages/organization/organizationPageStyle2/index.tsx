import { GetServerSideProps } from 'next';
import OrganizationPage2 from '../../../src/components/app/Flok/OrganizationComponent/OrganizationPageStyle2';
import { userRoles } from '../../../src/utils/enums';
import { parseCookies } from 'nookies';
import { UserType } from '../../../src/utils/types';

interface OrganizationPageStyle2Props {}
const OrganizationPageStyle2 = () => {
  return <OrganizationPage2 />;
};

export const getServerSideProps: GetServerSideProps<
  OrganizationPageStyle2Props
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
export default OrganizationPageStyle2;
