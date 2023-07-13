import React from 'react';
import EventMain from '../../../src/components/app/Flok/EventPage';
import { userRoles } from '../../../src/utils/enums';
import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import { UserType } from '../../../src/utils/types';

const Home = () => {
  return <EventMain />;
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

export default Home;
