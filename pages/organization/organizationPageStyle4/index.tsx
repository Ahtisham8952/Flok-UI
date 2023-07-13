import React from 'react';
import OrganizationPageStyle4 from '../../../src/components/app/Flok/OrganizationComponent/OrganizationPageStyle4';
import { userRoles } from '../../../src/utils/enums';
import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import { UserType } from '../../../src/utils/types';

interface OrganizationPageFourProps {}
const OrganizationPageFour = () => {
  return <OrganizationPageStyle4 />;
};

export const getServerSideProps: GetServerSideProps<
  OrganizationPageFourProps
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
export default OrganizationPageFour;
