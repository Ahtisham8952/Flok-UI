import { GetServerSideProps } from 'next';
import { OrganizationTemplateEdit } from '../../../src/components/app/Flok/OrganizationComponent/OrganizationTemplateEdit';
import { userRoles } from '../../../src/utils/enums';
import { parseCookies } from 'nookies';
import { UserType } from '../../../src/utils/types';

const EditPageORG = () => {
  return <OrganizationTemplateEdit />;
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

export default EditPageORG;
