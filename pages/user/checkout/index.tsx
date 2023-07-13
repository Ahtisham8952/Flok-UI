import React from 'react';
import GuestCheckOut from '../../../src/components/app/Flok/CheckoutComponent/GuestCheckOut';
import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import { UserType } from '../../../src/utils/types';
import { userRoles } from '../../../src/utils/enums';

const CheckoutGuest = () => {
  return <GuestCheckOut />;
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

export default CheckoutGuest;
