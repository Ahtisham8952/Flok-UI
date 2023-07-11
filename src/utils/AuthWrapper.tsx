import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';
import { useEffect } from 'react';
import { AuthWrapperProps } from './interfaces';

const BASE_URL = process.env.GRAPHQL_API_URL;

const httpLink = createHttpLink({
  uri: BASE_URL,
});

const authLink = setContext((_, { headers }) => {
  const { accessToken } = parseCookies();
  return {
    headers: {
      ...headers,
      authorization: accessToken ? `Bearer ${accessToken}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export function AuthWrapper({ children }: AuthWrapperProps) {
  const router = useRouter();
  const { userData } = parseCookies();
  useEffect(() => {
    const parsedUserData = userData ? JSON.parse(userData) : null;
    if (
      !parsedUserData?.accessToken &&
      router.pathname !== '/signup' &&
      router.pathname !== '/organization/dashboard' &&
      router.pathname !== '/admin/dashboard' &&
      router.pathname !== '/event'
    ) {
      router.replace('/login');
    } else if (router.pathname === '/signup') {
      router.replace('/signup');
    } else if (router.pathname === '/') {
      router.replace('/');
    } else if (router.pathname === '/terms') {
      router.replace('/terms');
    }
  }, []);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
