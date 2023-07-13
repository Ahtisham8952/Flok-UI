import { GetServerSideProps } from 'next';
import Organization from '../../../src/components/app/Flok/OrganizationComponent/OrganizationPageStyle1';
import { userRoles } from '../../../src/utils/enums';
import { parseCookies } from 'nookies';
import { UserType } from '../../../src/utils/types';

interface OrganizationPageStyle1Props {}
const OrganizationPageStyle1 = () => {
  return <Organization />;
};

export const getServerSideProps: GetServerSideProps<
  OrganizationPageStyle1Props
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
export default OrganizationPageStyle1;
