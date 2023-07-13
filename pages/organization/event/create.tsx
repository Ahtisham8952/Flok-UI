import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import UserCreateEvent from '../../../src/components/app/Flok/EventPage/Events';
import { userRoles } from '../../../src/utils/enums';
import { UserType } from '../../../src/utils/types';
import { FC } from 'react';

const CreateEventPage = () => {
  return <UserCreateEvent />;
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

export default CreateEventPage;
