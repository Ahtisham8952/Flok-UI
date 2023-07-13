import { ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';
import { UserType } from './types';

interface AuthProps {
  children: ReactNode | ReactNode[];
  loader?: ReactNode;
  role?: string[];
  redirectPath?: string;
}

const ClientAuthorizationWrapper = ({
  children,
  role,
  redirectPath = '/',
}: AuthProps): JSX.Element | null => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const router = useRouter();
  const parsedUserData: UserType = parseCookies()?.userData
    ? JSON.parse(parseCookies().userData)
    : null;

  useEffect(() => {
    if (!role || role.some((elem) => elem !== parsedUserData?.userType)) {
      setIsAuthorized(true);
    } else {
      setIsAuthorized(false);
      router.push(redirectPath);
    }
  }, [parsedUserData, role, redirectPath, router]);

  if (isAuthorized) {
    return <>{children}</>;
  } else {
    return null;
  }
};

const AuthorizationWrapper = ({
  children,
  role,
  redirectPath = '/',
}: AuthProps): JSX.Element | null => {
  if (typeof window !== 'undefined') {
    return (
      <ClientAuthorizationWrapper role={role} redirectPath={redirectPath}>
        {children}
      </ClientAuthorizationWrapper>
    );
  } else {
    return null;
  }
};

export default AuthorizationWrapper;
