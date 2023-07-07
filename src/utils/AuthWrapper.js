import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { useEffect, useState } from 'react';
import LoginPageFlow from '../../pages/login';
import { parseCookies } from 'nookies';
import { useRouter } from 'next/router';

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
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const { accessToken } = parseCookies();
    if (accessToken) {
      setIsAuthenticated(true);
    } else {
      router.replace('/login');
    }
  }, []);

  return (
    <ApolloProvider client={client}>
      {isAuthenticated ? (
        children
      ) : (
        // Render your authentication components here, e.g., <Login />
        // Replace <Login /> with your actual authentication component
        <LoginPageFlow />
      )}
    </ApolloProvider>
  );
}
