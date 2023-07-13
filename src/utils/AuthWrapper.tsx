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
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
