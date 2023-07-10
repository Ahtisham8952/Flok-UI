import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/rajdhani';
import { ComponentType } from 'react';
import { flokAppTheme } from '../src/theme';
import { AuthWrapper } from '../src/utils/AuthWrapper';
import AuthorizationWrapper from '../src/utils/AuthorizationWrapper';
import '../styles/globals.css';

type AppProps = {
  Component: ComponentType & {
    auth?: {
      role?: string[];
      redirectPath?: string;
    };
  };
  pageProps: Record<string, unknown>;
};

const Flok = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider resetCSS theme={flokAppTheme}>
      <AuthWrapper>
        {Component.auth ? (
          <AuthorizationWrapper
            role={Component.auth?.role}
            redirectPath={Component.auth?.redirectPath}
          >
            <Component {...pageProps} />
          </AuthorizationWrapper>
        ) : (
          <Component {...pageProps} />
        )}
      </AuthWrapper>
    </ChakraProvider>
  );
};

export default Flok;
