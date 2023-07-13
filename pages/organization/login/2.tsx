import React from 'react';
import { OrganizationloginStepTwo } from '../../../src/components/core/OrganizationLogin/OrganizationloginStepTwo';
import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import { UserType } from '../../../src/utils/types';
import { userRoles } from '../../../src/utils/enums';

const StepTwoPage = () => {
  return <OrganizationloginStepTwo seeProfile={() => {}} />;
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

export default StepTwoPage;
