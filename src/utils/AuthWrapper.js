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

export function AuthWrapper({ children }) {
  const router = useRouter();
  useEffect(() => {
    const { accessToken } = parseCookies();
    if (
      !accessToken &&
      router.pathname !== '/signup' &&
      router.pathname !== '/'
    ) {
      router.replace('/login');
    } else if (router.pathname === '/signup') {
      router.replace('/signup');
    } else if (router.pathname === '/') {
      router.replace('/');
    }
  }, []);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
